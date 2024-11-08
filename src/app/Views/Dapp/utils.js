import {
  balanceFn,
  connectWalletFn,
  disconnectWalletFn,
} from "../../redux/profileSlice";
import { ethers } from "ethers";
import { toast } from "sonner";
import { store } from "../../redux";
import { envObj } from "../../utils/env";

export const NotifyUser = (obj) => {
  toast[obj.type](obj.message);
};



const addNetwork = async (obj) => {
  try {
    if (window?.ethereum !== undefined) {
      const provider = window.ethereum;
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [obj],
      });

      connectWallet();
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

const switchNetwork = async (obj) => {
  try {
    const provider = window.ethereum;
    const response = await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: obj.chainId }],
    });
    return true;
  } catch (error) {
    if (error.code === 4902) {
      return addNetwork(obj);
    }
    console.log(error);
  }
};

const checkNetwork = async (obj) => {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = window.ethereum;
      let chainId = await provider.chainId;

      if (chainId === obj.chainId) {
        return true;
      }
      return switchNetwork(obj);
    }
  } catch (error) {
    console.log(error);
  }
};



export const VerifyNetwork = async (obj) => {
  try {
    const getNetworkResult = await checkNetwork(obj);
    if (!getNetworkResult) {
      return;
    }
    connectWallet();
    return getNetworkResult;
  } catch (error) {
    console.error(error);
  }
};

// export const connectWalletFn = async (obj) => {
//   try {
//     const getNetworkResult = await checkNetwork(obj);
//     if (!getNetworkResult) {
//       return;
//     }
//     return connectWallet();
//   } catch (error) {
//     console.error(error);
//   }
// };

export const connectWallet = async ({ wallet, setShowMenu, message }) => {
  try {
    if (!wallet) {
      const getNetworkResult = await checkNetwork();
      if (!getNetworkResult) {
        return;
      }

      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const accounts = await window?.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length) {
        store.dispatch(connectWalletFn(accounts[0]));
        const balance = await provider.getBalance(accounts[0]);
        store.dispatch(balanceFn(ethers.utils.formatEther(balance)));
        NotifyUser({
          type: "success",
          message: message ? message : "Wallet Connected",
        });
        return true
      } else {
        NotifyUser({ type: "error", message: "No Wallet Found" });
      }
    } else {
      store.dispatch(disconnectWalletFn());
      NotifyUser({ type: "success", message: "Wallet Disconnected" });
    }
    setShowMenu && setShowMenu(false);
  } catch (error) {
    console.error(error);
  }
};


export const formatWalletAddress = (address) =>
  address?.substring(0, 5) + "...." + address?.substring(address.length - 5);