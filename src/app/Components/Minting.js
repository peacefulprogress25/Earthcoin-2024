import ImageView from "./ImageView";

const mintBg = "/assets/images/mintingBg.png";
export default function Minting() {
  return (
    <div className="relative w-full">
      <ImageView
        src={mintBg}
        alt="mint"
        width={800}
        height={800}
        className="w-full  h-[25vh] sm:h-[32vh]  rounded-lg object-cover"
      />
      <div className="flex w-full justify-between gap-6 items-center py-4 px-8 absolute top-2 sm:top-4">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-[#EC8000] font-syne font-semibold text-[15px] sm:text-[28px]">
            Want minting rights?{" "}
            <span className="text-white">Become a node.</span>
          </p>
          <p className="text-white font-inter font-normal  text-[10px] sm:text-[16px]">
            Join over 4,000+ solarpunks already growing with $Earth.
          </p>
        </div>
        <button className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
