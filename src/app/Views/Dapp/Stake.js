import { Switch } from "antd";
import { useState } from "react";
import "./dapp.css";
export default function Stake() {
  const [stake, setStake] = useState(false);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    if (checked) {
      setStake(false);
    } else {
      setStake(true);
    }
  };
  return (
    <div className="flex w-full items-center p-4 flex-col gap-3">
      <div className="flex gap-3">
        <p
          className={`text-center font-inter text-[16px] font-medium ${
            stake ? "text-[#27b676]" : "text-black"
          }`}
        >
          STAKE
        </p>
        <Switch defaultChecked onChange={onChange} />
        <p
          className={`text-center font-inter text-[16px] font-medium ${
            stake ? "text-black" : " text-[#27b676]"
          }`}
        >
          UNSTAKE
        </p>
      </div>
      <p className="text-black text-center font-inter mt-5 text-[28px] font-medium">
        Stake $Earth to <br /> get $Fruit
      </p>
      <div className="flex gap-4 w-full mt-2 justify-center">
        <div className="flex flex-col w-[140px]">
          <p className="text-black text-center font-inter text-[12px] font-medium">
            Enter $Earth amount
          </p>
          <div className="flex border-2 border-[#EAECF0] items-center p-1">
            <input
              type="text"
              className="outline-none text-[16px] w-[60px]"
              placeholder="158.68"
            />
            <p className="text-black text-center font-inter text-[12px] font-medium">
              $EARTH
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[140px]">
          <p className="text-black text-center font-inter text-[12px] font-medium">
            You will recieve
          </p>
          <div className="flex border-2 border-[#EAECF0] items-center p-1">
            <input
              type="text"
              className="outline-none text-[16px] w-[60px]"
              placeholder="158.68"
            />
            <p className="text-black text-center font-inter text-[12px] font-medium">
              $FRUIT
            </p>
          </div>
        </div>
      </div>
      <button className="w-[120px] text-white font-inter mt-2 flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-[14px]">
        STAKE
      </button>
    </div>
  );
}
