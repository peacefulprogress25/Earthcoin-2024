import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
export default function ContractDetails({ details }) {
  const addElement = (value) => {
    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };
  return (
    <div className="flex flex-col items-center sm:items-start px-[5%]">
      <p className="text-[30px] text-left font-semibold text-[#101828] font-syne">
        Contract Details
      </p>
      <Editor
        toolbarHidden
        editorState={addElement(details?.termsOfFunding)}
        wrapperClassName="demo-wrapper"
        editorClassName="richText-display"
        readOnly
      />
      <div className="flex w-full flex-col border-b-2 px-2 border-[#EAECF0] pb-8">
        <p className="font-inter mt-3 text-wrap font-medium text-[#EC8000] text-[12px] sm:text-[16px]">
          Contract Address - 
          <span className="text-[#101828] inline-block">
            0x9F9f149a02Cddc9a8251207cefD3fF77
          </span>
        </p>
        <p className="font-inter mt-1 text-wrap font-medium text-[#EC8000] text-[12px] sm:text-[16px]">
          $Earth - 
          <span className="text-[#101828] inline-block">
            0x9F9f149a02Cddc9a8251207cefD3fF77
          </span>
        </p>
      </div>
    </div>
  );
}
