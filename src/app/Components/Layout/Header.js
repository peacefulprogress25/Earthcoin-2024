"use client";
import Link from "next/link";
import ImageView from "../ImageView";
import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UniswapEarth from "../BuyUniswap";
import AccountDapp from "../Dappaccount";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";
import { formatWalletAddress } from "../../Views/Dapp/utils";
import { HiMenu, HiX } from "react-icons/hi";
import Network from "../../Views/Dapp/Network"

const logo = "/assets/images/logo.png";
const avatar = "/assets/images/dapp-Avatar.png";
const downIcon = "/assets/icons/down-Icon.png";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const pathname = usePathname();

  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const [showaboutMenu, setShowaboutMenu] = useState(false);
  const [showresourceMenu, setShowresourceMenu] = useState(false);
  const [showNodes, setShowNodes] = useState(false);
  const [showUniswap, setShowUniswap] = useState(false);
  const [accountDapp, setAccountDapp] = useState(false);
  const profile = useSelector(profileState);
  const buyRef = useRef(null);
  const dappRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileNodesOpen, setMobileNodesOpen] = useState(false);

  const handlePopup = (e) => {
    e.stopPropagation();
    if (buyRef.current && showUniswap && !buyRef.current.contains(e.target)) {
      setShowUniswap(false);
    }
  };

  const handleDappPopup = (e) => {
    e.stopPropagation();
    if (dappRef.current && accountDapp && !dappRef.current.contains(e.target)) {
      setAccountDapp(false);
    }
  };
  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handlePopup);
    window && window.addEventListener("mousedown", handleDappPopup);
  }

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
      subtitle: "Earthlings building $EARTH",
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
  ];
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
    //   title: "$EARTH NODES",
    //   subtitle: "",
    //   icon: "/assets/icons/node.svg",
    //   link: "/node",
    // },

    {
      title: "How $EARTH works?",
      subtitle: "Mechanics of $EARTH and flow of $EARTH / $DAI",
      icon: "/assets/icons/faq.svg",
      link: "/works",
    },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between h-20 max-w-screen-2xl mx-auto border-b border-[#F2F4F7] gap-2 items-center px-4 sm:px-[6%] 2xl:px-0">
        <div className="flex items-center justify-start w-full h-20 gap-2 mx-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <ImageView
              alt="logo"
              src={logo}
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <div className="items-center h-full ml-2 sm:ml-8 hidden lg:flex gap-2 sm:gap-9 font-inter text-[#475467] font-semibold text-sm">
            <Link
              className="relative flex items-center h-full gap-1"
              href="/"
              onMouseEnter={() => setShowaboutMenu(true)}
              onMouseLeave={() => setShowaboutMenu(false)}
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
            >
              About <IoIosArrowDown />{" "}
              {showaboutMenu && (
                <div className="absolute w-[18rem] flex flex-col  border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                  {aboutMenu?.map((menu, index) => (
                    <Link
                      className="flex items-start justify-start gap-4"
                      key={index}
                      href={menu?.link}
                      onClick={() => setMobileMenuOpen(false)} // Close menu on link click
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
              className="relative flex items-center h-full gap-1"
              href=""
              onMouseEnter={() => setShowresourceMenu(true)}
              onMouseLeave={() => setShowresourceMenu(false)}
            >
              Resources <IoIosArrowDown />{" "}
              {showresourceMenu && (
                <div className="absolute w-[18rem] h-[23rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                  {resourceMenu?.map((menu, index) => (
                    <Link
                      className="flex items-start justify-start gap-4"
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
              className="relative flex items-center h-full gap-1"
              href="/node"
              onMouseEnter={() => setShowNodes(true)}
              onMouseLeave={() => setShowNodes(false)}
            >
              Nodes <IoIosArrowDown />{" "}
              {showNodes && (
                <div className="absolute w-[18rem] h-[15rem] flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6 top-[3.5rem] rounded-lg bg-white">
                  {nodes?.map((menu, index) => (
                    <Link
                      className="flex items-start justify-start gap-4"
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
            <Link href="/media">Media</Link>
            {/* <Link href="/dashboard">Dashboard</Link> */}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[#475467]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop buttons */}
        <div className="justify-end hidden gap-2 lg:flex">
        {pathname === "/dapp" ? 
        <div className="flex justify-end gap-2">
        <Network />
        </div> :  null}
        </div>
        <div className="justify-end hidden gap-2 lg:flex">
          {pathname === "/dapp" ? (
            profile?.wallet ? (
              <div className="flex justify-end gap-2">
                <button onClick={() => setAccountDapp(true)}>
                  <div className=" relative ml-auto text-white font-inter flex h-10  items-center justify-end rounded-lg px-[2px] text-sm">
                    <div className="w-[11rem] rounded-lg bg-[#EC8000] h-9 flex justify-between px-3 items-center ">
                      <img className="object-cover w-5 h-5" src={avatar} alt="earthcoin" />
                      <p className="font-inter font-semibold text-[14px] text-white">
                        {formatWalletAddress(profile?.wallet)}
                      </p>
                      <img className="w-4 h-4" src={downIcon} alt="earthcoin" />
                    </div>
                  </div>
                </button>
                {accountDapp && (
                  <div
                    ref={dappRef}
                    className="absolute w-[22rem]  flex flex-col border border-[#EAECF0]  shadow-lg gap-8 top-20 rounded-lg bg-white"
                  >
                    <AccountDapp />
                  </div>
                )}
              </div>
            ) : null
          ) : (
            <div className="flex justify-end gap-2">
              <Link
                href="/dashboard"
                className="w-[80px] ml-auto text-[#475467] font-inter font-semibold flex h-10 items-center justify-center rounded-md p-2 text-sm"
              >
                Dashboard
              </Link>
              <button
                className="w-[80px] relative ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
                onClick={() => setShowUniswap(true)}
              >
                BUY
              </button>
              {showUniswap && (
                <div
                  ref={buyRef}
                  className="absolute w-[22rem] top-20 flex flex-col border border-[#EAECF0]  shadow-lg gap-8 p-6  rounded-lg bg-white"
                >
                  <UniswapEarth setShowUniswap={setShowUniswap} />
                </div>
              )}
              <Link
                href="/dapp"
                className="w-[80px] ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
              >
                DAPP
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-20 overflow-y-auto bg-white lg:hidden top-20">
          <div className="flex flex-col gap-4 p-4">
            <div>
              <button
                className="text-[#475467] font-semibold w-full text-left flex justify-between items-center"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About{" "}
                <IoIosArrowDown
                  className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {aboutMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-2 text-[#475467]"
                      onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                    >
                      <ImageView
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="text-[#475467] font-semibold w-full text-left flex justify-between items-center"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                Resources{" "}
                <IoIosArrowDown
                  className={`transition-transform ${mobileResourcesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {resourceMenu.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-2 text-[#475467]"
                      onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                    >
                      <ImageView
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="text-[#475467] font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>

            <div>
              <button
                className="text-[#475467] font-semibold w-full text-left flex justify-between items-center"
                onClick={() => setMobileNodesOpen(!mobileNodesOpen)}
              >
                Nodes{" "}
                <IoIosArrowDown
                  className={`transition-transform ${mobileNodesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileNodesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {nodes.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-2 text-[#475467]"
                      onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                    >
                      <ImageView
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/media" className="text-[#475467] font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Media
            </Link>
            <Link href="/dashboard" className="text-[#475467] font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Dashboard
            </Link>

            {pathname !== "/dapp" && (
              <>
                <button
                className="w-full relative ml-auto text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
                  // className="w-full text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
                  onClick={() => {
                    setShowUniswap(true);
                    // setMobileMenuOpen(false); // Close menu on button click
                  }}
                >
                  BUY
                </button>
                {showUniswap && (
                  <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  >
                <div
                
                  ref={buyRef}
                  className="absolute w-[19rem] sm:w-[22rem] flex flex-col  border border-[#EAECF0]  shadow-lg gap-8 p-6  rounded-lg bg-white"
                >
                  <UniswapEarth setShowUniswap={setShowUniswap} />
                </div>
                </div>
              )}
                <Link
                  href="/dapp"
                  className="w-full text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                >
                  DAPP
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
