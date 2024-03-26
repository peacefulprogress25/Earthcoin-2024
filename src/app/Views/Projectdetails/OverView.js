import { useState, useEffect } from "react";
import ImageView from "../../Components/ImageView";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";

export default function OverView({ details }) {
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
  const addElement = (value) => {
    const contentBlock = htmlToDraft(value);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };
  return (
    <div className="flex w-full flex-col gap-8 px-[5%] mt-12">
      <div className="flex flex-col sm:flex-row !items-start gap-16">
        <div className="flex flex-col gap-2">
          <div className="flex max-w-44 sm:max-w-52 w-full flex-col border-y-2 font-inter py-3 border-[#EAECF0] items-start gap-3">
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
          <div className="text-[14px] sm:text-[16px]  font-inter text-[#475467]">
            <Editor
              toolbarHidden
              editorState={addElement(details?.description1)}
              wrapperClassName="demo-wrapper"
              editorClassName="richText-display"
              readOnly
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
      <div className="flex sm:flex-row flex-col gap-3 sm:gap-8 mt-2 w-full items-center justify-center border-[#EAECF0]">
        <div className="flex items-center w-[14rem] sm:w-[18rem]  px-4  py-6  border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col">
          <p className="font-syne font-semibold text-center text-[20px] sm:text-[32px] text-[#EC8000]">
            {details.projectValue}
          </p>
          <p className="font-inter font-semibold text-center text-[14px] text-[#101828]">
            Total project value
          </p>
        </div>
        <div className="flex items-center w-[14rem] sm:w-[18rem] px-4   py-6 border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col">
          <p className="font-syne font-semibold text-[20px] text-center sm:text-[32px] text-[#EC8000]">
            {details.fundingNeeded}
          </p>
          <p className="font-inter font-semibold text-center text-[14px] text-[#101828]">
            Funding needed
          </p>
        </div>
        <div className="flex items-center w-[14rem] sm:w-[18rem] px-4  py-6 rounded-lg shadow-lg border-2 border-[#EAECF0]  justify-center flex-col">
          <p className="font-syne font-semibold text-[20px] text-center sm:text-[32px] text-[#EC8000]">
            {details.returnValue}
          </p>
          <p className="font-inter font-semibold text-center text-[14px] text-[#101828]">
            Internal rate of return
          </p>
        </div>
      </div>
    </div>
  );
}
