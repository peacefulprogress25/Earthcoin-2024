import ImageView from "./ImageView";
import buttonConfig from "../utils/button";
import Link from "next/link";

const faq = "/assets/images/faq.png";

export default function Gpt({ isFaq = false }) {
  return (
    <div className="relative w-full">
      <ImageView
        src={faq}
        alt="faq"
        width={800}
        height={800}
        className="w-full   h-[35vh] sm:h-[50vh] rounded-md object-cover"
      />
      {!isFaq && (
        <div className="absolute flex items-center justify-between w-full gap-6 px-8 py-4 bottom-2 sm:bottom-4">

          <Link
            className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm"
            href={buttonConfig?.dapp_footer_banner?.link || ""}
            target={
              buttonConfig?.dapp_footer_banner?.external
                ? "_blank"
                : "_self"
            }
          >
            {buttonConfig?.dapp_footer_banner?.title}
          </Link>
          {/* <button className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
          Earth GPT
        </button> */}
        </div>
      )}
    </div>
  );
}
