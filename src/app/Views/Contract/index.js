import ImageView from "../../Components/ImageView";

export default function Contract() {
  const contracts = [
    {
      type: "Polygon",
      name: "$EARTH Token Contract",
      wallet: "0x9F9f149a02Cddc9a825120",
      img: "/assets/icons/polygon.svg",
    },
    {
      type: "Polygon",
      name: "$EARTH Token Contract",
      wallet: "0x9F9f149a02Cddc9a825120",
      img: "/assets/icons/polygon.svg",
    },
    {
      type: "Optimism",
      name: "$EARTH Token Contract",
      wallet: "0x9F9f149a02Cddc9a825120",
      img: "/assets/icons/optimism.svg",
    },
    {
      type: "Polygon",
      name: "$EARTH Token Contract",
      wallet: "0x9F9f149a02Cddc9a825120",
      img: "/assets/icons/polygon.svg",
    },
    {
      type: "Polygon",
      name: "$EARTH Token Contract",
      wallet: "0x9F9f149a02Cddc9a825120",
      img: "/assets/icons/polygon.svg",
    },
  ];
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
          About
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          $EARTH Contracts
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend <br /> faucibus eget vestibulum felis.
          Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
        </p>
      </div>
      <div className="sm:px-[20%] px-4 flex gap-2 sm:gap-4 flex-col w-full items-center">
        {contracts?.map((contract, index) => (
          <div className="flex gap-2 sm:gap-4" key={index}>
            <div className="flex flex-col w-[5rem] grow sm:w-[7rem]  p-2 items-center justify-center border-2 rounded-lg  border-[#EAECF0] gap-2">
              <ImageView
                src={contract?.img}
                alt="contractImg"
                width={50}
                height={50}
              />
              <p className="text-[#475467] font-inter font-medium text-[14px]">
                {contract?.type}
              </p>
            </div>
            <div className="flex flex-col w-[13rem] grow sm:w-[24rem]  p-2 sm:p-4 items-start justify-center border-2 rounded-lg  border-[#EAECF0] gap-2">
              <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                {contract?.type}
              </p>
              <p className="text-[#101828] font-inter font-semibold text-[16px]">
                {contract?.name}
              </p>
              <p className="text-[#475467] font-inter font-normal text-[13px]">
                {contract?.wallet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
