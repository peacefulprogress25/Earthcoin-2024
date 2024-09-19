import Link from "next/link";
import ImageView from "./ImageView";
import buttonConfig from "../utils/button";

const mintBg = "/assets/images/mintBg.png";
export default function Minting() {
  return (
    <div className='relative w-full mt-10 mb-20'>
      <ImageView
        src={mintBg}
        alt='mint'
        width={800}
        height={800}
        className='w-full h-[25vh] sm:h-[28vh] rounded-xl object-cover'
      />
      <div className='absolute flex items-center justify-between w-full gap-6 px-4 py-4 sm:px-16  sm:top-10'>
        <div className='flex flex-col items-start gap-4'>
          <p className='text-[#EC8000] w-[100%] font-syne font-semibold text-[24px] sm:text-[24px]'>
            Want minting rights?{" "}
            <span className='text-white'>Become a node.</span>
          </p>
          <p className='text-white font-inter w-full font-normal  text-[10px] sm:text-[16px]'>
            Join regens, treegens, degens and solarpunks growing with $Earth.
          </p>
        </div>
        <Link
          className='w-[80px] sm:w-[100px] sm:-mt-10  text-center text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm'
          href={buttonConfig?.footer_banner?.link || ""}
          target={buttonConfig?.footer_banner?.external ? "_blank" : "_self"}
        >
          {buttonConfig?.footer_banner?.title}
        </Link>
        {/* <Link
          href='/community'
          className='w-[80px] sm:w-[100px] sm:-mt-10  text-center text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm'
        >
          Learn More
        </Link> */}
      </div>
    </div>
  );
}
