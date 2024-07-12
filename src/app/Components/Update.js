import { Chrono } from "react-chrono";
import ImageView from "./ImageView";
import nexaflowApi from "../services/nexaflow";
import { nexaflowPageObj } from "../utils/constants";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
// import ImageView from "/ImageView";

const file = "/assets/icons/file-text.svg";
const play = "/assets/icons/play.svg";
export default function Updates() {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.updatePage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setUpdate(page?.updates);
    };

    getPageByID();
  }, []);
  // const updates = [
  //   {
  //     title: "Jan 22",
  //     cardTitle: "Posted monthly expense sheet",
  //     cardSubtitle:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
  //     btnText: "JanuaryExp..",
  //   },
  //   {
  //     title: "Dec 12",
  //     cardTitle: "Uploaded smart contracts",
  //     cardSubtitle:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
  //     btnText: "",
  //   },
  //   {
  //     title: "Nov 18",
  //     cardTitle: "Uploaded smart contracts",
  //     cardSubtitle:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
  //     btnText: "RainVideo...",
  //   },
  //   {
  //     title: "Nov 4",
  //     cardTitle: "Minted PFPs",
  //     cardSubtitle:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
  //     btnText: "RainVideo...",
  //   },
  //   {
  //     title: "Oct 28",
  //     cardTitle: "File handouts",
  //     cardSubtitle:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
  //     btnText: "RainVideo...",
  //   },
  // ];
  return (
    <>
      {update && update.length ? (
            <Chrono
              items={update}
              mode="VERTICAL"
              disableToolbar
              cardHeight={200}
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
                cardSubtitle: "14px",
                cardTitle: "16px",
                cardText: "12px",
                title: "14px",
              }}
            >
            {update?.map((updates, index) => (
              <div key={index}>
            <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#6172F3] font-normal text-[14px]">
                <ImageView src={file} alt="file" width={20} height={20} />
               {updates.btnText}
              </button>
              </div>
            ))}
              {/* <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#F63D68] font-normal text-[14px]">
                <ImageView src={play} alt="play" width={20} height={20} />
                JanuaryExp..
              </button>

              <div></div>
              <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#F63D68] font-normal text-[14px]">
                <ImageView src={play} alt="play" width={20} height={20} />
                JanuaryExp..
              </button>
              <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#6172F3] font-normal text-[14px]">
                <ImageView src={file} alt="file" width={20} height={20} />
                JanuaryExp..
              </button>
              <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#6172F3] font-normal text-[14px]">
                <ImageView src={file} alt="file" width={20} height={20} />
                JanuaryExp..
              </button> */}
            </Chrono>
        )
      : (
        <div className='w-[50%] h-[30vh] flex items-center justify-center'>
          <Loader />
        </div>
      )}


    </>
  )
}