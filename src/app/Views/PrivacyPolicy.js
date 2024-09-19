"use client";
import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { nexaflowPageObj } from "../utils/constants";
import nexaflowApi from "../services/nexaflow";
import { Loader } from "../Components/Loader";

export default function PrivacyPolicy() {
  const [privacypolicy, setPrivacypolicy] = useState({});
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.privacyPolicyPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setPrivacypolicy(page);
    };
    getPageByID();
  }, []);
  console.log(privacypolicy);
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
  if (privacypolicy && privacypolicy.details) {
    const contentBlock = htmlToDraft(privacypolicy.details);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    editorState = EditorState.createWithContent(contentState);
  }

  return (
    <div className="flex mt-20 mx-auto w-full max-w-screen-lg px-4 py-4 items-center justify-center flex-col">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#EC8000] font-semibold text-center text-[12px] sm:text-[14px] font-inter">
          Current as of 27 March 2024
        </p>
        <p className="text-[#101828] font-semibold text-center text-[24px] sm:text-[30px] lg:text-[40px] font-syne">
          Privacy Policy
        </p>
        <p className="text-[#475467] text-center font-normal text-[14px] sm:text-[16px] lg:text-[18px] font-inter leading-relaxed">
          Your privacy is important to us at Untitled. We respect your privacy
          regarding any information we may collect from you across our website.
        </p>
      </div>
      {privacypolicy.details ? (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="richText-editor"
          toolbarHidden={true}
          readOnly={true}
        />
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
  
}
