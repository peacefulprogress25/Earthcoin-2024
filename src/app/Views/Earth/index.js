"use client";
import ImageView from "../../Components/ImageView";
import Minting from "../../Components/Minting";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import buttonConfig from "../../utils/button";
import Link from "next/link";

const solarchakra = "/assets/images/solar-chakra.png";
const check = "/assets/icons/Check_icon.svg";

export default function Earth() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
  };
  const earthData = [
    {
      title: "$EARTH Protocol",
      description:
        "Only NODE holders have access to mint $EARTH directly at the protocol. Purge your petro-dollars ($DAI) to mint $EARTH",
      features: [
        "Price lower than dex",
        "Increases treasury size",
        "Zero slippage",
      ],
      sbt: "Become a NODE",
      link: "Go to DAPP",
      img: "/assets/images/earth-protocol.png",
      external: false,
    },
    {
      title: "Uniswap",
      description:
        "Decentralized exchange on Ethereum, enabling trustless token swaps, liquidity provision, and automated market making for DeFi participants",
      token: "Token Contract",
      address: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
      features: [
        "Protocol owned liquidity pool rewards stakers",
        "Transaction fees grow the treasury",
        "Increased demand on dex instigates $EARTH mints",
      ],
      link: buttonConfig.earth_uniswap_becomeNode.title,
      buttonLink: buttonConfig.earth_uniswap_becomeNode.link,
      img: "/assets/images/uniswap.png",
      external: buttonConfig.earth_uniswap_becomeNode.external,
    },
  ];
  return (
    <div>
      <div className='relative mt-20 w-[100%] max-w-screen-2xl mx-auto flex gap-10 flex-col items-center pb-10'>
        <ImageView
          src={solarchakra}
          alt='solarchakra'
          className='w-full h-full lg:h-[89vh] object-cover'
          width={1440}
          height={500}
        />
        <div className='absolute md:top-[5rem] lg:top-[15rem] xl:top-[12rem] flex flex-col gap-2 items-center'>
          <p className='text-[#FFFFFF] font-semibold text-center text-[14px] font-inter'>
            About
          </p>
          <p className='text-[#FFFFFF] font-semibold text-center text-[30px] sm:text-[40px] font-syne'>
            How to get $EARTH
          </p>
          <p className='text-[#FFFFFF] text-center font-normal  text-[20px] font-inter'>
          Mint at protocol or buy on Uniswap
          </p>
        </div>
      </div>
      <div className='flex flex-col mx-auto max-w-screen-2xl'>
        {earthData?.map((data, index) => (
          <div
            className={`flex flex-col sm:flex-row justify-between ${
              index === 1 ? "flex-col sm:flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className='flex justify-center w-full sm:w-[50%] px-[6%] flex-col gap-2'>
              <p className='text-[#101828] font-semibold text-left text-[20px] sm:text-[28px] font-syne'>
                {data?.title}
              </p>
              <p className='text-[#475467] text-left font-normal  text-[14px] font-inter'>
                {data?.description}
              </p>
              <p className='text-[#101828] mt-2 font-semibold text-left text-[14px] sm:text-[16px] font-inter'>
                {data?.token}
              </p>
              <div className='flex gap-2'>
                <p className='text-[#475467] text-left font-normal  text-[12px] font-inter'>
                  {data?.address}
                </p>
                {data?.address ? (
                  <div style={{ cursor: "pointer" }}>
                    <CopyToClipboard onCopy={onCopy} text={data?.address}>
                      <FaCopy style={copied ? { color: "#EC8000 " } : ""} />
                    </CopyToClipboard>
                  </div>
                ) : (
                  " "
                )}
              </div>
              <div className='flex flex-col gap-2 pl-4 my-4'>
                {data?.features?.map((feature, i) => (
                  <div className='flex gap-2' key={i}>
                    <ImageView src={check} alt='check' width={18} height={18} />
                    <p className='text-[#475467] text-left font-normal  text-[14px] font-inter'>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              <div className='flex gap-5'>
                <div>
                  {data?.sbt && (
                    <button className='bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter'>
                      {data?.sbt}
                    </button>
                  )}
                </div>
                <div className='text-start'>
                  <button className='bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter'>
                    {data.external ? (
                      <a href={data?.buttonLink} target='_blank'>
                        {data?.link}
                      </a>
                    ) : (
                      <Link href={data?.buttonLink || ""}>{data.link}</Link>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <ImageView
              src={data?.img}
              alt={data?.title}
              width={600}
              height={600}
            />
          </div>
        ))}
      </div>
      <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10'>
        <Minting />
      </div>
    </div>
  );
}
