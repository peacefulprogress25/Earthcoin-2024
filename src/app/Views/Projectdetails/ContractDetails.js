import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function ContractDetails({ details }) {
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

  const contentBlock = htmlToDraft(details?.contractDetails?.details);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);

  if (details?.contractDetails?.details) {


    return (
      <div className="flex flex-col w-full items-center mt-8 sm:items-start  px-[5%]">
        <p className="text-[24px] sm:text-[28px] text-left font-semibold text-[#101828] font-syne">
          Contract Details
        </p>
        <div className="border-b-2 w-full border-[#EAECF0] pb-4 sm:pb-8 text-[12px] sm:text-[16px] font-Inter text-[#475467]">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="richText-editor custom-contract"
            toolbarHidden={true}
            readOnly={true}
          />
        </div>
        <div className="flex w-full flex-col border-b-2 px-2 border-[#EAECF0] pb-8">
          <p className="font-Inter mt-3 text-wrap font-medium text-[#EC8000] text-[12px] sm:text-[16px]">
            Contract Address -
            <span className=" custom-contract text-[#101828] inline-block">
              {details?.contractDetails?.contractAddress}
            </span>
          </p>
          <p className="font-Syne mt-1 text-wrap font-medium text-[#EC8000] text-[12px] sm:text-[16px]">
            $Earth -
            <span className=" custom-contract text-[#101828] inline-block">
              {details?.contractDetails?.earth}
            </span>
          </p>
        </div>
      </div>
    );
  }
  return null
}
