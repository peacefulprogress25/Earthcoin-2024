import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import TransactionPopup from "./TransactionPopup";
import ImageView from "../../Components/ImageView";
import Sbt from "./Sbt";
import Trade from "./Trade";
import Stake from "./Stake";
import Claim from "./Claim";
import Mint from "./Mint";
import "./dapp.css";
import Chart from "./Chart";

const GradientBg = "/assets/images/dapp-bg.png";
const rays = "/assets/images/Background rays.png";
const disconnect = "/assets/images/Disconnect Wallet.png";
const connect = "/assets/images/Connect Wallet.png";
const wallet = "/assets/icons/wallet-white.svg";
export default function Dapp() {
  const [showPopup, setShowPopup] = useState(false);
  const [screen, setScreen] = useState("SBT");
  const balance = [
    {
      balance: "158.68",
      title: "$Earth Balance",
    },
    {
      balance: "158.68",
      title: "$Fruit Balance",
    },
    {
      balance: "158.68",
      title: "$DAI Balance",
    },
  ];
  const price = [
    {
      balance: "$10",
      title: "$Earth Price",
    },
    {
      balance: "158.68",
      title: "$Earth Price on Dex",
    },
    {
      balance: "158.68",
      title: "Treasury Size",
    },
  ];

  // const data = ["STAKE", "TRADE", "CLAIM", "DISCONNECT WALLET", "SBT", "MINT"];
  const handleBtnClick = (content) => {
    console.log(content);
    setScreen(content);
  };
  const formatToTwoDecimalPlaces = (value) => {
    return Number(value).toFixed(2);
  };
  const formatAddress = (address) => {
    const formattedAddress =
      address.substring(0, 5) + "...." + address.substring(address.length - 5);

    return formattedAddress;
  };

  const svgRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = [
      { value: 30, text: "First", color: "red" },
      { value: 40, text: "Second", color: "green" },
      { value: 60, text: "Third", color: "blue" },
      {
        value: 50,
        text: "A very very very very very very very very long text",
        color: "yellow",
      },
    ];

    setChartData(data);
  }, []);

  const splitLongString = (str, count) => {
    const partLength = Math.round(str.length / count);
    const words = str.split(" ");
    const parts = [];
    str.split(" ").forEach((part) => {
      if (!parts.length) {
        parts.push(part);
      } else {
        const last = parts[parts.length - 1];
        if (parts[parts.length - 1].length >= partLength) parts.push(part);
        else parts[parts.length - 1] += " " + part;
      }
    });
    return parts;
  };

  return (
    <div className="mt-20 w-full">
      {/* <button
        className="border border-black rouned-md"
        onClick={() => setShowPopup(true)}
      >
        modal
      </button>
      {showPopup && <TransactionPopup setShowPopup={setShowPopup} />} */}

      <div className="relative w-full h-screen flex">
        <ImageView
          src={GradientBg}
          alt="GradientBg"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute h-full w-full flex items-center justify-around px-10 py-12">
          <div className="flex flex-col bg-white/20">
            <div className="border-b-2 border-[white] border-opacity-30">
              <div className="flex flex-col  items-center justify-center p-5">
                <ImageView src={wallet} alt="wallet" width={40} height={40} />
                <p className="text-white font-inter text-center mt-1 font-light text-[16px]">
                  {formatAddress(
                    "0xfa0911850b5b43c8xcxczsC7c70a5fc7194762ad52e47aa"
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center  p-5">
              {balance?.map((value, index) => (
                <div className="flex flex-col  items-center" key={index}>
                  <p className="text-white font-inter text-center  font-light text-[20px]">
                    {formatToTwoDecimalPlaces(value?.balance)}
                  </p>
                  <p className="text-white font-inter text-center  font-light text-[12px]">
                    {value?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center w-[45rem]">
            <ImageView
              src={rays}
              alt="rays"
              width={800}
              height={800}
              className="w-full  z-[1] -left-[1rem] -top-[5rem] absolute"
            />
            <Chart setScreen={setScreen} screen={screen}>
              {" "}
            </Chart>
            <div className="rounded-full border-2 z-[6] flex absolute overflow-hidden top-[5.1rem] left-[9.3rem]  xl:left-[11rem] items-center shadow-lg bg-white justify-center border-black w-[23rem] h-[23rem]">
              {screen === "SBT" ? (
                <Sbt />
              ) : screen === "TRADE" ? (
                <Trade />
              ) : screen === "STAKE" ? (
                <Stake />
              ) : screen === "CLAIM" ? (
                <Claim setScreen={setScreen} />
              ) : screen === "MINT" ? (
                <Mint />
              ) : screen === "DISCONNECT WALLET" ? (
                <ImageView
                  src={disconnect}
                  width={200}
                  height={200}
                  alt="disconnect wallet"
                  className="w-full h-full"
                />
              ) : screen === "CONNECT WALLET" ? (
                <ImageView
                  src={connect}
                  width={200}
                  height={200}
                  alt="disconnect wallet"
                  className="w-full h-full"
                />
              ) : (
                <Sbt />
              )}
            </div>{" "}
          </div>
          {/* <div className="relative">
            <div
              onClick={() => handleBtnClick("STAKE")}
              className="text-[18px] h-[8rem] w-[15rem] pt-2 border-black stake bg-white border-2 cursor-pointer  absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-start"
            >
              <span>S</span>
              <span>T</span>
              <span>A</span>
              <span>K</span>
              <span>E</span>
            </div>
            <div
              onClick={() => handleBtnClick("MINT")}
              className="text-[18px] h-[8rem] w-[15rem] mint pt-2 border-black stake bg-white border-2 cursor-pointer  absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-start"
            >
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>T</span>
            </div> */}
          {/* <div className="rounded-full !z-[20] relative border-2 p-4 inner-circle flex items-center shadow-lg bg-white justify-center border-black w-[23rem] h-[23rem]">
            {screen === "SBT" ? (
              <Sbt />
            ) : screen === "TRADE" ? (
              <Trade />
            ) : screen === "STAKE" ? (
              <Stake />
            ) : screen === "CLAIM" ? (
              <Claim />
            ) : screen === "MINT" ? (
              <Mint />
            ) : (
              <Sbt />
            )}
          </div> */}
          <div className="flex flex-col bg-white/20 ">
            <div className="border-b-2 border-[white] border-opacity-30">
              <div className="flex flex-col  items-center justify-center p-4">
                <p className="text-white font-inter text-center  font-light text-[20px]">
                  $Earth
                </p>
                <p className="text-white font-inter text-center  font-light text-[14px]">
                  Summary
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center p-4">
              {price?.map((value, index) => (
                <div className="flex flex-col  items-center" key={index}>
                  <p className="text-white font-inter text-center  font-light text-[20px]">
                    {value?.balance}
                  </p>
                  <p className="text-white font-inter text-center  font-light text-[12px]">
                    {value?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
