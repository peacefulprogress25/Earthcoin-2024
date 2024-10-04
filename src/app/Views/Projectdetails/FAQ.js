import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ImageView from "../../Components/ImageView";

const plus = "/assets/icons/plus-circle.svg";
const minus = "/assets/icons/minus-circle.svg";
export default function FAQ({ details }) {

  if (details?.faq && details?.faq.length) {

    return (
      <div className="flex flex-col  w-full  pb-5 !items-start px-[5%]">
        <p className="text-[28px] text-left font-semibold text-[#101828] font-syne">
          Frequently asked questions
        </p>
        <p className="text-[15px] mt-2 text-left font-normal text-[#475467] font-inter">
          Everything you need to know about $Earth.
        </p>
        <div className="flex flex-col w-full mt-5">
          {details?.faq && details?.faq.length
            ? details?.faq.map(({ Question, Answer }, i) => {
              return (
                <FAQSection Question={Question} Answer={Answer} key={i} i={i} />
              );
            })
            : ""}
        </div>
      </div>
    );
  }
  return null
}

function FAQSection({ Question, Answer, i }) {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    if (index === i) {
      setIndex("");
      return;
    }

    setIndex(i);
  };
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

  const contentBlock = htmlToDraft(Answer);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div
      key={i}
      className={`flex flex-col w-full cursor-pointer p-4 py-6 items-start ${i !== Question.length - 1 ? "border-b-2 border-[#EAECF0]" : ""
        }`}
      onClick={() => handleClick(i)}
    >
      <div className="flex justify-between w-full">
        <p className="font-inter font-semibold text-[16px] text-[#101828]">
          {Question}
        </p>
        <button className="cursor-pointer">
          <ImageView
            src={index === i ? minus : plus}
            alt="icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      {index === i ? (
        <div className="text-[16px] sm:text-[16px]  font-inter text-[#475467]">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="richText-editor custom-contract"
            toolbarHidden={true}
            readOnly={true}
          />
        </div>
      ) : null}
    </div>
  );
}
