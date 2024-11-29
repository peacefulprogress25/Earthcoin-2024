"use client";
import ImageView from "../../Components/ImageView";
import Minting from "../../Components/Minting";
import Insight from "./insight";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import Link from "next/link";
import { Loader } from "../../Components/Loader";
import { useEffect, useState } from "react";

const twitter = "/assets/icons/twitter.svg";
const linkedin = "/assets/icons/linkedin.svg";
const website = "/assets/icons/football.svg";
export default function Node() {
  const [nodeList, setNodeList] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.earthNodePage,
        websiteId: nexaflowPageObj.website,
      });

      setNodeList(page?.Nodes);
    };

    getPageByID();
  }, []);

  return (
    <div className="w-full mt-20">
      <Insight nodeList={nodeList} />
      <div className="flex flex-col items-center justify-center w-full gap-12 mx-auto mt-16 px-4 sm:px-[6%] 2xl:px-0 h-fit">
        <div className="flex flex-col w-full gap-10">
          <p className="text-[#101828] font-semibold text-center text-[20px] sm:text-[24px] md:text-[36px] font-syne">
            From purging petro dollars to forming partnerships to policy making,
            these nodes keep the $EARTH network running
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-6">
            {nodeList && nodeList.length ? (
              nodeList.map((node, index) => (
                <div className="flex flex-col justify-center w-full gap-3 sm:flex-row" key={index}>
                  <div className="p-4 sm:p-6 h-fit flex flex-col max-w-full sm:max-w-[40rem] w-full items-center sm:items-start sm:flex-row border border-[#EAECF0] rounded-xl gap-5">
                    <ImageView
                      src={node?.image}
                      alt="node"
                      width={90}
                      height={90}
                      className="h-[7rem] w-[7rem] sm:h-[9rem] sm:w-[9rem] object-cover"
                    />
                    <div className="flex flex-col items-center gap-2 sm:items-start">
                      <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                        {node?.country}
                      </p>
                      <p className="text-[#101828] font-inter font-semibold text-[16px]">
                        {node?.name}
                      </p>
                      <p className="text-[#475467] w-full text-center sm:text-left font-inter font-normal text-[14px]">
                        {node?.description}
                      </p>
                      <div className="flex gap-3 mt-1">
                        {/* {socialIcons.map((icons, index) => ( */}
                        <Link href={node?.twitter} className="cursor-pointer">
                          <ImageView
                            alt="twitter"
                            src={twitter}
                            width={18}
                            height={18}
                          />
                        </Link>
                        <Link href={node?.linkedin} className="cursor-pointer">
                          <ImageView
                            alt="linkedin"
                            src={linkedin}
                            width={18}
                            height={18}
                          />
                        </Link>
                        <Link
                          href={node?.companyWebsite}
                          className="cursor-pointer"
                        >
                          <ImageView
                            alt="website"
                            src={website}
                            width={18}
                            height={18}
                          />
                        </Link>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 px-6 sm:px-8 flex flex-row sm:flex-col max-w-full sm:max-w-[10rem] w-full items-center justify-between border border-[#EAECF0] rounded-xl gap-3">
                    <p className="text-[#EC8000] font-inter text-center font-semibold text-[12px]">
                      Wallet Balance
                    </p>
                    <p className="text-[#101828] font-inter font-semibold text-[24px] sm:text-[30px] md:text-[40px]">
                      {node?.balance}
                    </p>
                    <p className="text-[#475467] font-inter font-normal text-[14px]">
                      $EARTH
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
        <div className="flex w-full">
          <Minting />
        </div>
      </div>
    </div>
  );
}
