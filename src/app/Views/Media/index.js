import ImageView from "../../Components/ImageView";
import { LuArrowUpRight } from "react-icons/lu";
import PostSlider from "./PostSlider";

export default function Media() {
  const cardData = [
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
  const category = [
    {
      section: "All",
    },
    {
      section: "Articles",
    },
    {
      section: "Videos",
    },
    {
      section: "Podcasts",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Media
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            $EARTH News
          </p>
          <p className="text-[#475467] text-center font-normal w-[80%] text-[18px] font-inter">
            Catch the latest news about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="grid grid-flow-col  grid-rows-3 mt-8 sm:grid-rows-2 gap-6">
          {cardData.map((card, index) => (
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
        <p className="text-[#101828] mt-8 font-syne text-center font-semibold text-[22px]">
          All Posts
        </p>
        <div className="w-full  cursor-pointer gap-4 sm:gap-12 border-y border-[#F2F4F7] flex px-2 items-center justify-center h-16">
          {category.map((option, index) => (
            <p
              key={index}
              className={`font-inter text-[14px] sm:text-[14px] px-1 sm:px-4 font-semibold text-[#475467] ${
                index === 0 ? " text-[#EC8000]" : ""
              }`}
            >
              {option.section}
            </p>
          ))}
        </div>
        <PostSlider />
        <div className="flex  flex-col w-full p-8 items-center rounded-md justify-center">
          <p className="text-[#101828] font-syne text-center font-semibold text-[20px] sm:text-[26px]">
            Let’s get started on something great
          </p>
          <p className="text-[#475467] font-inter mt-2 text-center font-normal text-[16px]">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <button className="w-[100px] mt-6  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
