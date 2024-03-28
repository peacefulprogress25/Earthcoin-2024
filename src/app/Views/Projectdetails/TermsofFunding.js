import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function TermsofFunding({ details }) {
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

  const contentBlock = htmlToDraft(details?.termsOfFunding);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div className="flex flex-col  items-center sm:items-start  px-[5%]">
      <p className="text-[28px] text-left font-semibold text-[#101828] font-syne">
        Terms of funding
      </p>
      <div className="border-b-2 border-[#EAECF0] pb-8">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="richText-editor"
          toolbarHidden={true}
          readOnly={true}
        />
      </div>
    </div>
  );
}
