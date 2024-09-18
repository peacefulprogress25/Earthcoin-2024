"use client";
import Link from "next/link";
import buttonConfig from "../../utils/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { formatWalletAddress } from "./utils";

export default function Trade() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
  };
  return (
    <div className="flex flex-col items-center gap-5 p-6 bg-white">
      <p className="text-[#101828] font-inter font-medium text-center text-md  sm:text-2xl">Trade $Dai <br />for $Earth</p>
      <div className="flex flex-col items-center">
        <p className="font-bold text-center text-black font-inter text-md">Network:</p>
        <p className="text-[#101828] font-inter font-semibold text-center text-sm">Polygon POS</p>

      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm font-bold text-center text-black font-inter">$EARTH Address: </p>

        <div className="flex items-center gap-2">
          <p className="text-[#101828] font-inter ml-3  font-semibold text-center text-sm">{formatWalletAddress("0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6")}</p>
          <CopyToClipboard onCopy={onCopy} text="0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6" className='cursor-pointer'>
            <MdContentCopy className="text-sm" style={{ color: copied ? "#EC8000 " : "#344054" }} />
          </CopyToClipboard>
        </div>
      </div>
      <Link
        href={buttonConfig.earth_uniswap_becomeNode.link}
        target={buttonConfig.earth_uniswap_becomeNode.external ? "_blank" : "_self"}
        className="text-white px-6 py-2 border-[1px] border-[#EC8000] bg-[#EC8000] rounded-lg shadow-lg font-inter font-light text-sm h-10"

      >
        TRADE
      </Link>
    </div>
  )
}


// import { ImArrowDown } from "react-icons/im";
// import { RiArrowDownSFill } from "react-icons/ri";
// import { useState } from "react";

// export default function Trade() {
//   const [interchange, setInterchange] = useState(false);
//   return (
//     <div className="flex w-[73%] items-center flex-col gap-3">
//       <p className="text-black text-center font-inter text-[28px] font-medium">
//         Trade $Dai <br /> for $Earth
//       </p>
//       <div
//         className={`relative w-full mt-2 items-center flex ${
//           interchange ? "flex-col-reverse" : "flex-col"
//         }  gap-2`}
//       >
//         <div className="flex w-[95%] border  items-center border-black justify-between p-1">
//           <div className="flex flex-col items-start gap-2">
//             <p className="text-black text-center font-inter text-[12px] font-medium">
//               You pay
//             </p>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 className="outline-none w-[60px]"
//                 placeholder="158.68"
//               />
//               <p className="text-black text-center font-inter text-[12px] font-medium">
//                 $Dai
//               </p>
//             </div>
//           </div>
//           <button className="border border-black  flex items-center justify-center h-8  py-0 font-inter px-2 text-[12px] font-medium rounded-lg">
//             <RiArrowDownSFill size={18} color="#000" /> $DAI
//           </button>
//         </div>
//         <div className="flex w-[95%] border items-center border-black justify-between p-1">
//           <div className="flex flex-col items-start gap-2">
//             <p className="text-black text-center font-inter text-[12px] font-medium">
//               You receive
//             </p>
//             <div className="flex items-center gap-2">
//               <p className="text-black text-center font-inter text-[16px] font-medium">
//                 158.68
//               </p>
//               <p className="text-black text-center font-inter text-[12px] font-medium">
//                 $Earth
//               </p>
//             </div>
//           </div>
//           <button className="border border-black h-8  flex items-center justify-center py-0 font-inter px-2 text-[12px] font-medium rounded-lg">
//             <RiArrowDownSFill size={18} color="#000" />
//             $Earth
//           </button>
//         </div>
//         <div
//           onClick={() => setInterchange(!interchange)}
//           className="absolute z-10 flex items-center justify-center p-2 bg-white border border-black rounded-sm cursor-pointer top-11"
//         >
//           <ImArrowDown color="#000" size={16} />
//         </div>
//       </div>
//       <button className="w-[170px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm">
//         TRADE
//       </button>
//     </div>
//   );
// }
