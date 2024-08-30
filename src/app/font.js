import { Syne, Inter, Inknut_Antiqua } from "next/font/google";

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

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  display: "swap",
  variable: "--bookFont3",
  weight: ["300", "400", "500", "700", "900", "600"],
});

export { inter, syne, inknutAntiqua };
