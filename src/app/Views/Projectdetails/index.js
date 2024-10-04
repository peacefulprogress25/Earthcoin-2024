import { useParams } from "next/navigation";
import Link from "next/link";
import ProjectHeader from "./ProjectHeader";
import OverView from "./OverView";
import ImageView from "../../Components/ImageView";
import ProjectImpact from "./ProjectImpact";
import SeekingFund from "../../Components/SeekingFund";
import GetInTouch from "../../Components/GetInTouch";
import TermsofFunding from "./TermsofFunding";
import ContractDetails from "./ContractDetails";
import PeopleSlider from "./PeopleSlider";
import { Steps } from "antd";
import FAQ from "./FAQ";
import Media from "./Media";
import "./project.css";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { Loader } from "../../Components/Loader";
import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

export default function Projectdetails() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.projectsPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setProjects(page?.Projects);
    };

    getPageByID();
  }, []);

  const category = [
    {
      section: "Overview",
      link: "#overview",
    },
    {
      section: "Impact",
      link: "#impact",
    },
    {
      section: "Details",
      link: "#details",
    },
    {
      section: "Contact",
      link: "#contact",
    },
  ];

  const details = projects && projects.find((project) => project.projectId === id);

  return (
    <div className="w-full min-h-screen mt-20">
      {details ? (
        <>
          <ProjectHeader details={details} />
          <div className="w-full  cursor-pointer gap-4 sm:gap-10 border-b border-[#F2F4F7] flex px-2 items-center justify-center h-20">
            {category.map((option, index) => (
              <Link
                key={index}
                href={option?.link || ''}
                passHref
                className="font-Inter text-[14px] xs:text-[18px] sm:text-[18px] px-1 sm:px-5 font-semibold text-[#475467]"
              >
                {option.section}
              </Link>
            ))}
          </div>
          <div className="max-w-screen-2xl mx-auto h-fit flex flex-col px-4 sm:px-[6%] gap-8 sm:gap-16 items-center justify-center w-full">
            <OverView details={details} />
            {details?.projectCoverPic ? <ImageView
              src={details?.projectCoverPic}
              alt="coverpic"
              width={400}
              height={400}
              className="w-full object-cover h-[18rem]"
            /> : null}
            <ProjectImpact details={details} />
            <div
              id="details"
              className="flex gap-4 border px-4 sm:px-8 md:px-10 w-full border-[#FCCA6B] rounded-md"
            >
              {details?.timeline && details?.timeline?.length ? <div className="border-[#EAECF0] mt-10 grow border-r">
                <Steps
                  progressDot
                  current={details?.timelineCurrentState}
                  direction="vertical"
                  className="custom-step align-middle font-Inter text-[#101828] font-semibold"
                  // items={details?.timeline}
                  items={details?.timeline?.map(obj => ({ title: obj?.timelineTitle, description: obj?.timelineDate }))}
                />
                {/* <Stepper
                  sx={{
                    "& .MuiStepConnector-line": {
                      borderLeftWidth: "6px",
                    },
                    "& .MuiStepConnector-root": {
                      marginLeft: "8px",
                    },
                    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line":
                      {
                        borderColor: "#EAECF0",
                      },
                    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line":
                      {
                        borderColor: "#EC8000",
                      },
                    ".MuiStepContent-root": {
                      borderLeft: "6px solid #EC8000", // Default border for all steps
                      marginLeft: "8px",
                    },
                    // "&.Mui-completed .MuiStepContent-root": {
                    //   borderLeft: "6px solid #EC8000 !important",
                    // },
                    // "&.Mui-active .MuiStepContent-root": {
                    //   borderLeft: "6px solid #EAECF0 !important",
                    // },
                  }}
                  active={true}
                  activeStep={3}
                  orientation="vertical"
                >
                  {details?.map((community, index) => (
                    <Step
                      key={index}
                      className="flex flex-col items-start "
                      active={true}
                      sx={{
                        ".MuiStepLabel-root": {
                          padding: "0px 0 !important",
                        },
                        ".Mui-completed .MuiStepContent-root": {
                          borderLeft: "6px solid  #EC8000 !important",
                        },
                        ".Mui-active .MuiStepContent-root": {
                          borderLeft: "6px solid  #EAECF0 !important",
                        },
                        ".Mui-completed .MuiStepIcon-root": {
                          width: " 0.8em",
                          height: "0.8em",
                        },
                        ".MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
                          color: "#EC8000",
                        },
                        ".MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
                          width: " 0.8em",
                          height: "0.8em",
                          color: "#EC8000",
                        },
                        "& .Mui-active": {
                          "&.MuiStepIcon-root": {
                            fill: "#EC8000 !important",
                            width: " 0.8em",
                            height: "0.8em",
                          },
                          "& .MuiStepIcon-text": {
                            fill: "#fff",
                            fontSize: "12px",
                          },
                        },
                        "& .MuiStepIcon-text": {
                          fill: "white",
                          fontSize: "12px",
                        },
                        "& .Mui-completed": {
                          "&.MuiStepIcon-root": {
                            fill: "#EC8000 !important",
                            width: " 0.8em",
                            height: "0.8em",
                          },
                          "& .MuiStepIcon-text": {
                            fill: "#fff",
                            fontSize: "12px",
                          },
                        },
                      }}
                    >
                      <StepLabel>
                        <p className="text-[#101828] font-semibold text-left text-[16px] font-inter">
                          {community?.title}
                        </p>
                      </StepLabel>
                      <StepContent className="pb-20 pl-8">
                        <div className="flex gap-2">
                          <p className="text-black text-left mt-2 font-normal  text-[16px] font-inter">
                            {community?.description}
                          </p>
                          <p className="text-[#475467] text-left mt-2 font-normal  text-[16px] font-inter">
                            {community?.subtitle}
                          </p>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper> */}
              </div> : null}
              <div className="flex flex-col items-start gap-10 p-10 grow">
                {details?.region ? <div className="flex flex-col gap-1">
                  <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[14px] sm:text-[16px]">
                    REIGON
                  </p>
                  <p className="text-[#101828] font-medium  text-[20px] sm:text-[28px]">
                    {details?.region}
                  </p>
                </div> : null}
                {details?.investmentType ? <div className="flex flex-col gap-1">
                  <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[12px] sm:text-[16px] md:text-[12px]">
                    INVESTMENT TYPE
                  </p>
                  <p className="text-[#101828] font-medium text-[14px] sm:text-[16px]">
                    {details?.investmentType}
                  </p>
                </div> : null}
                {details?.projectSize ? <div className="flex flex-col gap-1">
                  <p className="border-b border-[#EAECF0] text-[#EC8000] font-medium text-[14px] sm:text-[16px]">
                    PROJECT SIZE
                  </p>
                  <p className="text-[#101828] font-medium text-[14px] sm:text-[16px]">
                    {details?.projectSize}
                  </p>
                </div> : null}
              </div>
            </div>
            <div
              id="contact"
              className="flex flex-col items-start w-full gap-2"
            >
              <p className="font-Inter text-[#EC8000] font-medium text-[14px]">
                ACCREDITED ENTITY
              </p>
              <div className="flex items-center justify-between w-full gap-2">
                <p className="font-syne text-[#101828] font-semibold text-[18px] sm:text-[27px]">
                  {details?.accreditedEntity?.title}
                </p>
                <Link
                  href={details?.accreditedEntity?.websiteLink || ''}
                  target="_blank"
                  className="sm:w-[180px] w-[150px]  text-white font-Inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs  sm:text-sm text-center"
                >
                  Visit company website
                </Link>
              </div>
              <p className="font-Inter text-[#475467] font-normal text-[14px]">
                {details?.accreditedEntity?.line1}<br />
                {details?.accreditedEntity?.line2}<br />
                {details?.accreditedEntity?.line3}
              </p>
            </div>
            <PeopleSlider details={details} />
            <TermsofFunding details={details} />
            <ContractDetails details={details} />
            <Media details={details} />
            <FAQ details={details} />
            <GetInTouch />
          </div>
        </>
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
