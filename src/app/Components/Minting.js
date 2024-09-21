import Link from "next/link";
import ImageView from "./ImageView";
import buttonConfig from "../utils/button";
import { useMediaQuery } from "react-responsive";

const mintBg = "/assets/images/mintBg.png";
export default function Minting() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <div className="relative w-full mt-10 mb-20">
      <ImageView
        src={mintBg}
        alt="mint"
        width={800}
        height={800}
        className="w-full h-[25vh] sm:h-[28vh] rounded-xl object-cover"
      />

      {!isMobile ? (
        <div className="absolute flex items-center justify-between w-full gap-6 px-4 py-4 sm:px-16  xs:top-10 sm:top-10 bottom-[-14px] md:bottom-0">
          <div className="flex flex-col items-start gap-4 mt-2 sm:mt-0">
            <p className="text-[#EC8000] w-[100%] font-syne font-semibold  text-[18px] xs:text-[20px] sm:text-[24px]">
              Want minting rights?{" "}
              <span className="text-white">Become a node.</span>
            </p>
            <p className="text-white font-inter w-full font-normal text-[8px] xs:text-[10px] sm:text-[16px]">
              Join regens, treegens, degens and solarpunks growing with $Earth.
            </p>
          </div>
          <Link
            className="w-[70px] xs:w-[80px] sm:w-[100px] sm:-mt-10 text-center text-white font-inter flex h-8 xs:h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-[10px] xs:text-xs sm:text-sm"
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
      ) : (
        <>
          <div className="absolute flex items-center justify-center  w-full top-8 px-3">
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-[#EC8000] w-[100%] font-syne font-semibold text-[10px] text-center">
                Want minting rights?{" "}
                <span className="text-white">Become a node.</span>
              </p>

              <p className="text-white font-inter w-full font-normal text-[8px] xs:text-[10px] sm:text-[16px] mt-1">
                Join regens, treegens, degens and solarpunks growing with
                $Earth.
              </p>
              <Link
                className="w-[100px]  text-center text-white font-inter flex h-8 xs:h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-[10px] mt-8"
                href={buttonConfig?.footer_banner?.link || ""}
                target={
                  buttonConfig?.footer_banner?.external ? "_blank" : "_self"
                }
              >
                {buttonConfig?.footer_banner?.title}
              </Link>
            </div>

            {/* <Link
          href='/community'
          className='w-[80px] sm:w-[100px] sm:-mt-10  text-center text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm'
        >
          Learn More
        </Link> */}
          </div>
        </>
      )}
    </div>
  );
}
