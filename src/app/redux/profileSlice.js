import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallet: "",
  walletBalance: "0.0",
  accounts: [],
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
      console.log(action);
      return { ...state, wallet: action.payload };
    },
    balanceFn: (state, action) => {
      return { ...state, balance: { ...state.balance, ...action.payload } };
    },
    earthBalanceFn: (state, action) => {
      return {
        ...state,
        earthBalance: { ...state.earthBalance, ...action.payload },
      };
    },
    disconnectWalletFn: (state) => {
      return initialState;
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
} = profileSlice.actions;

export {
  profileReducer,
  profileState,
  connectWalletFn,
  balanceFn,
  disconnectWalletFn,
  termsConditionFn,
  earthBalanceFn,
};
