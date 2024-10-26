import Faq from "./Faq";
import ProjectList from "./ProjectList";
import Insight from "./insight";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { useState, useEffect } from "react";
import Gpt from "../../Components/Gpt";
import Link from "next/link";
import buttonConfig from "../../utils/button";

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
      section: "Solarpunk  Spaces",
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

      setProjects(page?.Projects);
      setFaq(page?.Faq);
    };

    getPageByID();
  }, []);
  return (
    <div className="w-full mt-20 mb-24">
      <Insight projects={projects} />
      <div className="w-[100%] hidden sm:flex cursor-pointer gap-1 sm:gap-12 border-b border-[#F2F4F7]  px-[5%] items-center justify-between sm:justify-center h-20">

        {category.map((option, index) => (
          <p
            key={index}
            className="font-inter text-[12px] sm:text-[15px] px-0 sm:px-0 font-semibold text-[#475467]"
          >
            {option.section}
          </p>
        ))}

      </div>
      <ProjectList projects={projects} />
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center h-[40vh]  w-full px-[6%]">
        {/* <Faq faq={faq} /> */}
        <Link
          className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm"
          href={buttonConfig?.dapp_footer_banner?.link || ""}
          target={
            buttonConfig?.dapp_footer_banner?.external
              ? "_blank"
              : "_self"
          }
        >
          {buttonConfig?.dapp_footer_banner?.title}
        </Link>
      </div>
    </div>
  );
}
