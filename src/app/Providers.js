"use client";

import { Toaster } from "sonner";
import ReactGA from "react-ga4";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./redux";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { envObj } from "./utils/env";
export const persistor = persistStore(store);

export const AddressContext = createContext()
export default function Providers({ children }) {
  const analyticsId = envObj.ga_track_id;
  const pathname = usePathname();
  const [addressObj, setAddressObj] = useState({});
  useEffect(() => {
    const googleAnalytics = async () => {
      ReactGA.initialize(analyticsId);
      ReactGA.send({
        hitType: "pageview",
        page: pathname,
        title: pathname,
      });
    };
    googleAnalytics();
  }, [pathname]);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Toaster position='top-center' richColors />
        <AddressContext.Provider value={{ addressObj, setAddressObj }}>
          {children}
        </AddressContext.Provider>
      </PersistGate>
    </ReduxProvider>
  );
}
