import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import Community from "../../Components/Community";
const earth = "/assets/images/earth.png";
const plan = "/assets/images/plan.png";
const harvest = "/assets/images/Harvest.png";

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
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            How $EARTH works?
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            The economic models behind $Earth driving our solarpunk vision home
          </p>
        </div>
        <ImageView
          src={earth}
          alt="earth"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            $EARTH is designed to serve as a capital efficient funnel
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
        <div className="w-full sm:px-[10%] px-4">
          <ImageView
            src={plan}
            alt="plan"
            width={800}
            height={1800}
            className="w-full mt-4 object-cover"
          />
        </div>
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
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
            $Earth harvest flow -
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
            src={harvest}
            alt="harvest"
            width={800}
            height={800}
            className="w-full mt-4 object-cover"
          />
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
        <div className="w-full h-[1.5px] my-8 bg-[#F2F4F7]"></div>
        <Community
          title="Still curious?"
          description="Join our social community to understand further!"
        />
      </div>
    </div>
  );
}
