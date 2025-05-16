import BN from "bn.js";
import * as web3 from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { EarthSale } from "../target/types/earth_sale";
import {
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getAccount,
} from "@solana/spl-token";


// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.EarthSale as anchor.Program<EarthSale>;


// Example client for interacting with the Earth sale contract
export class EarthSaleClient {
  private program: Program<EarthSale>;
  private configPDA: anchor.web3.PublicKey;
  private configBump: number;

  constructor(
    private connection: anchor.web3.Connection,
    private wallet: anchor.Wallet,
    private programId: anchor.web3.PublicKey,
    private earthMint: anchor.web3.PublicKey,
    private usdcMint: anchor.web3.PublicKey
  ) {
    // Create provider and program
    const provider = new anchor.AnchorProvider(connection, wallet, {
      commitment: "confirmed",
    });

    // @ts-ignore - Type definition issue in Anchor
    this.program = new anchor.Program(EarthSale.IDL, programId, provider);

    // Derive PDA for the config account
    const [configPDA, configBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from("config")],
        programId
      );

    this.configPDA = configPDA;
    this.configBump = configBump;
  }

  /**
   * Get the current sale configuration
   */
  async getSaleConfig() {
    try {
      return await this.program.account.saleConfig.fetch(this.configPDA);
    } catch (error) {
      console.error("Error fetching sale config:", error);
      throw error;
    }
  }

  /**
   * Initialize the token sale
   * @param pricePerToken - The price of one Earth token in USDC
   */
  async initializeSale(pricePerToken: anchor.BN) {
    try {
      const tx = await this.program.methods
        .initializeSale(pricePerToken)
        .accounts({
          config: this.configPDA,
          earthMint: this.earthMint,
          usdcMint: this.usdcMint,
          admin: this.wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      console.log("Sale initialized. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error initializing sale:", error);
      throw error;
    }
  }

  /**
   * Deposit Earth tokens into the sale vault
   * @param amount - Amount of Earth tokens to deposit
   * @param adminEarthAccount - The admin's Earth token account
   * @param vaultAccount - The vault token account
   */
  async depositEarthTokens(
    amount: anchor.BN,
    adminEarthAccount: anchor.web3.PublicKey,
    vaultAccount: anchor.web3.PublicKey
  ) {
    try {
      const tx = await this.program.methods
        .depositEarthTokens(amount)
        .accounts({
          config: this.configPDA,
          admin: this.wallet.publicKey,
          from: adminEarthAccount,
          vault: vaultAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log("Earth tokens deposited. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error depositing Earth tokens:", error);
      throw error;
    }
  }

  /**
   * Buy Earth tokens with USDC
   * @param amount - Amount of Earth tokens to buy
   * @param buyerPublicKey - Public key of the buyer
   * @param buyerUsdcAccount - The buyer's USDC token account
   * @param buyerEarthAccount - The buyer's Earth token account
   * @param adminUsdcAccount - The admin's USDC token account
   * @param vaultAccount - The vault token account
   */
  async buyEarthTokens(
    amount: anchor.BN,
    buyerPublicKey: anchor.web3.PublicKey,
    buyerUsdcAccount: anchor.web3.PublicKey,
    buyerEarthAccount: anchor.web3.PublicKey,
    adminUsdcAccount: anchor.web3.PublicKey,
    vaultAccount: anchor.web3.PublicKey
  ) {
    try {
      const tx = await this.program.methods
        .buyEarthTokens(amount)
        .accounts({
          config: this.configPDA,
          buyer: buyerPublicKey,
          buyerUsdc: buyerUsdcAccount,
          adminUsdc: adminUsdcAccount,
          vault: vaultAccount,
          buyerEarth: buyerEarthAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log("Earth tokens purchased. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error buying Earth tokens:", error);
      throw error;
    }
  }

  /**
   * Withdraw unsold Earth tokens from the vault
   * @param amount - Amount of Earth tokens to withdraw
   * @param adminEarthAccount - The admin's Earth token account
   * @param vaultAccount - The vault token account
   */
  async withdrawUnsoldEarth(
    amount: anchor.BN,
    adminEarthAccount: anchor.web3.PublicKey,
    vaultAccount: anchor.web3.PublicKey
  ) {
    try {
      const tx = await this.program.methods
        .withdrawUnsoldEarth(amount)
        .accounts({
          config: this.configPDA,
          admin: this.wallet.publicKey,
          vault: vaultAccount,
          adminToken: adminEarthAccount,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log("Unsold Earth tokens withdrawn. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error withdrawing unsold Earth tokens:", error);
      throw error;
    }
  }

  /**
   * Change the admin of the sale
   * @param newAdmin - Public key of the new admin
   */
  async changeAdmin(newAdmin: anchor.web3.PublicKey) {
    try {
      const tx = await this.program.methods
        .changeAdmin(newAdmin)
        .accounts({
          config: this.configPDA,
          admin: this.wallet.publicKey,
        })
        .rpc();

      console.log("Admin changed. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error changing admin:", error);
      throw error;
    }
  }

  /**
   * Close the sale
   */
  async closeSale() {
    try {
      const tx = await this.program.methods
        .closeSale()
        .accounts({
          config: this.configPDA,
          admin: this.wallet.publicKey,
        })
        .rpc();

      console.log("Sale closed. Transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error closing sale:", error);
      throw error;
    }
  }

  /**
   * Helper function to create vault account for the tokens
   * @param payer - The account that will pay for the vault creation
   */
  async createVaultAccount(payer: anchor.web3.Keypair) {
    const ATA = require("@solana/spl-token").getAssociatedTokenAddress;
    const ASSOCIATED_TOKEN_PROGRAM_ID = new anchor.web3.PublicKey(
      "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
    );

    try {
      const vaultAddress = await ATA(
        this.earthMint,
        this.configPDA,
        true // Allow off-curve addresses
      );

      const tx = new anchor.web3.Transaction().add(
        await this.program.methods.createAssociatedTokenAccountInstruction(
          payer.publicKey,
          vaultAddress,
          this.configPDA,
          this.earthMint
        )
      );

      const txSignature = await this.connection.sendTransaction(tx, [payer]);
      console.log("Vault account created. Transaction:", txSignature);
      return vaultAddress;
    } catch (error) {
      console.error("Error creating vault account:", error);
      throw error;
    }
  }
}

// Example usage:
async function exampleUsage() {
  // Initialize connection and wallet
  const connection = new anchor.web3.Connection(
    "https://api.devnet.solana.com"
  );
  const wallet = new anchor.Wallet(anchor.web3.Keypair.generate());

  // Program and token information
  const programId = new anchor.web3.PublicKey(
    "SALE1111111111111111111111111111111111111111"
  );
  const earthMint = new anchor.web3.PublicKey(
    "EARTH111111111111111111111111111111111111111"
  );
  const usdcMint = new anchor.web3.PublicKey(
    "USDC11111111111111111111111111111111111111111"
  );

  // Create client
  const client = new EarthSaleClient(
    connection,
    wallet,
    programId,
    earthMint,
    usdcMint
  );

  // Initialize sale with price of 1 USDC per Earth token
  await client.initializeSale(new anchor.BN(1_000_000)); // 1 USDC with 6 decimals

  // Get the current sale configuration
  const config = await client.getSaleConfig();
  console.log("Sale configuration:", config);
}
