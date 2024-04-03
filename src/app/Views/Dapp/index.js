import { useState } from "react";
import TransactionPopup from "./TransactionPopup";
import ImageView from "../../Components/ImageView";
import Sbt from "./Sbt";
import Trade from "./Trade";
import Stake from "./Stake";
import Claim from "./Claim";
import Mint from "./Mint";

const GradientBg = "/assets/images/card-bg.png";
const wallet = "/assets/icons/wallet.svg";
export default function Dapp() {
  const [showPopup, setShowPopup] = useState(false);
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
  const category = [
    "STAKE",
    "TRADE",
    "CLAIM",
    "DISCONNECT WALLET",
    "SBT",
    "MINT",
  ];
  const formatToTwoDecimalPlaces = (value) => {
    return Number(value).toFixed(2);
  };
  const formatAddress = (address) => {
    const formattedAddress =
      address.substring(0, 5) + "...." + address.substring(address.length - 5);

    return formattedAddress;
  };
  return (
    <div className="mt-32 px-[6%]">
      <button
        className="border border-black rouned-md"
        onClick={() => setShowPopup(true)}
      >
        modal
      </button>
      {showPopup && <TransactionPopup setShowPopup={setShowPopup} />}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="relative w-[60rem] h-[70vh] flex">
          <ImageView
            src={GradientBg}
            alt="GradientBg"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute h-full w-full flex items-center justify-between px-10 py-14">
            <div className="flex flex-col bg-[#1d7645]">
              <div className="border-b border-[#31a560]">
                <div className="flex flex-col  items-center justify-center p-4">
                  <ImageView src={wallet} alt="wallet" width={40} height={40} />
                  <p className="text-white font-inter text-center  font-light text-[16px]">
                    {formatAddress(
                      "0xfa0911850b5b43c8xcxczsC7c70a5fc7194762ad52e47aa"
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center p-4">
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
            <div className="rounded-full border-2 flex items-center shadow-lg bg-white justify-center border-black w-[25rem] h-[25rem] p-6">
              <div className="rounded-full border-2 p-2 flex items-center shadow-lg bg-white justify-center border-black w-[21rem] h-[21rem]">
                <Sbt />
                {/* <Trade /> */}
                {/* <Stake /> */}
                {/* <Claim /> */}
                {/* <Mint /> */}
              </div>
            </div>

            {/* <div className="rounded-full border-2 shadow-2xl bg-white border-black w-[16rem] h-[16rem]"></div> */}
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
    </div>
  );
}
