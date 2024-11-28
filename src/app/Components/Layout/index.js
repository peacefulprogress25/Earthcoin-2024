"use client"

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import FooterV2 from "./FooterV2";
import Header from "./Header";

export default function BaseLayout({ children }) {
  const pathname = usePathname()
  return (
    <main className="flex flex-col">
      <Header />
      <div className="min-h-screen 2xl:mx-auto max-w-screen-2xl">{children}</div>
      {pathname !== "/dapp" ? <Footer /> : null}
      {/* <FooterV2 /> */}
    </main>
  );
}
