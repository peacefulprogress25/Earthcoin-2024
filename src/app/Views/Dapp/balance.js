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

const { dispatch } = store;
const dexscreener =
  "https://api.dexscreener.com/latest/dex/pairs/polygon/0x40da612b7803892ed002e4f9effd746dc3cf4a5c";

const eartherc20Address = envObj.eartherc20Address;
const fruitAddress = envObj.fruitAddress;
const stableCoinAddress = envObj.stableCoinAddress;
const EarthTreasuryAddress = envObj.EarthTreasuryAddress;
const presaleAddress = envObj.presaleAddress;

const getWallet = () => store.getState().profile.wallet;

export const earthAmount = async () => {
  console.log("earth balance");
  const wallet = getWallet();
  if (!wallet) {
    console.log("wallet not found");
    return;
  }

  if (typeof window?.ethereum !== undefined) {
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
      console.log("earth balance updated");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
export const allowance = async () => {
  console.log("fruit balance");
  const wallet = getWallet();
  if (!wallet) {
    console.log("wallet not found");
    return;
  }

  if (typeof window?.ethereum !== undefined) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(fruitAddress, FruitJSON.abi, signer);

    try {
      const t = await contract.balanceOf(wallet);
      const result = t / Math.pow(10, 18);
      dispatch(balanceFn({ fruit: result }));
      console.log("fruit balance updated");
      return result;
    } catch (error) {
      console.log(error);
    }
  }
};
export const getBalance = async () => {
  console.log("dai balance ");
  const wallet = getWallet();
  if (!wallet) {
    console.log("wallet not found");
    return;
  }

  if (typeof window?.ethereum !== undefined) {
    const providers = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = providers.getSigner();
    const contract = new ethers.Contract(
      stableCoinAddress,
      StableCoin.abi,
      signer
    );
    try {
      const info = await contract.balanceOf(wallet);
      const result = info / Math.pow(10, 18);
      dispatch(balanceFn({ dai: result }));

      console.log("dai balance fetched");
      return result;
    } catch (error) {
      console.error(error);
      NotifyUser({ type: "error", message: error.code });
      return 0;
    }
  }
};

export const totalEarth = async () => {
  if (typeof window?.ethereum !== undefined) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const treasuryContract = new ethers.Contract(
      EarthTreasuryAddress,
      EarthTreasuryJSON.abi,
      signer
    );
    const presaleContract = new ethers.Contract(
      presaleAddress,
      Presale.abi,
      signer
    );
    try {
      const info = await treasuryContract.intrinsicValueRatio();
      const ratio =
        info.earth.toString() !== "0"
          ? parseFloat(info.stablec.toString() / Math.pow(10, 18)) /
          parseFloat(info.earth.toString() / Math.pow(10, 18))
          : 0;

      const mintMultiple = await presaleContract.mintMultiple();
      let t = mintMultiple.toString() / 10;
      console.log(mintMultiple.toString());

      let result = {
        earth:
          Math.round(100 * (parseFloat(ratio) * parseFloat(t))) /
          100 /
          Math.pow(10, 18),
        treasury: info.stablec.toString() / Math.pow(10, 18),
      }

      dispatch(
        earthBalanceFn(result)
      );
      const dexPrice = await fetchDexPrice();
      console.log(
        Math.round(100 * (parseFloat(ratio) * parseFloat(t))) / 100,
        info.stablec.toString() / Math.pow(10, 18)
      );
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


export const fetchBalance = () => {
  earthAmount()
  allowance()
  getBalance()
  totalEarth()
}