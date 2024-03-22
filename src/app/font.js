import { Syne, Inter } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--primary-font",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font",
});

export { inter, syne };
