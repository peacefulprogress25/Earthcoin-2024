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

  let editorState = EditorState.createEmpty();
  if (details?.projectImpact) {
    const contentBlock = htmlToDraft(details?.projectImpact);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    editorState = EditorState.createWithContent(contentState);
  }
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
    <div id="impact" className="flex flex-col items-start w-full">
      <div className="px-[5%]">
      <p className=" text-[20px] sm:text-[28px] text-left font-semibold text-[#101828] font-syne">
        Project Impact
      </p>
      <div className="text-[14px] sm:text-[16px]  font-Inter text-[#475467]">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="richText-editor"
          toolbarHidden={true}
          readOnly={true}
        />
      </div>
      </div>
      
      <div className="flex sm:flex-row flex-col gap-24 justify-center items-center w-full">
        {details?.positiveExternalities.map((impact, index) => (
          <div
            className={`flex flex-col px-4 items-center  justify-center w-[18rem] ${
              index !== details?.positiveExternalities.length - 1
                ? " border-b-2 sm:border-b-0 sm:border-r-2 border-[#EAECF0]"
                : ""
            }`}
            key={index}
          >
            <ImageView
              alt={impact.title}
              src={impact.icon}
              width={100}
              height={100}
              className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
            />
            <p className="text-[#101828] text-center text-[16px] mt-2 font-semibold font-Inter">
              {impact.title}
            </p>
          </div>
        ))}
      </div>
      </div>
  );
}
