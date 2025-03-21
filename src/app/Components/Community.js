import ImageView from "./ImageView";
import buttonConfig from "../utils/button";
import Link from "next/link";
function Community({ title, description, img }) {
  const socialIcons = [
    {
      icon: img
        ? "/assets/icons/twitter-white.svg"
        : "/assets/icons/twitter.svg",
    },
    {
      icon: img
        ? "/assets/icons/linkedin-white.svg"
        : "/assets/icons/linkedin.svg",
    },
    {
      icon: img
        ? "/assets/icons/facebook-white.svg"
        : "/assets/icons/facebook.svg",
    },
    {
      icon: img ? "/assets/icons/github-white.svg" : "/assets/icons/github.svg",
    },
  ];
  return (
    <div
      className={`flex flex-col w-full   max-[480px]:mb-8 p-8 items-center  justify-center ${img
        ? "bg-[url('/assets/images/Curious.png')] bg-cover bg-no-repeat min-[480px]:rounded-b-2xl  rounded-2xl "
        : "bg-[#F9FAFB] rounded-md max-[480px]:rounded-2xl "
        } `}
    >
      {title ? <p
        className={` ${img ? "text-white" : "text-[#101828]"
          } font-syne text-center font-semibold text-[20px] sm:text-[26px] max-[480px]:text-[16px]`}
      >
        {title}
      </p> : ""}
      {description ? <p
        className={` ${img ? "text-white" : "text-[#475467]"
          } font-inter mt-2 text-center font-normal text-[16px]  max-[480px]:text-[12px]`}
      >
        {description}
      </p> : ''}
      <div className="flex gap-1 ">
        <button className="w-[100px] mt-4 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm">
          <Link
            href={buttonConfig?.dapp_footer_banner?.link || ""}
            target={
              buttonConfig?.dapp_footer_banner?.external ? "_blank" : "_self"
            }
          >
            {buttonConfig?.dapp_footer_banner?.title}
          </Link>
        </button>
        {/* {socialIcons.map((icons, index) => (
          <button className="w-8 h-8 cursor-pointer" key={index}>
            <ImageView
              alt={icons.icon}
              src={icons.icon}
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
        ))} */}
      </div>
    </div>
  );
}

export default Community;
