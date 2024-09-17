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
      className={`flex flex-col w-full  mb-16 p-8 items-center  justify-center ${img
        ? "bg-[url('/assets/images/Curious.png')] bg-cover bg-no-repeat rounded-b-2xl"
        : "bg-[#F9FAFB] rounded-md"
        } `}
    >
      <p
        className={` ${img ? "text-white" : "text-[#101828]"
          } font-syne text-center font-semibold text-[20px] sm:text-[26px]`}
      >
        {title}
      </p>
      <p
        className={` ${img ? "text-white" : "text-[#475467]"
          } font-inter mt-2 text-center font-normal text-[16px]`}
      >
        {description}
      </p>
      <div className="flex mt-6 gap-1">
        <button className='w-[100px] mt-4 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm'>
          <Link
            href={buttonConfig?.home_footer_banner?.link || ""}
            target={buttonConfig?.home_footer_banner?.external ? "_blank" : "_self"}
          >
            {buttonConfig?.home_footer_banner?.title}
          </Link>
        </button>
        {/* {socialIcons.map((icons, index) => (
          <button className="cursor-pointer w-8 h-8" key={index}>
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
