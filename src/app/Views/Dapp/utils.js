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

const checkNetwork = async () => {
  if (typeof window?.ethereum !== "undefined") {
    let provider = new ethers.providers.Web3Provider(window?.ethereum);
    provider = await provider.getNetwork();
    console.log(provider.chainId);
    if (provider.chainId !== parseInt(envObj.chainId)) {
      NotifyUser({
        type: "error",
        message: "Change your network to " + envObj.network,
      });
      return;
    }
    return true;
  }
};

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