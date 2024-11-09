import { Switch } from "antd";
import { useState, useEffect, useContext } from "react";
import "./dapp.css";
import { envObj } from "../../utils/env";
import {
  EarthStaking as EarthStakingJson,
  EarthERC20Token as EarthERC20TokenJson,
  Fruit as FruitJSON,
} from "./abi";
import { ethers } from "ethers";
import useNotification from "../../Hooks/useNotification";
import { BtnLoader, Loader } from "../../Components/Loader";
import { profileState } from "../../redux/profileSlice";
import { useSelector } from "react-redux";
import { allowance, earthAmount } from "./balance";
import TransactionPopup from "./TransactionPopup";
import Progress from "./Progress";
import { AddressContext } from "../../Providers";



export default function Stake() {
  const [stake, setStake] = useState(true);
  const { showMessage } = useNotification();

  const onChange = (checked) => {

    if (checked) {
      setStake(false);
    } else {
      setStake(true);
    }
  };
  return (
    <div className='flex z-[5] items-center justify-center w-[73%] flex-col gap-2 pt-24 mb-8 sm:pt-0 sm:mb-0'>
      <div className='flex gap-3'>
        <p
          className={`text-center font-inter text-[16px] font-medium ${stake ? "text-[#27b676]" : "text-black"
            }`}
        >
          STAKE
        </p>
        <Switch onChange={onChange} />
        <p
          className={`text-center font-inter text-[16px] font-medium ${stake ? "text-black" : " text-[#27b676]"
            }`}
        >
          UNSTAKE
        </p>
      </div>
      {stake ? (
        <StakeFunction />
      ) : (
        <UnstakeFunction stake={stake} setStake={setStake} />
      )}
    </div>
  );
}

