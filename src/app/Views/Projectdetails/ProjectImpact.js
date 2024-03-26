import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ImageView from "../../Components/ImageView";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";

export default function ProjectImpact({ details }) {
  const addElement = (value) => {
    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };
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
        toolbarHidden
        editorState={addElement(details?.description2)}
        wrapperClassName="demo-wrapper"
        editorClassName="richText-display"
        readOnly
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
