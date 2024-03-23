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
    <div className="flex mt-20 flex-col">
      <WorldMap />
      <div className="w-full justify-center gap-12 border-b border-[#F2F4F7] flex px-2 items-center h-20">
        {category.map((option, index) => (
          <p
            key={index}
            className="font-inter text-[16px] px-5 font-semibold text-[#475467]"
          >
            {option.section}
          </p>
        ))}
      </div>
      <ProjectList />
    </div>
  );
}
