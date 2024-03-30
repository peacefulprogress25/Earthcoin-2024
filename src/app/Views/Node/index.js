import ImageView from "../../Components/ImageView";
import WorldMap from "../Projects/WorldMap";
import Minting from "../../Components/Minting";
export default function Node() {
  const nodeList = [
    {
      name: "John Doe",
      country: "India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, ex id porttitor vehicular.",
      img: "/assets/images/node.png",
      balance: "746",
    },
    {
      name: "John Doe",
      country: "India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, ex id porttitor vehicular.",
      img: "/assets/images/node.png",
      balance: "55",
    },
    {
      name: "John Doe",
      country: "India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, ex id porttitor vehicular.",
      img: "/assets/images/node.png",
      balance: "1575",
    },
    {
      name: "John Doe",
      country: "India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum, ex id porttitor vehicular.",
      img: "/assets/images/node.png",
      balance: "1",
    },
  ];
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
    },
    {
      icon: "/assets/icons/linkedin.svg",
    },
    {
      icon: "/assets/icons/football.svg",
    },
  ];
  return (
    <div className="mt-20 w-full">
      <WorldMap />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-[6%] mt-16 h-fit flex flex-col gap-12 items-center justify-center w-full">
        <div className="flex sm:px-[20%] px-4 flex-col w-full gap-10">
          <p className="text-[#101828] font-semibold text-center text-[24px] sm:text-[34px] font-syne">
            From purging petro dollars to forming partnerships to policy making,
            these nodes keep the $EARTH network running
          </p>
          {nodeList.map((node, index) => (
            <div className="flex gap-3 w-full" key={index}>
              <div className="p-6 h-fit flex flex-col max-w-[40rem] w-full items-center sm:items-start sm:flex-row border border-[#EAECF0] rounded-lg gap-5">
                <ImageView
                  src={node?.img}
                  alt="node"
                  width={90}
                  height={90}
                  className="h-[10rem] w-[8rem] object-cover"
                />
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                    {node?.country}
                  </p>
                  <p className="text-[#101828] font-inter font-semibold text-[16px]">
                    {node?.name}
                  </p>
                  <p className="text-[#475467] w-full sm:w-[65%] text-center sm:text-left font-inter font-normal text-[14px]">
                    {node?.description}
                  </p>
                  <div className="flex  gap-1">
                    {socialIcons.map((icons, index) => (
                      <button className="cursor-pointer w-6 h-6" key={index}>
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
              </div>
              <div className="p-6 px-8 flex flex-col max-w-[10rem] w-full items-center justify-between border border-[#EAECF0] rounded-lg gap-3">
                <p className="text-[#EC8000] font-inter text-center font-semibold text-[12px]">
                  Wallet Balance
                </p>
                <p className="text-[#101828] font-inter font-semibold text-[30px] sm:text-[40px]">
                  {node?.balance}
                </p>
                <p className="text-[#475467] font-inter font-normal text-[14px]">
                  $EARTH
                </p>
              </div>
            </div>
          ))}
        </div>
        <Minting />
      </div>
    </div>
  );
}
