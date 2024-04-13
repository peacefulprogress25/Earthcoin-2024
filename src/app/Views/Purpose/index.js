import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import Community from "../../Components/Community";
const purpose = "/assets/images/purpose.png";
const jungle = "/assets/images/jungle.png";
const space = "/assets/images/space.png";
const mountain = "/assets/images/mountain.png";
const tree = "/assets/images/tree.png";

export default function Purpose() {
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
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            PURPOSE
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            $Earth leverages crypto to fund climate solutions, backing a
            currency with essential utility for humanity.
          </p>
        </div>
        <ImageView
          src={purpose}
          alt="purpose"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            Context before currency,
            <span className="text-[#EC8000]">Planet before profits</span>
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
          <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ImageView
              src={jungle}
              alt="jungle"
              width={370}
              height={200}
              className="object-cover"
            />
            <ImageView
              src={space}
              alt="space"
              width={370}
              height={200}
              className="object-cover"
            />
          </div>
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            The recently experienced exponential advances although are
            not decoupled from its tradeoffs -
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
        <ImageView
          src={mountain}
          alt="mountain"
          width={400}
          height={200}
          className="w-full mt-4 object-cover"
        />
        <div className="sm:px-[20%] px-4 flex flex-col w-full items-start">
          <p className="text-[#101828] font-semibold text-left mt-6 text-[20px] sm:text-[28px] mr-10 font-syne">
            The recently experienced exponential advances although are
            not decoupled from its tradeoffs -
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
            The aforementioned tradeoffs or shifts in perception have now come
            seeking reparations. The Anthropocene era characterized by -
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
          <div className="mt-6 w-full">
            <ImageView
              src={tree}
              alt="tree"
              width={500}
              height={240}
              className="!w-full object-cover"
            />
          </div>
          <div className="mt-6">
            <Editor
              toolbarHidden
              editorState={addElement(Editordata[0]?.details)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
            />
          </div>
          <div className="mt-8 border-l-2 flex flex-col items-start border-[#EC8000] pl-3">
            <p className="text-[26px]  text-left font-medium text-[#101828] font-syne">
              “In a world older and more complete than ours they move finished
              and complete, gifted with extensions of the senses we have lost or
              never attained, living by voices we shall never hear.”
            </p>
            <p className="text-[14px] mt-5 text-left font-normal text-[#475467] font-inter">
              — Olivia Rhye, Product Designer
            </p>
          </div>
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
        <Community
          title="Ready to go down the rabbit hole?"
          description="Join our social community!"
        />
      </div>
    </div>
  );
}
