import { useState, useEffect } from "react";
import ImageView from "../../Components/ImageView";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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

  let editorState = EditorState.createEmpty();
  if (details?.overview) {
    const contentBlock = htmlToDraft(details?.overview);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    editorState = EditorState.createWithContent(contentState);
  }
  return (
    <div id='overview' className='flex flex-col w-full gap-8 mt-12'>
      <div className='flex flex-col sm:flex-row !items-start gap-28'>
        <div className='flex flex-col items-center w-full gap-2 sm:w-auto sm:items-start'>
          <div className='flex max-w-44 sm:max-w-52 w-full flex-col border-y-2 font-Inter py-3 border-[#EAECF0] items-center sm:items-start gap-3'>
            <p className='text-[#EC8000] font-semibold text-[14px]'>
              Priority Rank
            </p>
            <p className='text-[#475467] font-semibold text-[14px]'>
              #{details?.priorityRank}
            </p>
            <p className='text-[#EC8000] font-semibold mt-2 text-[14px]'>
              Status
            </p>
            <p className='text-[#475467] font-semibold text-[14px]'>
              {details?.status}
            </p>

            <p className='text-[#EC8000] font-semibold mt-2 text-[14px]'>
              Date of approval{" "}
            </p>
            <p className='text-[#475467] font-semibold sm:w-[8rem] text-[14px]'>
              {details?.dateApproved}
            </p>
          </div>
          {/* <div className='flex gap-2'>
            {socialIcons.map((icons, index) => (
              <button
                className='cursor-pointer w-8 h-8 p-2 border-2 border-[#D0D5DD] rounded-md'
                key={index}
              >
                <ImageView
                  alt={icons.icon}
                  src={icons.icon}
                  width={20}
                  height={20}
                  className='object-contain'
                />
              </button>
            ))}
          </div> */}
        </div>
        <div className='flex flex-col items-start'>
          <p className='text-[#101828] font-semibold font-syne text-[30px]'>
            Overview
          </p>
          <div className='text-[12px] sm:text-[14px] md:text-[16px] text-[#475467] '>
            <Editor
              editorState={editorState}
              wrapperClassName='demo-wrapper'
              editorClassName='richText-editor custom-contract'
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

      <div className='flex sm:flex-row flex-col gap-3 sm:gap-8 mt-2 items-center  border-[#EAECF0]'>
        {details?.projectValue ? <div className='flex items-center w-[14rem] sm:w-[22rem]  px-4  py-6  border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col'>
          <p className='font-syne font-semibold text-center text-[20px] sm:text-[32px] text-[#EC8000]'>
            {details?.projectValue}
          </p>
          <p className='font-Inter font-semibold text-center text-[14px] text-[#101828]'>
            Total project value
          </p>
        </div> : null}
        {details?.fundingNeeded ? <div className='flex items-center w-[14rem] sm:w-[22rem] px-4   py-6 border-2 rounded-lg shadow-lg border-[#EAECF0] justify-center flex-col'>
          <p className='font-syne font-semibold text-[20px] text-center sm:text-[32px] text-[#EC8000]'>
            {details?.fundingNeeded}
          </p>
          <p className='font-Inter font-semibold text-center text-[14px] text-[#101828]'>
            Funding needed
          </p>
        </div> : null}
        {details?.Irr ? <div className='flex items-center w-[14rem] sm:w-[22rem] px-4  py-6 rounded-lg shadow-lg border-2 border-[#EAECF0]  justify-center flex-col'>
          <p className='font-syne font-semibold text-[20px] text-center sm:text-[32px] text-[#EC8000]'>
            {details?.Irr}
          </p>
          <p className='font-Inter font-semibold text-center text-[14px] text-[#101828]'>
            Internal rate of return
          </p>
        </div> : null}
      </div>
    </div>
  );
}
