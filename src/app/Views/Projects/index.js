import Faq from "./Faq";
import ProjectList from "./ProjectList";
import WorldMap from "./WorldMap";

export default function Project() {
  const category = [
    {
      section: "All",
    },
    {
      section: "Clean Energy",
    },
    {
      section: "Regenerative Agriculture",
    },
    {
      section: "Clean Transport",
    },
    {
      section: "Ecosystem Conservation",
    },
    {
      section: "Solarpunk Tech",
    },
  ];
  return (
    <div className="mt-20 w-full">
      <WorldMap />
      <div className="w-full hidden sm:flex cursor-pointer gap-1 sm:gap-12 border-b border-[#F2F4F7]  px-2 items-center justify-between sm:justify-center h-20">
        {category.map((option, index) => (
          <p
            key={index}
            className="font-inter text-[12px] sm:text-[15px] px-0 sm:px-5 font-semibold text-[#475467]"
          >
            {option.section}
          </p>
        ))}
      </div>
      <ProjectList />
      <div className="max-w-screen-2xl mx-auto w-full px-[6%]">
        <Faq />
      </div>
    </div>
  );
}
