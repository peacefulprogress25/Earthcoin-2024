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
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4 py-4 mx-auto mt-20">
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
