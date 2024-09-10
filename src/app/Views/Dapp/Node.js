import Link from "next/link";
import buttonConfig from "../../utils/button";
const mushroom = "/assets/images/mushroom.png";
export default function NodeDapp() {
  return (
    <div className="flex flex-col items-center gap-5 p-6 bg-white">
      <img className="w-20 h-20" src={mushroom} alt="earthcoin" />
      <p className="text-[#101828] font-inter font-semibold text-center text-md w-full">Fill the Google Form and Complete <br /> the KYC process</p>
      <Link
        className="text-white px-4 py-2 border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-light text-sm h-10"
        href={buttonConfig?.network_earthnode_googleForm?.link || ""}
        target={buttonConfig?.network_earthnode_googleForm?.external ? "_blank" : "_self"}
      >
        {buttonConfig?.network_earthnode_googleForm?.title}
      </Link>
    </div>
  )
}