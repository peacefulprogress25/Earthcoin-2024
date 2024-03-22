import ImageView from "../ImageView";

const logo = "/assets/images/logo.png";

export default function Footer() {
  const Products = [
    {
      product: "Overview",
    },
    {
      product: "Features",
    },
    {
      product: "Solutions",
      new: true,
    },
    {
      product: "Tutorials",
    },
    {
      product: "Pricing",
    },
    {
      product: "Releases",
    },
  ];
  const Company = [
    {
      option: "About us",
    },
    {
      option: "Careers",
    },
    {
      option: "Press",
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
  ];
  const Resources = [
    {
      option: "Blog",
    },
    {
      option: "Newsletter",
    },
    {
      option: "Events",
    },
    {
      option: "Help centre",
    },
    {
      option: "Tutorials",
    },
    {
      option: "Support",
    },
  ];
  const Social = [
    {
      option: "Twitter",
    },
    {
      option: "LinkedIn",
    },
    {
      option: "Facebook",
    },
    {
      option: "GitHub",
    },
    {
      option: "AngelList",
    },
    {
      option: "Dribbble",
    },
  ];
  const Legal = [
    {
      option: "Terms",
    },
    {
      option: "Privacy",
    },
    {
      option: "Cookies",
    },
    {
      option: "Licenses",
    },
    {
      option: "Settings",
    },
    {
      option: "Contact",
    },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
    },
    {
      icon: "/assets/icons/linkedin.svg",
    },
    {
      icon: "/assets/icons/facebook.svg",
    },
    {
      icon: "/assets/icons/github.svg",
    },
    {
      icon: "/assets/icons/hand.svg",
    },
    {
      icon: "/assets/icons/football.svg",
    },
  ];
  return (
    <footer className="h-[60vh] flex flex-col justify-end w-full">
      <div className="flex my-6 items-start w-full max-w-[1440px] mx-auto  gap-2 px-[8%] justify-between">
        <div className="flex items-start flex-col">
          <ImageView
            alt="logo"
            src={logo}
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="text-[#475467] mt-6 font-normal font-inter text-sm">
            Building the solarpunk future <br />
            for a healthy world.
          </p>
        </div>
        <div className="flex items-start ml-10 gap-3 flex-col">
          <p className="text-[#667085] font-inter font-semibold text-[14px]">
            Product
          </p>
          {Products.map((product, index) => (
            <p
              className="text-[#475467] font-inter font-semibold text-[16px]"
              key={index}
            >
              {product.product}{" "}
              {product?.new ? (
                <span className="bg-[#ECFDF3] font-inter text-[#027A48] font-medium text-[12px] rounded-lg px-1">
                  New
                </span>
              ) : null}
            </p>
          ))}
        </div>
        <div className="flex items-start gap-3 flex-col">
          <p className="text-[#667085] font-inter font-semibold text-[14px]">
            Company
          </p>
          {Company.map((option, index) => (
            <p
              className="text-[#475467] font-inter font-semibold text-[16px]"
              key={index}
            >
              {option.option}{" "}
            </p>
          ))}
        </div>

        <div className="flex items-start gap-3 flex-col">
          <p className="text-[#667085] font-semibold font-inter text-[14px]">
            Resources
          </p>
          {Resources.map((option, index) => (
            <p
              className="text-[#475467] font-semibold font-inter text-[16px]"
              key={index}
            >
              {option.option}{" "}
            </p>
          ))}
        </div>
        <div className="flex items-start gap-3 flex-col">
          <p className="text-[#667085] font-semibold font-inter text-[14px]">
            Social
          </p>
          {Social.map((option, index) => (
            <p
              className="text-[#475467] font-semibold font-inter text-[16px]"
              key={index}
            >
              {option.option}{" "}
            </p>
          ))}
        </div>
        <div className="flex items-start  gap-3 flex-col">
          <p className="text-[#667085] font-inter  font-semibold text-[14px]">
            Legal
          </p>
          {Legal.map((option, index) => (
            <p
              className="text-[#475467] font-inter font-semibold text-[16px]"
              key={index}
            >
              {option.option}{" "}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-[#F9FAFB] w-full flex items-center h-20">
        <div className="px-[8%] justify-between max-w-[1440px]  h-full mx-auto flex w-full items-center">
          <p className="text-[#667085] font-normal font-inter text-[16px]">
            © 2023 SOLARPUNKDAO. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
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
    </footer>
  );
}
