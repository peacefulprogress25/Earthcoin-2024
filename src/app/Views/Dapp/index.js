import { useEffect, useRef, useState } from "react";
import TransactionPopup from "./TransactionPopup";

import ImageView from "../../Components/ImageView";
import Sbt from "./Sbt";
import Trade from "./Trade";
import Stake from "./Stake";
import Claim from "./Claim";
import Mint from "./Mint";
import "./dapp.css";
import Chart from "./Chart";
import { ethers } from "ethers";
import useNotification from "../../Hooks/useNotification";
import { envObj } from "../../utils/env";
import {
  PresaleAllocation as PresaleAllocationJSON,
  Presale as PresaleJSON,
  StableCoin as StableCoinJSON,
  EarthTreasury as EarthTreasuryJSON,
  LockedFruit as LockedFruitJSON,
  EarthStaking as EarthStakingJSON,
} from "./abi";
import Soulbound from "./abi/SoulBound.json";
import { useSelector } from "react-redux";
import { connectWalletFn, profileState } from "../../redux/profileSlice";
import {
  getBalance,
  allowance,
  earthAmount,
  totalEarth,
  fetchDexPrice,
} from "./balance";
import Node from "./Node";


const GradientBg = "/assets/images/dapp-bg.png";
const rays = "/assets/images/Background rays.png";
const disconnect = "/assets/images/Disconnect Wallet.png";
const connect = "/assets/images/Connect wallet.png";
const wallet = "/assets/icons/wallet-white.svg";

const soulboundAddress = envObj.soulboundAddress;
const EarthTreasuryAddress = envObj.EarthTreasuryAddress;
const PresaleAddress = envObj.presaleAddress;
const EarthStakingAddress = envObj.earthstakingAddress;

