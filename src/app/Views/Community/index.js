import ImageView from "../../Components/ImageView";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const community = "/assets/images/community.png";
const nature = "/assets/images/nature.png";
export default function Community() {
  const communityList = [
    {
      title: "1. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "PFP Form",
    },
    {
      title: "2. Participate in our community",
      description:
        "Engage in our community by joining our Telegram group, supporting us on Twitter, and following our social media channels.",
    },
    {
      title: "3. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Book a slot",
    },
    {
      title: "4. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Get KYC verified",
    },
    {
      title: "5. Get your bespoke PFP",
      description:
        "Obtain your personalized Solarpunk profile picture by completing our form, expressing your vibe and views on the solarpunk movement.",
      btntext: "Go to DAPP",
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
            Become an $Earth Node
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
          <p className="text-[#475467] text-left mt-6 font-normal  text-[16px] font-inter">
            Even if we are to believe the righteous intentions of all nation
            states, climate change will never be their to priority because they
            are boundary bound plus lack of incentives for long term action.
            <br />
            <br />
            We believe that the biggest impediment towards scaling climate
            action globally is capital. $Earth leverages the best of 
            <span className="text-[#EC8000] font-semibold">
              crypto economics to incentivize blockchain to mobilize
            </span>
             capital globally in a capital efficient manner.
            <br />
            <br />
            ur priority with $Earth is to ensure that viable projects building
            the Solarpunk Infra stack do not face any capital constraints. To
            this effect we intend to be 
            <span className="text-[#EC8000] font-semibold">
              perpetual holding partners
            </span>
             in these projects to the maximum extent possible, structuring deals
            in a way that we always earn pro rata of the projects earnings and
            <span className="text-[#EC8000] font-semibold">
              are equal partners in wins and loses.
            </span>
          </p>
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
                <StepContent className="pl-16 pb-20">
                  <p className="text-[#475467]  text-left mt-2 font-normal  text-[16px] font-inter">
                    {community?.description}
                  </p>
                  {community?.btntext ? (
                    <button className="w-fit  min-w-[100px]  mt-2 font-medium text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 px-3 text-sm">
                      {community?.btntext}
                    </button>
                  ) : (
                    <div className="flex mt-6  gap-1 sm:gap-3">
                      {socialIcons.map((icons, index) => (
                        <button
                          className="cursor-pointer w-10 h-10"
                          key={index}
                        >
                          <ImageView
                            alt="icon"
                            src={icons.icon}
                            width={35}
                            height={35}
                          />
                        </button>
                      ))}
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
