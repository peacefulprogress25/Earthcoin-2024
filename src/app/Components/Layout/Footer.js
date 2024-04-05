import ImageView from "../ImageView";
import Link from "next/link";

const logo = "/assets/images/logo.png";

export default function Footer() {
  const Footerdata = [
    {
      title: "$Earth",
      options: [
        {
          option: "DAPP",
        },
        {
          option: "Projects",
        },
        {
          option: "Tokenomics",
        },
        {
          option: "$EARTH Updates",
        },
        {
          option: "$EARTH Summary",
        },
        {
          option: "$EARTH Contracts",
        },
      ],
    },
    {
      title: "Company",
      options: [
        {
          option: "Thesis",
        },
        {
          option: "Purpose",
        },
        {
          option: "Team",
        },
        {
          option: "News",
        },
        {
          option: "Media kit",
        },
        {
          option: "Contact",
        },
      ],
    },
    {
      title: "Resources",
      options: [
        {
          option: "What is $EARTH?",
        },
        {
          option: "How $EARTH works?",
        },
        {
          option: "How to get $EARTH?",
        },
        {
          option: "$EARTH Nodes",
        },
        {
          option: "Become a node",
        },
        {
          option: "FAQ",
        },
      ],
    },
    {
      title: "Social",
      options: [
        {
          option: "Telegram",
        },
        {
          option: "X",
        },
        {
          option: "Linkedin",
        },
        {
          option: "Instagram",
        },
        {
          option: "Discord",
        },
        {
          option: "Lens",
        },
      ],
    },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/telegram-grey.svg",
    },
    {
      icon: "/assets/icons/twitter.svg",
    },
    {
      icon: "/assets/icons/linkedin.svg",
    },
    {
      icon: "/assets/icons/instagram-grey.svg",
    },
    {
      icon: "/assets/icons/discord-grey.svg",
    },
    {
      icon: "/assets/icons/cloud-grey.svg",
    },
  ];
  return (
    <div className="h-fit flex flex-col justify-end w-full">
      <div className="flex-col flex sm:flex-row my-6 items-center sm:items-start w-full max-w-screen-2xl mx-auto  gap-10 px-[6%] justify-between">
        <div className="flex items-center w-full  sm:items-start sm:w-[50%] flex-col justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <ImageView
              alt="logo"
              src={logo}
              width={100}
              height={100}
              className="object-contain"
            />
            <p className="text-[#475467] mt-6 font-normal text-center sm:text-left font-inter text-sm">
              Embedding climate action,
              <br /> ecosystem services,
              <br /> solarpunk values into money
            </p>
            <div className="flex items-center mt-20">
              <Link
                href="/privacy-policy"
                className="text-[#475467] pr-2 border-r border-[#475467] font-normal text-center sm:text-left font-inter text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#475467] pl-2 font-normal text-center sm:text-left font-inter text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
        <div className="  items-center flex flex-col sm:ml-10 sm:flex-row sm:gap-2 gap-x-2 gap-y-4 w-full justify-center sm:justify-between">
          {Footerdata?.map((option, index) => (
            <div
              className="flex items-center  sm:items-start gap-3 flex-col"
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
                  {option.option}{" "}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F9FAFB] w-full flex items-center h-20">
        <div className="px-[6%] justify-between max-w-screen-2xl gap-4 h-full mx-auto flex w-full items-center">
          <p className="text-[#667085] font-normal font-inter text-[12px] sm:text-[14px]">
            © 2023 SOLARPUNKDAO. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            {socialIcons.map((icons, index) => (
              <button className="cursor-pointer" key={index}>
                <ImageView
                  alt={icons.icon}
                  src={icons.icon}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
