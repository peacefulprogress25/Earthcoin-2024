import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";

export default function ProjectImpact({ details }) {
  const [editorLoaded, setEditorLoaded] = useState(false);

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

  const contentBlock = htmlToDraft(details?.description2);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  const impacts = [
    {
      icon: "/assets/icons/air.svg",
      impact: "Clean Air",
    },
    {
      icon: "/assets/icons/climate.svg",
      impact: " Address Climate Change",
    },
    {
      icon: "/assets/icons/soil.svg",
      impact: "Healthy Soil",
    },
    {
      icon: "/assets/icons/bio.svg",
      impact: "Biodiversity",
    },
  ];
  return (
    <div className="flex flex-col items-start px-[5%]">
      <p className=" text-[20px] sm:text-[30px] text-left font-semibold text-[#101828] font-syne">
        Project Impact
      </p>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="richText-editor"
        toolbarHidden={true}
        readOnly={true}
      />
      <div className="flex sm:flex-row flex-col justify-center items-center w-full">
        {impacts.map((impact, index) => (
          <div
            className={`flex flex-col p-4 items-center  justify-center w-[14rem] ${
              index !== impacts.length - 1
                ? " border-b-2 sm:border-b-0 sm:border-r-2 border-[#EAECF0]"
                : ""
            }`}
            key={index}
          >
            <ImageView
              alt={impact.impact}
              src={impact.icon}
              width={100}
              height={100}
              className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
            />
            <p className="text-[#101828] text-center text-[18px] mt-2 font-semibold font-inter">
              {impact.impact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
