import { CgDanger } from "react-icons/cg";
import { useState } from "react";
export default function Sbt() {
  const [whitelisted, setWhitelisted] = useState(false);
  return (
    <div className="flex w-full items-center p-4 flex-col gap-3">
      {whitelisted ? (
        <>
          <p className="text-black text-center font-inter text-[16px] font-medium">
            Complete your KYC to mint this <br /> Soul Bound NFT
          </p>
          <div className="flex w-[90%] flex-col gap-1">
            <input
              type="text"
              placeholder="First Name"
              className="border-2 text-black border-black p-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 text-black border-black p-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 text-black border-black p-1"
            />
          </div>
        </>
      ) : (
        <>
          <CgDanger color="#c1272d" size="60" />
          <p className="text-[22px] text-center font-inter font-medium text-black">
            SOUL BOUND TOKEN <br />{" "}
            <span className="text-[#c94247]">NOT FOUND</span>
          </p>
          <p className="text-black font-inter text-[12px] font-normal">
            Know more
          </p>
        </>
      )}

      <button
        onClick={() => setWhitelisted(true)}
        className="w-[170px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm"
      >
        GET WHITELISTED
      </button>
    </div>
  );
}
