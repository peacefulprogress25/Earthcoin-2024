import { CgDanger } from "react-icons/cg";

function Claim() {
  return (
    <div className="flex w-full items-center flex-col gap-3 p-2">
      {" "}
      <CgDanger color="#c1272d" size="60" />
      <p className="text-[16px] text-center font-inter font-medium text-black">
        You have earned this $Earth in recognition of your contributions towards
        making #Refi dream a tangible reality
      </p>
      <p className="text-black font-inter cursor-pointer text-[12px] font-normal">
        Know more
      </p>
      <button className="w-[120px] text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#ec8000] p-2 text-sm">
        CLAIM
      </button>
    </div>
  );
}

export default Claim;
