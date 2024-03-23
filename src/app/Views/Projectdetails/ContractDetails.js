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
  const contentBlock = htmlToDraft(details.termsOfFunding);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div className="flex flex-col border-b-2 border-[#EAECF0] pb-8 items-start px-[5%]">
      <p className="text-[30px] text-left font-semibold text-[#101828] font-syne">
        Contract Details
      </p>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="richText-editor"
        toolbarHidden={true}
        readOnly={true}
      />
      <p className="font-inter mt-3 font-medium text-[#EC8000] text-[16px]">
        Contract Address - 
        <span className="text-[#101828]">
          0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6
        </span>
      </p>
      <p className="font-inter mt-1 font-medium text-[#EC8000] text-[16px]">
        $Earth - 
        <span className="text-[#101828]">
          0x9F9f149a02Cddc9a8251207cefD3fF774DAF56F6
        </span>
      </p>
    </div>
  );
}
