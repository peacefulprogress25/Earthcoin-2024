import ImageView from "../../Components/ImageView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./project.css";
import Link from "next/link";

const media = "/assets/images/media.png";
const leftArrow = "/assets/icons/left_arrow.svg";
const rightArrow = "/assets/icons/right_arrow.svg";
export default function PeopleSlider({ details }) {


  if (details?.teams && details?.teams?.length) {
    return (
      <div className="relative flex flex-col w-full gap-2 overflow-hidden h-fit people">
        <div className="flex w-full">
          <Swiper
            centeredSlides={false}
            slidesPerView="auto"
            slidesPerGroup={2}
            loop={false}
            spaceBetween={20}
            navigation={{
              nextEl: "#button-next-collection",
              prevEl: "#button-prev-collection",
            }}
            modules={[Navigation]}
          >
            {details?.teams.filter(people => people?.image).map((people, index) => (
              <SwiperSlide key={index} className="w-full">
                <PeopleCard people={people} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative flex items-center justify-center h-20 gap-4 slider-controller">
          <button
            className="cursor-pointer swiper-button-prev"
            id="button-prev-collection"
          >
            <ImageView
              src={leftArrow}
              alt="left"
              width={50}
              height={50}
              className="w-10 h-10"
            />
          </button>
          <button
            className="cursor-pointer swiper-button-next"
            id="button-next-collection"
          >
            <ImageView
              src={rightArrow}
              alt="right"
              width={50}
              height={50}
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
    );
  }
  return null
}

export function PeopleCard({ people }) {
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
      link: people?.twitter,
    },

    {
      icon: "/assets/icons/linkedin.svg",
      link: people?.linkedin,
    },
    {
      icon: "/assets/icons/football.svg",
      link: people?.twitter,
    },
  ];
  return (
    <div className="flex flex-col gap-2 max-w-[14rem] w-full">
      <ImageView
        src={people?.image}
        width={400}
        height={400}
        className="w-full h-[12rem] object-contain"
      />
      <p className="font-Inter text-[#101828] font-semibold text-[16px]">
        {people?.name}
      </p>
      <p className="font-Inter text-[#EC8000] font-normal text-[14px]">
        {people?.position}
      </p>
      <p className="font-Inter text-[#475467] font-normal text-[13px]">
        {people?.description}
      </p>
      <div className="flex gap-3">
        {socialIcons.map((icons, index) => (
          <Link href={icons?.link || ''} key={index}>
            <ImageView
              src={icons?.icon}
              width={400}
              height={400}
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
