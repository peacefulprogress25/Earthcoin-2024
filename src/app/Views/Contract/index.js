import ImageView from "../../Components/ImageView";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import { Loader } from "../../Components/Loader";
import { useEffect, useState } from "react";

export default function Contract() {
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.contractPage,
        websiteId: nexaflowPageObj.website,
      });

      setContracts(page?.Contracts);
    };

    getPageByID();
  }, []);
  // const contracts = [
  //   {
  //     type: "Polygon",
  //     name: "$EARTH Token Contract",
  //     wallet: "0x9F9f149a02Cddc9a825120",
  //     img: "/assets/icons/polygon.svg",
  //   },
  //   {
  //     type: "Polygon",
  //     name: "$EARTH Token Contract",
  //     wallet: "0x9F9f149a02Cddc9a825120",
  //     img: "/assets/icons/polygon.svg",
  //   },
  //   {
  //     type: "Optimism",
  //     name: "$EARTH Token Contract",
  //     wallet: "0x9F9f149a02Cddc9a825120",
  //     img: "/assets/icons/optimism.svg",
  //   },
  //   {
  //     type: "Polygon",
  //     name: "$EARTH Token Contract",
  //     wallet: "0x9F9f149a02Cddc9a825120",
  //     img: "/assets/icons/polygon.svg",
  //   },
  //   {
  //     type: "Polygon",
  //     name: "$EARTH Token Contract",
  //     wallet: "0x9F9f149a02Cddc9a825120",
  //     img: "/assets/icons/polygon.svg",
  //   },
  // ];
  return (
    <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
          About
        </p>
        <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
          $EARTH Contracts
        </p>
        <p className="text-[#475467] text-center font-normal  text-[16px] sm:text-[15px] font-inter">
          Addresses for all contracts governing $EARTH across chains
        </p>
      </div>
      <div className="sm:px-[20%] px-4 flex gap-2 pb-20 border-b-2 border-[#EAECF0] sm:gap-4 flex-col w-full items-center">
        {contracts && contracts.length ? (
          contracts?.map((contract, index) => (
            <div className="flex gap-2 sm:gap-4" key={index}>
              <div className="flex flex-col w-[5rem] grow sm:w-[7rem]  p-2 items-center justify-center border-2 rounded-lg  border-[#EAECF0] gap-2">
                <ImageView
                  src={contract?.logo}
                  alt="contractImg"
                  width={50}
                  height={50}
                />
                <p className="text-[#475467] font-inter font-medium text-[14px]">
                  {contract?.chain}
                </p>
              </div>
              <div className="flex flex-col w-[13rem] grow sm:w-[24rem]  p-2 sm:p-4 items-start justify-center border-2 rounded-lg  border-[#EAECF0] gap-2">
                <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                  {contract?.chain}
                </p>
                <p className="text-[#101828] font-inter font-semibold text-[16px]">
                  {contract?.title}
                </p>
                <p className="text-[#475467] font-inter font-normal text-[13px]">
                  {contract?.address}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