function UnstakeFunction({ stake, setStake }) {
  const [amount, setAmount] = useState("");
  const { wallet: account, balance } = useSelector(profileState);
  const allowanceAmount = balance.fruit;
  const [showPopup, setShowPopup] = useState(false);
  const { showMessage } = useNotification();
  const [transaction, setTransaction] = useState(false)
  const initState = {
    increaseAllowance: false,
    unstake: false,
  }
  const [loading, setLoading] = useState(initState);
  const [progress, setProgress] = useState(initState);

  const [result, setResult] = useState(0);
  const [accFactor, setAccFactor] = useState(0);

  const { addressObj } = useContext(AddressContext)


  const earthstakingAddress = addressObj.earthStaking;
  const fruitAddress = addressObj.fruit;

  const getAccFactor = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          earthstakingAddress,
          EarthStakingJson.abi,
          signer
        );

        let value = await contract.accumulationFactor();
        let result = value.toString() / Math.pow(2, 64);

        setAccFactor(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const formatToTwoDecimalPlaces = (value) => {
    return Number(value).toFixed(2);
  };

  useEffect(() => {
    if (amount) {
      const value = amount * accFactor;
      setResult(value);
    } else {
      setResult(0);
    }
  }, [amount, setResult, accFactor]);

  useEffect(() => {
    if (!account) {
      return;
    }

    allowance();
    getAccFactor();

    const intervalId = setInterval(() => {
      allowance();
      getAccFactor();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [account]);

  const handleChange = ({ target: { name, value } }) => {
    let validatedValue = value.replace("e", "");

    if (/^[+-]?\d+(\.\d*)?$/.test(validatedValue) || value === "") {
      setAmount(validatedValue);
    }
  };

  const unstakeFn = async () => {
    if (!amount) {
      return;
    }

    if (typeof window?.ethereum !== "undefined") {
      const Amount = ethers.utils.parseUnits(amount, "ether");
      const AllowanceAmount = allowanceAmount * Math.pow(10, 18);

      if (Number(Amount) > AllowanceAmount) {
        showMessage({
          type: "error",
          value: "Amount exceeds fruit balance",
        });
        return;
      }
      setLoading((obj) => ({ ...obj, increaseAllowance: true }));
      setTransaction(true)
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider.getSigner();
      const fruitContract = new ethers.Contract(
        fruitAddress,
        FruitJSON.abi,
        signer
      );
      const earthStakingContract = new ethers.Contract(
        earthstakingAddress,
        EarthStakingJson.abi,
        signer
      );

      try {
        let info = await fruitContract.increaseAllowance(
          earthstakingAddress,
          Amount
        );

        await info.wait();
        setLoading((obj) => ({ unstake: true, increaseAllowance: false }));
        setProgress((obj) => ({ ...obj, increaseAllowance: true }));

        info = await earthStakingContract.unstake(
          ethers.BigNumber.from(Amount)
        );
        await info.wait();

        allowance();
        getAccFactor();
        setAmount("");
        setLoading((obj) => ({
          ...obj,
          unstake: false,
        }));

        setProgress((obj) => ({ ...obj, unstake: true }));

        // Refresh each value

        showMessage({ type: "success", value: "Amount Unstaked" });
        setTransaction(false)

      } catch (error) {
        // setAmount("");
        allowance();

        setLoading((obj) => {
          if (obj.unstake) {
            obj.unstake = false;
          } else {
            obj.increaseAllowance = false;
          }
          return obj;
        });

        showMessage({ type: "error", value: error.reason });
        console.log(error);
      }
    }
  };

  const resetState = () => {
    setProgress(initState)
    setLoading(initState)
    setTransaction(false)
    setShowPopup(false);
  }

  return allowanceAmount !== "" ? (
    <>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-black text-center font-inter mt-5 sm:text-[28px] text-md  font-medium'>
          Unstake $Fruit to <br /> get $Earth
        </p>
        <div className='flex flex-wrap justify-center w-full gap-4 mt-2 sm:flex-nowrap'>
          <div className='flex flex-col w-[140px]'>
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              Enter $Fruit amount
            </p>
            <div className='flex border-2 border-[#EAECF0] items-center p-1'>
              <input
                type='text'
                className='outline-none text-[16px] w-[60px]'
                placeholder=''
                onChange={handleChange}
                name='text'
                value={amount}
              />
              <p className='text-black text-center font-inter text-[12px] font-medium'>
                $FRUIT
              </p>
            </div>
          </div>
          <div className='flex flex-col w-[140px]'>
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              You will recieve
            </p>
            <div className='flex border-2 border-[#EAECF0] items-center p-1'>
              <input
                type='text'
                className='outline-none text-[16px] w-[60px]'
                placeholder='158.68'
                readOnly
                value={formatToTwoDecimalPlaces(result)}
              />
              <p className='text-black text-center font-inter text-[12px] font-medium'>
                $EARTH
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => amount && setShowPopup(true)}
          className='w-[120px] text-white font-inter mt-4 flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]'
        >
          UNSTAKE
        </button>
        {showPopup ? (
          <TransactionPopup
            handleSubmit={unstakeFn}
            handleCancel={resetState}
            progress={progress}
            loading={loading}
            transaction={transaction}
          >
            <Progress
              loading={loading}
              progress={progress}
              data={[
                {
                  text: "Increase allowance",
                  title: "increaseAllowance",
                },
                {
                  text: "Unstake",
                  title: "unstake",
                },
              ]}
            />
          </TransactionPopup>
        ) : null}
      </div>
    </>
  ) : (
    <div className='dapp-loading-container'>
      <Loader id='loading' />
    </div>
  );
}

function StakeFunction({ stake, setStake }) {
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const { wallet: account, balance } = useSelector(profileState);
  const earthBalance = balance.earth;
  const [result, setResult] = useState(0);
  const [accFactor, setAccFactor] = useState(0);
  const { showMessage } = useNotification();
  const [transaction, setTransaction] = useState(false)
  const { addressObj } = useContext(AddressContext)


  const earthstakingAddress = addressObj.earthStaking;
  const eartherc20Address = addressObj.earthERC20;

  const initState = {
    increaseAllowance: false,
    stake: false,
  }
  const [loading, setLoading] = useState(initState);
  const [progress, setProgress] = useState(initState);

  const getAccFactor = async () => {
    if (typeof window?.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window?.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          earthstakingAddress,
          EarthStakingJson.abi,
          signer
        );
        let value = await contract.accumulationFactor();
        let result = value / Math.pow(2, 64);

        setAccFactor(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (amount) {
      const value = amount / accFactor;

      setResult(value);
    } else {
      setResult(0);
    }
  }, [amount, setResult, accFactor]);

  useEffect(() => {
    if (!account) {
      return;
    }

    earthAmount();
    getAccFactor();

    const intervalId = setInterval(() => {
      earthAmount();
      getAccFactor();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [account]);

  const stakeFn = async () => {
    if (!amount) {
      return;
    }

    if (typeof window?.ethereum !== "undefined") {
      const Amount = ethers.utils.parseUnits(amount, "ether");
      const EarthBalance = earthBalance * Math.pow(10, 18);

      if (Number(Amount) > EarthBalance) {
        showMessage({ type: "error", value: "Amount exceeds earth balance" });
        return;
      }
      setLoading((obj) => ({ ...obj, increaseAllowance: true }));
      setTransaction(true)

      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider.getSigner();
      const earthStakingContract = new ethers.Contract(
        earthstakingAddress,
        EarthStakingJson.abi,
        signer
      );
      const earthErc20Contract = new ethers.Contract(
        eartherc20Address,
        EarthERC20TokenJson.abi,
        signer
      );
      try {
        const allowance = await earthErc20Contract.increaseAllowance(
          earthstakingAddress,
          Amount
        );

        await allowance.wait();
        setLoading((obj) => ({
          stake: true,
          increaseAllowance: false,
        }));
        setProgress((obj) => ({ ...obj, increaseAllowance: true }));

        const info = await earthStakingContract.stake(Amount);

        await info.wait();
        // earthAmount();
        earthAmount();
        getAccFactor();

        setAmount("");
        setLoading((obj) => ({
          ...obj,
          stake: false,

        }));
        setProgress((obj) => ({ ...obj, stake: true }));

        setTransaction(false)

        // Refresh each value
        // totalEarth();

        showMessage({ type: "success", value: "Amount Staked" });
      } catch (error) {
        setLoading((obj) => {
          if (obj.stake) {
            obj.stake = false;
          } else {
            obj.increaseAllowance = false;
          }
          return obj;
        });
        // setAmount("");
        earthAmount();
        showMessage({ type: "error", value: error.code });
        console.log(error);

      }
    }
  };
  const formatToTwoDecimalPlaces = (value) => {
    return Number(value).toFixed(2);
  };

  const handleChange = ({ target: { name, value } }) => {
    let validatedValue = value.replace("e", "");

    if (/^[+-]?\d+(\.\d*)?$/.test(validatedValue) || value === "") {
      setAmount(validatedValue);
    }
  };

  const resetState = () => {
    setProgress(initState)
    setLoading(initState)
    setTransaction(false)
    setShowPopup(false);
  }

  return earthBalance !== "" ? (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-black text-center font-inter mt-5 text-md sm:text-[28px] font-medium'>
        Stake $Earth to <br /> get $Fruit
      </p>
      <div className='flex flex-wrap justify-center w-full gap-4 mt-2 sm:flex-nowrap'>
        <div className='flex flex-col w-[140px]'>
          <p className='text-black text-center font-inter text-[12px] font-medium'>
            Enter $Earth amount
          </p>
          <div className='flex border-2 border-[#EAECF0] items-center p-1'>
            <input
              type='text'
              className='outline-none text-[16px] w-[60px]'
              placeholder=''
              onChange={handleChange}
              name='text'
              value={amount}
            />
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              $EARTH
            </p>
          </div>
        </div>
        <div className='flex flex-col w-[140px]'>
          <p className='text-black text-center font-inter text-[12px] font-medium'>
            You will recieve
          </p>
          <div className='flex border-2 border-[#EAECF0] items-center p-1'>
            <input
              type='text'
              className='outline-none text-[16px] w-[60px]'
              placeholder='158.68'
              readOnly
              value={formatToTwoDecimalPlaces(result)}
            />
            <p className='text-black text-center font-inter text-[12px] font-medium'>
              $FRUIT
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => amount && setShowPopup(true)}
        className='w-[120px] text-white font-inter mt-4 flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]'
      >
        STAKE
      </button>
      {showPopup ? (
        <TransactionPopup
          handleSubmit={stakeFn}
          handleCancel={resetState}
          progress={progress}
          loading={loading}
          transaction={transaction}

        >
          <Progress
            loading={loading}
            progress={progress}
            data={[
              {
                text: "Increase allowance",
                title: "increaseAllowance",
              },
              {
                text: "Stake",
                title: "stake",
              },
            ]}
          />
        </TransactionPopup>
      ) : null}
    </div>
  ) : (
    <div className='dapp-loading-container'>
      <Loader id='loading' />
    </div>
  );
}
