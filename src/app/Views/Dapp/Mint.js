import { envObj } from "../../utils/env";
import TransactionPopup from "./TransactionPopup";
import Presale from "./abi/Presale.json";
import { StableCoin } from "./abi";
import Soulbound from "./abi/SoulBound.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import useNotification from "../../Hooks/useNotification";
import Progress from "./Progress";

const soulboundAddress = envObj.soulboundAddress;
const stableCoinAddress = envObj.stableCoinAddress;
const presaleAddress = envObj.presaleAddress;

export default function Mint({ treasuryFunction, totalEarth }) {
  const [showTransactionPopup, setShowTransactionPopup] = useState(false);
  const { showMessage } = useNotification();
  const { earth } = useSelector(profileState)?.earthBalance;
  const [loading, setLoading] = useState({
    increaseAllowance: false,
    mint: false,
  });
  const [progress, setProgress] = useState({
    increaseAllowance: false,
    mint: false,
  });
  const [input, setInput] = useState("");
  const account = useSelector(profileState).wallet;
  const [balance, setBalance] = useState(0);
  const [result, setResult] = useState("");
  const [minted, setMinted] = useState(false);

  const isMinted = async () => {
    if (typeof window.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tt = await signer.getAddress();
        let contract = new ethers.Contract(
          soulboundAddress,
          Soulbound.abi,
          signer
        );

        return await contract.tokenMintedAddress(account);
      } catch (e) {
        console.log(e);
        showMessage({ type: "error", value: e.code });
      }
    }
  };

  const increaseAllowance = async () => {
    if (!input) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Amount = ethers.utils.parseUnits(input, "ether");

    const Balance = balance * Math.pow(10, 18);

    if (Number(Amount) > Balance) {
      showMessage({
        type: "error",
        value: "Amount exceeds balance",
      });
      return;
    }

    setLoading((obj) => ({ ...obj, increaseAllowance: true }));

    const contract = new ethers.Contract(
      stableCoinAddress,
      StableCoin.abi,
      signer
    );
    try {
      console.log("Contract: ", contract);

      const allowance = await contract.increaseAllowance(
        Presale.address,
        Amount
      );
      setProgress((obj) => ({ ...obj, increaseAllowance: true }));
      mint();
    } catch (error) {
      console.log(error);
      setLoading((obj) => ({ ...obj, increaseAllowance: false }));

      showMessage({ type: "error", value: error.reason });
    }
  };

  const mint = async () => {
    if (typeof window.ethereum !== undefined) {
      setLoading((obj) => ({ ...obj, mint: true }));

      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner();
      const price = ethers.utils.parseUnits(input, "ether");
      const contract = new ethers.Contract(presaleAddress, Presale.abi, signer);
      try {
        const info = await contract.mint(
          price // changed
        );

        await info.wait();
        setLoading((obj) => ({ ...obj, mint: false }));

        getBalance();
        totalEarth();
        treasuryFunction();
        showMessage({ type: "success", value: "Transaction Success" });
        setProgress((obj) => ({ ...obj, mint: true }));

        setMinted(true);
      } catch (error) {
        console.log(error);
        console.log(error.transactionHash);
        setLoading(false);
        setMinted(false);
        showMessage({ type: "error", value: error.reason });
      }
    }
  };

  const handleSubmit = async () => {
    let minted = await isMinted();

    if (!minted) {
      showMessage({ type: "error", value: "Soulbound Token missing" });
      return;
    }

    return increaseAllowance();
  };

  const handleChange = ({ target: { name, value } }) => {
    let validatedValue = value.replace("e", "");

    if (/^[+-]?\d+(\.\d*)?$/.test(validatedValue) || value === "") {
      setInput(validatedValue);
    }
  };

  const getBalance = async () => {
    if (typeof window.ethereum !== undefined) {
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providers.getSigner();
      const contract = new ethers.Contract(
        stableCoinAddress,
        StableCoin.abi,
        signer
      );
      try {
        const info = await contract.balanceOf(account);
        setBalance(info / Math.pow(10, 18));
        console.log("balance fetched");
      } catch (error) {
        console.log(error);

        showMessage({ type: "error", value: error.reason });
      }
    }
  };

  useEffect(() => {
    if (input && earth) {
      const value = input / earth;
      setResult(value);
    } else {
      setResult(0);
    }
  }, [earth, input]);

  // useEffect(() => {
  //   getBalance();

  //   const intervalId = setInterval(() => {
  //     getBalance();
  //   }, 5000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const twitterContent = `I just purged my petro $$$ for $Earth to build net zero infrastructure and seed the #solarpunk paradigm`;

  return (
    <>
      <div className='flex w-[72%] items-center flex-col gap-3'>
        <p className='text-black text-center font-inter text-[28px] font-medium'>
          Mint $Earth <br /> by passing $Dai
        </p>
        <p className='text-[16px] text-center font-inter font-medium text-black'>
          New Tokens can only be minted at the protocol using DAPP
        </p>
        <div className='flex justify-center w-full gap-3 mt-2'>
          <div className='flex flex-col w-[130px]'>
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              Enter $Dai amount
            </p>
            <div className='flex border-2 gap-2  border-[#EAECF0] items-center p-1'>
              <input
                type='text'
                className='w-16 outline-none'
                value={input}
                onChange={handleChange}
              />
              <p className='text-black text-center font-inter text-[12px] font-medium'>
                $DAI
              </p>
            </div>
          </div>
          <div className='flex flex-col w-[130px]'>
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              You will recieve
            </p>
            <div className='flex border-2 border-[#EAECF0] w-fit gap-2 items-center p-1'>
              <input
                type='text'
                className='w-16 outline-none'
                placeholder='158.68'
                readOnly
                value={result}
              />
              <p className='text-black text-center font-inter text-[12px] font-medium'>
                $EARTH
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => input && setShowTransactionPopup(true)}
          className='w-[120px] cursor-pointer text-white mt-2 font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]'
        >
          MINT
        </button>
      </div>
      {showTransactionPopup && (
        <TransactionPopup
          handleSubmit={handleSubmit}
          handleCancel={() => setShowTransactionPopup(false)}
          setShowTransactionPopup={setShowTransactionPopup}
        >
          <Progress
            progress={progress}
            loading={loading}
            data={[
              {
                text: "Increase allowance",
                title: "increaseAllowance",
              },
              {
                text: "Mint $Earth",
                title: "mint",
              },
            ]}
          />
        </TransactionPopup>
      )}
    </>
  );
}
