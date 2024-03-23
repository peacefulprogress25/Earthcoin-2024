import { useState, useEffect } from "react";
import ImageView from "../../Components/ImageView";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function OverView({ details }) {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const socialIcons = [
    {
      icon: "/assets/icons/chain.svg",
    },
    {
      icon: "/assets/icons/twitter.svg",
    },
    {
      icon: "/assets/icons/facebook.svg",
    },
    {
      icon: "/assets/icons/linkedin.svg",
    },
  ];
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
  const contentBlock = htmlToDraft(details.description1);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div className="flex w-full flex-col gap-8 px-[5%] mt-6">
      <div className="flex !items-start gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex w-52 flex-col border-y-2 font-inter py-3 border-[#EAECF0] items-start gap-3">
            <p className="text-[#EC8000] font-semibold text-[16px]">
              Priority Rank
            </p>
            <p className="text-[#475467] font-semibold text-[16px]">#3</p>
            <p className="text-[#EC8000] font-semibold text-[16px]">Status</p>
            <p className="text-[#475467] font-semibold text-[16px]">
              {details?.status}
            </p>

            <p className="text-[#EC8000] font-semibold text-[16px]">
              Date of approval{" "}
            </p>
            <p className="text-[#475467] font-semibold text-[16px]">
              {details?.dateApproved}
            </p>
          </div>
          <div className="flex gap-2">
            {socialIcons.map((icons, index) => (
              <button
                className="cursor-pointer w-8 h-8 p-2 border-2 border-[#D0D5DD] rounded-md"
                key={index}
              >
                <ImageView
                  alt={icons.icon}
                  src={icons.icon}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[#101828] font-semibold font-syne text-[36px]">
            Overview
          </p>
          <div className="text-[16px]  font-inter text-[#475467]">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-editor"
              toolbarHidden={true}
              readOnly={true}
            />
            {/* Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Eget
            quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
            at volutpat lectus velit, sed auctor. */}
          </div>
        </div>
      </div>
      <div className="flex gap-8  mt-2 w-full items-center justify-center border-[#EAECF0]">
        <div className="flex items-center max-w-[18rem] w-full py-6  border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col">
          <p className="font-syne font-semibold text-[32px] text-[#EC8000]">
            {details.projectValue}
          </p>
          <p className="font-inter font-semibold text-[14px] text-[#101828]">
            Total project value
          </p>
        </div>
        <div className="flex items-center max-w-[18rem] w-full py-6 border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col">
          <p className="font-syne font-semibold text-[32px] text-[#EC8000]">
            {details.fundingNeeded}
          </p>
          <p className="font-inter font-semibold  text-[14px]  text-[#101828]">
            Funding needed
          </p>
        </div>
        <div className="flex items-center max-w-[18rem] w-full py-6 rounded-lg shadow-lg border-2 border-[#EAECF0]  justify-center flex-col">
          <p className="font-syne font-semibold text-[32px] text-[#EC8000]">
            {details.returnValue}
          </p>
          <p className="font-inter font-semibold text-[14px] text-[#101828]">
            Internal rate of return
          </p>
        </div>
      </div>
    </div>
  );
}
