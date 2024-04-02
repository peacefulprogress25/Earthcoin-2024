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
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Become a Solarpuk
          </p>
          <p className="text-[#475467] text-center font-normal w-[70%]  text-[16px] font-inter">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
          </p>
          <p className="text-[#475467] text-center mt-2 font-normal w-[70%] text-[16px] font-inter">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-6 gap-1 sm:gap-5">
          {socialIcons.map((icons, index) => (
            <button className="cursor-pointer w-10 h-10" key={index}>
              <ImageView
                alt={icons.icon}
                src={icons.icon}
                width={50}
                height={50}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
