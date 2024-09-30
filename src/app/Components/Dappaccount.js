import { useDispatch, useSelector } from "react-redux";
import { disconnectWalletFn, profileState } from "../redux/profileSlice";
import Link from "next/link";
import { useEffect } from "react";
import { fetchBalance } from "../Views/Dapp/balance";
import { formatWalletAddress } from "../Views/Dapp/utils";

const avatar = "/assets/images/dapp-Avatar.png";
const copyIcon = "/assets/icons/copy-Icon.png";
const disconnetIcon = "/assets/icons/disconnet-Icon.png";
const sideIcon = "/assets/icons/side-Icon.png";
export default function AccountDapp() {
    const dispatch = useDispatch();
    const {
        wallet,
        balance: balanceObj,
        earthBalance,
    } = useSelector(profileState);

    const explorerUrl = `https://polygonscan.com/address/${wallet}`;
    useEffect(() => {
        fetchBalance();
    }, []);

    const disconnect = () => {
        dispatch(disconnectWalletFn());
        window.location.reload();
    };

    return (
        <div>
            <div className='bg-[#3C42420F] px-6 py-4'>
                <div className='flex flex-col items-center mt-3 mb-6'>
                    <img className='w-16 h-16 scale-110 rounded-full' src={avatar} />
                    <p className='font-inter font-semibold text-[18px] text-[#25292E]'>
                        {formatWalletAddress(wallet)}
                    </p>

                </div>

                {/* <div className='flex w-full gap-2 mt-3'>
                    <button className='flex flex-col items-center px-4 py-2 w-[50%] rounded-lg  drop-shadow bg-white'>
                        <img className='w-6 h-6' src={copyIcon} />
                        <p className='font-inter font-semibold text-[12px] text-[#25292E]'>
                            Copy
                        </p>
                    </button>
                    <button
                        onClick={disconnect}
                        className='flex flex-col items-center  px-4 py-2 w-[50%] rounded-lg drop-shadow bg-white'
                    >
                        <img className='w-6 h-6' src={disconnetIcon} />
                        <p className='font-inter font-semibold text-[12px] text-[#25292E]'>
                            Disconnect
                        </p>
                    </button>
                </div> */}
                <div className='flex w-full gap-2 mt-2'>
                    <div className='flex flex-col items-center px-4 py-2 w-[50%] drop-shadow rounded-lg bg-white'>
                        <p className='font-inter font-semibold text-[18px] text-[#25292E]'>
                            {balanceObj?.earth?.toFixed(2)}
                        </p>
                        <p className='font-inter font-semibold text-[12px] text-[#101828]'>
                            $EARTH Balance
                        </p>
                    </div>
                    <div className='flex flex-col items-center px-4 py-2 w-[50%]  drop-shadow rounded-lg bg-white'>
                        <p className='font-inter font-semibold text-[18px] text-[#25292E]'>
                            {balanceObj?.dai?.toFixed(2)}
                        </p>
                        <p className='font-inter font-semibold text-[12px] text-[#101828]'>
                            $DAI Balance
                        </p>
                    </div>
                </div>
                <div className='flex justify-between px-2 mt-4'>
                    <p className='text-[#C5C6C6] font-inter font-semibold text-[12px]'>
                        View More on Polygon Scan
                    </p>
                    <Link target='_blank' href={explorerUrl}>
                        <img className='w-6 h-6' src={sideIcon} />
                    </Link>
                </div>
            </div>
            <div className='flex w-full gap-2 px-6 py-4'>
                <div className='flex flex-col items-center px-4 py-2 w-[50%] border-[1px] border-[#EAECF0] drop-shadow rounded-lg'>
                    <p className='font-inter font-semibold text-[18px] text-[#25292E]'>
                        $ {earthBalance?.earth?.toFixed(2)}
                    </p>
                    <p className='font-inter font-semibold text-[12px] text-[#101828]'>
                        $EARTH Price
                    </p>
                </div>
                <div className='flex flex-col items-center px-4 py-2 w-[50%] border-[1px] border-[#EAECF0] drop-shadow rounded-lg '>
                    <p className='font-inter font-semibold text-[18px] text-[#25292E]'>
                        $ {earthBalance?.treasury?.toFixed(2)}
                    </p>
                    <p className='font-inter font-semibold text-[12px] text-[#101828]'>
                        Treasury Size
                    </p>
                </div>
            </div>
        </div>
    );
}
