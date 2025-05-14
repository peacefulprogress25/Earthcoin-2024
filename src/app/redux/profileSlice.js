import { createSlice } from "@reduxjs/toolkit";
import { networks } from "../Views/Dapp/constants/network";

const initialState = {
  wallet: "",
  walletBalance: "0.0",
  accounts: [],
  chainId: networks[0]?.chainId,
  type: networks[0]?.type, 
  balance: {
    earth: 0,
    fruit: 0,
    dai: 0,
  },
  earthBalance: {
    earth: "",
    treasury: "",
    dex: "",
  },
};

const profileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    connectWalletFn: (state, action) => {
      return { ...state, wallet: action.payload };
    },
    balanceFn: (state, action) => {
      return { ...state, balance: { ...state.balance, ...action.payload } };
    },
    networkFn: (state, action) => {
      return { ...state, chainId: action.payload.chainId,type:action.payload.type }
    },
    earthBalanceFn: (state, action) => {
      return {
        ...state,
        earthBalance: { ...state.earthBalance, ...action.payload },
      };
    },
    disconnectWalletFn: (state) => {
      return {...state,wallet:''};
    },

    termsConditionFn: (state, action) => {
      const accounts = state.accounts;
      let index = accounts.findIndex((obj) => obj.wallet === state.wallet);

      if (index === -1) {
        accounts.push({ wallet: state.wallet, termsConditions: true });
      }
      return { ...state, accounts };
    },
  },
});

const profileReducer = profileSlice.reducer;
const profileState = (state) => state.profile;
const {
  connectWalletFn,
  balanceFn,
  earthBalanceFn,
  disconnectWalletFn,
  termsConditionFn,
  networkFn
} = profileSlice.actions;

export {
  profileReducer,
  profileState,
  connectWalletFn,
  balanceFn,
  disconnectWalletFn,
  termsConditionFn,
  earthBalanceFn,
  networkFn
};
