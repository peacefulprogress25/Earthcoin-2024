import ImageView from "./ImageView";
import buttonConfig from "../utils/button";
import { Link } from "@mui/material";

const group = "/assets/images/Avatar_group.svg";
export default function GetInTouch() {
  return (
    <div className="w-full flex bg-[#F9FAFB] items-center p-4 rounded-md justify-center flex-col">
      <ImageView
        src={group}
        alt="group"
        width={100}
        height={100}
        className="object-cover"
      />
      <p className="text-[#101828] font-inter text-center mt-3 font-medium text-[18px]">
        Still have questions?
      </p>
      <p className="text-[#475467] font-inter text-center mt-1 font-light text-[16px]">
        Can’t find the answer you’re looking for? Please drop a message to our
        team.
      </p>
      <Link
        className="w-[100px] mt-4 !text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm !no-underline" 
        href={buttonConfig?.faq_footer_banner?.link || ""}
        target={buttonConfig?.faq_footer_banner?.external ? "_blank" : "_self"}
      >
        {buttonConfig?.faq_footer_banner?.title}
      </Link>
      {/* <button className="w-[100px] mt-4 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm">
        Get in touch
      </button> */}
    </div>
  );
}
