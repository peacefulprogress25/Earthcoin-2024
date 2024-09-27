import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { Loader } from "../../Components/Loader";
import Gpt from "../../Components/Gpt";
import Link from "next/link";
import buttonConfig from "../../utils/button";

const faq = "/assets/images/faq.png";
const plus = "/assets/icons/plus-circle.svg";
const minus = "/assets/icons/minus-circle.svg";
export default function Faq() {
  const [faqdata, setFaqdata] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.faqsPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setFaqdata(page?.faq);
    };

    getPageByID();
  }, []);

  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            FAQs
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Frequently asked questions
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Have questions? We’re here to help.
          </p>
        </div>
        <Gpt isFaq={true} />
        {/* <div className="sm:px-[6%] px-4 flex flex-col w-full items-start sm:items-center">
          {faqdata && faqdata.length ? (
            faqdata.map(({ question, answer }, i) => {
              return (
                <FAQSection Question={question} Answer={answer} key={i} i={i}  />
              );
            })
          ) : (
            <div className="h-[60vh] w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
        </div> */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#101828] font-semibold text-center max-[480px]:text-[11px] text-[18px]  font-syne">
            Chat with Ask $EARTH to resolve all your queries
          </p>
          <Link
            className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm"
            href={buttonConfig?.projects_footer_banner?.link || ""}
            target={
              buttonConfig?.projects_footer_banner?.external
                ? "_blank"
                : "_self"
            }
          >
            {buttonConfig?.projects_footer_banner?.title}
          </Link>
        </div>
        <div className="w-full h-[1.5px] my-8 bg-[#F2F4F7]"></div>
      </div>
    </div>
  );
}

// function FAQSection({ Question, Answer, i }) {
//   const [index, setIndex] = useState(0);

//   const handleClick = (i) => {
//     if (index === i) {
//       setIndex("");
//       return;
//     }

//     setIndex(i);
//   };
//   const [editorLoaded, setEditorLoaded] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setEditorLoaded(true);
//     }
//   }, []);

//   if (!editorLoaded) {
//     return null;
//   }

//   const { Editor } = require("react-draft-wysiwyg");
//   const { EditorState, ContentState } = require("draft-js");
//   const htmlToDraft = require("html-to-draftjs").default;

//   const contentBlock = htmlToDraft(Answer);
//   const contentState = ContentState.createFromBlockArray(
//     contentBlock.contentBlocks
//   );
//   const editorState = EditorState.createWithContent(contentState);
//   return (
//     <div
//       key={i}
//       className={`flex flex-col w-full cursor-pointer p-4 py-6 items-start ${
//         i !== Question.length - 1 ? "border-b-2 border-[#EAECF0]" : ""
//       }`}
//       onClick={() => handleClick(i)}
//     >
//       <div className="flex justify-between w-full gap-4">
//         <p className="font-inter font-semibold text-[16px] text-[#101828] w-[70%] sm:w-full">
//           {Question}
//         </p>
//         <button className="cursor-pointer">
//           <ImageView
//             src={index === i ? minus : plus}
//             alt="icon"
//             width={25}
//             height={25}
//           />
//         </button>
//       </div>
//       {index === i ? (
//         <div className="w-full text-xs leading-relaxed sm:text-[16px] sm:leading-7 font-inter text-[#475467]">
//           <Editor
//             editorState={editorState}
//             wrapperClassName="demo-wrapper"
//             editorClassName="richText-editor"
//             toolbarHidden={true}
//             readOnly={true}
//           />
//         </div>
//       ) : null}
//     </div>
//   );
// }
