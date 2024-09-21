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
        className='w-full h-[30vh] sm:h-[28vh] rounded-xl object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center w-full gap-2 px-2 py-2 sm:gap-4 sm:px-4 sm:py-4'>
        <div className='flex flex-col items-center gap-1 sm:gap-2'>
          <p className='text-[#EC8000] w-full text-center font-syne font-semibold text-[14px] xs:text-[18px] sm:text-[24px]'>
            Want minting rights?{" "}
            <span className='text-white'>Become a node.</span>
          </p>
          <p className='text-white font-inter w-full text-center font-normal text-[8px] xs:text-[10px] sm:text-[16px]'>
            Join regens, treegens, degens, and solarpunks growing with $Earth.
          </p>
        </div>
        <Link
          className='w-[70px] xs:w-[80px] xl:w-[200px] text-center text-white font-inter flex h-6 xs:h-8 sm:h-10 items-center justify-center rounded-md bg-[#EC8000] p-1 sm:p-2 text-[8px] xs:text-[10px] sm:text-xs xl:text-base'
          href={buttonConfig?.footer_banner?.link || ""}
          target={buttonConfig?.footer_banner?.external ? "_blank" : "_self"}
        >
          {buttonConfig?.footer_banner?.title}
        </Link>
      </div>
    </div>
  );
}