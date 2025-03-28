import { ethers } from "ethers";
import {
  EarthERC20Token as EarthERC20TokenJson,
  Fruit as FruitJSON,
  StableCoin,
} from "./abi";
import { NotifyUser } from "./utils";
import { store } from "../../redux";
import { envObj } from "../../utils/env";
import { balanceFn, earthBalanceFn } from "../../redux/profileSlice";
import { EarthTreasury as EarthTreasuryJSON } from "./abi";
import Soulbound from "./abi/SoulBound.json";
import Presale from "./abi/Presale.json";
import { toast } from "sonner";
import Web3 from "web3";
import { contractAddressList, networks } from "./constants/network";

const { dispatch } = store;
const dexscreener =
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x40da612b7803892ed002e4f9effd746dc3cf4a5c";


const getWallet = () => store.getState().profile.wallet;


export const getAddressFn = () => {
  try {
    const storedChainId = store.getState().profile.chainId;
    const chainId = storedChainId ? parseInt(storedChainId, 16) : networks[0].chainId
    return contractAddressList[chainId]
  } catch (error) {
    console.error(error);
  }
}

export const earthAmount = async () => {

  const wallet = getWallet();
  if (!wallet) {
    console.error("wallet not found");
    return;
  }
  const eartherc20Address = getAddressFn()?.earthERC20;
  if (typeof window?.ethereum !== undefined && eartherc20Address) {
    let provider = new ethers.providers.Web3Provider(window?.ethereum);
    let signer = provider.getSigner();
    const contract = new ethers.Contract(
      eartherc20Address,
      EarthERC20TokenJson.abi,
      signer
    );
    try {
      const t = await contract.balanceOf(wallet);
      const result = t / Math.pow(10, 18);
      dispatch(balanceFn({ earth: result }));

      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
export const allowance = async () => {

  const wallet = getWallet();
  if (!wallet) {
    console.error("wallet not found");
    return;
  }
  const fruitAddress = getAddressFn()?.fruit;
  if (typeof window?.ethereum !== undefined && fruitAddress) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(fruitAddress, FruitJSON.abi, signer);

    try {
      const t = await contract.balanceOf(wallet);
      const result = t / Math.pow(10, 18);
      dispatch(balanceFn({ fruit: result }));

      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
export const getBalance = async () => {

  const wallet = getWallet();
  if (!wallet) {
    console.error("wallet not found");
    return;
  }
  const stableCoinAddress = getAddressFn()?.stableCoin;
  const decimal = getAddressFn()?.stableCoinConfig?.decimal || 18;

  if (typeof window?.ethereum !== undefined && stableCoinAddress) {
    const providers = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = providers.getSigner();
    const contract = new ethers.Contract(
      stableCoinAddress,
      StableCoin.abi,
      signer
    );
    try {
      const info = await contract.balanceOf(wallet);
      const result = info / Math.pow(10, decimal);
      dispatch(balanceFn({ dai: result }));


      return result;
    } catch (error) {
      console.error(error);
      NotifyUser({ type: "error", message: error.code });
      return 0;
    }
  }
};

export const totalEarth = async () => {
  const presaleAddress = getAddressFn()?.presale;
  if (typeof window?.ethereum !== undefined && presaleAddress) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const presaleContract = new ethers.Contract(
      presaleAddress,
      Presale.abi,
      signer
    );
    try {
      const { info, treasury } = await getTreasury();
      const ratio =
        info?.earth.toString() !== "0"
          ? parseFloat(info?.stablec.toString() / Math.pow(10, 18)) /
          parseFloat(info?.earth.toString() / Math.pow(10, 18))
          : 0;

      const mintMultiple = await presaleContract.mintMultiple();
      let t = mintMultiple.toString() / 10;
      let result = {
        earth:
          Math.round(100 * (parseFloat(ratio) * parseFloat(t))) /
          100 /
          Math.pow(10, 18),
        treasury,
      }
      dispatch(
        earthBalanceFn(result)
      );
      const dexPrice = await fetchDexPrice();
      return { ...result, dexPrice }
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchDexPrice = async () => {
  try {
    const response = await fetch(dexscreener);
    const result = await response.json();

    dispatch(earthBalanceFn({ dex: result?.pair?.priceUsd ? result?.pair?.priceUsd : 0 }));
    return result?.pair?.priceUsd ? result?.pair?.priceUsd : 0
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};


export const addToken = async () => {
  try {
    await window.ethereum.request({
      "method": "wallet_watchAsset",
      "params": {
        type: "ERC20",
        options: {
          address: "0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6",
          symbol: "EARTH",
          decimals: 18,
          image: "https://polygonscan.com/token/images/solarpunkdao_32.png"
        }
      },
    });
    toast.success("Token Added")
  } catch (error) {
    toast.error(error?.message)
    console.log(error);
  }
}
export const getTreasury = async () => {
  try {
    const EarthTreasuryAddress = getAddressFn()?.earthTreasury;
    const infuraUrl = getAddressFn()?.infura;
    const provider = `${infuraUrl}${envObj.infuraId}`
    const web3 = new Web3(new Web3.providers.HttpProvider(provider));
    const contract = new web3.eth.Contract(EarthTreasuryJSON.abi, EarthTreasuryAddress);
    const info = await contract?.methods?.intrinsicValueRatio()?.call();
    return {
      info,
      treasury: (info?.stablec?.toString() / Math.pow(10, 18))?.toFixed(2)
    }
  } catch (error) {
    console.log(error);
    return {}
  }
}


export const fetchBalance = () => {
  earthAmount()
  allowance()
  getBalance()
  totalEarth()
}