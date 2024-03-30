import ImageView from "../../Components/ImageView";
import { FaPlus } from "react-icons/fa6";

const wallet = "/assets/icons/wallet.svg";
export default function Dashboard() {
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Dashboard
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            $EARTH Summary
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Track, manage and forecast $EARTH trends.
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col items-start gap-1">
            <p className="text-[#101828] font-inter text-left font-semibold text-[14px]">
              Token Contract
            </p>
            <p className="text-[#475467] font-inter text-left font-normal text-[14px]">
              0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6
            </p>
          </div>
          <div className="flex  items-center gap-1">
            <button className="w-[80px] sm:w-[120px]  text-[#344054]  border border-[#D0D5DD] font-inter flex h-10 items-center justify-center rounded-md  p-2 text-xs sm:text-sm">
              <ImageView
                src={wallet}
                alt="wallet"
                width={20}
                height={20}
                className="w-4 h-4 object-contain"
              />
              Learn More
            </button>
            <button className="w-[80px] sm:w-[120px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
              <FaPlus size={17} color="#fff" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
