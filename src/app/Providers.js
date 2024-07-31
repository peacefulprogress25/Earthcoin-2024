"use client";

import { Toaster } from "sonner";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux";
export const persistor = persistStore(store);

export default function Providers({ children }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Toaster position='top-center' richColors />
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
