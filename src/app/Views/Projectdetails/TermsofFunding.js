import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
export default function TermsofFunding({ details }) {
  const addElement = (value) => {
    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };
  return (
    <div className="flex flex-col  items-center sm:items-start  px-[5%]">
      <p className="text-[30px] text-left font-semibold text-[#101828] font-syne">
        Terms of funding
      </p>
      <div className="border-b-2 border-[#EAECF0] pb-8">
        <Editor
          toolbarHidden
          editorState={addElement(details?.termsOfFunding)}
          wrapperClassName="demo-wrapper"
          editorClassName="richText-display"
          readOnly
        />
      </div>
    </div>
  );
}
