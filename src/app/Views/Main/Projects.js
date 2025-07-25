import { useEffect, useState } from "react";
import nexaflowApi from "../../services/nexaflow";
import { nexaflowPageObj } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper/modules";
import ImageView from "../../Components/ImageView";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./project.css";
import { useRouter } from "next/navigation";
import ProjectDetails from "./ProjectDetails";
// import "./features.css";

function Projects() {
  const [project, setProject] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.projectsPage,
        websiteId: nexaflowPageObj.website,
      });
      const reversedProjects = [...page?.Projects].reverse();
      const hasOrder = page?.Projects.some(
        (project) => project.order !== undefined
      );
      let sortedProjects;
      if (hasOrder) {
        sortedProjects = reversedProjects.sort((a, b) => a.order - b.order);
      } else {
        sortedProjects = reversedProjects;
      }
      setProject(sortedProjects);
    };

    getPageByID();
  }, []);


  const [activeIndex, setActiveIndex] = useState(0);

  // Handle slide change and reset to start if at the end
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };


  if (project && project.length) {

    return (
      <>

        <p className="text-[#1F2636] font-syne text-center font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl w-3/4 mb-[2rem] sm:mb-[4rem] xl:mb-[6rem]">
          Assets part of EARTH Network 
        </p>

        <div className="flex flex-col justify-between w-full md:flex-row ">
          <ProjectDetails obj={project?.filter(data => data?.projectName)?.[activeIndex]} />


          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // className=''
            releaseOnEdges={true}
            centeredSlides={true}
            // onReachEnd={(swiper) => swiper.slideTo(0, 1500)}
            slidesPerView={"auto"}
            onSlideChange={handleSlideChange}
            coverflowEffect={{
              rotate: 0,
              stretch: 400,
              depth: 200,
              modifier: 1,
              // slideShadows: true,
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
            className='!mr-0 mySwiper-project !w-[90%] mb-10 custom-swiper'
          >
            {project && project.length
              ? [...project].filter(data => data?.projectName).map((data, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      opacity: index < activeIndex ? 0 : 1,
                      transition:
                        index < activeIndex ? "opacity 0.1s ease-in-out" : "",
                    }}
                  >
                    <div
                      className='flex flex-col overflow-hidden cursor-pointer h-fit '
                      onClick={() => router.push(`/projects/${data.projectId}`)}
                    >
                      <ImageView src={data?.thumbnail} alt={data?.projectName} className='w-full h-[28rem] ' width={600} height={600} />
                      {/* <div className='flex flex-col items-center justify-center px-3 sm:px-6'>
                    <div className='flex items-center justify-center w-full gap-2 pt-3 sm:pt-6'>
                      <ImageView
                        src={data.icon}
                        alt='avatar'
                        width={50}
                        height={50}
                      />
                      <p className='text-black font-inter font-semibold text-[16px]'>
                        {data.subText}
                      </p>
                    </div>
                    <p className='pt-1 sm:pt-2 font-syne text-center font-semibold text-[20px] sm:text-[24px] text-black'>
                      {data.projectName}
                    </p>
                    <p className='pt-1 sm:pt-2 font-inter font-semibold text-[12px] text-[#EC8000]'>
                      {data.category}
                    </p>
                    <p className='py-1 sm:py-2 h-[3.5rem] font-inter text-center font-normal text-[13px] text-black'>
                      {data.subtitle}
                    </p>
                  </div>
                  <div className='flex border-t-2 mt-4 w-full border-[#EAECF0]'>
                    <div className='flex items-center px-1 grow pt-2 pb-4 border-r-2 border-[#EAECF0] justify-center flex-col'>
                      <p className='font-syne font-semibold text-center text-[18px] sm:text-[30px] text-[#EC8000]'>
                        {data.projectValue}
                      </p>
                      <p className='font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]'>
                        Total project value
                      </p>
                    </div>
                    <div className='flex items-center  px-1 py-2 pb-3 grow border-r-2 border-[#EAECF0] justify-center flex-col'>
                      <p className='font-syne font-semibold text-[18px] text-center sm:text-[30px] text-[#EC8000]'>
                        {data.fundingNeeded}
                      </p>
                      <p className='font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]'>
                        Funding needed
                      </p>
                    </div>
                    <div className='flex flex-col items-center justify-center px-1 py-2 pb-3 grow'>
                      <p className='font-syne font-semibold text-[18px] text-center sm:text-[30px] text-[#EC8000]'>
                        {data.Irr}
                      </p>
                      <p className='font-inter font-semibold text-center text-[12px]  sm:text-[14px] text-[#101828]'>
                        Internal rate of return
                      </p>
                    </div>
                  </div> */}
                    </div>
                  </SwiperSlide>
                );
              })
              : null}
          </Swiper>

        </div>
        <button
          onClick={() => router.push("/projects")}
          className=" relative mx-auto cursor-pointer z-40 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm mt-8"
        >
          Browse All Projects
        </button>
      </>
    );
  }
  return null
}

export default Projects;

