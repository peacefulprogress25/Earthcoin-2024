"use client";
import ImageView from "../../Components/ImageView";
import { useRouter } from "next/navigation";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { Loader } from "../../Components/Loader";

export default function ProjectList({ projects }) {
  const reversedProjects = [...projects].reverse();
  const hasOrder = projects.some((project) => project.order !== undefined);
  let sortedProjects;
  if (hasOrder) {
    sortedProjects = reversedProjects.sort((a, b) => a.order - b.order);
  } else {
    sortedProjects = reversedProjects;
  }
  const router = useRouter();


  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 pb-8 mx-auto px-4 sm:px-[6%] 2xl:px-0 mt-8 sm:mt-16 h-fit sm:gap-12">
      {sortedProjects && sortedProjects?.length ? (
        sortedProjects?.filter(data => data?.projectName)?.map((project, index) => (
          <div
            className="rounded-lg border-2 sm:border-4 w-full cursor-pointer w-full h-fit flex flex-col border-[#101828]"
            key={index}
            onClick={() => router.push(`/projects/${project.projectId}`)}
          >
            <div className="flex flex-col items-center justify-center px-3 sm:px-6">
              <div className="flex items-center justify-center w-full gap-2 pt-3 sm:pt-6">
                {project?.projectIcon ? <ImageView
                  src={project?.projectIcon}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                /> : null}
                <p className="text-black font-inter font-semibold text-[14px] sm:text-[16px]">
                  {project?.projectsTitle}
                </p>
              </div>
              <p className="pt-1 sm:pt-2 font-syne text-center font-semibold text-[18px] sm:text-[24px] text-black">
                {project?.projectName}
              </p>
              <p className="pt-1 sm:pt-2 font-inter font-semibold text-[10px] sm:text-[12px] text-[#EC8000]">
                {project?.projectsCategory}
              </p>
              <p className="py-1 sm:py-2 font-inter text-center font-normal text-[11px] sm:text-[13px] text-black">
                {project?.projectsSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap border-t-2 mt-4 w-full border-[#EAECF0]">
              {project?.projectValue ? <div className="flex items-center px-1 w-full sm:w-1/3 pt-2 pb-4 border-b-2 sm:border-b-0 sm:border-r-2 border-[#EAECF0] justify-center flex-col">
                <p className="font-syne font-semibold text-center text-[16px] sm:text-[30px] text-[#EC8000]">
                  {project?.projectValue}
                </p>
                <p className="font-inter font-semibold text-center text-[10px] sm:text-[14px] text-[#101828]">
                  Total project value
                </p>
              </div> : null}
              {project?.fundingNeeded ? <div className="flex items-center px-1 w-full sm:w-1/3 py-2 pb-3 border-b-2 sm:border-b-0 sm:border-r-2 border-[#EAECF0] justify-center flex-col">
                <p className="font-syne font-semibold text-[16px] text-center sm:text-[30px] text-[#EC8000]">
                  {project?.fundingNeeded}
                </p>
                <p className="font-inter font-semibold text-center text-[10px] sm:text-[14px] text-[#101828]">
                  Funding needed
                </p>
              </div> : null}
              {project?.Irr ? <div className="flex flex-col items-center justify-center w-full px-1 py-2 pb-3 sm:w-1/3">
                <p className="font-syne font-semibold text-[16px] text-center sm:text-[30px] text-[#EC8000]">
                  {project?.Irr}
                </p>
                <p className="font-inter font-semibold text-center text-[10px] sm:text-[14px] text-[#101828]">
                  Internal rate of return
                </p>
              </div> : null}
            </div>
            {project?.projectCoverPic ? <ImageView
              src={project?.projectCoverPic}
              alt="coverpic"
              width={350}
              height={450}
              className="object-cover w-full h-48 rounded-b-sm sm:h-auto"
            /> : null}
          </div>
        ))
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
