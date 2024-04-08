import ImageView from "../../Components/ImageView";
import { useState, useEffect } from "react";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";

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
  // const faqdata = [
  //   {
  //     Question: "What is Solarpunk DAO’s goal with $Earth?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span>&nbsp;</p>\n',
  //   },
  //   {
  //     Question: "Is $Earth pegged?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span></p>\n',
  //   },
  //   {
  //     Question: "What climate solutions will $Earth fund?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span></p>\n',
  //   },
  //   {
  //     Question: "What are $Earth tokenomics?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span></p>\n',
  //   },
  //   {
  //     Question: "Will $Earth help offset carbon emissions?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span></p>\n',
  //   },
  //   {
  //     Question: "How will governance be handled?",
  //     Answer:
  //       '<p><span style="color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;">Mobilize capital required for climate solutions over the next 30 years</span></p>\n',
  //   },
  // ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
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
        <div className="relative  w-full">
          <ImageView
            src={faq}
            alt="faq"
            width={800}
            height={800}
            className="w-full  h-[35vh] sm:h-[50vh] rounded-md object-cover"
          />
          <div className="flex w-full justify-between gap-6 items-center py-4 px-8 absolute bottom-2 sm:bottom-4">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-white font-syne font-semibold text-[15px] sm:text-[28px]">
                Converse with our AI assitant
              </p>
              <p className="text-white font-inter font-normal  text-[10px] sm:text-[16px]">
                Can’t find the answer you’re looking for? Ask our AI assistant.
              </p>
            </div>
            <button className="w-[80px] sm:w-[100px]  text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
              Earth GPT
            </button>
          </div>
        </div>
        <div className="sm:px-[6%] px-4 flex flex-col w-full items-start">
          {faqdata && faqdata.length
            ? faqdata.map(({ question, answer }, i) => {
                return (
                  <FAQSection
                    Question={question}
                    Answer={answer}
                    key={i}
                    i={i}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

function FAQSection({ Question, Answer, i }) {
  const [index, setIndex] = useState([]);

  const handleClick = (i) => {
    if (index === i) {
      setIndex("");
      return;
    }

    setIndex(i);
  };
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

  const contentBlock = htmlToDraft(Answer);
  const contentState = ContentState.createFromBlockArray(
    contentBlock.contentBlocks
  );
  const editorState = EditorState.createWithContent(contentState);
  return (
    <div
      key={i}
      className={`flex flex-col w-full cursor-pointer p-4 py-6 items-start ${
        i !== Question.length - 1 ? "border-b-2 border-[#EAECF0]" : ""
      }`}
      onClick={() => handleClick(i)}
    >
      <div className="flex w-full gap-4 justify-between">
        <p className="font-inter font-semibold text-[16px] text-[#101828] w-[70%] sm:w-full">
          {Question}
        </p>
        <button className="cursor-pointer">
          <ImageView
            src={index === i ? minus : plus}
            alt="icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      {index === i ? (
        <div className="w-[50%] sm:w-full">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="richText-editor"
            toolbarHidden={true}
            readOnly={true}
          />
        </div>
      ) : null}
    </div>
  );
}
