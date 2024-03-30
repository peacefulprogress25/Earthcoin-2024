import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import ImageView from "../../Components/ImageView";
import { LuArrowUpRight } from "react-icons/lu";
import "./slider.css";

const click = "/assets/icons/circle.svg";

export default function PostSlider() {
  const cardData = [
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    {
      name: "Olivia Rhye • 20 Jan 2022",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      img: "/assets/images/baker.png",
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
    <div className="overflow-hidden h-fit w-full ">
      <div className="flex  w-full">
        <Swiper
          centeredSlides={false}
          grid={{
            rows: 2,
          }}
          slidesPerView="auto"
          slidesPerGroup={3}
          loop={false}
          spaceBetween={25}
          navigation={{
            nextEl: "#button-next-post",
            prevEl: "#button-prev-post",
          }}
          pagination={{
            el: "#swiper-pagination-post",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          modules={[Pagination, Navigation, Grid]}
          className="post_swiper_container"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <SliderCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-controller px-4 h-20 z-20 relative flex justify-center items-center gap-4">
        <button
          className="cursor-pointer z-10 flex gap-2 items-center text-[#475467] font-inter font-semibold text-[12px] swiper-button-prev"
          id="button-prev-post"
        >
          <ImageView
            src={click}
            alt="left"
            width={50}
            height={50}
            className="w-6 h-6"
          />
          Previous
        </button>
        <div
          className="swiper-pagination  gap-1"
          id="swiper-pagination-post"
        ></div>
        <button
          className="cursor-pointer z-10 flex gap-2 items-center swiper-button-next text-[#475467] font-inter font-semibold text-[12px]"
          id="button-next-post"
        >
          Next
          <ImageView
            src={click}
            alt="right"
            width={50}
            height={50}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}

export function SliderCard({ card }) {
  return (
    <div className={`flex flex-col w-[24rem] gap-6`}>
      <ImageView
        src={card.img}
        alt={card.name}
        width={200}
        height={200}
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
          {card?.name}
        </p>
        <div className="flex justify-between items-center">
          <p className={`text-[#101828]  font-syne text-[22px] font-semibold`}>
            {card?.title}
          </p>
          <LuArrowUpRight size={22} color="#101828" />
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
  );
}
