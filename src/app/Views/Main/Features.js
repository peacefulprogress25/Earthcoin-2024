import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./features.css";
import 'swiper/css/navigation';

function Features() {
  const data = [
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Backed by <span className='text-[#EC8000]'> Climate Solutions</span>
        </p>
      ),
      description: (
        <span>
          Each $EARTH is backed by a variety of on ground projects that are
          directly addressing the <br /> climate / environmental crisis while
          catering to humanities core needs
        </span>
      ),
      img: "/assets/images/Climatesolutions.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          <span className='text-[#EC8000]'> Range</span> Bound
        </p>
      ),
      description: (
        <span>
          $EARTH is a new unit of value, not pegged to any currency. Designed to
          be loosely range bound,
          <br /> assets backing each token serve as the floor while valuing
          positive externalities created by those <br /> assets and the utility
          of the currency create a soft ceiling.
        </span>
      ),
      img: "/assets/images/Rangebound.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          <span className='text-[#EC8000]'> Community </span>Governed
        </p>
      ),
      description: (
        <span>
          Monetary policy of $EARTH will be governed by Nodes of <br /> $EARTH
          with goal of achieving our mission/vision{" "}
        </span>
      ),
      img: "/assets/images/Communitygoverned.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Protocol Owned <span className='text-[#EC8000]'> Liquidity</span>{" "}
        </p>
      ),
      description: (
        <span>
          Perpetual liquidity for you to swap your $EARTH for $DAI whenever{" "}
          <br /> you choose to irrespective of market conditions. This LP is
          owned by <br /> the treasury as a service to currency holders.
        </span>
      ),
      img: "/assets/images/Liquiditypool.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Climate finance <span className='text-[#EC8000]'> funnel</span>
        </p>
      ),
      description: (
        <span>
          Perpetual liquidity for you to swap your $EARTH for $DAI whenever{" "}
          <br /> you choose to irrespective of market conditions. This LP is
          owned by <br /> the treasury as a service to currency holders.
        </span>
      ),
      img: "/assets/images/climate-environment.png",
    },
  ];

  return (
    <div className='h-[80vh] my-3 w-full'>
      <Swiper
        modules={[Keyboard, Navigation, Autoplay]}
        className='w-full mySwiper'
        slidesPerView={1}
        navigation={true}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
      >
        {data.map((obj, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='flex flex-col  mx-auto w-full py-10 gap-4 items-center justify-center border-[#EAECF0] border-[1px] rounded-md'>
                <Image
                  width={250}
                  height={250}
                  className={i === 4 ? "w-full" : "w-1/4"}
                  src={obj.img}
                  alt={obj.title}
                />
                {obj.title}
                <p className='text-[#475467] font-inter text-md font-light text-center '>
                  {obj.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Features;
