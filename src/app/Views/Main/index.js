import ImageView from "../../Components/ImageView";
import { LuArrowUpRight } from "react-icons/lu";
import SeekingFund from "../../Components/SeekingFund";

const main = "/assets/images/main.png";
const groot = "/assets/images/groot.png";
const zap = "/assets/icons/zap.svg";
const check = "/assets/icons/Check_icon.svg";

export default function Main() {
  const funding = [
    {
      balance: "$17k+",
      impact: "Treasury",
    },
    {
      balance: "93",
      impact: "Holders",
    },
    {
      balance: "5",
      impact: "Projects Funded",
    },
    {
      balance: "25%",
      impact: "APY",
    },
  ];
  const services = [
    {
      title: "Asset Backed",
      description:
        "Each $EARTH is backed by a variety of on ground projects that are directly addressing the climate / environmental crisis while catering to humanities core needs",
      img: "/assets/images/asset.png",
    },
    {
      title: "Asset Backed",
      description:
        "Each $EARTH is backed by a variety of on ground projects that are directly addressing the climate / environmental crisis while catering to humanities core needs",
      img: "/assets/images/community-governed.png",
    },
    {
      title: "Asset Backed",
      description:
        "Each $EARTH is backed by a variety of on ground projects that are directly addressing the climate / environmental crisis while catering to humanities core needs",
      img: "/assets/images/range.png",
    },
    {
      title: "Asset Backed",
      description:
        "Each $EARTH is backed by a variety of on ground projects that are directly addressing the climate / environmental crisis while catering to humanities core needs",
      img: "/assets/images/pool.png",
    },
  ];
  const cardData = [
    {
      title: "What is $EARTH?",
      description: "Learn $EARTH mechanics",
      img: "/assets/images/card-bg.png",
    },
    {
      title: "How $EARTH works",
      description: "Read about the tokenomics of $EARTH",
      img: "/assets/images/card-bg-2.png",
    },
    {
      title: "Buy $EARTH",
      description: "Trade on Uniswap",
      img: "/assets/images/card-bg-3.png",
    },
    {
      title: "Become a node.",
      description: "Obtain rights to mint $Earth",
      img: "/assets/images/card-bg-4.png",
    },
  ];
  const earthData = [
    {
      title: "Democratic funding protocol",
      description:
        "Curated list of high Impact climate solutions seeking funds from $EARTH treasury",
      features: [
        "Directly solving climate/environmental crisis",
        "Catering to our core needs",
        "Yield generating",
        "Building the solarpunk future",
      ],
      link: "Go to DAPP",
      img: "/assets/images/earth-protocol.png",
      coverPic: "/assets/images/coverpic.png",
      icon: "/assets/images/Avatar.png",
      subText: "Helios",
      projectName: "Kekén Solar Project, 69kWp",
      projectValue: "$70,000",
      subtitle: "High Impact solar installation in Sahé, México.",
      category: "CLEAN ENERGY",
      country: "Mexico",
      Irr: "8",
      context: "Helios ",
      returnValue: "8%",
      status: "To Be Commisioned",
      dateApproved: "1/1/2024",
      fundingNeeded: "$10,000",
    },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/notion.svg",
    },
    {
      icon: "/assets/icons/slack.svg",
    },
    {
      icon: "/assets/icons/google_drive.svg",
    },

    {
      icon: "/assets/icons/intercom.svg",
    },
    {
      icon: "/assets/icons/jira.svg",
    },
    {
      icon: "/assets/icons/dropbox.svg",
    },
    {
      icon: "/assets/icons/stripe.svg",
    },
    {
      icon: "/assets/icons/zapier.svg",
    },
    {
      icon: "/assets/icons/figma.svg",
    },
    {
      icon: "/assets/icons/confluence.svg",
    },
    {
      icon: "/assets/icons/mailchimp.svg",
    },
    {
      icon: "/assets/icons/zendesk.svg",
    },
    {
      icon: "/assets/icons/g-calendar.svg",
    },
    {
      icon: "/assets/icons/whatsapp.svg",
    },
    {
      icon: "/assets/icons/discord.svg",
    },
    {
      icon: "/assets/icons/bitbucket.svg",
    },
  ];
  const updates = [
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/refi.png",
      link: true,
      tags: ["Design", "Research", "Presentation"],
    },
    {
      name: "Phoenix Baker • 19 Jan 2022",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
      img: "/assets/images/baker.png",
      tags: ["Design", "Research"],
    },
    {
      name: "Lana Steiner • 18 Jan 2022",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      img: "/assets/images/steiner.png",
      tags: ["Design", "Research"],
    },
  ];
  return (
    <div className="mt-20">
      {" "}
      <ImageView
        src={main}
        alt="main"
        width={600}
        height={600}
        className="w-full object-cover"
      />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-[6%] mt-16 h-fit flex flex-col gap-12 items-center justify-center w-full">
        <div className="flex sm:px-[20%] items-center px-4 flex-col w-full gap-3">
          <ImageView src={zap} alt="zap" width={40} height={40} />
          <p className="text-[#101828] font-semibold text-center text-[24px] sm:text-[34px] leading-[42px] font-syne">
            Embedding climate action, ecosystem services, solarpunk values into
            money
          </p>
          <p className="text-[#475467] text-center font-normal w-[70%]  text-[16px] font-inter">
            Everything you need to convert, engage, and retain the solarpunk
            future.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center w-full">
          {funding.map((impact, index) => (
            <div
              className={`flex flex-col px-2 py-4 sm:py-0 items-center  justify-center w-[16rem] ${
                index !== funding.length - 1
                  ? " border-b-2 sm:border-b-0 sm:border-r-2 border-[#EAECF0]"
                  : ""
              }`}
              key={index}
            >
              <p className="font-syne font-semibold text-[20px] text-center sm:text-[52px] text-[#EC8000]">
                {impact.balance}
              </p>
              <p className="text-[#101828] text-center text-[16px]  font-medium font-inter">
                {impact.impact}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {services?.map((service, index) => (
            <div
              className="flex flex-col gap-4 sm:flex-row p-10 items-center sm:items-start justify-between border border-[#FCCA6B] rounded-lg"
              key={index}
            >
              <div className="flex flex-col w-full sm:w-[60%] justify-center items-center sm:items-start ">
                <p className="font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-[#EC8000]">
                  {service?.title}
                </p>
                <p className="text-[#475467]  text-center sm:text-left text-[16px]  font-normal font-inter">
                  {service?.description}
                </p>
              </div>
              <ImageView
                src={service?.img}
                alt="service"
                width={600}
                height={300}
                className={` ${
                  index === 0
                    ? "w-[24rem] h-[10rem]"
                    : "w-48 h-44 object-contain "
                }`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-8">
          {cardData?.map((data, index) => (
            <div className="relative" key={index}>
              <ImageView
                src={data?.img}
                alt="main"
                width={600}
                height={600}
                className="w-full rounded-[20px] h-[10rem] object-cover"
              />
              <div className="flex flex-col w-full absolute p-[2rem] pb-[4rem] sm:p-[3rem] top-[0rem]">
                <div className="flex justify-between items-center">
                  <p
                    className={`text-white  font-syne font-semibold text-[22px]`}
                  >
                    {data?.title}
                  </p>
                  <LuArrowUpRight size={22} color="#fff" />
                </div>
                <p className="text-white font-inter mt-2  font-normal text-[14px]">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Projects
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Projects backing $Earth
          </p>
          <p className="text-[#475467] text-center font-normal w-[60%]  text-[16px] font-inter">
            Powerful, verified projects curated by SOLARPUNKDAO open for funding
            by the $Earth treasury
          </p>
        </div>
      </div>
      {earthData?.map((data, index) => (
        <div
          className={`flex flex-col gap-4 my-12 sm:flex-row justify-between`}
          key={index}
        >
          <div className="flex justify-center w-full sm:w-[50%] px-[6%] flex-col gap-2">
            <p className="text-[#101828] font-semibold text-left text-[20px] sm:text-[28px] font-syne">
              {data?.title}
            </p>
            <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
              {data?.description}
            </p>
            <div className="flex pl-4 flex-col my-4 gap-4">
              {data?.features?.map((feature, i) => (
                <div className="flex gap-2" key={i}>
                  <ImageView src={check} alt="check" width={20} height={20} />
                  <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-l-lg border-4 border-r-0 max-w-[44rem] cursor-pointer w-full h-fit flex flex-col border-[#101828]"
            key={index}
          >
            <div className="justify-center items-center flex flex-col px-3 sm:px-6">
              <div className="flex w-full justify-center pt-3 sm:pt-6 gap-2 items-center">
                <ImageView
                  src={data.icon}
                  alt="avatar"
                  width={50}
                  height={50}
                />
                <p className="text-black font-inter font-semibold text-[16px]">
                  {data.subText}
                </p>
              </div>
              <p className="pt-1 sm:pt-2 font-syne text-center font-semibold text-[20px] sm:text-[24px] text-black">
                {data.projectName}
              </p>
              <p className="pt-1 sm:pt-2 font-inter font-semibold text-[12px] text-[#EC8000]">
                {data.category}
              </p>
              <p className="py-1 sm:py-2 font-inter text-center font-normal text-[13px] text-black">
                {data.subtitle}
              </p>
            </div>
            <div className="flex border-t-2 mt-4 w-full border-[#EAECF0]">
              <div className="flex items-center px-1 grow pt-2 pb-4 border-r-2 border-[#EAECF0] justify-center flex-col">
                <p className="font-syne font-semibold text-center text-[18px] sm:text-[30px] text-[#EC8000]">
                  {data.projectValue}
                </p>
                <p className="font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]">
                  Total project value
                </p>
              </div>
              <div className="flex items-center  px-1 py-2 pb-3 grow border-r-2 border-[#EAECF0] justify-center flex-col">
                <p className="font-syne font-semibold text-[18px] text-center sm:text-[30px] text-[#EC8000]">
                  {data.fundingNeeded}
                </p>
                <p className="font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]">
                  Funding needed
                </p>
              </div>
              <div className="flex items-center py-2 pb-3 px-1  grow justify-center flex-col">
                <p className="font-syne font-semibold text-[18px] text-center sm:text-[30px] text-[#EC8000]">
                  {data.returnValue}
                </p>
                <p className="font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]">
                  Internal rate of return
                </p>
              </div>
            </div>
            <ImageView
              src={data.coverPic}
              alt="coverpic"
              width={350}
              height={450}
              className="w-full object-cover rounded-b-sm"
            />
          </div>
        </div>
      ))}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-[6%]  h-fit flex flex-col gap-12 items-center justify-center w-full">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Partners
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Get more value from your tokens
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            With over 20 partners already available in our directory, your
            favourite tools are just a click away.
          </p>
        </div>
        <div className="flex flex-wrap  sm:px-[32%] justify-center mt-6 gap-1 sm:gap-5">
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
        <button className="w-fit  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm">
          View consortium
        </button>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            News
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Latest updates
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Stay updated with the latest progress on $Earth
          </p>
        </div>
        <div className="grid grid-flow-col  grid-rows-3 mt-8 sm:grid-rows-2 gap-6">
          {updates.map((card, index) => (
            <div
              className={`flex flex-col sm:flex-row gap-6 ${
                index === 0 ? "sm:row-span-2 row-span-1 !flex-col" : ""
              }`}
              key={index}
            >
              <ImageView
                src={card.img}
                alt={card.name}
                width={200}
                height={200}
                className={`${
                  index === 0
                    ? "w-full h-[13rem]"
                    : "w-full sm:w-[50%] object-contain"
                } object-cover`}
              />
              <div className="flex flex-col gap-2">
                <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                  {card?.name}
                </p>
                <div className="flex justify-between items-center">
                  <p
                    className={`text-[#101828]  font-inter font-semibold text-[16px]  ${
                      index === 0 ? "font-syne text-[22px]" : ""
                    }`}
                  >
                    {card?.title}
                  </p>
                  {card?.link && <LuArrowUpRight size={22} color="#101828" />}
                </div>
                <p className="text-[#475467] font-inter w-[90%] font-normal text-[14px]">
                  {card?.description}
                </p>
                <div className="flex items-center gap-2">
                  {card?.tags.map((tag, i) => (
                    <p
                      className={`rounded-full flex py-[2px] px-2 font-inter text-[12px] font-medium ${
                        tag === "Design"
                          ? "text-[#EC8000] bg-[#FFFCF8]"
                          : tag === "Research"
                          ? "bg-[#EEF4FF] text-[#3538CD]"
                          : tag === "Presentation"
                          ? "bg-[#FDF2FA] text-[#C11574]"
                          : ""
                      }`}
                      key={i}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-0 sm:mt-28 w-full">
          <ImageView
            src={groot}
            alt="groot"
            width={600}
            height={500}
            className="w-full h-[18rem] sm:h-fit rounded-lg object-cover"
          />
          <div className="flex flex-col w-full justify-end items-center p-4 absolute bottom-[1.5rem]">
            <p className="text-white font-inter text-center mt-3 font-medium text-[18px]">
              Still have questions?
            </p>
            <p className="text-white font-inter text-center mt-1 font-light text-[16px]">
              Can’t find the answer you’re looking for? Please drop a message to
              our team.
            </p>
            <button className="w-[100px] mt-4 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 cursor-pointer text-sm">
              $Earth GPT
            </button>
          </div>
        </div>
        <SeekingFund />
      </div>
    </div>
  );
}