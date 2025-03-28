import { envObj } from "../../utils/env";
import TransactionPopup from "./TransactionPopup";
import Presale from "./abi/Presale.json";
import { StableCoin } from "./abi";
import Soulbound from "./abi/SoulBound.json";
import { ethers } from "ethers";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import useNotification from "../../Hooks/useNotification";
import Progress from "./Progress";
import { TwitterShareButton } from "react-share";
import { AddressContext } from "../../Providers";




export default function Mint({ totalEarth }) {
  const [showTransactionPopup, setShowTransactionPopup] = useState(false);
  const { showMessage } = useNotification();
  const { earth } = useSelector(profileState)?.earthBalance;
  const initState = {
    increaseAllowance: false,
    mint: false,
  }
  const [loading, setLoading] = useState(initState);
  const [progress, setProgress] = useState(initState);
  const [input, setInput] = useState("");
  const account = useSelector(profileState).wallet;
  const [balance, setBalance] = useState(0);
  const [result, setResult] = useState("");
  const [transaction, setTransaction] = useState(false)
  const [twitterShare, setTwitterShare] = useState(false)
  const { addressObj } = useContext(AddressContext)


  const soulboundAddress = addressObj?.soulbound;
  const stableCoinAddress = addressObj?.stableCoin;
  const presaleAddress = addressObj?.presale;
  const mintDecimal = addressObj?.stableCoinConfig?.decimal || 18

  const isMinted = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
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

    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const Amount = ethers.utils.parseUnits(input, mintDecimal);

    const Balance = balance * Math.pow(10, mintDecimal);
    
    if (Number(Amount) > Balance) {
      showMessage({
        type: "error",
        value: "Amount exceeds balance",
      });
      return;
    }
    setTransaction(true)
    setLoading((obj) => ({ ...obj, increaseAllowance: true }));

    const contract = new ethers.Contract(
      stableCoinAddress,
      StableCoin.abi,
      signer
    );
    try {


      const allowance = await contract.increaseAllowance(
        presaleAddress,
        Amount
      );
      await allowance.wait();
      setProgress((obj) => ({ ...obj, increaseAllowance: true }));
      mint();
    } catch (error) {
      console.log(error);
      setLoading((obj) => ({ ...obj, increaseAllowance: false }));

      showMessage({ type: "error", value: error.reason });
    }
  };

  const mint = async () => {
    if (typeof window?.ethereum !== undefined) {
      setLoading((obj) => ({ increaseAllowance: false, mint: true }));

      const providers = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = providers.getSigner();
      const price = ethers.utils.parseUnits(input, "ether");
      const contract = new ethers.Contract(presaleAddress, Presale.abi, signer);
      try {
        const info = await contract.mint(
          price // changed
        );

        await info.wait();
        getBalance();
        totalEarth();
        showMessage({ type: "success", value: "Transaction Success" });
        setLoading((obj) => ({ ...obj, mint: false }));
        setProgress((obj) => ({ ...obj, mint: true }));
        setTransaction(false)


      } catch (error) {
        console.log(error);

        setLoading((obj) => ({ ...obj, mint: false }));

        showMessage({ type: "error", value: error?.reason });
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
    if (typeof window?.ethereum !== undefined) {
      const providers = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = providers.getSigner();
      const contract = new ethers.Contract(
        stableCoinAddress,
        StableCoin.abi,
        signer
      );
      try {
        const info = await contract.balanceOf(account);
        setBalance(info / Math.pow(10, mintDecimal));

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

  useEffect(() => {
    getBalance();

    const intervalId = setInterval(() => {
      getBalance();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const resetState = () => {
    if (progress.mint) {
      setTwitterShare(true)
    }
    setProgress(initState)
    setLoading(initState)
    setTransaction(false)
    setShowTransactionPopup(false);

  }

  const twitterContent = `I just purged my petro $$ for $EARTH to fund net zero infrastructure and seed the solarpunk paradigm.`;

  return (
    <>
      {twitterShare ?
        <div className='flex flex-col items-center justify-center gap-3'>
          <p className='w-3/4 text-lg text-center message text-primary font-syne'>Congrats on purging your petro $ for  $EARTH to fund climate solutions</p>
          <TwitterShareButton url={twitterContent}>
            <button className='flex flex-col items-center justify-center gap-2 text-md "w-[80px] ml-auto text-white font-inter h-10 rounded-md bg-[#EC8000] p-2 text-sm'>
              Share via Twitter
            </button>
          </TwitterShareButton>
        </div>

        : <div className='flex w-[72%] mt-8 py-8 sm:py-0 sm:mt-0 items-center flex-col gap-3'>
          <p className='text-black text-center font-inter sm:text-[28px] text-md font-medium'>
            Mint $Earth <br /> by purging {addressObj?.units?.unit1}
          </p>
          <div className='flex flex-wrap justify-center w-full gap-3 mt-2 sm:flex-nowrap'>
            <div className='flex flex-col w-[130px]'>
              <p className='text-black text-center font-inter text-[12px] font-medium'>
                Enter {addressObj?.units?.unit1} amount
              </p>
              <div className='flex border-2  gap-2  border-[#EAECF0] items-center p-1'>
                <input
                  type='text'
                  className='w-16 outline-none'
                  value={input}
                  onChange={handleChange}
                />
                <p className='text-black text-center font-inter text-[12px] font-medium'>
                  {addressObj?.units?.unit1}
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
        </div>}
      {showTransactionPopup && (
        <TransactionPopup
          handleSubmit={handleSubmit}
          handleCancel={resetState}
          setShowTransactionPopup={setShowTransactionPopup}
          loading={loading}
          progress={progress}
          transaction={transaction}
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
