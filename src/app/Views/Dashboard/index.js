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
import { fetchDexPrice, totalEarth } from "../Dapp/balance";
import { Select } from "antd";

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
  const [chartData, setChartData] = useState([])
  const [priceDetails, setPriceDetails] = useState({})
  const [treasuryList, setTreasuryList] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    search: "",
    type: ""
  })

  useEffect(() => {
    setLoading(true)
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.dashboardPage,
        websiteId: nexaflowPageObj.website,
      });
      setFundingData(page?.FundingNeeds);
      setChartData(page?.PriceChart)
      setTreasuryList(page?.treasury_holdings)
      const data = await totalEarth();
      setPriceDetails(data)
      setLoading(false)
    };

    getPageByID();
  }, []);


  const priceData = [
    {
      title: "Mint Price",
      price: "10.00",
      unit: "$DAI",
      increase: true,
      percent: "3%",
      img: "/assets/icons/green-chart.svg",
    },
    {
      title: "Price On Dex",
      price: `${priceDetails?.dexPrice}`,
      unit: "$",
      percent: "10%",
      img: "/assets/icons/red-chart.svg",
    },
  ];


  const filteredData = treasuryList &&
    treasuryList.length ?
    treasuryList
      .filter(
        (obj) => (filter.type ? obj.type === filter.type : true)
      )
      .filter((obj) =>
        obj?.assetName
          ?.toLowerCase()
          ?.includes(filter?.search?.toLowerCase())
      ) : []



  return (
    loading ? <div
      className="flex items-center justify-center h-screen"
    >
      <Loader />
    </div> : <div>
      <div className='mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-[#EC8000] font-semibold text-center text-[14px] font-inter'>
            Dashboard
          </p>
          <p className='text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne'>
            $EARTH Summary
          </p>
          <p className='text-[#475467] text-center font-normal  text-[16px] font-inter'>
            Track, manage and forecast $EARTH trends.
          </p>
        </div>
        <div className='flex flex-col items-center justify-between w-full gap-4 sm:flex-row'>
          <div className='flex flex-col items-center w-full gap-1 sm:items-start'>
            <p className='text-[#101828] font-inter text-left font-semibold text-[14px]'>
              Token Contract
            </p>
            <p className='text-[#475467] font-inter text-left font-normal text-[14px]'>
              0x9F9f149a02Cddc9a8251207cef
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <button className='w-[80px] sm:w-[150px] font-semibold gap-1 text-[#344054]  border border-[#D0D5DD] font-inter flex h-10 items-center justify-center rounded-md  p-2 text-xs sm:text-sm'>
              <ImageView
                src={wallet}
                alt='wallet'
                width={20}
                height={20}
                className='object-contain w-4 h-4'
              />
              Import $EARTH
            </button>
            <button className='w-[80px]  gap-1 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-xs sm:text-sm'>
              <FaPlus size={17} color='#fff' />
              Add
            </button>
          </div>
        </div>
        {/* {fundingData && fundingData.length ? ( */}
        <>
          <div className='flex flex-col w-full gap-6 sm:flex-row'>
            {priceData?.map((price, index) => (
              <div
                className='flex flex-col p-6 w-full sm:w-[41rem] rounded-lg shadow-sm gap-3 border border-[#EAECF0] mx-auto sm:mx-0 max-w-[18rem] sm:max-w-none'
                key={index}
              >
                <p className='text-[#101828] text-[14px] font-semibold font-inter text-center sm:text-left'>
                  {price?.title}
                </p>
                <div className='flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end'>
                  <div className='flex flex-col items-center sm:items-start'>
                    <p className='text-[#101828] text-[40px] font-semibold font-syne text-center sm:text-left'>
                      {price?.price}
                      <span className='text-[22px]'>{price?.unit}</span>
                    </p>
                    {/* <div className="flex gap-1">
                      <button
                        className={`flex font-inter font-medium text-[12px] ${price?.increase ? "text-[#027A48]" : "text-[#B42318]"
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
                    </div> */}
                  </div>
                  {/* <div className="mt-4 md:flex-wrap sm:mt-0">
                    <ImageView
                      src={price?.img}
                      alt="chart"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <p className='text-[#101828] w-full pb-3 border-b border-[#EAECF0] font-inter text-left font-semibold text-[14px]'>
            Price chart
          </p>
          <div className='flex justify-start w-full gap-4'>
            <div className='flex items-center gap-2'>
              <div className='rounded-full w-[8px] h-[8px] bg-[#EC8000]'></div>
              <p className='text-[#475467] text-center font-normal  text-[14px] font-inter'>
                Price on Dex
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='rounded-full w-[8px] h-[8px] bg-[#fccc72]'></div>
              <p className='text-[#475467] text-center font-normal  text-[14px] font-inter'>
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
          <div className='w-[100%] h-[35vh]'>
            <Line data={data} width='400' height='300' options={options} />
          </div>
          <div className='grid items-center w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
            {chartData?.map((price, index) => (
              <div
                className='flex flex-col p-6 w-full rounded-lg shadow-sm gap-3 border border-[#EAECF0]'
                key={index}
              >
                <p className='text-[#101828] text-[14px] font-semibold font-inter'>
                  {price?.title}
                </p>
                <div className='flex items-end justify-between gap-2'>
                  <div className='flex flex-col items-start'>
                    <p className='text-[#101828] text-[32px] sm:text-[36px] md:text-[40px] font-semibold font-syne'>
                      {!price?.value
                        ? priceDetails?.treasury?.toFixed(2)
                        : price?.value}
                      {!price?.value && (
                        <span className='text-[18px] sm:text-[22px]'>$DAI</span>
                      )}
                    </p>
                    {price?.percent ? (
                      <div className='flex gap-1'>
                        <button
                          className={`flex font-inter font-medium text-[12px] ${price?.increase
                            ? "text-[#027A48]"
                            : "text-[#B42318]"
                            }`}
                        >
                          {price?.increase ? (
                            <GoArrowUp size={15} color='#027A48' />
                          ) : (
                            <GoArrowDown size={15} color='#B42318' />
                          )}
                          {price?.percent}
                        </button>
                        <p className='text-[#475467] text-[12px] font-medium font-inter'>
                          vs last month
                        </p>
                      </div>
                    ) : null}
                  </div>
                  {price?.img ? (
                    <div className='mt-4 md:flex-wrap sm:mt-0'>
                      <ImageView
                        src={price?.img}
                        alt='chart'
                        width={80}
                        height={80}
                        className='object-cover w-20 h-20 sm:w-[100px] sm:h-[100px]'
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center w-full sm:items-start'>
            <p className='text-[#101828] text-[22px] sm:text-[28px] text-left font-semibold font-syne'>
              Sector wise funding breakdown
            </p>
            <p className='text-[#475467] text-[14px] text-left  font-normal font-inter'>
              Track, manage and forecast $EARTH trends.
            </p>
            <div className='flex flex-col w-full gap-4 mt-8 overflow-auto sm:flex-row scrollbar-none '>
              {fundingData?.map((fund, index) => {
                const title = fund.title?.split(" ");

                return (
                  <div
                    className='flex flex-col p-4 grow w-full rounded-lg shadow-sm gap-3 border border-[#EAECF0]'
                    key={index}
                  >
                    <div className='flex justify-between'>
                      <p className='text-[#101828] w-[50%] text-[16px] font-semibold font-inter'>
                        {title[0]} <br /> {title[1]}
                      </p>
                      <ImageView
                        src={fund?.icon}
                        alt='chart'
                        width={40}
                        height={40}
                        className='object-contain'
                      />
                    </div>
                    <p className='text-[#101828]  text-[40px] font-semibold font-syne'>
                      {fund?.price}
                      <span className='text-[22px]'>$DAI</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <p className='text-[#101828] text-[28px] text-left mt-8  font-semibold font-syne'>
              Treasury Holdings
            </p>
            <div className='flex items-center w-full gap-4'>
              <div className='w-full border flex items-center   sm:mb-0  gap-2 p-2 rounded-md border-[#D0D5DD] shadow-sm'>
                <IoSearchOutline size={22} color='#667085' />
                <input
                  type='text'
                  placeholder='Search'
                  className='text-[#667085] h-full w-full outline-none  font-inter text-[14px] font-normal'
                  onChange={(e) =>
                    setFilter((obj) => ({ ...obj, search: e.target.value }))
                  }
                />
              </div>
              <Select

                options={
                  fundingData && fundingData.length
                    ? fundingData.map((obj) => ({
                      label: obj?.title,
                      value: obj?.title,
                    }))
                    : []
                }
                showSearch
                allowClear
                value={filter?.type || undefined}
                placeholder='Select Type'
                className='w-1/4 h-10 font-syne active:!border-primary'
                onChange={(value) =>
                  setFilter((obj) => ({ ...obj, type: value }))
                }
              />
            </div>
            <div className='w-full border-2 rounded-md mt-6 border-[#EAECF0] mb-6 flex-col overflow-x-auto'>
              <table className='w-full table-auto'>
                <thead className='bg-transparent border-b-2 border-[#EAECF0] h-[40px] !w-full text-left font-inter font-medium text-[#475467] text-[12px]'>
                  <tr className=''>
                    <th className='bg-[#F9FAFB] flex-1 pl-4 rounded-tl-md'>
                      <p>Asset</p>
                    </th>
                    <th className='bg-[#F9FAFB] flex-1'>
                      <p>Type</p>
                    </th>
                    <th className='bg-[#F9FAFB] flex-1'>
                      <p>Link</p>
                    </th>
                    <th className='bg-[#F9FAFB] flex-1'>
                      <p>Amount</p>
                    </th>
                    <th className='bg-[#F9FAFB] flex-1'>
                      <p>IRR</p>
                    </th>
                    <th className='bg-[#F9FAFB] flex-1'>
                      <p>Chain</p>
                    </th>
                    <th className='bg-[#F9FAFB] w-[100px] flex-1 pr-2 rounded-tr-md'>
                      <p>Time</p>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-transparent text-[#101828] !w-full text-[12px] font-semibold'>
                  {filteredData && filteredData.length ? filteredData
                    .map((list, index) => (
                      <tr
                        key={index}
                        className='h-[60px] border-b-2 border-[#EAECF0] font-inter font-medium text-[#101828]'
                      >
                        <td className='max-sm:p-4'>
                          <div className='flex items-center gap-2 pl-4 max-sm:pl-0'>
                            <ImageView
                              src={list?.assetLogo}
                              alt='asset'
                              width={30}
                              height={30}
                              className='w-6 h-6'
                            />
                            <p className=''>{list?.assetName}</p>
                          </div>
                        </td>
                        <td className='max-sm:p-4'>
                          <p className='rounded-full capitalize  w-fit p-1 text-[#344054] bg-[#F2F4F7]'>
                            {list?.type}
                          </p>
                        </td>
                        <td>
                          <a
                            href={list?.link}
                            target='_blank'
                            className='no-underline hover:text-primary'
                          >
                            {list?.link}
                          </a>
                        </td>
                        <td className='max-sm:p-4'>
                          <p>{list?.amount}</p>
                        </td>
                        <td className='max-sm:p-4'>
                          <p>{list?.irr}</p>
                        </td>
                        <td className='max-sm:p-4'>
                          <p>{list?.chain}</p>
                        </td>
                        <td className='max-sm:p-4'>
                          <p>{list?.time}</p>
                        </td>
                      </tr>
                    )) : <tr>
                    <td colSpan={8} >
                      <p className="my-8 text-center text-md ">No Data</p>
                    </td></tr>}
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
    </div >
  );
}
