import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import ImageView from "../../Components/ImageView";
import { LuArrowUpRight } from "react-icons/lu";
import "./slider.css";
import Link from "next/link";
import { colors } from ".";

const left = "/assets/icons/arrow-left.svg";
const right = "/assets/icons/arrow-right.svg";

export default function PostSlider({ post }) {

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full">
        <Swiper
          centeredSlides={false}
          grid={{
            rows: 2,
            fill: 'row', // Ensures proper filling of rows
          }}
          slidesPerView={1} // Default for mobile
          slidesPerGroup={1} // Default for mobile
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              grid: {
                rows: 2,
              },
            },
            1024: {
              slidesPerView: 3,
              // slidesPerGroup: 3,
              grid: {
                rows: 2,
              },
            },
          }}
          loop={false}
          // spaceBetween={30}

          navigation={{
            nextEl: "#button-next-post",
            prevEl: "#button-prev-post",
          }}
          // pagination={{
          //   el: "#swiper-pagination-post",
          //   clickable: true,
          //   renderBullet: function (index, className) {
          //     return (
          //       '<span class="' + className + '">' + (index + 1) + "</span>"
          //     );
          //   },
          // }}
          modules={[Pagination, Navigation, Grid]}
          className="post_swiper_container"
        >
          {post.map((card, index) => (
            <SwiperSlide key={index}>
              <SliderCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative z-20 flex items-center justify-center h-20 gap-4 px-4 slider-controller">
        <button
          className="cursor-pointer z-[20] flex gap-2 items-center text-[#475467] font-inter font-semibold text-[12px] swiper-button-prev"
          id="button-prev-post"
        >
          <ImageView
            src={left}
            alt="left"
            width={50}
            height={50}
            className="w-6 h-6"
          />
          Previous
        </button>
        <div
          className="z-10 gap-1 swiper-pagination" // Adjusted z-index
          id="swiper-pagination-post"
        ></div>
        <button
          className="cursor-pointer z-[20] flex gap-2 items-center swiper-button-next text-[#475467] font-inter font-semibold text-[12px]"
          id="button-next-post"
        >
          Next
          <ImageView
            src={right}
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
    <Link
    href={card?.link || ''}
      target="_blank"
      className={`flex flex-col items-center w-full gap-6 pr-[25px]`} // Changed width to full for responsiveness
    >
      <ImageView
        src={card.img}
        alt={card.name}
        width={200}
        height={200}
        className="w-full object-cover h-[200px]"
      />
      <div className="flex flex-col w-full gap-2">
        <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
          {card?.name}
        </p>
        <div className="flex items-center justify-between">
          <p className={`text-[#101828]  font-syne  text-md  sm:text-[22px]   font-semibold`}>
            {card?.title}
          </p>
          {/* <LuArrowUpRight size={22} color="#101828" /> */}
        </div>
        <p className="text-[#475467] overflow-hidden text-ellipsis line-clamp-2  font-inter w-full font-normal text-[14px]"> {/* Changed width to full */}
          {card?.description}
        </p>
        <div className="flex flex-wrap items-center gap-2"> {/* Added flex-wrap for tags */}
          {card?.tags.map((tag, i) => (
            <p
              className={`rounded-full flex py-[2px] px-2 font-inter text-[12px] font-medium ${colors[i]}`}
              key={i}
            >
              {tag?.tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}