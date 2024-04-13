import Faq from "./Faq";
import ProjectList from "./ProjectList";
import Insight from "./insight";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { useState, useEffect } from "react";
import Gpt from "../../Components/Gpt";

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
  const [projects, setProjects] = useState([]);
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.projectsPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setProjects(page?.Projects);
      setFaq(page?.Faq);
    };

    getPageByID();
  }, []);
  return (
    <div className="mt-20 w-full">
      <Insight projects={projects} />
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
      <ProjectList projects={projects} />
      <div className="max-w-screen-2xl mx-auto  w-full px-[6%]">
        <Faq faq={faq} />
        <Gpt />
      </div>
    </div>
  );
}
