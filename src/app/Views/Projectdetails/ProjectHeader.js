import React from "react";
import ImageView from "../../Components/ImageView";

const headerBg = "/assets/images/Header_sectionBg.svg";
export default function ProjectHeader({ details }) {
  return (
    <div className="flex relative items-center justify-center flex-col h-[50vh] sm:h-[48vh] py-3 w-full bg-no-repeat">
      <ImageView
        src={headerBg}
        width={400}
        height={400}
        className="w-full object-cover h-full"
      />
      <div className="justify-center absolute items-center flex flex-col py-4 sm:py-8 px-[8%]">
        <p className="pt-1 sm:pt-2 font-Inter text-center font-semibold text-[12px] sm:text-[14px] text-white">
          {details.category}
        </p>
        <p className="pt-1 sm:pt-2 font-syne text-center font-semibold text-[30px] sm:text-[40px] text-white">
          {details.projectName}
        </p>
        <p className="py-1 sm:py-2 font-Inter text-center font-normal text-[16px] sm:text-[17px] text-white">
          {details.subtitle}
        </p>
        <div className="flex justify-center pt-3 sm:pt-6 gap-2 items-center">
          <ImageView src={details.icon} alt="avatar" width={50} height={50} />
          <p className="text-white font-Inter font-semibold text-[16px]">
            {details.subText}
          </p>
        </div>
      </div>
    </div>
  );
}
