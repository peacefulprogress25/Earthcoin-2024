
const tokenIcon = "/assets/icons/token-Icon.png";
const featuredNetwork = "/assets/icons/Featured-network.png";
const creditCard = "/assets/icons/credit-card.png";
import Link from "next/link";
import buttonConfig from "../utils/button";
export default function UniswapEarth({ setShowUniswap }) {
    return (
        <div>
            <img className="w-12 h-12" src={creditCard} alt="earthcoin" />
            <p className="text-[#101828] font-inter font-semibold text-[14px]">Buy $EARTH on Uniswap</p>
            <p className="text-[#475467] font-inter font-normal text-[10px]">Make sure to use the following settings on Uniswap.</p>
            <div className="flex p-2 border-[1px] border-[#EAECF0] rounded-lg mt-2">
                <img className="w-8 h-8" src={featuredNetwork} alt="earthcoin" />
                <div className="flex flex-col">
                    <p className="text-[#344054] font-inter font-medium text-[10px]">Network</p>
                    <p className="text-[#475467] font-inter font-normal text-[10px]">Polygon POS</p>
                </div>
            </div>
            <div className="flex p-2 border-[1px] border-[#EAECF0] rounded-lg mt-2">
                <img className="w-8 h-8" src={tokenIcon} alt="earthcoin" />
                <div className="flex flex-col">
                    <p className="text-[#344054] font-inter font-medium text-[10px]">Token Contract</p>
                    <p className="text-[#475467] font-inter font-normal text-[10px]">0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6</p>
                </div>
            </div>
            <div className="flex gap-2 mt-5 w-full">
                <button className="text-[#344054] px-4 py-2 w-[50%] border-[1px] border-[#D0D5DD] shadow-lg rounded-lg font-inter font-semibold text-[14px]" onClick={() => setShowUniswap(false)}>Close</button>
                <button className="text-white px-4 py-2 w-[50%] border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-semibold text-[14px]">
                    <Link
                        href={buttonConfig?.earth_uniswap_becomeNode?.link || ""}
                        target={buttonConfig?.earth_uniswap_becomeNode?.external ? "_blank" : "_self"}
                    >
                        {buttonConfig?.earth_uniswap_becomeNode?.title}
                    </Link>
                </button>
            </div>
        </div>
    )
}