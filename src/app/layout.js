import BaseLayout from "./Components/Layout";
import { inter, syne, inknutAntiqua } from "./font";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Earthcoin",
  description:
    "https://solarpunkdao.earth - Currency backed by climate solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${syne.variable} ${inknutAntiqua.variable}`}
      >
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
