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
        className="w-full h-[30vh] sm:h-[28vh] rounded-xl object-cover"
      />

      {!isMobile ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full gap-2 px-2 py-2 sm:gap-4 sm:px-4 sm:py-4">
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <p className="text-[#EC8000] w-full text-center font-syne font-semibold  text-[14px] xs:text-[18px] sm:text-[24px]">
              Want minting rights?{" "}
              <span className="text-white">Become a node.</span>
            </p>
            <p className="text-white font-inter w-full text-center font-normal text-[8px] xs:text-[10px] sm:text-[16px]">
              Join regens, treegens, degens, and solarpunks growing with $Earth.
            </p>
          </div>
          <Link
            className="w-[70px] xs:w-[80px] sm:w-[100px] xl:w-[200px] text-center text-white font-inter flex h-6 xs:h-8 sm:h-10 items-center justify-center rounded-md bg-[#EC8000] p-1 sm:p-2 text-[8px] xs:text-[10px] sm:text-xs xl:text-base"
            href={buttonConfig?.footer_banner?.link || ""}
            target={buttonConfig?.footer_banner?.external ? "_blank" : "_self"}
          >
            {buttonConfig?.footer_banner?.title}
          </Link>
        </div>
      ) : (
        <>
          <div className="absolute flex items-center justify-center w-full px-3 top-8">
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