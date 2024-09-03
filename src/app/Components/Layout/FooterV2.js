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
    <div className='h-fit  hidden sm:flex flex-col border-t border-[#EAECF0] items-center justify-end w-full'>
      <div className='flex w-full gap-2 my-6'>
        <div className='flex w-full py-4 sm:py-8 px-2 sm:px-[6%]  items-center justify-center flex-col'>
          <ImageView
            alt='logo'
            src={logo}
            width={100}
            height={100}
            className='object-contain'
          />
          <div className='flex flex-col items-center justify-between w-full gap-2 mt-3 sm:flex-row sm:mt-6 sm:justify-center sm:gap-4'>
            {FooterLinks.map((option, index) => (
              <p
                className='text-[#667085] cursor-pointer font-inter font-semibold text-[14px]'
                key={index}
              >
                {option.option}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='border-t border-[#EAECF0] w-full flex items-center h-20'>
        <div className='px-4 py-2 mt-3 sm:px-[8%] justify-between  gap-2  mx-auto flex w-full items-center'>
          <div className='flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
            <input
              type='email'
              placeholder='Enter your email'
              className='border-2 border-[#EAECF0] h-8 outline-none rounded-md p-2 sm:p-3'
            />
            <button className='w-[80px] sm:w-[100px] font-inter flex text-white items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm'>
              Subscribe
            </button>
          </div>
          <p className='text-[#667085] font-normal font-inter text-[11px] sm:text-[14px]'>
            © {new Date().getFullYear()} SOLARPUNKDAO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
