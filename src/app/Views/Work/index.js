import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import Community from "../../Components/Community";
const earth = "/assets/images/earthclimate.png";
const plan = "/assets/images/plan1.png";
const harvest = "/assets/images/Harvest.png";
// const vdLink = "/assets/video/earthWorks.mp4";
const videoFile = "/assets/video/tokenomicsJerri.mp4";
import Video from "../../Components/Video";
import { Loader } from "../../Components/Loader";

export default function Work() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

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
    "NODE purges $DAI at the protocol.",
    "Protocol mints and transfer $EARTH depending on the mint price prevalent then to NODE.",
    "Protocol sends the purged $DAI to Treasury.",
    "Treasury funnels that $DAI to real world assets (80%) and protocol owned Liquidity pool (20%).",
    "Projects send returns (Dividend/Interest) to protocol.",
    "Projects send principal amount back to treasury, this is used to fund more projects and increase LP",
    "Dividend/Interest sent to protocol is used to mint $EARTH, that $EARTH is transferred to Reward/Staking pool to pass onto holders",
    "Harvest function at the protocol level mints $EARTH without reducing Neoliberal value of assets backing each $EARTH",
    "$EARTH minted from Harvest is sent to Harvest treasury",
    "$EARTH in Harvest treasury is allocated to Liquidity pool, Staking/reward contract, Solarpunk DAO etc",
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
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] 2xl:px-0 flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col items-center gap-2">
          <p className="mb-0 text-center font-syne text-[#EC8000]">Resources</p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            How $EARTH works?
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Mechanics of $EARTH and flow of $EARTH / $DAI
          </p>
        </div>
        {/* <ImageView
          src={earth}
          alt="earth"
          width={400}
          height={200}
          className="object-cover w-full mt-4"
        /> */}
        <div className="relative h-auto w-full flex items-center justify-center">
          {loading ? (
            <section className="absolute">
              <Loader />
            </section>
          ) : null}
          <Video
            src={videoFile}
            onLoadedData={() => {
              setLoading(false);
            }}
            className={`object-fill w-full h-full ${loading ? "hidden" : "block"}`}
          />
          {/* <div
            className={`absolute top-0 w-full h-full ${loading ? "none" : "block"
              } `}
          >
            <ImageView
              src={earth}
              alt="earth"
              width={800}
              height={800}
              className="object-cover w-full h-full mix-blend-overlay"
            />
          </div> */}
        </div>

        <div className="flex justify-center items-center lg:px-[100px]">

          <div className="flex flex-col w-full items-start lg:pl-[64px]">
            <div>
              <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
                Flow that makes regeneration a reality
              </p>
              <div className="mt-10 ml-6">
                <ol className="list-decimal">
                  {earthValues.map((value, index) => (
                    <li
                      key={index}
                      className="text-[#475467] mb-4 text-left mt-8 font-normal text-[16px] font-inter"
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
        {/* <Community
          img={true}
        //title="Still curious?"
        //description="Join our social community to understand further!"
        /> */}
      </div>
    </>
  );
}
