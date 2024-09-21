"use client";
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
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const wallet = "/assets/icons/wallet.svg";
const chart = "/assets/images/Line and bar chart.png";
export default function Dashboard() {
  Chart.register(...registerables);

  const dataObj = {
    label: [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [
      4000, 3000, 3000, 2000, 3000, 2000, 4000, 2000, 3000, 2000, 2000, 3000,
    ],
  };
  const labels = dataObj?.label;
  const data = {
    labels,
    datasets: [
      {
        label: "Mint",
        data: [
          2000, 2000, 3000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 2000,
          2000,
        ],
        fill: true,
        backgroundColor: "white",
        borderColor: "#fccc72",
        pointBorderColor: "#fccc72",
        pointBorderWidth: 3,
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: "Price on Dex",
        data: dataObj?.values,
        fill: true,
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#fbf5f0");
          gradient.addColorStop(1, "#fbf5f0");
          return gradient;
        },
        borderColor: "#EC8000",
        pointBorderColor: "#EC8000",
        pointBorderWidth: 3,
        pointRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#EAECF0",
        },
        border: {
          width: 1,
          color: "transparent",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
          maxRotation: 90,
          minRotation: 45,
          autoSkip: true,
          maxTicksLimit: 12,
        },
        border: {
          width: 1,
          color: "#EAECF0",
        },
        grid: {
          color: "transparent",
          tickLength: 9,
          tickWidth: 2,
          offset: true,
        },
      },
    },
  };
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
      title: "Treasury",
      price: "11,420",
      daiBalance: "true",
      increase: true,
      percent: "40%",
      img: "/assets/icons/green-chart.svg",
    },
    {
      title: "Token Holders",
      price: "1,210",
      percent: "10%",
      img: "/assets/icons/red-chart.svg",
    },
    {
      title: "$EARTH Mint Nodes",
      price: "316",
      increase: true,
      percent: "20%",
      img: "/assets/icons/green-chart.svg",
    },
    {
      title: "Percentage of $EARTH Staked",
      price: "27%",
    },
    {
      title: "Staking APY",
      price: "25%",
    },
    {
      title: "Projects Funded",
      price: "5",
    },
  ];

  const transactionList = [
    {
      hash: "DAI",
      method: "ERC-20",
      block: "53738389",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/Dai.svg",
    },
    {
      hash: "Kekén Solar Project, 69kWp",
      method: "ERC-721",
      block: "0x1f09B16a...2aF61F0A4",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/earth-black.svg",
    },
    {
      hash: "Ethic Hub",
      method: "ERC-721",
      block: "0xdad9532C...17484634f",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/earth-black.svg",
    },
    {
      hash: "Traditional Dream Factory",
      method: "ERC-721",
      block: "0x44213c28...fA1456Aed",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/earth-black.svg",
    },
    {
      hash: "Kokonut Network",
      method: "ERC-721",
      block: "0x409700f8...d5FADDD5e",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/earth-black.svg",
    },
    {
      hash: "0xca22d59e5a4a9f8b1...",
      method: "ERC-721",
      block: "0x78C6D9b5...0e7e95723",
      quantity: "9629",
      price: "$1.00",
      change: "$1.00",
      value: "$9620.00",
      icon: "/assets/icons/earth-black.svg",
    },
  ];
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col items-center gap-2">
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
        <div className="flex flex-col items-center justify-between w-full gap-4 sm:flex-row">
          <div className="flex flex-col items-center w-full gap-1 sm:items-start">
            <p className="text-[#101828] font-inter text-left font-semibold text-[14px]">
              Token Contract
            </p>
            <p className="text-[#475467] font-inter text-left font-normal text-[14px]">
              0x9F9f149a02Cddc9a8251207cef
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-[80px] sm:w-[150px] font-semibold gap-1 text-[#344054]  border border-[#D0D5DD] font-inter flex h-10 items-center justify-center rounded-md  p-2 text-xs sm:text-sm">
              <ImageView
                src={wallet}
                alt="wallet"
                width={20}
                height={20}
                className="object-contain w-4 h-4"
              />
              Import $EARTH
            </button>
            <button className="w-[80px]  gap-1 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm">
              <FaPlus size={17} color="#fff" />
              Add
            </button>
          </div>
        </div>
        {/* {fundingData && fundingData.length ? ( */}
        <>
          <div className="flex flex-col w-full gap-6 sm:flex-row">
            {priceData?.map((price, index) => (
              <div
                className="flex flex-col p-6 w-full sm:w-[41rem] rounded-lg shadow-sm gap-3 border border-[#EAECF0] mx-auto sm:mx-0 max-w-[18rem] sm:max-w-none"
                key={index}
              >
                <p className="text-[#101828] text-[14px] font-semibold font-inter text-center sm:text-left">
                  {price?.title}
                </p>
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-2">
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="text-[#101828] text-[40px] font-semibold font-syne text-center sm:text-left">
                      {price?.price}
                      <span className="text-[22px]">$DAI</span>
                    </p>
                    <div className="flex gap-1">
                      <button
                        className={`flex font-inter font-medium text-[12px] ${
                          price?.increase ? "text-[#027A48]" : "text-[#B42318]"
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
                  <div className="md:flex-wrap mt-4 sm:mt-0">
                    <ImageView
                      src={price?.img}
                      alt="chart"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#101828] w-full pb-3 border-b border-[#EAECF0] font-inter text-left font-semibold text-[14px]">
            Price chart
          </p>
          <div className="flex justify-start w-full gap-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[8px] h-[8px] bg-[#EC8000]"></div>
              <p className="text-[#475467] text-center font-normal  text-[14px] font-inter">
                Price on Dex
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[8px] h-[8px] bg-[#fccc72]"></div>
              <p className="text-[#475467] text-center font-normal  text-[14px] font-inter">
                Mint
              </p>
            </div>
          </div>
          {/* <ImageView
            src={chart}
            alt="chart"
            width={1000}
            height={1000}
            className="w-full h-[35vh] object-cover"
          /> */}
          <div className="w-[100%] h-[35vh]">
            <Line data={data} width="400" height="300" options={options} />
          </div>
          <div className="grid items-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cardData?.map((price, index) => (
              <div
                className="flex flex-col p-6 w-full rounded-lg shadow-sm gap-3 border border-[#EAECF0]"
                key={index}
              >
                <p className="text-[#101828] text-[14px] font-semibold font-inter">
                  {price?.title}
                </p>
                <div className="flex items-end justify-between gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-[#101828] text-[32px] sm:text-[36px] md:text-[40px] font-semibold font-syne">
                      {price?.price}
                      {price?.daiBalance && (
                        <span className="text-[18px] sm:text-[22px]">$DAI</span>
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
                    <div className="md:flex-wrap mt-4 sm:mt-0">
                      <ImageView
                        src={price?.img}
                        alt="chart"
                        width={80}
                        height={80}
                        className="object-cover w-20 h-20 sm:w-[100px] sm:h-[100px]"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full sm:items-start">
            <p className="text-[#101828] text-[22px] sm:text-[28px] text-left font-semibold font-syne">
              Sector wise funding breakdown
            </p>
            <p className="text-[#475467] text-[14px] text-left  font-normal font-inter">
              Track, manage and forecast $EARTH trends.
            </p>
            <div className="flex flex-col w-full gap-4 mt-8 sm:flex-row overflow-auto scrollbar-none ">
              {fundingData?.map((fund, index) => {
                const title = fund.title?.split(" ");

                return (
                  <div
                    className="flex flex-col p-4 grow w-full rounded-lg shadow-sm gap-3 border border-[#EAECF0]"
                    key={index}
                  >
                    <div className="flex justify-between">
                      <p className="text-[#101828] w-[50%] text-[16px] font-semibold font-inter">
                        {title[0]} <br /> {title[1]}
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
                );
              })}
            </div>
            <p className="text-[#101828] text-[28px] text-left mt-8  font-semibold font-syne">
              Treasury Holdings
            </p>
            <div className="w-full border  my-8 sm:mb-0 flex gap-2 p-2 rounded-md border-[#D0D5DD] shadow-sm">
              <IoSearchOutline size={22} color="#667085" />
              <input
                type="text"
                placeholder="Search"
                className="text-[#667085] font-inter text-[14px] font-normal"
              />
            </div>
            <div className="w-full border-2 rounded-md mt-6 border-[#EAECF0] mb-6 flex-col overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-transparent border-b-2 border-[#EAECF0] h-[40px] !w-full text-left font-inter font-medium text-[#475467] text-[12px]">
                  <tr className="">
                    <th className="bg-[#F9FAFB] flex-1 pl-4 rounded-tl-md">
                      <p>Asset</p>
                    </th>
                    <th className="bg-[#F9FAFB] flex-1">
                      <p>Token Standard</p>
                    </th>
                    <th className="bg-[#F9FAFB] flex-1">
                      <p>Contract Address</p>
                    </th>
                    <th className="bg-[#F9FAFB] flex-1">
                      <p>Quantity</p>
                    </th>
                    <th className="bg-[#F9FAFB] flex-1">
                      <p>Price</p>
                    </th>
                    <th className="bg-[#F9FAFB] flex-1">
                      <p>Change (24H)</p>
                    </th>
                    <th className="bg-[#F9FAFB] w-[100px] flex-1 pr-2 rounded-tr-md">
                      <p>Value</p>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent text-[#101828] !w-full text-[12px] font-semibold">
                  {transactionList.map((list, index) => (
                    <tr
                      key={index}
                      className="h-[60px] border-b-2 border-[#EAECF0] font-inter font-medium text-[#101828]"
                    >
                      <td className="max-sm:p-4">
                        <div className="flex items-center gap-2 pl-4 max-sm:pl-0">
                          <ImageView
                            src={list.icon}
                            alt="asset"
                            width={30}
                            height={30}
                            className="w-6 h-6"
                          />
                          <p className="">{list.hash}</p>
                        </div>
                      </td>
                      <td className="max-sm:p-4">
                        <p className="rounded-full w-fit p-1 text-[#344054] bg-[#F2F4F7]">
                          {list.method}
                        </p>
                      </td>
                      <td>
                        <p>{list.block}</p>
                      </td>
                      <td className="max-sm:p-4">
                        <p>{list.quantity}</p>
                      </td>
                      <td className="max-sm:p-4">
                        <p>{list.price}</p>
                      </td>
                      <td className="max-sm:p-4">
                        <p>{list.change}</p>
                      </td>
                      <td className="max-sm:p-4">
                        <p>{list.value}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Minting />
          </div>{" "}
        </>
        {/* ) : (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <Loader />
          </div>
        ) */}
      </div>
    </div>
  );
}
