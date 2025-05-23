import { useContext, useEffect, useRef, useState } from "react";
import ImageView from "../../Components/ImageView";
import Sbt from "./Sbt";
import Trade from "./Trade";
import Stake from "./Stake";
import Claim from "./Claim";
import Mint from "./Mint";
import "./dapp.css";
import Chart from "./Chart";
import SolanaChart from "./SolanaChart";
import { ethers } from "ethers";
import useNotification from "../../Hooks/useNotification";
import { envObj } from "../../utils/env";
import Soulbound from "./abi/SoulBound.json";
import { useSelector } from "react-redux";
import { connectWalletFn, profileState } from "../../redux/profileSlice";
import * as d3 from "d3";
import {
  getBalance,
  allowance,
  earthAmount,
  totalEarth,
  fetchDexPrice,
} from "./balance";
import Node from "./Node";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { networks } from "./constants/network";
import { AddressContext } from "../../Providers";
import SolanaMint from './SolanaMint'


const GradientBg = "/assets/images/dapp-bg.png";
const rays = "/assets/images/Background rays.png";
const disconnect = "/assets/images/Disconnect Wallet.png";
const connect = "/assets/images/Connect wallet.png";
const wallet = "/assets/icons/wallet-white.svg";



export default function Dapp() {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [screen, setScreen] = useState("SBT");
  const {
    wallet: account,
    balance: balanceObj,
    earthBalance,
    chainId,
    type
  } = useSelector(profileState);
  const [showContent, setShowContent] = useState(true);
  const { addressObj } = useContext(AddressContext)
  const searchParams = useSearchParams()
  let pageType = searchParams.get("type")
  const router = useRouter()

  const soulboundAddress = addressObj?.soulbound;

  useEffect(() => {
    if (pageType === 'node') {
      toast.message("Click NODE to complete the KYC", {
        onAutoClose: () => {
          d3.selectAll('.donutArcSlices').nodes()?.[5]?.dispatchEvent(new Event('click'))
        },
        duration: 1000,
        position: "bottom-right"
      })
      pageType = ''
      router.replace("/dapp")
    }
  }, [pageType])

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



  // const networkChanged = async (chainId) => {
  //   if (typeof window?.ethereum !== undefined) {
  //     const selectedNetwork = networks.filter(obj => obj.chainId === chainId)

  //     showMessage({
  //       type: "success",
  //       value: `Network Switched to ${selectedNetwork[0].chainName}`,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window?.ethereum !== undefined) {
  //     window?.ethereum?.on("chainChanged", networkChanged);
  //   }

  // }, []);

  // const handleAccountChange = (...args) => {
  //   connectWalletFn({
  //     wallet: "",
  //     setShowMenu: "",
  //     value: "Account Changed",
  //   });
  // };

  // useEffect(() => {
  //   if (typeof window?.ethereum !== undefined) {
  //     window?.ethereum?.on("accountsChanged", handleAccountChange);
  //     return () => {
  //       window?.ethereum?.removeListener("accountsChanged", handleAccountChange);
  //     };
  //   }
  // }, []);

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
          setScreen((items) => items && Array.isArray(items) && items.filter((heading) => heading !== "SBT"));
        } else {
          // setScreen(label);
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



  useEffect(() => {
    if (wallet) {
      earthAmount();
      allowance();
      getBalance();
      totalEarth();
    }
  }, [wallet, screen]);


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setIsSmallScreen(true)
        return
      }
      setIsSmallScreen(false)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    !isSmallScreen ? <div className='w-full mt-20 '>
      {/* <button
        className="border border-black rouned-md"
        onClick={() => setShowPopup(true)}
      >
        modal
      </button>
      {showPopup && <TransactionPopup setShowPopup={setShowPopup} />} */}

      <div className='relative flex w-full h-screen '>
        <ImageView
          src={GradientBg}
          alt='GradientBg'
          width={800}
          height={800}
          className='object-cover w-full h-full'
        />
        <div className='absolute flex items-center justify-center h-full py-12 sm:w-full'>
          <div className='dapp relative flex justify-center items-center  md:w-[41.5rem] w-full mx-0  xl:w-[45rem]  '>
            {showContent ? (
              <ImageView
                src={rays}
                alt='rays'
                width={800}
                height={800}
                className='w-full  z-[1] h-full  left-0  absolute'
              />
            ) : null}
            {type==='solana'?<SolanaChart
              setScreen={setScreen}
              screen={screen}
              callBack={walletCallBack}
            />
             : <Chart
                setScreen={setScreen}
                screen={screen}
                callBack={walletCallBack}
            />}
            {showContent ? (
              <div className='rounded-full sm:w-[23rem] w-[71%] h-[71%]  sm:h-[23rem] border-2 z-[6] flex absolute  top-13  sm:top-[5.1rem] sm:left-[9.3rem]  xl:left-[11rem] overflow-auto  items-center shadow-lg bg-white justify-center border-black '>
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
                          type==='solana'? <SolanaMint/> :
                  <Mint
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
        </div>
      </div>
    </div> : <div className="flex items-center justify-center w-full h-screen">
      <p className="font-medium text-center font-syne text-md ">Use Desktop version for better user experience.</p>
    </div>
  );
}
