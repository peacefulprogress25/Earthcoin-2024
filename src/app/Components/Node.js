import Link from "next/link";
import buttonConfig from "../utils/button";
const mushroom = "/assets/icons/mushroom.png";
export default function NodeDapp() {
    return(
        <div className="bg-white w-[15rem] p-6 flex flex-col gap-5 items-center">
            <img className="w-10 h-10" src={mushroom} alt="earthcoin" />
            <p className="text-[#101828] font-inter font-semibold text-center text-[10px]">Fill the Google Form and Complete <br /> the KYC process</p>
            <Link
            className="text-white px-4 py-2 border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-semibold text-[10px]"
              href={buttonConfig?.dapp_node?.link || ""}
              target={buttonConfig?.dapp_node?.external ? "_blank" : "_self"}
            >
              {buttonConfig?.dapp_node?.title}
            </Link>
        </div>
    )
}