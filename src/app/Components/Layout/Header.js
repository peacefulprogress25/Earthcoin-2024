"use client";
import Link from "next/link";
import ImageView from "../ImageView";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UniswapEarth from "../BuyUniswap";
import AccountDapp from "../Dappaccount";
import { usePathname } from "next/navigation";


const logo = "/assets/images/logo.png";
const avatar = "/assets/icons/dapp-Avatar.png";
const downIcon = "/assets/icons/down-Icon.png";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname)
  const [showaboutMenu, setShowaboutMenu] = useState(false);
  const [showresourceMenu, setShowresourceMenu] = useState(false);
  const [showNodes, setShowNodes] = useState(false);
  const [showUniswap, setShowUniswap] = useState(false);
  const [accountDapp, SetAccountDapp] = useState(false);
  const aboutMenu = [
    {
      title: "Thesis",
      subtitle: "Fuel to our FIRE",
      icon: "/assets/icons/book.svg",
      link: "/thesis",
    },
    {
      title: "Purpose",
      subtitle: "Our reason for existence",
      icon: "/assets/icons/heart.svg",
      link: "/purpose",
    },
    {
      title: "Team",
      subtitle: "Get up and running on new features and techniques.",
      icon: "/assets/icons/play-circle.svg",
      link: "/about",
    },
  ];
  const nodes = [
    {
      title: "What are $EARTH NODES?",
      subtitle: "Roles and responsibilities",
      icon: "/assets/icons/faq.svg",
      link: "/network",
    },
    {
      title: "Become an $EARTH NODE",
      subtitle: "Steps to follow ",
      icon: "/assets/icons/mushroom.png",
      link: "/earthnode",
    },
    {
      title: "$EARTH Mycelium Network",
      subtitle: "Leaderboard",
      icon: "/assets/icons/life-buoy.svg",
      link: "/node",
    },
  ]
  const resourceMenu = [
    {
      title: "What is $EARTH?",
      subtitle: "Digital currency funding regeneration",
      icon: "/assets/icons/earth.svg",
      link: "/resources",
    },
    // {
    //   title: "How $EARTH works?",
    //   subtitle: "Mechanics and flow of $EARTH",
    //   icon: "/assets/icons/thunder.svg",
    //   link: "/works",
    // },
    {
      title: "How to get $EARTH?",
      subtitle: "Mint and Trade ",
      icon: "/assets/icons/earth.svg",
      link: "/earth",
    },
    {
      title: "Tokenomics",
      subtitle: "Token logic driving $EARTH",
      icon: "/assets/icons/cross.svg",
      link: "/tokenomics",
    },
    // {
    //   title: "$EARTH nodes",
    //   subtitle: "",
    //   icon: "/assets/icons/node.svg",
    //   link: "/node",
    // },
    
   
    {
      title: "FAQ",
      subtitle: "Answers to your $Earth curiosities.",
      icon: "/assets/icons/faq.svg",
      link: "/faq",
    },
  ];
  return (
    <nav className="fixed hidden sm:block left-0 top-0 z-10 right-0 bg-white">
     
      <div className="flex justify-between h-20 w-full mx-auto border-b border-[#F2F4F7] gap-2 items-center px-4 sm:px-[6%]">
      <div className="flex justify-start h-20 w-full mx-auto gap-2 items-center">
        <Link href="/">
          <ImageView
            alt="logo"
            src={logo}
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <div className="items-center h-full ml-2 sm:ml-8 flex gap-2 sm:gap-9 font-inter text-[#475467] font-semibold text-sm">
          <Link
            className="flex items-center gap-1 h-full relative"
            href="/"
            onMouseEnter={() => setShowaboutMenu(true)}
            onMouseLeave={() => setShowaboutMenu(false)}
          >
            About <IoIosArrowDown />{" "}
            {showaboutMenu && (
              <div className="absolute w-[18rem] flex flex-col  border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                {aboutMenu?.map((menu, index) => (
                  <Link
                    className="flex gap-4 items-start justify-start"
                    key={index}
                    href={menu?.link}
                  >
                    <ImageView
                      src={menu?.icon}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-[#101828] font-semibold text-[14px] font-inter">
                        {menu?.title}
                      </p>
                      <p className="text-[#475467] font-normal text-[14px] font-inter">
                        {menu?.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Link>
          <Link
            className="flex items-center h-full relative gap-1"
            href="/thesis"
            onMouseEnter={() => setShowresourceMenu(true)}
            onMouseLeave={() => setShowresourceMenu(false)}
          >
            Resources <IoIosArrowDown />{" "}
            {showresourceMenu && (
              <div className="absolute w-[18rem] h-[23rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                {resourceMenu?.map((menu, index) => (
                  <Link
                    className="flex gap-4 items-start justify-start"
                    key={index}
                    href={menu?.link}
                  >
                    <ImageView
                      src={menu?.icon}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-[#101828] font-semibold text-[14px] font-inter">
                        {menu?.title}
                      </p>
                      <p className="text-[#475467] font-normal text-[14px] font-inter">
                        {menu?.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Link>
          <Link href="/projects">Projects</Link>
          <Link
            className="flex items-center h-full relative gap-1"
            href="/node"
            onMouseEnter={() => setShowNodes(true)}
            onMouseLeave={() => setShowNodes(false)}
          >
            Nodes <IoIosArrowDown />{" "}
            {showNodes && (
              <div className="absolute w-[18rem] h-[15rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                {nodes?.map((menu, index) => (
                  <Link
                    className="flex gap-4 items-start justify-start"
                    key={index}
                    href={menu?.link}
                  >
                    <ImageView
                      src={menu?.icon}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-[#101828] font-semibold text-[14px] font-inter">
                        {menu?.title}
                      </p>
                      <p className="text-[#475467] font-normal text-[14px] font-inter">
                        {menu?.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </Link>
          {/* <Link href="/node">NODES</Link> */}
          <Link href="/media">Media</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        </div>
        {pathname === "/dapp" ? 
        <div className="flex justify-end gap-2">
        
        
        <Link
            href="/"
           
            onMouseEnter={() => SetAccountDapp(true)}
            onMouseLeave={() => SetAccountDapp(false)}
          >
            <div  className=" relative ml-auto text-white font-inter flex h-10 w-[18rem] items-center justify-end rounded-lg bg-[#FFEDD2] px-[2px] text-sm">
               <p className="font-inter font-semibold text-[14px] text-[#000000] mr-[12rem]">10.28 $DAI</p>
               <div className=" absolute w-[11rem] rounded-lg bg-[#EC8000] h-9 flex justify-between px-3 items-center ">
                  <img className="w-5 h-5" src={avatar} alt="earthcoin" />
                  <p className="font-inter font-semibold text-[14px] text-white">0x2c75...8874</p>
                  <img className="w-4 h-4" src={downIcon} alt="earthcoin" />
               </div>
            </div>
            {accountDapp && 
            <div className="absolute w-[22rem] h-[28rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 top-[3.5rem] rounded-lg bg-white">
               <AccountDapp />
               
            </div>
          
           
             }
          </Link> 
          </div>
          :
      <div className="flex justify-end gap-2">
        <Link
            href="/"
            className="w-[80px] relative ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
            onMouseEnter={() => setShowUniswap(true)}
            onMouseLeave={() => setShowUniswap(false)}
          >
            BUY
            {showUniswap && 
            <div className="absolute w-[22rem] h-[22rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[2.5rem] rounded-lg bg-white">
               <UniswapEarth setShowUniswap={setShowUniswap} />
               
            </div>
           
             }
          </Link>
          <Link
            href="/dapp"
            className="w-[80px] ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
          >
            DAPP
          </Link>
          
      </div>
      
          }
       
       
        
      </div>
    </nav>
  );
}
