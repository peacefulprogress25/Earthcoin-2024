import { Chrono } from "react-chrono";
import ImageView from "../../Components/ImageView";
import "./update.css";

const file = "/assets/icons/file-text.svg";
const play = "/assets/icons/play.svg";
export default function Updates() {
  const updates = [
    {
      title: "Jan 22",
      cardTitle: "Posted monthly expense sheet",
      cardSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      btnText: "JanuaryExp..",
    },
    {
      title: "Dec 12",
      cardTitle: "Uploaded smart contracts",
      cardSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      btnText: "",
    },
    {
      title: "Nov 18",
      cardTitle: "Uploaded smart contracts",
      cardSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      btnText: "RainVideo...",
    },
    {
      title: "Nov 4",
      cardTitle: "Minted PFPs",
      cardSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      btnText: "RainVideo...",
    },
    {
      title: "Oct 28",
      cardTitle: "File handouts",
      cardSubtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
      btnText: "RainVideo...",
    },
  ];
  return (
    <div>
      <div className="mt-44 w-full h-fit max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Updates
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            $EARTH Updates
          </p>
          <p className="text-[#475467] text-center font-normal w-[70%]  text-[16px] font-inter">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam.
          </p>
        </div>
        <div className="flex flex-col h-fit">
          {/* {updates?.map((update, index) => (
            <div className="flex justify-start" key={index}>
              <p className="text-[#667085] text-center pr-8 font-normal   text-[12px] font-inter">
                {update?.date}
              </p>
              <div className="flex flex-col items-start h-[12rem] px-8 border-l-2 border-[#E4E7EC]">
                <p className="text-black text-center  font-normal   text-[16px] font-inter">
                  {update?.update}
                </p>
                <p className="text-[#667085] text-center  font-normal   text-[12px] font-inter">
                  {update?.descriprion}
                </p>
              </div>
            </div>
          ))} */}

          <Chrono items={updates} mode="VERTICAL">
            <button className="flex gap-1 p-1 font-inter border border-[#D0D5DD] rounded-md text-[#6172F3] font-normal text-[14px]">
              <ImageView src={file} alt="file" width={20} height={20} />
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
            </button>
          </Chrono>
        </div>
      </div>
    </div>
  );
}
