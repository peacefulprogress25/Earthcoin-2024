import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import Community from "../../Components/Community";
const earth = "/assets/images/earthclimate.png";
const plan = "/assets/images/plan1.png";
const harvest = "/assets/images/Harvest.png";
const vdLink = "https://solarpunkdao.earth/assets/tokenomics-video.mp4";
import Video from "../../Components/Video";

export default function Work() {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const Editordata = [
    {
      details:
        '<p><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 17px;font-family: inter; font-weight:400;">Helios is an open-source platform enabling both web3 &amp; traditional investment in profitable, high impact solar projects in emerging markets, earning users stable, double digit yields uncorrelated with crypto or public markets while averting millions of tonnes of CO2 emissions each year. </span><span style="font-size: 17px;font-family: inter; font-weight:400;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 17px;font-family: inter; font-weight:400;">With a portfolio of solar assets across 4 continents, Helios is perpetually deploying capital &amp; seeking new C&amp;I solar investment opportunities (50-500kW) globally.</span><span style="font-size: 17px;font-family: inter; font-weight:400;"><br><br></span><span style="color: rgb(32,33,36);background-color: rgb(255,255,255);font-size: 17px;font-family: inter; font-weight:400;">Our project is entirely open source; no Helios employees take any salary; we aim to reinvest all earnings back into solar to create compounding impact.</span><span style="font-size: 17px;font-family: inter; font-weight:400;"> </span></p>\n',
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEditorLoaded(true);
    }
  }, []);

  if (!editorLoaded) {
    return null;
  }

  const { Editor } = require("react-draft-wysiwyg");
  const { EditorState, ContentState } = require("draft-js");
  const htmlToDraft = require("html-to-draftjs").default;
  const addElement = (value) => {
    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };
  const earthValues = [
    "Solarpunk Dao  issues yol mint SEARTH Coul Bound NFT that makes you a NODE and lets you ",
    "Node purges petro $ directly at the protocol to mint $EARTH",
   "Protocol sends those $$$ to $EARTH treasury",
   "SEARTH treasury transfers $$$ to projects addressing climate change",
   "Project returns $$$ in form of Yields back to the treasury to fund other projects",
  ];
  const protocolValues = [
    "APY - Providing yield to $EARTH stakers",
    "LP - Creating a protocol owned liquidity pool between $EARTH/$DAI",
    "DAO - Compensating Solarpunk Dao for its contributions",
    "Partners - For partners to reward their community for $EARTH aligned actions",
    "Community - For all activities growing $EARTH",
    "IV - Portion of this harvested $EARTH can be burnt also, this increases IV of each $EARTH and hence the price.",
  ];
  return (
    <>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            How $EARTH works?
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            The economic models behind $Earth driving our solarpunk vision home
          </p>
        </div>
        {/* <ImageView
          src={earth}
          alt="earth"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        /> */}
        <div className='relative '>
          <Video
          src={vdLink}
          controls={false}
          // loop={false}
          // autoPlay
          // playsInline
          // onEnded={() => handleVideoEnd()}
          className="w-full h-full  object-cover"
          muted={true}
        />
         <div className='absolute'>
           <ImageView
          src={earth}
          alt="earth"
          width={400}
          height={200}
          className="w-full -mt-[56.4%] opacity-60 h-full lg:h-[105.8vh] lg:w-[200vh]  object-cover"
        />
        </div>
        </div>
        
        
        <div className="flex justify-center items-center px-[100px]">
          <div className="">
            <ImageView
              src={plan}
              alt="plan"
              width={261.13}
              height={682}
              className="mt-4 object-cover"
            />
          </div>
          <div className="flex flex-col w-full items-start pl-[64px]">
          <div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
          $EARTH - Blackhole for Climate Finance
          </p>
          <div className="mt-6">
            <p className="text-[#475467] text-center sm:text-left font-normal  text-[16px] font-inter">
              $EARTH is designed to serve as a capital efficient funnel that
              incentivizes, mobilizes and allocates petro $ to be projects
              directly addressing climate change and solving the environmental
              crisis.
             </p>
             <p className="text-[#475467] mt-6 text-center sm:text-left font-normal  text-[16px] font-inter">
              Here we provide an overview of each step that takes place to make
              this happen -
            </p>
          </div>
        
            <div className="mt-16 ml-6">
              <ol className="list-decimal">
                {earthValues.map((value, index) => (
                  <li
                    key={index}
                    className="text-[#475467] text-center mb-4 sm:text-left mt-8 font-normal text-[16px] font-inter"
                  >
                    {value}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        </div>
        {/* <div>
          <p className="font-inter font-normal text-[18px] text-primary px-[80px]">
            The premium paid to $EARTH wrt to the value of assets backing each
            $EARTH (Intrinsic Value) allows the protocol to harvest $EARTH till
            the point it doesnt decrease the intrinsic value of assets backing
            each $EARTH. This Harvested $EARTH is then used for various
            activities like -
          </p>
        </div> */}
        <Community
          img={true}
          title="Still curious?"
          description="Join our social community to understand further!"
        />
      </div>
    </>
  );
}
