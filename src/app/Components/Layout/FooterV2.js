import ImageView from "../ImageView";

const logo = "/assets/images/logo.png";

export default function FooterV2() {
  const FooterLinks = [
    {
      option: "Overview",
    },
    {
      option: "Features",
    },
    {
      option: "Pricing",
    },
    {
      option: "Careers",
    },
    {
      option: "Help",
    },
    {
      option: "Privacy",
    },
  ];
  return (
    <div className="h-[60vh] flex flex-col justify-end w-full">
      <div className="flex my-6 items-start border-t border-[#EAECF0] w-full gap-2">
        <div className="flex  w-full max-w-[1440px] mx-auto py-8 px-[8%]  items-center justify-center flex-col">
          <ImageView
            alt="logo"
            src={logo}
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="flex mt-6 items-center gap-4">
            {FooterLinks.map((option, index) => (
              <p
                className="text-[#667085] font-inter font-semibold text-[16px]"
                key={index}
              >
                {option.option}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#EAECF0] w-full flex items-center h-20">
        <div className="px-[8%] justify-between max-w-[1440px]  h-full mx-auto flex w-full items-center">
          <div className="flex gap-3 items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-[#EAECF0] h-8 outline-none rounded-md p-3"
            />
            <button className="w-[100px] font-inter flex text-white items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-[#667085] font-normal font-inter text-[14px]">
            © 2023 SOLARPUNKDAO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
