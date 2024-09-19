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
      <div className='absolute flex items-center justify-between w-full gap-6 px-4 py-4 sm:px-16 top-2 xs:top-10 sm:top-20 bottom-[-14px] md:bottom-0'>
        <div className='flex flex-col items-start gap-4 mt-2 sm:mt-0'>
          <p className='text-[#EC8000] w-[100%] font-syne font-semibold text-[18px] xs:text-[20px] sm:text-[24px]'>
            Want minting rights?{" "}
            <span className='text-white'>Become a node.</span>
          </p>
          <p className='text-white font-inter w-full font-normal text-[8px] xs:text-[10px] sm:text-[16px]'>
            Join regens, treegens, degens and solarpunks growing with $Earth.
          </p>
        </div>
        <Link
          className='w-[70px] xs:w-[80px] sm:w-[100px] sm:-mt-10 text-center text-white font-inter flex h-8 xs:h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-[10px] xs:text-xs sm:text-sm'
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