export default function Dapp() {
  const [showPopup, setShowPopup] = useState(false);
  const { showMessage } = useNotification();

  const [screen, setScreen] = useState("SBT");
  const {
    wallet: account,
    balance: balanceObj,
    earthBalance,
  } = useSelector(profileState);
  const [showContent, setShowContent] = useState(true);

  const walletCallBack = () => {
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };
  const balance = [
    {
      balance: balanceObj?.earth,
      title: "$Earth Balance",
    },
    {
      balance: balanceObj?.fruit,
      title: "$Fruit Balance",
    },
    {
      balance: balanceObj?.dai,
      title: "$DAI Balance",
    },
  ];
  const price = [
    {
      balance: earthBalance?.earth,
      title: "$Earth Price",
    },
    {
      balance: earthBalance?.dex,
      title: "$Earth Price on Dex",
    },
    {
      balance: earthBalance?.treasury,
      title: "Treasury Size",
    },
  ];

  const [userData, setUserData] = useState({
    earth: "",
    fruit: "",
  });
  const [earth, setEarth] = useState();

  const [currentNetwork, setcurrentNetwork] = useState("");

  const networkChanged = async (chainId) => {
    if (typeof window?.ethereum !== undefined) {
      let provider = new ethers.providers.Web3Provider(window?.ethereum);
      provider = await provider.getNetwork();
      provider.name = provider.name === "unknown" ? "localhost" : provider.name;
      setcurrentNetwork(provider.name);
      showMessage({
        type: "success",
        value: `Chain-id: ${provider.chainId} \n Network name: ${provider.name}`,
      });
    }
  };

  useEffect(() => {
    window?.ethereum.on("chainChanged", networkChanged);

    // return () => {
    //   window?.ethereum.removeListener("chainChanged", networkChanged);
    // };
  }, []);

  const handleAccountChange = (...args) => {
    connectWalletFn({
      wallet: "",
      setShowMenu: "",
      value: "Account Changed",
    });
  };

  useEffect(() => {
    window?.ethereum?.on("accountsChanged", handleAccountChange);
    return () => {
      window?.ethereum?.removeListener("accountsChanged", handleAccountChange);
    };
  }, []);

  const isMinted = async (account) => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        let contract = new ethers.Contract(
          soulboundAddress,
          Soulbound.abi,
          signer
        );

        let minted = await contract.tokenMintedAddress(account);

        if (minted) {
          setScreen((items) => items.filter((heading) => heading !== "SBT"));
        } else {
          setScreen(label);
        }
      } catch (e) {
        console.log(e);
        //  showMessage({ type: "error", value: e.code });
      }
    }
  };

  useEffect(() => {
    account && isMinted(account);
  }, [account]);

  // const data = ["STAKE", "TRADE", "CLAIM", "DISCONNECT WALLET", "SBT", "MINT"];

  const handleBtnClick = (content) => {
    console.log(content);
    setScreen(content);
  };
  const formatToTwoDecimalPlaces = (value) => {
    return Number(value).toFixed(2);
  };
  const formatAddress = (address) => {
    try {
      const formattedAddress =
        address?.substring(0, 5) +
        "...." +
        address?.substring(address.length - 5);

      return formattedAddress;
    } catch (error) {
      return "";
    }
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

  console.log(screen);

  useEffect(() => {
    if (wallet) {
      earthAmount();
      allowance();
      getBalance();
      totalEarth();
    }
  }, [wallet, screen]);

  return (
    <div className='w-full mt-20'>
      {/* <button
        className="border border-black rouned-md"
        onClick={() => setShowPopup(true)}
      >
        modal
      </button>
      {showPopup && <TransactionPopup setShowPopup={setShowPopup} />} */}

      <div className='relative flex w-full h-screen'>
        <ImageView
          src={GradientBg}
          alt='GradientBg'
          width={800}
          height={800}
          className='object-cover w-full h-full'
        />
        <div className='absolute flex items-center justify-around w-full h-full px-10 py-12'>
          {/* <div className='flex flex-col bg-white/20'>
            <div className='border-b-2 border-[white] border-opacity-30'>
              <div className='flex flex-col items-center justify-center p-5'>
                <ImageView src={wallet} alt='wallet' width={40} height={40} />
                <p className='text-white font-inter text-center mt-1 font-light text-[16px]'>
                  {formatAddress(account)}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-5'>
              {balance?.map((value, index) => {
                const current = value?.balance
                  ? formatToTwoDecimalPlaces(value?.balance)
                  : 0;

                return (
                  <div className='flex flex-col items-center' key={index}>
                    <p className='text-white font-inter text-center  font-light text-[20px]'>
                      {current}
                    </p>
                    <p className='text-white font-inter text-center  font-light text-[12px]'>
                      {value?.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
          <div className='relative flex justify-center w-[45rem]'>
            {showContent ? (
              <ImageView
                src={rays}
                alt='rays'
                width={800}
                height={800}
                className='w-full  z-[1] -left-[1rem] -top-[5rem] absolute'
              />
            ) : null}
            <Chart
              setScreen={setScreen}
              screen={screen}
              callBack={walletCallBack}
            >
              {" "}
            </Chart>
            {showContent ? (
              <div className='rounded-full border-2 z-[6] flex absolute overflow-hidden top-[5.1rem] left-[9.3rem]  xl:left-[11rem] items-center shadow-lg bg-white justify-center border-black w-[23rem] h-[23rem]'>
                {/* {account && screen === "DISCONNECT WALLET" ? (
                  <ImageView
                    src={disconnect}
                    width={200}
                    height={200}
                    alt='disconnect wallet'
                    className='w-full h-full'
                  />
                ) : null} */}

                {!account ? (
                  <ImageView
                    src={connect}
                    width={600}
                    height={600}
                    alt='disconnect wallet'
                    className='object-cover w-full h-full'
                  />
                ) : null}

                {screen === "NODE" && account ? (
                  <Sbt />
                ) : screen === "TRADE" && account ? (
                  <Trade />
                ) : screen === "STAKE" && account ? (
                  <Stake totalEarth={totalEarth} />
                ) : screen === "CLAIM" && account ? (
                  <Claim setScreen={setScreen} />
                ) : screen === "MINT" && account ? (
                  <Mint
                    earth={earth}
                    totalEarth={totalEarth}
                    setHeading={setScreen}
                  />
                ) : account ? (
                  <ImageView
                    src={disconnect}
                    width={200}
                    height={200}
                    alt='disconnect wallet'
                    className='object-cover w-full h-full'
                  />
                ) : null}
              </div>
            ) : null}{" "}
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
          {/* <div className='flex flex-col bg-white/20 '>
            <div className='border-b-2 border-[white] border-opacity-30'>
              <div className='flex flex-col items-center justify-center p-4'>
                <p className='text-white font-inter text-center  font-light text-[20px]'>
                  $Earth
                </p>
                <p className='text-white font-inter text-center  font-light text-[14px]'>
                  Summary
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-4'>
              {price?.map((value, index) => (
                <div className='flex flex-col items-center' key={index}>
                  <p className='text-white font-inter text-center  font-light text-[20px]'>
                    {value?.balance ? value?.balance : 0}
                  </p>
                  <p className='text-white font-inter text-center  font-light text-[12px]'>
                    {value?.title}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
