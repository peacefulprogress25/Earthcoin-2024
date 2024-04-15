import ImageView from "../../Components/ImageView";
import Minting from "../../Components/Minting";

const solarchakra = "/assets/images/solar-chakra.png";
const check = "/assets/icons/Check_icon.svg";
export default function Earth() {
  const earthData = [
    {
      title: "$EARTH Protocol",
      description:
        "Only SBT holders have access to mint $EARTH directly at the protocol. Purge your petro-dollars ($DAI) to mint $EARTH",
      features: [
        "Price lower than dex",
        "Increases treasury size",
        "Zero slippage",
      ],
      sbt: "How to get an SBT token",
      link: "Go to DAPP",
      img: "/assets/images/earth-protocol.png",
    },
    {
      title: "Uniswap",
      description:
        "Decentralized exchange on Ethereum, enabling trustless token swaps, liquidity provision, and automated market making for DeFi participants",
      features: [
        "Protocol owned liquidity pool rewards stakers",
        "Transaction fees grow the treasury",
        "Increased demand on dex instigates $EARTH mints",
      ],
      link: "Go to Uniswap",
      img: "/assets/images/uniswap.png",
    },
  ];
  return (
    <div>
      <div className="mt-20 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <ImageView
          src={solarchakra}
          alt="solarchakra"
          width={400}
          height={400}
        />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            About
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            How to get $EARTH
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            What is $EARTH and how to get $EARTH
          </p>
        </div>
      </div>
      <div className="flex  max-w-screen-2xl mx-auto flex-col">
        {earthData?.map((data, index) => (
          <div
            className={`flex flex-col sm:flex-row justify-between ${
              index === 1 ? "flex-col sm:flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="flex justify-center w-full sm:w-[50%] px-[6%] flex-col gap-2">
              <p className="text-[#101828] font-semibold text-left text-[20px] sm:text-[28px] font-syne">
                {data?.title}
              </p>
              <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
                {data?.description}
              </p>
              <div className="flex pl-4 flex-col my-4 gap-2">
                {data?.features?.map((feature, i) => (
                  <div className="flex gap-2" key={i}>
                    <ImageView src={check} alt="check" width={18} height={18} />
                    <p className="text-[#475467] text-left font-normal  text-[14px] font-inter">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              {data?.sbt && (
                <p className="text-[#EC8000] font-normal pb-2 text-left text-[14px] font-inter">
                  {data?.sbt}
                </p>
              )}
              <p className="text-[#EC8000] cursor-pointer font-normal text-left text-[14px] font-inter">
                {data.link}
              </p>
            </div>
            <ImageView
              src={data?.img}
              alt={data?.title}
              width={600}
              height={600}
            />
          </div>
        ))}
      </div>
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <Minting />
      </div>
    </div>
  );
}
