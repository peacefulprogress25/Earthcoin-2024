import ImageView from "../../Components/ImageView";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import buttonConfig from "../../utils/button";
import Link from "next/link";

const community = "/assets/images/community.png";
const nature = "/assets/images/nature.png";
export default function EarthNode() {
  const communityList = [
    // {
    //   title: "1. Get your bespoke PFP",
    //   description:
    //     "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
    //   btntext: "PFP Form",
    // },
    {
      title: "1. Google form & KYC verification",
      description:
        "Fill the Google Form and complete KYC process by furnishing basic information including name, ID, and a live photo to ensure compliance and authenticity.",
      btntext: buttonConfig.network_earthnode_verified.title,
      buttonLink: buttonConfig.network_earthnode_verified.link,
      external: buttonConfig.network_earthnode_verified.external,
      btntext1: buttonConfig.network_earthnode_googleForm.title,
      buttonLink1: buttonConfig.network_earthnode_googleForm.link,
      external1: buttonConfig.network_earthnode_googleForm.external,
    },
    {
      title: "2. Onboarding call",
      description:
        "Participate in an onboarding call with an existing Solarpunk DAO member to gain clear understanding of Node responsibilities and $EARTH mechanics.",
      btntext: buttonConfig.network_earthnode_bookslot.title,
      buttonLink: buttonConfig.network_earthnode_bookslot.link,
      external: buttonConfig.network_earthnode_bookslot.external,

    },
    {
      title: "3. Mint Soul Bound Token (SBT)",
      description:
        "After completing the aforementioned steps, your wallet will be whitelisted for minting a Soul Bound Token, officially designating you as a Node.",
      btntext: buttonConfig.network_earthnode_dapp.title,
      buttonLink: buttonConfig.network_earthnode_dapp.link,
      external: buttonConfig.network_earthnode_dapp.external,

    },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/telegramIcon.svg",
    },
    {
      icon: "/assets/icons/twitterIcon.svg",
    },
    {
      icon: "/assets/icons/discordIcon.svg",
    },
    {
      icon: "/assets/icons/gateIcon.svg",
    },
    {
      icon: "/assets/icons/cloudIcon.svg",
    },
    {
      icon: "/assets/icons/instagramIcon.svg",
    },
    {
      icon: "/assets/icons/linkedinIcon.svg",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Network
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Become an $EARTH NODE
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            From purging petro dollars to forming partnerships to policy making,
            these NODES keep <br /> the $EARTH network running
          </p>
        </div>
        <ImageView
          src={nature}
          alt="purpose"
          width={400}
          height={300}
          className="w-full h-[18rem]  mt-4 object-cover"
        />
        <div className="sm:px-[8%] px-4 mt-10 mb-16 flex flex-col gap-16 w-full items-start">

          <Stepper
            sx={{
              "& .MuiStepConnector-line": {
                borderLeftWidth: "6px",
              },
              "& .MuiStepConnector-root": {
                marginLeft: "8px",
              },
              "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                borderColor: "#EC8000",
              },
              "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
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
            activeStep={2}
            orientation="vertical"
          >
            {communityList?.map((community, index) => (
              <Step
                key={index}
                className=" flex flex-col items-start"
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
                      fill: "#EAECF0 !important",
                      width: " 0.8em",
                      height: "0.8em",
                    },
                    "& .MuiStepIcon-text": {
                      fill: "#000",
                      fontSize: "12px",
                    },
                  },
                  "& .MuiStepIcon-text": {
                    fill: "white",
                    fontSize: "14px",
                    fontWeight: "600",
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
                  <p className="text-[#101828] pl-12 font-semibold text-left text-[20px] sm:text-[28px] font-syne">
                    {community?.title}
                  </p>
                </StepLabel>
                <StepContent className="pl-12 pb-20">
                  <p className="text-[#475467] px-10  text-left mt-2 font-normal  text-[16px] font-inter">
                    {community?.description}
                  </p>
                  {community?.btntext1 ? (
                    <div className="flex">
                      <div className="px-10">
                        <Link
                          key={index}
                          className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm"
                          href={community?.buttonLink || ""}
                          target={community?.external ? "_blank" : "_self"}
                        >
                          {community?.btntext}
                        </Link>
                        {/* <button className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm">
                          {community?.btntext}
                        </button> */}
                      </div>
                      <div>
                        <Link
                          key={index}
                          className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm"
                          href={community?.buttonLink1 || ""}
                          target={community?.external1 ? "_blank" : "_self"}
                        >
                          {community?.btntext1}
                        </Link>
                        {/* <button className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm">
                          {community?.btntext1}
                        </button> */}
                      </div>
                    </div>
                  ) : (
                    <div className="px-10">
                      <Link
                        key={index}
                        className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm"
                        href={community?.buttonLink || ""}
                        target={community?.external ? "_blank" : "_self"}
                      >
                        {community?.btntext}
                      </Link>
                      {/* <button className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm">
                        {community?.btntext}
                      </button> */}
                    </div>
                  )}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
