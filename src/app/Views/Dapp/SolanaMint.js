import { envObj } from "../../utils/env";
import TransactionPopup from "./TransactionPopup";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import useNotification from "../../Hooks/useNotification";
import Progress from "./Progress";
import { TwitterShareButton } from "react-share";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection, PublicKey, Transaction } from "@solana/web3.js";
import { AnchorProvider, Program, BN } from '@project-serum/anchor';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import idl from './abi/idl.json'
import { BtnLoader } from "../../Components/Loader";
import { contractAddressList } from "./constants/network";

const PROGRAM_ID = new PublicKey(contractAddressList.solana.programId);
const EARTH_MINT = new PublicKey(contractAddressList.solana.earth);
const USDC_MINT = new PublicKey(contractAddressList.solana.usdc);

const twitterContent = `I just purged my petro $$ for $EARTH to fund net zero infrastructure and seed the solarpunk paradigm.`;


function SolanaMint() {

    const [showTransactionPopup, setShowTransactionPopup] = useState(false);
    const { showMessage } = useNotification();

    const initState = {
        mint: false,
    }
    const [loading, setLoading] = useState(initState);
    const [progress, setProgress] = useState(initState);
    const [transaction, setTransaction] = useState(false)
    const [twitterShare, setTwitterShare] = useState(false)


    const [program, setProgram] = useState(null);
    const wallet = useWallet();
    const [saleConfig, setSaleConfig] = useState(null);
    const [amount, setAmount] = useState('');



    console.log(saleConfig);


    const getProvider = useCallback(() => {
        // const network = WalletAdapterNetwork.Devnet;
        // const connection = clusterApiUrl(network,'confirmed')
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const provider = new AnchorProvider(
            connection,
            wallet,
            { preflightCommitment: 'confirmed' }
        );
        return provider;
    }, [wallet]);

    const fetchSaleInfo = useCallback(async () => {
        if (!wallet.connected) {
            setSaleConfig(null);
            // setVaultBalance(0);
            // setIsLoading(false);
            return;
        }

        try {
            // setIsLoading(true);
            const provider = getProvider();
            const programInstance = new Program(idl, PROGRAM_ID, provider);
            console.log("Program ID:", programInstance.programId.toString());
            setProgram(programInstance);

            // Derive the PDA for the config account
            const [configPDA] = await PublicKey.findProgramAddress(
                [Buffer.from("config")],
                programInstance.programId
            );

            try {
                // Fetch the sale config data
                const configAccount = await programInstance.account.saleConfig.fetch(configPDA);

                // Calculate the vault address
                const vaultAddress = await getAssociatedTokenAddress(
                    new PublicKey(EARTH_MINT),
                    configPDA,
                    true // Allow owner off curve
                );

                console.log("Vault address:", vaultAddress.toString());

                // Get vault balance
                let vaultBal = 0;
                try {
                    const tokenAccountInfo = await provider.connection.getTokenAccountBalance(vaultAddress);
                    vaultBal = tokenAccountInfo?.value?.uiAmount || 0;
                    console.log("Vault balance:", vaultBal);
                } catch (balError) {
                    console.log("Could not fetch vault balance:", balError);
                }

                setSaleConfig({
                    admin: configAccount.admin.toString(),
                    earthMint: configAccount.earthMint.toString(),
                    usdcMint: configAccount.usdcMint.toString(),
                    pricePerToken: configAccount.pricePerToken.toNumber(),
                    isActive: configAccount.isActive,
                    totalDeposited: configAccount.totalDeposited.toNumber(),
                });
                // setVaultBalance(vaultBal);
            } catch (fetchError) {
                console.log("No sale configuration found:", fetchError);
                setSaleConfig(null);
                // setVaultBalance(0);
            }
        } catch (error) {
            console.error("Error fetching sale info:", error);
            setSaleConfig(null);
            // setVaultBalance(0);
        } finally {
            // setIsLoading(false);
        }
    }, [wallet, getProvider]);

    // Initial data fetch when wallet connects
    useEffect(() => {
        fetchSaleInfo();
    }, [wallet.connected, fetchSaleInfo]);

    // Setup on-chain account listeners to refresh when data changes
    useEffect(() => {
        if (!wallet.connected || !program) return;

        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

        const setupAccountListener = async () => {
            try {
                // Derive the PDA for the config account
                const [configPDA] = await PublicKey.findProgramAddress(
                    [Buffer.from("config")],
                    program.programId
                );

                // Setup listener for the config account
                const configSubscriptionId = connection.onAccountChange(
                    configPDA,
                    () => {
                        console.log("Config account changed, refreshing data...");
                        fetchSaleInfo();
                    },
                    'confirmed'
                );

                // Get the vault address
                const vaultAddress = await getAssociatedTokenAddress(
                    new PublicKey(EARTH_MINT),
                    configPDA,
                    true
                );

                // Setup listener for the vault account
                const vaultSubscriptionId = connection.onAccountChange(
                    vaultAddress,
                    () => {
                        console.log("Vault balance changed, refreshing data...");
                        fetchSaleInfo();
                    },
                    'confirmed'
                );

                // Return cleanup function
                return () => {
                    connection.removeAccountChangeListener(configSubscriptionId);
                    connection.removeAccountChangeListener(vaultSubscriptionId);
                };
            } catch (error) {
                console.error("Error setting up listeners:", error);
            }
        };

        const cleanup = setupAccountListener();
        return () => {
            if (cleanup) cleanup.then(fn => fn());
        };
    }, [wallet.connected, program, fetchSaleInfo]);

    const accountExists = async (address) => {
        try {
            const accountInfo = await program.provider.connection.getAccountInfo(address);
            return accountInfo !== null;
        } catch (e) {
            return false;
        }
    };

    const createTokenAccountIfNeeded = async (tokenMint, owner) => {
        try {
            const tokenAddress = await getAssociatedTokenAddress(
                new PublicKey(tokenMint),
                owner
            );

            if (await accountExists(tokenAddress)) {
                console.log(`Token account ${tokenAddress.toString()} already exists`);
                return tokenAddress;
            }

            console.log(`Creating token account ${tokenAddress.toString()} for mint ${tokenMint.toString()}`);

            const transaction = new Transaction().add(
                createAssociatedTokenAccountInstruction(
                    wallet.publicKey, // payer
                    tokenAddress, // ata
                    owner, // owner
                    new PublicKey(tokenMint) // mint
                )
            );

            const signature = await program.provider.sendAndConfirm(transaction);
            console.log(`Created token account with signature: ${signature}`);

            return tokenAddress;
        } catch (e) {
            console.error("Error creating token account:", e);
            throw e;
        }
    };


    const purchaseTokens = async () => {
        try {

            if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
                console.log('Please enter a valid amount');
                return;
            }


            setLoading({ mint: true })
         
            console.log('Preparing transaction...');

            // Convert amount to the smallest unit (lamports/microlumens)
            const parsedAmount = parseFloat(amount);
            const tokenAmount = new BN(Math.round(parsedAmount * 1000000000));

            console.log("Purchasing amount in tokens:", parsedAmount);
            console.log("Amount in lamports:", tokenAmount.toString());

            // Get config PDA
            const [configPDA] = await PublicKey.findProgramAddress(
                [Buffer.from("config")],
                program.programId
            );

            // Get vault PDA (associated token account owned by config)
            const vaultPDA = await getAssociatedTokenAddress(
                new PublicKey(EARTH_MINT),
                configPDA,
                true // allowOwnerOffCurve - since PDA is not on curve
            );

            // Create or get buyer's EARTH token account
            console.log('Checking buyer token accounts...');
            const buyerEarthATA = await createTokenAccountIfNeeded(EARTH_MINT, wallet.publicKey);

            // Get buyer's USDC account - create if it doesn't exist
            const buyerUsdcATA = await createTokenAccountIfNeeded(USDC_MINT, wallet.publicKey);

            // Get admin's USDC account - create if it doesn't exist
            console.log('Checking admin token accounts...');
            const adminUsdcATA = await createTokenAccountIfNeeded(
                USDC_MINT,
                new PublicKey(saleConfig.admin)
            );

            console.log("Starting purchase transaction with:");

            console.log({
                configPDA: configPDA.toString(),
                wallet: wallet.publicKey.toString(),
                buyerUsdcATA: buyerUsdcATA.toString(),
                adminUsdcATA: adminUsdcATA.toString(),
                vaultPDA: vaultPDA.toString(),
                buyerEarthATA: buyerEarthATA.toString(),
                tokenAmount: tokenAmount.toString(),
            })

            console.log('Sending purchase transaction...');

            // Call the buy_earth_tokens instruction
            const tx = await program.methods.buyEarthTokens(tokenAmount)
                .accounts({
                    config: configPDA,
                    buyer: wallet.publicKey,
                    buyerUsdc: buyerUsdcATA,
                    adminUsdc: adminUsdcATA,
                    vault: vaultPDA,
                    buyerEarth: buyerEarthATA,
                    tokenProgram: TOKEN_PROGRAM_ID,
                })
                .rpc();

            console.log("Transaction submitted:", tx);
            console.log('Transaction submitted. Waiting for confirmation...');

            // Wait for transaction confirmation
            const confirmation = await program.provider.connection.confirmTransaction(tx, 'confirmed');
            console.log("Transaction confirmed:", confirmation);

            // Check if the transaction was successful
            if (confirmation.value.err) {
                throw new Error(`Transaction failed: ${confirmation.value.err}`);
            }

            console.log('');
            setAmount('');
            showMessage({ type: "success", value: "Transaction Success" });
            setProgress({ mint: true })
            // Refresh data after successful transaction
            // onSuccess();
        } catch (err) {
            console.error('Error purchasing tokens:', err);

            // Parse the error message for a more user-friendly display
            let errorMsg = err.message;
            if (errorMsg.includes('InsufficientVaultBalance')) {
                errorMsg = 'Insufficient tokens available in the vault.';
            } else if (errorMsg.includes('0x1')) {
                errorMsg = 'Insufficient USDC balance in your wallet.';
            } else if (errorMsg.includes('Custom program error')) {
                // Try to make Anchor errors more user-friendly
                if (errorMsg.includes('0x1771')) {
                    errorMsg = 'Sale is not active.';
                } else if (errorMsg.includes('0x1770')) {
                    errorMsg = 'Invalid amount.';
                }
            }

            console.log(`Failed to purchase tokens: ${errorMsg}`);
            showMessage({type:'error',value:errorMsg})
        } finally {
            setLoading({ mint: false })
        }
    };


    const resetState = () => {
        if (progress.mint) {
            setTwitterShare(true)
        }
        setProgress(initState)
        setLoading(initState)
        setTransaction(false)
        setShowTransactionPopup(false);

      }


    return (
        <>
            {twitterShare ?
                <div className='flex flex-col items-center justify-center gap-3'>
                    <p className='w-3/4 text-lg text-center message text-primary font-syne'>Congrats on purging your petro $ for  $EARTH to fund climate solutions</p>
                    <TwitterShareButton url={twitterContent}>
                        <button className='flex flex-col items-center justify-center gap-2 text-md "w-[80px] ml-auto text-white font-inter h-10 rounded-md bg-[#EC8000] p-2 text-sm'>
                            Share via Twitter
                        </button>
                    </TwitterShareButton>
                </div>

                : <div className='flex w-[72%] mt-8 py-8 sm:py-0 sm:mt-0 items-center flex-col gap-3'>
                    <p className='text-black text-center font-inter sm:text-[28px] text-md font-medium'>
                        Mint $Earth <br /> by purging USDC
                    </p>
                    <div className='flex flex-wrap justify-center w-full gap-3 mt-2 sm:flex-nowrap'>
                        <div className='flex flex-col w-[130px]'>
                            <p className='text-black text-center font-inter text-[12px] font-medium'>
                                Enter USDC amount
                            </p>
                            <div className='flex border-2  gap-2  border-[#EAECF0] items-center p-1'>
                                <input
                                    type="number"
                                    min="0"
                                    step="0.000001"
                                    className='w-16 outline-none'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                                <p className='text-black text-center font-inter text-[12px] font-medium'>
                                    USDC
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col w-[130px]'>
                            <p className='text-black text-center font-inter text-[12px] font-medium'>
                                You will recieve
                            </p>
                            <div className='flex border-2 border-[#EAECF0] w-fit gap-2 items-center p-1'>
                                <input
                                    type='text'
                                    className='w-16 outline-none'
                                    placeholder='158.68'
                                    readOnly
                                    value={amount/10}
                                />
                                <p className='text-black text-center font-inter text-[12px] font-medium'>
                                    $EARTH
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => amount && setShowTransactionPopup(true)}
                        className='w-[120px] gap-3 cursor-pointer text-white mt-2 font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]'
                    >
                        MINT
                        {loading.mint ? <BtnLoader /> : null}
                    </button>
                </div>}
            {showTransactionPopup && (
                <TransactionPopup
                    handleSubmit={purchaseTokens}
                      handleCancel={resetState}
                    setShowTransactionPopup={setShowTransactionPopup}
                    loading={loading}
                    progress={progress}
                    transaction={transaction}
                >
                    <Progress
                        progress={progress}
                        loading={loading}
                        data={[
                            {
                                text: "Mint $Earth",
                                title: "mint",
                            },
                        ]}
                    />
                </TransactionPopup>
            )}
        </>
    )
}

export default SolanaMint



