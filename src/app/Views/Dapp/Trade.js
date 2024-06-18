import { ImArrowDown } from "react-icons/im";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

export default function Trade() {
  const [interchange, setInterchange] = useState(false);
  return (
    <div className="flex w-[73%] items-center flex-col gap-3">
      <p className="text-black text-center font-inter text-[28px] font-medium">
        Trade $Dai <br /> for $Earth
      </p>
      <div
        className={`relative w-full mt-2 items-center flex ${
          interchange ? "flex-col-reverse" : "flex-col"
        }  gap-2`}
      >
        <div className="flex w-[95%] border  items-center border-black justify-between p-1">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-black text-center font-inter text-[12px] font-medium">
              You pay
            </p>
            <div className="flex items-center">
              <input
                type="text"
                className="outline-none w-[60px]"
                placeholder="158.68"
              />
              <p className="text-black text-center font-inter text-[12px] font-medium">
                $Dai
              </p>
            </div>
          </div>
          <button className="border border-black  flex items-center justify-center h-8  py-0 font-inter px-2 text-[12px] font-medium rounded-lg">
            <RiArrowDownSFill size={18} color="#000" /> $DAI
          </button>
        </div>
        <div className="flex w-[95%] border items-center border-black justify-between p-1">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-black text-center font-inter text-[12px] font-medium">
              You receive
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-black text-center font-inter text-[16px] font-medium">
                158.68
              </p>
              <p className="text-black text-center font-inter text-[12px] font-medium">
                $Earth
              </p>
            </div>
          </div>
          <button className="border border-black h-8  flex items-center justify-center py-0 font-inter px-2 text-[12px] font-medium rounded-lg">
            <RiArrowDownSFill size={18} color="#000" />
            $Earth
          </button>
        </div>
        <div
          onClick={() => setInterchange(!interchange)}
          className="border cursor-pointer absolute top-11 bg-white flex z-10 justify-center items-center  p-2 border-black rounded-sm"
        >
          <ImArrowDown color="#000" size={16} />
        </div>
      </div>
      <button className="w-[170px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm">
        TRADE
      </button>
    </div>
  );
}
