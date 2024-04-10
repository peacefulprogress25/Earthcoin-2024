import ImageView from "../../Components/ImageView";
import { FaPlus } from "react-icons/fa6";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import Minting from "../../Components/Minting";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import Link from "next/link";
import { Loader } from "../../Components/Loader";
import { useEffect, useState } from "react";

const wallet = "/assets/icons/wallet.svg";
const chart = "/assets/images/Line and bar chart.png";
export default function Dashboard() {
  const [fundingData, setFundingData] = useState([]);
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.dashboardPage,
        websiteId: nexaflowPageObj.website,
      });
      console.log(page);
      setFundingData(page?.FundingNeeds);
    };

    getPageByID();
  }, []);
  const priceData = [
    {
      title: "Mint Price",
      price: "10.00",
      increase: true,
      percent: "3%",
      img: "/assets/icons/green-chart.svg",
    },
    {
      title: "Mint Price",
      price: "10.00",
      percent: "10%",
      img: "/assets/icons/red-chart.svg",
    },
  ];
  const cardData = [
    {
      title: "Mint Price",
      price: "10.00",
      daiBalance: "true",
      increase: true,
      percent: "3%",
      img: "/assets/icons/green-chart.svg",
    },
    {
      title: "Mint Price",
      price: "10.00",
      percent: "10%",
    },
    {
      title: "Mint Price",
      price: "316",
      increase: true,
      percent: "10%",
    },
    {
      title: "Mint Price",
      price: "27%",
    },
    {
      title: "Mint Price",
      price: "27%",
    },
    {
      title: "Mint Price",
      price: "27%",
    },
  ];

  const transactionList = [
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "Claim Tokens",
      block: "53738389",
      age: "2 hrs 41 mins ago",
      from: "0x0DBAd7...2a4dfE84",
      to: "0xB0531A...725FB315",
      quantity: "3.69",
    },
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "Claim Tokens",
      block: "53738389",
      age: "2 hrs 41 mins ago",
      from: "0x0DBAd7...2a4dfE84",
      to: "0xB0531A...725FB315",
      quantity: "3.69",
    },
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "Claim Tokens",
      block: "53738389",
      age: "2 hrs 41 mins ago",
      from: "0x0DBAd7...2a4dfE84",
      to: "0xB0531A...725FB315",
      quantity: "3.69",
    },
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "Claim Tokens",
      block: "53738389",
      age: "2 hrs 41 mins ago",
      from: "0x0DBAd7...2a4dfE84",
      to: "0xB0531A...725FB315",
      quantity: "3.69",
    },
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "Claim Tokens",
      block: "53738389",
      age: "2 hrs 41 mins ago",
      from: "0x0DBAd7...2a4dfE84",
      to: "0xB0531A...725FB315",
      quantity: "3.69",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Dashboard
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            $EARTH Summary
          </p>
          <p className="text-[#475467] text-center font-normal  text-[16px] font-inter">
            Track, manage and forecast $EARTH trends.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-4 justify-between items-center">
          <div className="flex flex-col w-full items-center sm:items-start gap-1">
            <p className="text-[#101828] font-inter text-left font-semibold text-[14px]">
              Token Contract
            </p>
            <p className="text-[#475467] font-inter text-left font-normal text-[14px]">
              0x9F9f149a02Cddc9a8251207cef
            </p>
          </div>
          <div className="flex  items-center gap-2">
            <button className="w-[80px] sm:w-[120px] gap-1 text-[#344054]  border border-[#D0D5DD] font-inter flex h-10 items-center justify-center rounded-md  p-2 text-xs sm:text-sm">
              <ImageView
                src={wallet}
                alt="wallet"
                width={20}
                height={20}
                className="w-4 h-4 object-contain"
              />
              Learn More
            </button>
            <button className="w-[80px]  gap-1 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
              <FaPlus size={17} color="#fff" />
              Add
            </button>
          </div>
        </div>
        {fundingData && fundingData.length ? (
          <>
            <div className="flex flex-col sm:flex-row gap-3">
              {priceData?.map((price, index) => (
                <div
                  className="flex flex-col p-6 w-[18rem] sm:w-[34rem] rounded-lg shadow-sm gap-3 border border-[#EAECF0]"
                  key={index}
                >
                  <p className="text-[#101828] text-[14px] font-semibold font-inter">
                    {price?.title}
                  </p>
                  <div className="flex justify-between gap-2 items-end">
                    <div className="flex flex-col items-start">
                      <p className="text-[#101828] text-[40px] font-semibold font-syne">
                        {price?.price}
                        <span className="text-[22px]">$DAI</span>
                      </p>
                      <div className="flex gap-1">
                        <button
                          className={`flex font-inter font-medium text-[12px] ${
                            price?.increase
                              ? "text-[#027A48]"
                              : "text-[#B42318]"
                          }`}
                        >
                          {price?.increase ? (
                            <GoArrowUp size={15} color="#027A48" />
                          ) : (
                            <GoArrowDown size={15} color="#B42318" />
                          )}
                          {price?.percent}
                        </button>
                        <p className="text-[#475467] text-[12px] font-medium font-inter">
                          vs last month
                        </p>
                      </div>
                    </div>
                    <ImageView
                      src={price?.img}
                      alt="chart"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#101828] w-full pb-3 border-b border-[#EAECF0] font-inter text-left font-semibold text-[14px]">
              Price chart
            </p>
            <ImageView
              src={chart}
              alt="chart"
              width={1000}
              height={1000}
              className="w-full h-[35vh] object-cover"
            />
            <div className="grid w-full items-center grid-cols-1 sm:grid-cols-3 gap-6">
              {cardData?.map((price, index) => (
                <div
                  className="flex flex-col p-6 w-[18rem] sm:w-[24rem] rounded-lg shadow-sm gap-3 border border-[#EAECF0]"
                  key={index}
                >
                  <p className="text-[#101828] text-[14px] font-semibold font-inter">
                    {price?.title}
                  </p>
                  <div className="flex justify-between gap-2 items-end">
                    <div className="flex flex-col items-start">
                      <p className="text-[#101828] text-[40px] font-semibold font-syne">
                        {price?.price}
                        {price?.daiBalance && (
                          <span className="text-[22px]">$DAI</span>
                        )}
                      </p>
                      {price?.percent ? (
                        <div className="flex gap-1">
                          <button
                            className={`flex font-inter font-medium text-[12px] ${
                              price?.increase
                                ? "text-[#027A48]"
                                : "text-[#B42318]"
                            }`}
                          >
                            {price?.increase ? (
                              <GoArrowUp size={15} color="#027A48" />
                            ) : (
                              <GoArrowDown size={15} color="#B42318" />
                            )}
                            {price?.percent}
                          </button>
                          <p className="text-[#475467] text-[12px] font-medium font-inter">
                            vs last month
                          </p>
                        </div>
                      ) : null}
                    </div>
                    {price?.img ? (
                      <ImageView
                        src={price?.img}
                        alt="chart"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full items-center sm:items-start">
              <p className="text-[#101828] text-[28px] text-left  font-semibold font-syne">
                Sector wise funding breakdown
              </p>
              <p className="text-[#475467] text-[14px] text-left  font-normal font-inter">
                Track, manage and forecast $EARTH trends.
              </p>
              <div className="flex flex-col sm:flex-row mt-8 gap-6">
                {fundingData?.map((fund, index) => (
                  <div
                    className="flex flex-col p-4 w-[14rem] rounded-lg shadow-sm gap-3 border border-[#EAECF0]"
                    key={index}
                  >
                    <div className="flex justify-between">
                      <p className="text-[#101828] w-[50%] text-[14px] font-semibold font-inter">
                        {fund?.title}
                      </p>
                      <ImageView
                        src={fund?.icon}
                        alt="chart"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[#101828]  text-[40px] font-semibold font-syne">
                      {fund?.price}
                      <span className="text-[22px]">$DAI</span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[#101828] text-[28px] text-left mt-8  font-semibold font-syne">
                All transactions
              </p>
              <div className="w-full border  my-8 sm:mb-0 flex gap-2 p-2 rounded-md border-[#D0D5DD] shadow-sm">
                <IoSearchOutline size={22} color="#667085" />
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[#667085] font-inter text-[14px] font-normal"
                />
              </div>
              <div className="w-full hidden sm:flex mb-6 flex-col">
                <table className="table-auto  !rounded-t-lg  mt-6  border-2 border-[#EAECF0]">
                  <thead className="bg-transparent h-[40px]  !w-full  text-left font-inter font-medium text-[#475467] text-[12px]">
                    <tr className="rounded-t-[10px] border border-[#EAECF0]">
                      <th className="bg-[#F9FAFB] flex-1 rounded-l-[10px] pl-4">
                        <p>Transaction Hash</p>
                      </th>
                      <th className="bg-[#F9FAFB] flex-1  ">
                        <p>Method</p>
                      </th>
                      <th className="bg-[#F9FAFB] flex-1 ">
                        <p>Block</p>
                      </th>
                      <th className=" bg-[#F9FAFB] flex-1">
                        <p>Age</p>
                      </th>
                      <th className=" bg-[#F9FAFB] flex-1">
                        <p>From</p>
                      </th>
                      <th className=" bg-[#F9FAFB] flex-1">
                        <p>To</p>
                      </th>
                      <th className=" bg-[#F9FAFB] w-[100px] flex-1 pr-2 rounded-r-[10px]">
                        <p>Quantity</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-transparent text-[#101828]  !w-full text-[12px] font-semibold">
                    {transactionList.map((list, index) => (
                      <tr
                        key={index}
                        className={`h-[60px] border-t-2 rounded-t-md border-[#EAECF0] border-b font-inter font-medium 
                     text-[#101828]`}
                      >
                        <td>
                          <p className="pl-4">{list.hash}</p>
                        </td>
                        <td>
                          <p className="rounded-full w-fit p-1 text-[#344054] bg-[#F2F4F7]">
                            {list.method}
                          </p>
                        </td>
                        <td>
                          <p>{list.block}</p>
                        </td>
                        <td>
                          <p>{list.age}</p>
                        </td>
                        <td>
                          <p>{list.from}</p>
                        </td>
                        <td>
                          <p>{list.to}</p>
                        </td>
                        <td>
                          <p>{list.quantity}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center w-full p-4 border-b-2 border-x-2 rounded-b-md border-[#EAECF0] h-[50px]">
                  <button className="p-1 cursor-pointer w-fit h-fit border-2 font-medium border-[#D0D5DD] font-inter rounded-md text-[#344054] text-[12px]">
                    Previous
                  </button>
                  <p className="text-[#344054] font-medium font-inter text-[12px]">
                    Page 1 of 10
                  </p>
                  <button className="p-1 w-fit h-fit cursor-pointer font-medium border-2 font-inter border-[#D0D5DD] rounded-md text-[#344054] text-[12px]">
                    Next
                  </button>
                </div>
              </div>
              <Minting />
            </div>{" "}
          </>
        ) : (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
