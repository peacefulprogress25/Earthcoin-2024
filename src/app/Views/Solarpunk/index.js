import ImageView from "../../Components/ImageView";

export default function Solarpunk() {
  const socialIcons = [
    {
      icon: "/assets/icons/telegramIcon.svg",
    },
    {
      icon: "/assets/icons/twitterIcon.svg",
    },
    {
      icon: "/assets/icons/discordIcon.svg",
    },
    {
      icon: "/assets/icons/gateIcon.svg",
    },
    {
      icon: "/assets/icons/cloudIcon.svg",
    },
    {
      icon: "/assets/icons/instagramIcon.svg",
    },
    {
      icon: "/assets/icons/linkedinIcon.svg",
    },
  ];
  return (
    <div>
      <div className="mt-44 w-full h-fit max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Community
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[44px] font-syne">
            Join us!
          </p>
          <p className="text-[#475467] text-center font-normal w-[70%]  text-[16px] font-inter">
            We are active on the following social media platforms. Follow us on
            whichever platform tickles your fancy and stay updated on all things
            $EARTH
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 gap-1 sm:gap-5">
          {socialIcons.map((icons, index) => (
            <button className="cursor-pointer w-16 h-16" key={index}>
              <ImageView
                alt={icons.icon}
                src={icons.icon}
                width={80}
                height={80}
                className=""
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
