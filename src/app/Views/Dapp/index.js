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
    <div className="mt-20">
      {/* <button
        className="border border-black rouned-md"
        onClick={() => setShowPopup(true)}
      >
        modal
      </button>
      {showPopup && <TransactionPopup setShowPopup={setShowPopup} />} */}

      <div className="relative w-full h-full flex">
        <ImageView
          src={GradientBg}
          alt="GradientBg"
          width={800}
          height={800}
          className="w-full h-full object-contain"
        />
        <div className="absolute h-full w-full flex items-center justify-around px-10 py-14">
          <div className="flex flex-col bg-[#1d7645]">
            <div className="border-b-2 border-[#31a560]">
              <div className="flex flex-col  items-center justify-center p-5">
                <ImageView src={wallet} alt="wallet" width={40} height={40} />
                <p className="text-white font-inter text-center mt-1 font-light text-[16px]">
                  {formatAddress(
                    "0xfa0911850b5b43c8xcxczsC7c70a5fc7194762ad52e47aa"
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center p-5">
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
          <div className="relative">
            {/* <div className="rounded-full relative border-2 flex items-center shadow-lg bg-white justify-center border-black w-[28rem] h-[28rem]">
            <div className="divider2 absolute -top-2   bg-black w-[2px] h-[2.4rem]"></div>
            <div
              onClick={() => handleBtnClick("STAKE")}
              className="text-[18px] h-[2.3rem] cursor-pointer z-10 absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center"
            >
              <span>S</span>
              <span>T</span>
              <span>A</span>
              <span>K</span>
              <span>E</span>
            </div>
            <div className="divider1 absolute -top-2   bg-black w-[2px] h-[2.4rem]"></div>
            <div
              onClick={() => handleBtnClick("TRADE")}
              className="text-[18px] h-[2.3rem] cursor-pointer absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center"
            >
              <span className="t1">T</span>
              <span className="r1">R</span>
              <span className="a1">A</span>
              <span className="d1">D</span>
              <span className="e2">E</span>
            </div>
            <div className="divider3 absolute -top-2   bg-black w-[2px] h-[2.4rem]"></div>
            <div
              onClick={() => handleBtnClick("MINT")}
              className="text-[18px] h-[2.3rem] cursor-pointer absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center"
            >
              <span className="m1">M</span>
              <span className="i1">I</span>
              <span className="n1">N</span>
              <span className="t2">T</span>
            </div>
            <div className="divider4 absolute -top-2   bg-black w-[2px] h-[2.4rem]"></div>
            <div
              onClick={() => handleBtnClick("SBT")}
              className="text-[18px] h-[2.3rem] cursor-pointer absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center"
            >
              <span className="s2">S</span>
              <span className="b1">B</span>
              <span className="t3">T</span>
            </div>
            <div className="divider5 absolute -top-2   bg-black w-[2px] h-[2.4rem]"></div>
            <div
              onClick={() => handleBtnClick("CLAIM")}
              className="text-[18px] h-[2.3rem] cursor-pointer absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center"
            >
              <span className="c2">C</span>
              <span className="l1">L</span>
              <span className="a3">A</span>
              <span className="i3">I</span>
              <span className="m2">M</span>
            </div>
            <div className="divider6 absolute -top-2 translate-y-[114px] translate-x-[380px] rotate-[-35deg]  bg-black w-[2px] h-[2.4rem]"></div>

            <div className="text-[18px] h-[2.3rem]  absolute text-black  font-medium flex top-0 gap-[1px] stake text-center justify-center items-center">
              <span className="dis1">D</span>
              <span className="dis2">I</span>
              <span className="dis3">S</span>
              <span className="dis4">C</span>
              <span className="dis5">O</span>
              <span className="dis6">N</span>
              <span className="dis7">N</span>
              <span className="dis8">E</span>
              <span className="dis9">C</span>
              <span className="dis10">T</span>
              <span className="dis11">W</span>
              <span className="dis12">A</span>
              <span className="dis13">L</span>
              <span className="dis14">L</span>
              <span className="dis15">E</span>
              <span className="dis16">T</span>
            </div>

            <div className="rounded-full border-2 p-4 flex items-center shadow-lg bg-white justify-center border-black w-[23rem] h-[23rem]">
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
            </div>
          </div> */}
            <Chart setScreen={setScreen}> </Chart>
            <div className="rounded-full border-2 p-4 flex absolute top-[5.25rem] left-[5.23rem] items-center shadow-lg bg-white justify-center border-black w-[23rem] h-[23rem]">
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
          <div className="flex flex-col bg-[#1d7645]">
            <div className="border-b-2 border-[#31a560]">
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
