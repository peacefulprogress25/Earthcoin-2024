import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./features.css";
import "swiper/css/navigation";

function Features() {
  const data = [
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          New Unit of <span className='text-[#EC8000]'>Value</span>
        </p>
      ),
      description: (
        <span>
          $EARTH is a new unit of value, not pegged to any currency. Designed to
          be loosely range bound, <br /> assets backing each token serve as the
          floor while valuing positive externalities created by those <br />{" "}
          assets and the utility of the currency create a soft ceiling.
        </span>
      ),
      img: "/assets/images/New-unit-of-value.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Putting the Eco in <span className='text-[#EC8000]'>Economy</span>
        </p>
      ),
      description: (
        <span>
          When you pay a premium over the base value of $EARTH it represents{" "}
          <br /> the economic value placed on ecosystems and it services. This
          helps us <br /> reward projects creating more of this
        </span>
      ),
      img: "/assets/images/Economy-home.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Program <span className='text-[#EC8000]'>Solarpunk Values</span> into
          Money
        </p>
      ),
      description: (
        <span>
          $EARTH utility will be designed to acknowledge and reward people &
          merchants that <br /> are imbibing these above mentioned values.
        </span>
      ),
      img: "/assets/images/Solarpunk-Values.png",
    },
    {
      title: (
        <p className='font-syne font-semibold text-[20px] text-center sm:text-left sm:text-[28px] text-black'>
          Climate finance <span className='text-[#EC8000]'> funnel</span>
        </p>
      ),
      description: (
        <span>
          $Earth acts as a borderless, capital efficient funnel <br />
          to incentivize, mobilize & allocate capital <br />
          towards climate solutions.
        </span>
      ),
      img: "/assets/images/climate-environment.png",
    },
  ];

  return (
    <div className='h-[94vh] my-3 w-full'>
      <Swiper
        modules={[Keyboard, Navigation, Autoplay, EffectFade]}
        className='w-full mySwiper'
        fadeEffect={{ crossFade: true }}
        effect='fade'
        navigation={true}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
      >
        {data.map((obj, i) => {
          return (
            <SwiperSlide >
              <div className='flex flex-col  mx-auto w-full py-10 gap-4 items-center justify-center border-[#EAECF0] border-[1px] rounded-md'>
                <Image
                  width={600}
                  height={600}
                  className={`w-full h-96 object-contain ${+i === 0 || +i === 3 ? "mt-3" : ""}`}
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
