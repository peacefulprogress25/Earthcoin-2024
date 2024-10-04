import ImageView from "../../Components/ImageView";

const headerBg = "/assets/images/Header_sectionBg.svg";
export default function ProjectHeader({ details }) {
  return (
    <div className="relative w-full h-[50vh] sm:h-[48vh] overflow-hidden">
      <ImageView
        src={headerBg}
        width={400}
        height={400}
        className="absolute inset-0 w-[100vw] h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-[8%]">
        <p className="pt-1 sm:pt-2 font-Inter text-center font-semibold text-[12px] sm:text-[14px] text-white">
          {details?.projectsCategory}
        </p>
        <p className="pt-1 sm:pt-2 font-syne text-center font-semibold text-[30px] sm:text-[40px] text-white">
          {details?.projectName}
        </p>
        <p className="py-1 sm:py-2 font-Inter text-center font-normal text-[16px] sm:text-[17px] text-white">
          {details?.projectsSubtitle}
        </p>
        <div className="flex items-center justify-center gap-2 pt-3 sm:pt-6">
          <ImageView src={details?.projectIcon} alt="avatar" width={50} height={50} />
          <p className="text-white font-Inter font-semibold text-[16px]">
            {details?.projectsTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
