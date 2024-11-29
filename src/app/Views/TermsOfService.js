"use client";
import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { nexaflowPageObj } from "../utils/constants";
import nexaflowApi from "../services/nexaflow";
import { Loader } from "../Components/Loader";

export default function TermsOfService() {
  const [termsOfService, setTeamsOfService] = useState();
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.termsConditionsPage,
        websiteId: nexaflowPageObj.website,
      });

      setTeamsOfService(page);
    };
    getPageByID();
  }, []);
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

  let editorState = EditorState.createEmpty(); // Default editorState if termsOfService is undefined
  if (termsOfService && termsOfService.details) {
    const contentBlock = htmlToDraft(termsOfService.details);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    editorState = EditorState.createWithContent(contentState);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-[6%] 2xl:px-0 py-4 mx-auto mt-20">

      {termsOfService?.details ? (
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
