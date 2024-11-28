"use client";
import ImageView from "../../Components/ImageView";
import { useMediaQuery } from "react-responsive";
import Minting from "../../Components/Minting";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import buttonConfig from "../../utils/button";
import Link from "next/link";

const solarchakra = "/assets/images/solar-chakra.png";
const check = "/assets/icons/Check_icon.svg";

export default function Earth() {
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isSmall = useMediaQuery({ query: "(min-width: 1100px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1440px)" });
  const isXLarge = useMediaQuery({ query: "(min-width: 1550px)" });
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (isXLarge) {
      setWidth(770);
    } else if (isLarge) {
      setWidth(700);
    } else if (isMedium) {
      setWidth(550);
    } else if (isSmall) {
      setWidth(520);
    } else {
      setWidth(470); // Default width for small screens
    }
  }, [isXLarge, isLarge, isMedium, isSmall]);

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

      img: "/assets/images/earth-protocol.png",
      btntext: buttonConfig.earth_protocol_dapp.title,
      buttonLink: buttonConfig.earth_protocol_dapp.link,
      external: buttonConfig.earth_protocol_dapp.external,
      btntext1: buttonConfig.earth_protocol_becomenode.title,
      buttonLink1: buttonConfig.earth_protocol_becomenode.link,
      external1: buttonConfig.earth_protocol_becomenode.external,
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

      img: "/assets/images/uniswap.png",
      btntext: buttonConfig.earth_uniswap_becomeNode.title,
      buttonLink: buttonConfig.earth_uniswap_becomeNode.link,
      external: buttonConfig.earth_uniswap_becomeNode.external,
    },
  ];

  return (
    <div>
      {!isMobile ? (
        <div className="relative mt-20 w-[100%]  mx-auto flex gap-10 flex-col items-center pb-10">
          <ImageView
            src={solarchakra}
            alt="solarchakra"
            className="w-full h-full lg:h-[20rem] object-cover"
            width={1440}
            height={500}
          />
          <div className="absolute md:top-[5rem] lg:top-[6rem]  flex flex-col gap-2 items-center ">
            <p className="text-[#FFFFFF] font-semibold text-center text-[14px] font-inter">
              About
            </p>
            <p className="text-[#FFFFFF] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
              How to get $EARTH
            </p>
            <p className="text-[#FFFFFF] text-center font-normal  text-[20px] font-inter">
              Mint at protocol or buy on Uniswap
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="relative mt-20 w-[100%]  mx-auto flex gap-10 flex-col items-center pb-10">
            <ImageView
              src={solarchakra}
              alt="solarchakra"
              className="w-full h-full lg:h-[89vh] object-cover"
              width={1440}
              height={600}
            />
            <div className="absolute top-[1rem]  flex flex-col gap-1 items-center ">
              <p className="text-[#FFFFFF] font-semibold text-center text-[12px]  font-inter">
                About
              </p>
              <p className="text-[#FFFFFF] font-semibold text-center text-[20px] sm:text-[40px] font-syne">
                How to get $EARTH
              </p>
              <p className="text-[#FFFFFF] text-center font-normal  text-[15px] font-inter">
                Mint at protocol or buy on Uniswap
              </p>
            </div>
          </div>
        </>
      )}
      {!isMobile ? (
        <div className="flex flex-col mx-auto ">
          {earthData?.map((data, index) => (
            <div
              className={`flex flex-col sm:flex-row justify-between  ${
                index === 1 ? "flex-col sm:flex-row-reverse mt-10" : ""
              }`}
              key={index}
            >
              <div className="flex justify-center w-full sm:w-[49%] px-[6%] flex-col gap-2">
                <p className="text-[#101828] font-semibold text-left text-[20px] sm:text-[28px] font-syne">
                  {data?.title}
                </p>
                <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
                  {data?.description}
                </p>
                <p className="text-[#101828] mt-2 font-semibold text-left text-[14px] sm:text-[16px] font-inter">
                  {data?.token}
                </p>
                <div className="flex gap-2">
                  <p className="text-[#475467] text-left font-normal  text-[12px] font-inter">
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
                <div className="flex flex-col gap-2 pl-4 my-4">
                  {data?.features?.map((feature, i) => (
                    <div className="flex gap-2" key={i}>
                      <ImageView
                        src={check}
                        alt="check"
                        width={18}
                        height={18}
                      />
                      <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5">
                  <div>
                    {data?.btntext1 && (
                      <Link
                        key={index}
                        className="bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter"
                        href={data?.buttonLink1 || ""}
                        target={data?.external1 ? "_blank" : "_self"}
                      >
                        {data?.btntext1}
                      </Link>
                      // <button className='bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter'>
                      //   {data?.btntext1}
                      // </button>
                    )}
                  </div>
                  <div className="text-start">
                    <Link
                      key={index}
                      className="bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter"
                      href={data?.buttonLink || ""}
                      target={data?.external ? "_blank" : "_self"}
                    >
                      {data?.btntext}
                    </Link>
                    {/* <button className='bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-32 font-normal buttonb-2 text-center text-[13px] font-inter'>
                    {data.external ? (
                      <a href={data?.buttonLink} target='_blank'>
                        {data?.link}
                      </a>
                    ) : (
                      <Link href={data?.buttonLink || ""}>{data.link}</Link>
                    )}
                  </button> */}
                  </div>
                </div>
              </div>
              <ImageView
                src={data?.img}
                alt={data?.title}
                //pls have a look to this , it's not working properly
                // width={isSmall ? 450 : isMedium ? 500 : isLarge ? 700 : 400}
                // width={600}
                width={width || 500}
                height={600}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col mx-auto ">
            {earthData?.map((data, index) => (
              <div
                className={`flex flex-col sm:flex-row justify-between  ${
                  index === 1 ? "flex-col sm:flex-row-reverse mt-10" : ""
                }`}
                key={index}
              >
                <div className="flex justify-center w-full sm:w-[49%]  flex-col gap-2">
                  <p className="text-[#101828] font-semibold text-center text-[16px] sm:text-[28px] font-syne">
                    {data?.title}
                  </p>
                  <p className="text-[#475467] text-center font-normal  text-[12px] px-2 font-inter">
                    {data?.description}
                  </p>
                  <p className="text-[#101828] mt-2 font-semibold text-center text-[12px] sm:text-[16px] font-inter">
                    {data?.token}
                  </p>
                  <div className="flex gap-2 justify-center">
                    <p className="text-[#475467] text-center font-normal  text-[10px] font-inter">
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
                  <div className="flex flex-col  gap-2 w-full items-center  ">
                    {data?.features?.map((feature, i) => (
                      <div
                        className="flex gap-2 items-center w-[85%]  "
                        key={i}
                      >
                        <ImageView
                          src={check}
                          alt="check"
                          width={18}
                          height={18}
                        />
                        <p className="text-[#475467] text-center font-normal  text-[10px] font-inter">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`flex my-5 justify-center ${
                      index === 0 ? " gap-3" : ""
                    } `}
                  >
                    <div>
                      {data?.btntext1 && (
                        <Link
                          key={index}
                          className="bg-[#EC8000]  p-2 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-20 font-normal buttonb-2 text-center text-[10px] font-inter"
                          href={data?.buttonLink1 || ""}
                          target={data?.external1 ? "_blank" : "_self"}
                        >
                          {data?.btntext1}
                        </Link>
                      )}
                    </div>
                    <div className="text-start">
                      <Link
                        key={index}
                        className="bg-[#EC8000]  p-2 px-6 text-white border border-[#EC8000] shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)] rounded-md w-20 font-normal text-center text-[10px] font-inter my-5"
                        href={data?.buttonLink || ""}
                        target={data?.external ? "_blank" : "_self"}
                      >
                        {data?.btntext}
                      </Link>
                    </div>
                  </div>
                </div>
                <ImageView
                  src={data?.img}
                  alt={data?.title}
                  className="w-full h-full  object-cover"
                  width={650}
                  height={600}
                />
              </div>
            ))}
          </div>
        </>
      )}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <Minting />
      </div>
    </div>
  );
}
