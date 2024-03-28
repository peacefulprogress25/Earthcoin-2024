import React from "react";

export default function SeekingFund() {
  return (
    <div className="w-full bg-[#FFFCF8] rounded-md p-8 flex sm:flex-row mb-6 gap-3 flex-col justify-between items-start">
      <div className="flex flex-col gap-3 items-start">
        <p className="text-[#EC8000] text-[28px] font-semibold font-syne">
          Seeking Funds?
        </p>
        <p className="text-[#EC8000] text-[18px] font-normal font-syne">
          Climate solutions seekings funds? Get in touch!
        </p>
      </div>
      <div className="flex gap-4 items-start">
        <button className="w-[100px] text-black font-inter flex h-10 items-center justify-center rounded-md bg-white border border-[#D0D5DD] p-2 cursor-pointer text-sm">
          Learn more
        </button>
        <button className="w-[100px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm">
          Get started
        </button>
      </div>
    </div>
  );
}
