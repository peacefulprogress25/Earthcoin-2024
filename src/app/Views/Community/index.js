import ImageView from "../../Components/ImageView";

const community = "/assets/images/community.png";
export default function Community() {
  const communityList = [
    {
      title: "1. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "PFP Form",
    },
    {
      title: "2. Participate in our community",
      description:
        "Engage in our community by joining our Telegram group, supporting us on Twitter, and following our social media channels.",
    },
    {
      title: "3. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Book a slot",
    },
    {
      title: "4. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Get KYC verified",
    },
    {
      title: "5. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Go to DAPP",
    },
  ];
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
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Community
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Become an $Earth Node
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            From purging petro dollars to forming partnerships to policy making,
            these NODES keep <br /> the $EARTH network running
          </p>
        </div>
        <ImageView
          src={community}
          alt="purpose"
          width={400}
          height={300}
          className="w-full h-[18rem]  mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 mt-10 mb-16 flex flex-col gap-16 w-full items-start">
          {communityList?.map((community, index) => (
            <div key={index} className=" flex flex-col items-start">
              <p className="text-[#101828] font-semibold text-left text-[20px] sm:text-[28px] font-syne">
                {community?.title}
              </p>
              <p className="text-[#475467] text-left mt-2 font-normal  text-[16px] font-inter">
                {community?.description}
              </p>
              {community?.btntext ? (
                <button className="w-fit min-w-[100px] mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm">
                  {community?.btntext}
                </button>
              ) : (
                <div className="flex mt-6 gap-1 sm:gap-3">
                  {socialIcons.map((icons, index) => (
                    <button className="cursor-pointer w-10 h-10" key={index}>
                      <ImageView
                        alt="icon"
                        src={icons.icon}
                        width={35}
                        height={35}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
