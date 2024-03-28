import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import Community from "../../Components/Community";

const thesis = "/assets/images/thesis.png";
const funnel = "/assets/images/funnel.svg";
const agriculture = "/assets/images/agriculture.png";
const pieChart = "/assets/images/Piechart-2.png";
const exportImg = "/assets/images/Export.png";
const earthPower = "/assets/images/EarthPowers.png";

export default function Thesis() {
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
  const chartData = [
    {
      title: "Regenerative Agriculture",
      percent: "15.15%",
    },
    {
      title: "Ecosystem Conservation",
      percent: "14.14%",
    },
    {
      title: "Clean Energy",
      percent: "40.40%",
    },
    {
      title: "Solarpunk Spaces",
      percent: "10.10%",
    },
    {
      title: "Clean Transport",
      percent: "20.20%",
    },
  ];
  const earthPowerData = [
    {
      title: "Regenerative Agriculture",
    },
    {
      title: "Clean Transport",
    },
    {
      title: "Ecosystem Conservation",
    },
    {
      title: "Solarpunk Spaces",
    },
    {
      title: "Clean Energy",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-6">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            THESIS
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            $Earth leverages crypto to fund climate solutions, backing a
            currency with essential utility for humanity.
          </p>
        </div>
        <ImageView
          src={thesis}
          alt="thesis"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            FUEL to our FIRE
          </p>
          <div className="mt-6">
            <Editor
              toolbarHidden
              editorState={addElement(Editordata[0]?.details)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
            />
          </div>
        </div>
      </div>
      <ImageView
        src={funnel}
        alt="funnel"
        width={400}
        height={600}
        className="w-full object-cover"
      />
      <div className="mt-6 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            This transition is no longer a IF but a 
            <span className="text-[#EC8000]">WHEN.</span>
          </p>
          <div className="mt-6">
            <Editor
              toolbarHidden
              editorState={addElement(Editordata[0]?.details)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
            />
          </div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            Sectors we are focusing on -
          </p>
        </div>
        <div className="px-[6%]">
          <div className="px-[6%]">
            <ImageView
              src={earthPower}
              alt="earthPower"
              width={400}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-md bg-[#F9FAFB] flex justify-between border border-[#F2F4F7] p-1">
            {earthPowerData.map((power, index) => (
              <button
                className={` rounded-md p-1 px-2 text-[#667085]  text-[9px] sm:text-[13px] font-inter font-semibold ${
                  index === 0 ? "bg-[#FFFFFF] shadow-md text-[#344054]" : ""
                }`}
                key={index}
              >
                {power.title}
              </button>
            ))}
          </div>
          <div className="bg-[#F9FAFB] border mt-2 border-[#F2F4F7] rounded-lg px-[10%] py-6">
            <p className="text-[#101828] font-semibold text-left  text-[14px] sm:text-[18px] mr-10 font-inter">
              Regenerative Agricuture
            </p>
            <div className="mt-6">
              <Editor
                toolbarHidden
                editorState={addElement(Editordata[0]?.details)}
                wrapperClassName="demo-wrapper"
                editorClassName="richText-display"
                readOnly
              />
            </div>
            <ImageView
              src={agriculture}
              alt="agriculture"
              width={400}
              height={600}
              className="w-full mt-10 mb-5 object-cover"
            />
          </div>
        </div>
        <div className="sm:px-[20%] px-4 flex flex-col">
          <div className="flex flex-col gap-16 mt-3 w-full  items-center justify-between sm:flex-row">
            <ImageView
              src={pieChart}
              alt="piechart"
              width={250}
              height={250}
              className="mt-4 object-cover"
            />
            <div className="flex gap-2 w-full sm:w-[50%] flex-col">
              {chartData?.map((chart, index) => (
                <div
                  className="flex justify-between grow  gap-8 relative items-start"
                  key={index}
                >
                  <div
                    className={`${
                      chart.title === "Regenerative Agriculture"
                        ? "bg-[#F4AB1F]"
                        : chart.title === "Ecosystem Conservation"
                        ? "bg-[#B2BC45]"
                        : chart.title === "Clean Energy"
                        ? "bg-[#486D2F]"
                        : chart.title === "Solarpunk Spaces"
                        ? "bg-[#045047]"
                        : chart.title === "Clean Transport"
                        ? "bg-[#EC8000]"
                        : ""
                    } w-[5px]  -left-3 top-[8px] absolute h-[5px] rounded-full`}
                  ></div>
                  <p className="text-[#475467] font-inter text-[14px] font-normal">
                    {chart?.title}
                  </p>
                  <p className="text-[#475467] font-inter text-[14px] font-normal">
                    {chart?.percent}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#101828] font-semibold text-left mt-8 text-[20px] sm:text-[28px] mr-10 font-syne">
            Rationale behind sector selection -
          </p>
          <div className="mt-6">
            <Editor
              toolbarHidden
              editorState={addElement(Editordata[0]?.details)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
            />
          </div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            How?
          </p>
          <div className="mt-6">
            <Editor
              toolbarHidden
              editorState={addElement(Editordata[0]?.details)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
            />
          </div>
          <ImageView
            src={exportImg}
            alt="export"
            width={550}
            height={600}
            className="!w-full mt-6 object-cover"
          />
        </div>
        <Community
          title="Ready to go down the rabbit hole?"
          description="Join our social community!"
        />
      </div>
    </div>
  );
}
