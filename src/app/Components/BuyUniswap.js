"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
const tokenIcon = "/assets/icons/token-Icon.png";
const featuredNetwork = "/assets/icons/Featured-network.png";
const creditCard = "/assets/icons/credit-card.png";
import Link from "next/link";
import buttonConfig from "../utils/button";
import { contractAddressList } from "../Views/Dapp/constants/network";
import { Loader } from "./Loader";
export default function UniswapEarth({ setShowUniswap, setSwap }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
  };
  return (
    <div>
      <img className='w-12 h-12' src={creditCard} alt='earthcoin' />
      <p className='text-[#101828] font-inter font-semibold text-left  text-[14px]'>
        Buy $EARTH on Uniswap
      </p>
      <p className='text-[#475467] font-inter font-normal text-[8px] sm:text-[10px] text-left'>
        Make sure to use the following settings on Uniswap.
      </p>
      <div className='flex p-2 border-[1px] border-[#EAECF0] rounded-lg mt-2'>
        <img className='w-8 h-8' src={featuredNetwork} alt='earthcoin' />
        <div className='flex flex-col'>
          <p className='text-[#344054] font-inter font-medium text-[10px] text-left'>
            Network
          </p>
          <p className='text-[#475467] font-inter font-normal text-[8px] sm:text-[10px] text-left'>
            BASE
          </p>
        </div>
      </div>
      <div className='flex p-2 border-[1px] border-[#EAECF0] rounded-lg mt-2'>
        <img className='w-8 h-8' src={tokenIcon} alt='earthcoin' />
        <div className='flex flex-col'>
          <section className='flex items-center gap-2'>
            <p className='text-[#344054] font-inter font-medium text-[10px]'>
              Token Contract
            </p>
            <CopyToClipboard
              onCopy={onCopy}
              text={contractAddressList[8453].earthERC20}
            >
              <MdContentCopy
                fontSize={12}
                style={{ color: copied ? "#EC8000 " : "#344054" }}
              />
            </CopyToClipboard>
          </section>

          <div style={{ cursor: "pointer" }} className='flex flex-col '>
            <p className='text-[#475467] font-inter font-normal text-[8px] sm:text-[10px]'>
              {contractAddressList[8453].earthERC20}
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full gap-2 mt-5'>
        <button
          className='text-[#344054] px-2 py-2 sm:px-4 sm:py-2 w-[50%] border-[1px] border-[#D0D5DD] shadow-lg rounded-lg font-inter font-semibold text-[12px] sm:text-[14px]'
          onClick={() => setShowUniswap(false)}
        >
          Close
        </button>
        <button
          onClick={() => {
            setShowUniswap(false);
            setSwap(true);
          }}
          className='text-white px-2 py-2 sm:px-4 sm:py-2 w-[50%] border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-semibold text-[12px] sm:text-[14px]'
        >
          {/* <Link
                        href={buttonConfig?.earth_uniswap_becomeNode?.link || ""}
                        target={buttonConfig?.earth_uniswap_becomeNode?.external ? "_blank" : "_self"}
                    > */}
          {buttonConfig?.earth_uniswap_becomeNode?.title}
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
}

export function UniswapIframe({ setSwap, swap }) {
  const [loading, setLoading] = useState(true);
  const swapRef = useRef(null);

  const handleSwapPopup = (e) => {
    e.stopPropagation();
    if (swapRef.current && swap && !swapRef.current.contains(e.target)) {
      setSwap(false);
    }
  };

  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handleSwapPopup);
  }

  return (
    <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50 '>
      <iframe
        ref={swapRef}
        src={buttonConfig.earth_uniswap_becomeNode.link}
        height='460px'
        width='400'
        className={`${loading ? "hidden" : ""}`}
        onLoad={() => setLoading(false)}
      />
      {loading ? <Loader /> : null}
    </div>
  );
}
