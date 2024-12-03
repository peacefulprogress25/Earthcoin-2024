import ImageView from "../ImageView";
import Link from "next/link";
import buttonConfig from "../../utils/button";
import { useMediaQuery } from "react-responsive";

const logo = "/assets/images/logo.png";

export default function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const Footerdata = [
    {
      title: "$Earth",
      options: [
        {
          option: "DAPP",
          link: "/dapp",
        },
        {
          option: "Projects",
          link: "/projects",
        },
        {
          option: "Tokenomics",
          link: "/tokenomics",
        },
        {
          option: "$EARTH Updates",
          link: "/updates",
        },
        // {
        //   option: "$EARTH Summary",
        //   link: "",
        // },
        {
          option: "$EARTH Contracts",
          link: "/contracts",
        },
      ],
    },
    {
      title: "Company",
      options: [
        {
          option: "Thesis",
          link: "/thesis",
        },
        {
          option: "Purpose",
          link: "/purpose",
        },
        {
          option: "Team",
          link: "/about",
        },
        {
          option: "Get Funded",
          link: "/form",
        },
      ],
    },
    {
      title: "Resources",
      options: [
        {
          option: "What is $EARTH?",
          link: "/resources",
        },
        {
          option: "How $EARTH works?",
          link: "/works",
        },
        {
          option: "How to get $EARTH?",
          link: "/earth",
        },
        {
          option: "$EARTH NODES",
          link: "/network",
        },
        {
          option: "Become a NODE",
          link: "/earthnode",
        },
        {
          option: "FAQ",
          link: "/faq",
        },
      ],
    },
    // {
    //   title: "Social",
    //   options: [
    //     {
    //       option: "Telegram",
    //     },
    //     {
    //       option: "X",
    //     },
    //     {
    //       option: "Linkedin",
    //     },
    //     {
    //       option: "Instagram",
    //     },
    //     {
    //       option: "Discord",
    //     },
    //     {
    //       option: "Lens",
    //     },
    //   ],
    // },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/telegram-grey.svg",
      buttonLink: buttonConfig.social_home_telegram.link,
      external: buttonConfig.social_home_telegram.external,
    },
    {
      icon: "/assets/icons/twitter.svg",
      buttonLink: buttonConfig.social_home_twitter.link,
      external: buttonConfig.social_home_twitter.external,
    },
    {
      icon: "/assets/icons/linkedin.svg",
      buttonLink: buttonConfig.social_home_linkedin.link,
      external: buttonConfig.social_home_linkedin.external,
    },
    {
      icon: "/assets/icons/instagram-grey.svg",
      buttonLink: buttonConfig.social_home_instagram.link,
      external: buttonConfig.social_home_instagram.external,
    },
    {
      icon: "/assets/icons/discord-grey.svg",
      buttonLink: buttonConfig.social_home_discord.link,
      external: buttonConfig.social_home_discord.external,
    },
    {
      icon: "/assets/icons/cloud-grey.svg",
      buttonLink: buttonConfig.social_home_lens.link,
      external: buttonConfig.social_home_lens.external,
    },
  ];
  return (
    <div className="flex flex-col justify-end w-full h-fit">
      <div className="flex-col flex lg:flex-row my-10 mt-16 items-center lg:items-start w-full max-w-screen-2xl mx-auto gap-10 px-[6%] 2xl:px-0 justify-between">
        <div className="flex items-center w-full lg:items-start lg:w-[50%] flex-col justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <ImageView
              alt="logo"
              src={logo}
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-[#475467] mt-6 font-normal text-center lg:text-left font-inter text-sm">
              Embedding climate action,
              <br /> ecosystem services,
              <br /> solarpunk values into money
            </p>
            <div className="flex items-center mt-20">
              <Link
                href="/privacy-policy"
                className="text-[#475467] pr-2 border-r border-[#475467] font-normal text-center lg:text-left font-inter text-sm"
              >
               Token Disclaimer
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#475467] pl-2 font-normal text-center lg:text-left font-inter text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        {!isMobile ? (
          <div className="grid w-full grid-cols-2 sm:flex sm:flex-row gap-y-12 sm:gap-2 sm:ml-10 sm:justify-between">
            {Footerdata?.map((option, index) => (
              <div
                className={`flex flex-col items-start gap-3 ${index === 2
                  ? "col-span-2 justify-self-start sm:justify-self-auto"
                  : ""
                  } ${index === 0 ? "pr-[4.5rem]" : index === 1 ? "pr-[4.5rem]" : ""
                  }`}
                key={index}
              >
                <p className="text-[#667085] font-inter font-semibold text-[13px]">
                  {option?.title}
                </p>
                {option?.options?.map((option, index) => (
                  <p
                    className="text-[#475467] font-inter font-semibold text-[14px]"
                    key={index}
                  >
                    <Link href={option.link}>{option.option} </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-2">
              {Footerdata?.map((option, index) => (
                <div
                  className={`flex flex-col  gap-3 items-center ${index === 2
                    ? " justify-self-start sm:justify-self-auto text-center "
                    : ""
                    } ${index === 0 ? "" : index === 1 ? "ml-3" : ""}`}
                  key={index}
                >
                  <p className="text-[#667085] font-inter font-semibold text-[13px] max-[480px]:text-[10px]">
                    {option?.title}
                  </p>
                  {option?.options?.map((option, index) => (
                    <p
                      className="text-[#475467] font-inter font-semibold text-[14px] max-[480px]:text-[8px]"
                      key={index}
                    >
                      <Link href={option.link}>{option.option} </Link>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="bg-[#F9FAFB] w-full flex items-center h-20">
        <div className="px-[6%] justify-between max-w-screen-2xl gap-4 h-full mx-auto flex w-full items-center">
          <p className="text-[#667085] font-normal font-inter text-[12px] max-[480px]:text-[10px] sm:text-[14px]">
            © {new Date().getFullYear()} SOLARPUNKDAO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icons, index) => (
              <Link
                className="cursor-pointer"
                key={index}
                href={icons?.buttonLink}
                target={icons?.external ? "_blank" : "_self"}
              >
                <ImageView
                  alt={icons.icon}
                  src={icons.icon}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>

              // <button className='cursor-pointer' key={index}>
              //   <ImageView
              //     alt={icons.icon}
              //     src={icons.icon}
              //     width={20}
              //     height={20}
              //     className='object-contain'
              //   />
              // </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
