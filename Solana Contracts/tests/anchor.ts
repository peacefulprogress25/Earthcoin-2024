import BN from "bn.js";
import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import {
  PublicKey,
  Keypair,
  SystemProgram,
  Transaction,
  SendTransactionError,
} from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  createMint,
  createAccount,
  getAssociatedTokenAddress,
  createAssociatedTokenAccount,
  mintTo,
  getAccount,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddressSync,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { EarthSale } from "../target/types/earth_sale";
import type { EarthSale } from "../target/types/earth_sale";

describe("earth_sale", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.EarthSale as anchor.Program<EarthSale>;
  
  // Configure the client to use the local cluster
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.EarthSale as Program<EarthSale>;

  // Generate keypairs for testing
  const admin = provider.wallet;
  const buyer = Keypair.generate();
  const newAdmin = Keypair.generate();

  // Mock token mints
  let earthMint: PublicKey;
  let usdcMint: PublicKey;

  // Token accounts
  let adminEarthAccount: PublicKey;
  let adminUsdcAccount: PublicKey;
  let buyerEarthAccount: PublicKey;
  let buyerUsdcAccount: PublicKey;
  let newAdminEarthAccount: PublicKey;

  // Program derived addresses
  let configPDA: PublicKey;
  let configBump: number;
  let vaultAccount: PublicKey;

  // Constants
  const PRICE_PER_TOKEN = new anchor.BN(1000000); // 1 USDC per Earth token
  const EARTH_TOKENS_TO_DEPOSIT = new anchor.BN(1000000000); // 1000 EARTH tokens (with 6 decimals)
  const EARTH_TOKENS_TO_BUY = new anchor.BN(5000000); // 5 EARTH tokens (with 6 decimals)
  const EARTH_TOKENS_TO_WITHDRAW = new anchor.BN(100000000); // 100 EARTH tokens (with 6 decimals)
  const USDC_AIRDROP_AMOUNT = 10000000000; // 10,000 USDC (with 6 decimals)
  const SOL_TRANSFER_AMOUNT = 1 * anchor.web3.LAMPORTS_PER_SOL; // 1 SOL in lamports

  before(async () => {
    // Find the PDA for the config account
    const [configAddress, bump] = await PublicKey.findProgramAddressSync(
      [Buffer.from("config")],
      program.programId
    );
    configPDA = configAddress;
    configBump = bump;

    console.log("Program ID:", program.programId.toString());
    console.log("Config PDA:", configPDA.toString());
    console.log("Config bump:", configBump);

    // Transfer SOL to the buyer account for transactions
    console.log("Funding buyer account with SOL transfer...");
    try {
      const transferTx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: admin.publicKey,
          toPubkey: buyer.publicKey,
          lamports: SOL_TRANSFER_AMOUNT,
        })
      );
      const signature = await provider.sendAndConfirm(transferTx);
      console.log(
        `Transferred ${
          SOL_TRANSFER_AMOUNT / anchor.web3.LAMPORTS_PER_SOL
        } SOL to buyer: ${buyer.publicKey.toString()}`
      );
      console.log(`Transaction signature: ${signature}`);
    } catch (error) {
      console.error("Error transferring SOL to buyer:", error);
      throw error;
    }

    // Transfer SOL to the new admin account for transactions
    console.log("Funding new admin account with SOL transfer...");
    try {
      const transferTx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: admin.publicKey,
          toPubkey: newAdmin.publicKey,
          lamports: SOL_TRANSFER_AMOUNT,
        })
      );
      const signature = await provider.sendAndConfirm(transferTx);
      console.log(
        `Transferred ${
          SOL_TRANSFER_AMOUNT / anchor.web3.LAMPORTS_PER_SOL
        } SOL to new admin: ${newAdmin.publicKey.toString()}`
      );
      console.log(`Transaction signature: ${signature}`);
    } catch (error) {
      console.error("Error transferring SOL to new admin:", error);
      throw error;
    }

    // Create Earth and USDC mints
    earthMint = await createMint(
      provider.connection,
      (admin as any).payer,
      admin.publicKey,
      null,
      6 // 6 decimals
    );
    console.log("Earth Mint created:", earthMint.toString());

    usdcMint = await createMint(
      provider.connection,
      (admin as any).payer,
      admin.publicKey,
      null,
      6 // 6 decimals for USDC
    );
    console.log("USDC Mint created:", usdcMint.toString());

    // Create token accounts for admin
    adminEarthAccount = await createAssociatedTokenAccount(
      provider.connection,
      (admin as any).payer,
      earthMint,
      admin.publicKey
    );
    adminUsdcAccount = await createAssociatedTokenAccount(
      provider.connection,
      (admin as any).payer,
      usdcMint,
      admin.publicKey
    );
    console.log("Admin Earth Account:", adminEarthAccount.toString());
    console.log("Admin USDC Account:", adminUsdcAccount.toString());

    // Create token accounts for buyer
    buyerEarthAccount = await createAssociatedTokenAccount(
      provider.connection,
      (admin as any).payer,
      earthMint,
      buyer.publicKey
    );
    buyerUsdcAccount = await createAssociatedTokenAccount(
      provider.connection,
      (admin as any).payer,
      usdcMint,
      buyer.publicKey
    );
    console.log("Buyer Earth Account:", buyerEarthAccount.toString());
    console.log("Buyer USDC Account:", buyerUsdcAccount.toString());

    // Create token account for new admin
    newAdminEarthAccount = await createAssociatedTokenAccount(
      provider.connection,
      (admin as any).payer,
      earthMint,
      newAdmin.publicKey
    );
    console.log("New Admin Earth Account:", newAdminEarthAccount.toString());

    // Mint Earth tokens to admin for testing
    await mintTo(
      provider.connection,
      (admin as any).payer,
      earthMint,
      adminEarthAccount,
      admin.publicKey,
      EARTH_TOKENS_TO_DEPOSIT.toNumber() * 2 // Mint extra for testing
    );
    console.log(
      `Minted ${
        EARTH_TOKENS_TO_DEPOSIT.toNumber() * 2
      } Earth tokens to admin account`
    );

    // Mint USDC to buyer for testing
    await mintTo(
      provider.connection,
      (admin as any).payer,
      usdcMint,
      buyerUsdcAccount,
      admin.publicKey,
      USDC_AIRDROP_AMOUNT
    );
    console.log(`Minted ${USDC_AIRDROP_AMOUNT} USDC to buyer account`);

    // Calculate the vault account address
    vaultAccount = await getAssociatedTokenAddressSync(
      earthMint,
      configPDA,
      true // allowOwnerOffCurve: true for PDAs
    );
    console.log("Vault Account address:", vaultAccount.toString());
  });

  it("Initializes the sale", async () => {
    try {
      console.log("Attempting to initialize sale...");

      const tx = await program.methods
        .initializeSale(PRICE_PER_TOKEN)
        .accounts({
          config: configPDA,
          earthMint: earthMint,
          usdcMint: usdcMint,
          admin: admin.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      console.log("Sale initialized with transaction signature:", tx);

      // Verify the config account
      const configAccount = await program.account.saleConfig.fetch(configPDA);
      console.log("Config account data:", {
        admin: configAccount.admin.toString(),
        earthMint: configAccount.earthMint.toString(),
        usdcMint: configAccount.usdcMint.toString(),
        pricePerToken: configAccount.pricePerToken.toString(),
        isActive: configAccount.isActive,
        totalDeposited: configAccount.totalDeposited.toString(),
        bump: configAccount.bump,
      });
    } catch (error) {
      console.error("Error initializing sale:", error);
      console.log(
        "Note: If the error is 'account already in use', this is normal if you've run the test before."
      );
      console.log(
        "To fix this, reset your Solana Playground environment before running again."
      );
    }
  });

  it("Creates vault and deposits Earth tokens", async () => {
    try {
      console.log("Creating vault account if it doesn't exist...");

      try {
        // Check if vault already exists
        await getAccount(provider.connection, vaultAccount);
        console.log("Vault account already exists");
      } catch (e) {
        // Create the vault account if it doesn't exist
        console.log("Creating new vault account...");

        // Create ATA for the vault
        const createATAIx = createAssociatedTokenAccountInstruction(
          admin.publicKey, // payer
          vaultAccount, // ata
          configPDA, // owner
          earthMint // mint
        );

        const tx = await provider.sendAndConfirm(
          new anchor.web3.Transaction().add(createATAIx)
        );
        console.log("Created vault ATA with tx:", tx);
      }

      console.log("Depositing Earth tokens to vault...");

      const depositTx = await program.methods
        .depositEarthTokens(EARTH_TOKENS_TO_DEPOSIT)
        .accounts({
          config: configPDA,
          admin: admin.publicKey,
          from: adminEarthAccount,
          vault: vaultAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log("Deposit transaction signature:", depositTx);

      // Verify the deposit
      const vaultInfo = await getAccount(provider.connection, vaultAccount);
      console.log("Vault balance after deposit:", vaultInfo.amount.toString());
    } catch (error) {
      console.error("Error depositing tokens:", error);
      console.log("Note: Make sure you have initialized the sale first.");
    }
  });

  it("Buys Earth tokens with USDC", async () => {
    try {
      console.log("Attempting to buy Earth tokens...");

      // Check balances before purchase
      const buyerUsdcBefore = await getAccount(
        provider.connection,
        buyerUsdcAccount
      );
      const buyerEarthBefore = await getAccount(
        provider.connection,
        buyerEarthAccount
      );
      const adminUsdcBefore = await getAccount(
        provider.connection,
        adminUsdcAccount
      );
      const vaultBefore = await getAccount(provider.connection, vaultAccount);

      console.log("Before purchase balances:");
      console.log(`Buyer USDC: ${buyerUsdcBefore.amount.toString()}`);
      console.log(`Buyer Earth: ${buyerEarthBefore.amount.toString()}`);
      console.log(`Admin USDC: ${adminUsdcBefore.amount.toString()}`);
      console.log(`Vault Earth: ${vaultBefore.amount.toString()}`);

      // Execute purchase
      const buyTx = await program.methods
        .buyEarthTokens(EARTH_TOKENS_TO_BUY)
        .accounts({
          config: configPDA,
          buyer: buyer.publicKey,
          buyerUsdc: buyerUsdcAccount,
          adminUsdc: adminUsdcAccount,
          vault: vaultAccount,
          buyerEarth: buyerEarthAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .signers([buyer]) // Buyer needs to sign
        .rpc();

      console.log("Purchase transaction signature:", buyTx);

      // Check balances after purchase
      const buyerUsdcAfter = await getAccount(
        provider.connection,
        buyerUsdcAccount
      );
      const buyerEarthAfter = await getAccount(
        provider.connection,
        buyerEarthAccount
      );
      const adminUsdcAfter = await getAccount(
        provider.connection,
        adminUsdcAccount
      );
      const vaultAfter = await getAccount(provider.connection, vaultAccount);

      console.log("After purchase balances:");
      console.log(`Buyer USDC: ${buyerUsdcAfter.amount.toString()}`);
      console.log(`Buyer Earth: ${buyerEarthAfter.amount.toString()}`);
      console.log(`Admin USDC: ${adminUsdcAfter.amount.toString()}`);
      console.log(`Vault Earth: ${vaultAfter.amount.toString()}`);

      // Calculate changes
      const buyerUsdcChange =
        Number(buyerUsdcBefore.amount) - Number(buyerUsdcAfter.amount);
      const buyerEarthChange =
        Number(buyerEarthAfter.amount) - Number(buyerEarthBefore.amount);
      const adminUsdcChange =
        Number(adminUsdcAfter.amount) - Number(adminUsdcBefore.amount);
      const vaultChange =
        Number(vaultBefore.amount) - Number(vaultAfter.amount);

      console.log("Balance changes:");
      console.log(`Buyer USDC change: -${buyerUsdcChange}`);
      console.log(`Buyer Earth change: +${buyerEarthChange}`);
      console.log(`Admin USDC change: +${adminUsdcChange}`);
      console.log(`Vault Earth change: -${vaultChange}`);
    } catch (error) {
      console.error("Error buying tokens:", error);
      console.log(
        "Note: Make sure you have deposited enough tokens to the vault."
      );
    }
  });

  it("Withdraws unsold Earth tokens", async () => {
    try {
      console.log("Attempting to withdraw unsold Earth tokens...");

      // Check balances before withdrawal
      const adminEarthBefore = await getAccount(
        provider.connection,
        adminEarthAccount
      );
      const vaultBefore = await getAccount(provider.connection, vaultAccount);

      console.log("Before withdrawal balances:");
      console.log(`Admin Earth: ${adminEarthBefore.amount.toString()}`);
      console.log(`Vault Earth: ${vaultBefore.amount.toString()}`);

      // Execute withdrawal
      const withdrawTx = await program.methods
        .withdrawUnsoldEarth(EARTH_TOKENS_TO_WITHDRAW)
        .accounts({
          config: configPDA,
          admin: admin.publicKey,
          vault: vaultAccount,
          adminToken: adminEarthAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log("Withdrawal transaction signature:", withdrawTx);

      // Check balances after withdrawal
      const adminEarthAfter = await getAccount(
        provider.connection,
        adminEarthAccount
      );
      const vaultAfter = await getAccount(provider.connection, vaultAccount);

      console.log("After withdrawal balances:");
      console.log(`Admin Earth: ${adminEarthAfter.amount.toString()}`);
      console.log(`Vault Earth: ${vaultAfter.amount.toString()}`);

      // Calculate changes
      const adminEarthChange =
        Number(adminEarthAfter.amount) - Number(adminEarthBefore.amount);
      const vaultChange =
        Number(vaultBefore.amount) - Number(vaultAfter.amount);

      console.log("Balance changes:");
      console.log(`Admin Earth change: +${adminEarthChange}`);
      console.log(`Vault Earth change: -${vaultChange}`);
    } catch (error) {
      console.error("Error withdrawing tokens:", error);
    }
  });

  it("Changes admin address", async () => {
    try {
      console.log("Attempting to change admin address...");

      // Check current admin
      const configBefore = await program.account.saleConfig.fetch(configPDA);
      console.log("Current admin:", configBefore.admin.toString());

      // Execute admin change
      const changeTx = await program.methods
        .changeAdmin(newAdmin.publicKey)
        .accounts({
          config: configPDA,
          admin: admin.publicKey,
        })
        .rpc();

      console.log("Admin change transaction signature:", changeTx);

      // Verify admin change
      const configAfter = await program.account.saleConfig.fetch(configPDA);
      console.log("New admin:", configAfter.admin.toString());

      // Change admin back for further testing
      const changeBackTx = await program.methods
        .changeAdmin(admin.publicKey)
        .accounts({
          config: configPDA,
          admin: newAdmin.publicKey,
        })
        .signers([newAdmin])
        .rpc();

      console.log("Admin change back transaction signature:", changeBackTx);

      // Verify admin change back
      const configFinal = await program.account.saleConfig.fetch(configPDA);
      console.log("Admin changed back to:", configFinal.admin.toString());
    } catch (error) {
      console.error("Error changing admin:", error);
    }
  });

  it("Closes the sale", async () => {
    try {
      console.log("Attempting to close the sale...");

      // Check current sale status
      const configBefore = await program.account.saleConfig.fetch(configPDA);
      console.log("Sale active before:", configBefore.isActive);

      // Execute sale closure
      const closeTx = await program.methods
        .closeSale()
        .accounts({
          config: configPDA,
          admin: admin.publicKey,
        })
        .rpc();

      console.log("Sale closure transaction signature:", closeTx);

      // Verify sale closure
      const configAfter = await program.account.saleConfig.fetch(configPDA);
      console.log("Sale active after:", configAfter.isActive);
    } catch (error) {
      console.error("Error closing sale:", error);
    }
  });

  it("Provides instructions for manual testing", async () => {
    console.log("==========================================");
    console.log("MANUAL TESTING INSTRUCTIONS");
    console.log("==========================================");
    console.log("To test manually in Solana Playground UI:");

    console.log("\n1. Initialize Sale:");
    console.log("   - Function: initializeSale");
    console.log("   - price_per_token: 1000000 (1 USDC per token)");
    console.log("   - config: " + configPDA.toString());
    console.log("   - earthMint: " + earthMint.toString());
    console.log("   - usdcMint: " + usdcMint.toString());
    console.log("   - admin: Your wallet address (auto-filled)");
    console.log("   - systemProgram: System Program ID (auto-filled)");

    console.log("\n2. Create Vault Account (using SPL Token UI):");
    console.log("   - Create Associated Token Account");
    console.log("   - Mint: " + earthMint.toString());
    console.log("   - Owner: " + configPDA.toString() + " (the config PDA)");
    console.log("   - Expected Address: " + vaultAccount.toString());

    console.log("\n3. Deposit Earth Tokens:");
    console.log("   - Function: depositEarthTokens");
    console.log("   - amount: 1000000000 (1000 tokens with 6 decimals)");
    console.log("   - config: " + configPDA.toString());
    console.log("   - admin: Your wallet address (auto-filled)");
    console.log("   - from: " + adminEarthAccount.toString());
    console.log("   - vault: " + vaultAccount.toString());
    console.log("   - tokenProgram: Token Program ID (auto-filled)");

    console.log("\n4. Buy Earth Tokens:");
    console.log("   - Function: buyEarthTokens");
    console.log("   - amount: 5000000 (5 tokens with 6 decimals)");
    console.log("   - config: " + configPDA.toString());
    console.log("   - buyer: Buyer's wallet address");
    console.log("   - buyerUsdc: Buyer's USDC account");
    console.log("   - adminUsdc: " + adminUsdcAccount.toString());
    console.log("   - vault: " + vaultAccount.toString());
    console.log("   - buyerEarth: Buyer's Earth token account");
    console.log("   - tokenProgram: Token Program ID (auto-filled)");

    console.log("\n5. Withdraw Unsold Earth:");
    console.log("   - Function: withdrawUnsoldEarth");
    console.log("   - amount: 100000000 (100 tokens with 6 decimals)");
    console.log("   - config: " + configPDA.toString());
    console.log("   - admin: Your wallet address (auto-filled)");
    console.log("   - vault: " + vaultAccount.toString());
    console.log("   - adminToken: " + adminEarthAccount.toString());
    console.log("   - tokenProgram: Token Program ID (auto-filled)");

    console.log("\n6. Change Admin:");
    console.log("   - Function: changeAdmin");
    console.log("   - new_admin: New admin's wallet address");
    console.log("   - config: " + configPDA.toString());
    console.log("   - admin: Your wallet address (auto-filled)");

    console.log("\n7. Close Sale:");
    console.log("   - Function: closeSale");
    console.log("   - config: " + configPDA.toString());
    console.log("   - admin: Your wallet address (auto-filled)");
    console.log("==========================================");
  });
});
