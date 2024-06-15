import Link from "next/link";
import ImageView from "./ImageView";

const mintBg = "/assets/images/mintingBg.png";
export default function Minting() {
  return (
    <div className="relative mt-10 mb-20 w-full">
      <ImageView
        src={mintBg}
        alt="mint"
        width={800}
        height={800}
        className="w-full h-[25vh] sm:h-[28vh] rounded-xl object-cover"
      />
      <div className="flex w-full justify-between gap-6 items-center py-4 px-8 sm:px-16 absolute top-2 sm:top-10">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-[#EC8000] font-syne font-semibold text-[15px] sm:text-[26px]">
            Want minting rights?{" "}
            <span className="text-white">Become a node.</span>
          </p>
          <p className="text-white font-inter font-normal  text-[10px] sm:text-[16px]">
            Join over 4,000+ solarpunks already growing with $Earth.
          </p>
        </div>
        <Link
          href="/community"
          className="w-[80px] sm:w-[100px]  text-center text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
