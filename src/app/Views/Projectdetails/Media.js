import ImageView from "../../Components/ImageView";
import { Chrono } from "react-chrono";
import { Loader } from "../../Components/Loader";

const file = "/assets/icons/file-text.svg";
const media = "/assets/images/media.png";

export default function Media({ details }) {
  // const [editorLoaded, setEditorLoaded] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setEditorLoaded(true);
  //   }
  // }, []);

  // if (!editorLoaded) {
  //   return null;
  // }

  // const { Editor } = require("react-draft-wysiwyg");
  // const { EditorState, ContentState } = require("draft-js");
  // const htmlToDraft = require("html-to-draftjs").default;

  // let editorState = EditorState.createEmpty();
  // if (details?.overview) {
  //   const contentBlock = htmlToDraft(details?.mediaDescription);
  //   const contentState = ContentState.createFromBlockArray(
  //     contentBlock.contentBlocks
  //   );
  //   editorState = EditorState.createWithContent(contentState);
  // }


  const updates = details?.updates && details?.updates.length ? details?.updates?.filter(updates => updates?.title) : []


  if (updates && updates?.length) {
    return (
      <div className="flex flex-col w-full items-start px-[5%]">
        <p className="text-[28px] text-left font-semibold text-[#101828] font-syne">
          Project Updates
        </p>
        <div className="flex flex-col w-[100%] h-fit">
          {updates && updates.length ? (
            <div className="w-full max-w-[700px] mx-auto px-4 custom-chrono">
              <Chrono
                items={updates}
                mode="VERTICAL"
                disableToolbar
                cardHeight={250}
                timelinePointShape="square"
                timelinePointDimension={20}
                theme={{
                  primary: "#E4E7EC",
                  secondary: "#667085",
                  titleColor: "#667085",
                  cardTitleColor: "#000000",
                  cardSubtitleColor: "#667085",
                  titleColorActive: "#E4E7EC",
                  iconBackgroundColor: "transparent",
                }}
                fontSizes={{
                  cardSubtitle: "12px",
                  cardTitle: "14px",
                  cardText: "10px",
                  title: "12px",
                }}
                scrollable={{ scrollbar: true }}
              >
                {updates?.map((updates, index) => (
                  <div key={index} className="w-full">
                    <button className="w-full flex justify-center items-center gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#6172F3] font-normal text-[12px] sm:text-[14px]">
                      <ImageView src={file} alt="file" width={16} height={16} className="sm:w-5 sm:h-5" />
                      {updates.btnText}
                    </button>
                  </div>
                ))}
              </Chrono>
            </div>
          ) : (
            <div className='w-full h-[30vh] flex items-center justify-center'>
              <Loader />
            </div>
          )}
        </div>
        <div className="bg-[#EAECF0] w-full h-[2px]"></div>
      </div>
    );
  }
  return null
}
