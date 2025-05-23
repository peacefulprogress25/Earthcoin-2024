import  { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import {  useDispatch, useSelector } from "react-redux";
import {  connectWalletFn, disconnectWalletFn, profileState } from "../../redux/profileSlice";
import { store } from "../../redux";
import {  useWallet } from "@solana/wallet-adapter-react";

const SolanaChart = ({ setScreen, screen, callBack }) => {
  const chartRef = useRef();
  const [disconnect, setDisconnect] = useState(false);
  const { wallet, type } = useSelector(profileState);
  const dispatch=useDispatch()
  const init = [
    { name: "MINT", value: 59, color: "#adb745" },
    // { name: "STAKE", value: 200, color: "#adb745" },
    // { name: "TRADE", value: 200, color: "#adb745" },
    // { name: "CLAIM", value: 170, color: "#adb745" },
    {
      name: "CONNECT WALLET",
      value: 59,
      color: wallet ? "#c1272d" : "#045047",
    },
    // { name: "NODE", value: 170, color: "#adb745" },
  ];
  const [donutData, setDonutData] = useState(init);


  const tooltipData = {
    mint: {
      title: "Mint",
      description: "Purge your $USDC to create $EARTH and fund real world regeneration in one transaction."
    },
    stake: {
      title: "Stake",
      description: "Stake your $EARTH here for some $FRUIT to earn some juicy APYs"
    },
    node: {
      title: "$EARTH NODE",
      description: "Finish your KYC, fill Google form and complete your onboarding call to become a NODE."
    },
    trade: {
      title: "Trade",
      description: "Buy $EARTH on Uniswap if you are not a NODE yet."
    },
    claim: {
      title: "Claim",
      description: "Claim your Rewards for making #Refi a reality."
    },
    connectwallet: {
      title: "Connect / Disconnect Wallet",
      description: "Use this button to connect your wallet to our DAPP. Make sure you have connected the correct wallet before conducting transactions."
    },
    disconnectwallet: {
      title: "Connect / Disconnect Wallet",
      description: "Use this button to connect your wallet to our DAPP. Make sure you have connected the correct wallet before conducting transactions."
    }

  }


  const walletInst = useWallet()
  walletInst?.select('Phantom')

  




  useEffect(() => {
    setDonutData((data) => {
      data[1] = {
        name: wallet ? "DISCONNECT WALLET" : "CONNECT WALLET",
        value: 59,
        color: wallet ? "#c1272d" : "#045047",
      };
      return data;
    });
  }, [wallet]);


  useEffect(() => {
    const address = walletInst.publicKey?.toBase58();
    address && dispatch(connectWalletFn(address))
  }, [ walletInst.publicKey])
  
  
  useEffect(() => {
    (async () => {
      if (screen === "CONNECT WALLET" || screen === "DISCONNECT WALLET") {
        if (screen === "CONNECT WALLET") {
          try {
            if (!wallet && !walletInst.connected) {
              walletInst.connect && await walletInst?.connect();
            }
          } catch (error) {
            console.log(error);
          }
          if (!walletInst.publicKey) return
          
          setDisconnect(true);
          
          setDonutData((prevData) =>
            prevData.map((d) =>
              d.name === "CONNECT WALLET"
          ? { ...d, name: "DISCONNECT WALLET", color: "#c1272d" }
          : d
        )
      );
        } else {
          walletInst.disconnect()
          dispatch(disconnectWalletFn())
          setDonutData(init);
          window.location.reload()
        }
        setInterval(() => {
          setDisconnect(false);
        }, 500);
        callBack();
      }
   })()
  }, [screen, walletInst.publicKey]);



  const tooltip = d3.select(".dapp")
    .append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("padding", "10px")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .style("box-shadow", "0px 4px 6px - 2px #10182808")
    .style("width", "22rem")

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const margin = { left: 20, top: 20, right: 20, bottom: 20 };
    const width = Math.min(screenWidth, 531) - margin.left - margin.right;
    const height = Math.min(screenWidth, 531) - margin.top - margin.bottom;

    let svg = d3.select(chartRef.current).select("svg");

    // Check if SVG element already exists
    if (svg.empty()) {
      svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("class", "wrapper ")
        .attr(
          "transform",
          `translate(${width / 2 + margin.left},${height / 2 + margin.top})`
        )

      // .on("mouseover", (data, d) => {

      // });
    }

    // const donutData = [
    //   { name: "MINT", value: 200, color: "#adb745" },
    //   { name: "STAKE", value: 200, color: "#adb745" },
    //   { name: "TRADE", value: 200, color: "#adb745" },
    //   { name: "CLAIM", value: 170, color: "#adb745" },
    //   { name: "DISCONNECT WALLET", value: 270, color: "#c1272d" },
    //   { name: "SBT", value: 170, color: "#adb745" },
    // ];

    const colorScale = d3
      ?.scaleLinear()
      .domain([1, 3.5, 6])
      .range(["#fff"])
      .interpolate(d3.interpolateHcl);

    const arc = d3
      .arc()
      .innerRadius((width * 0.75) / 2)
      .outerRadius((width * 0.75) / 2 + 45);

    const pie = d3
      .pie()
      .startAngle((-90 * Math.PI) / 180)
      .endAngle((-90 * Math.PI) / 180 + 2 * Math.PI)
      .value((d) => d.value)
      .padAngle(0)
      .sort(null);

    svg
      .selectAll(".donutArcSlices")
      .data(pie(donutData))
      .enter()
      .append("path")
      .attr("class", "donutArcSlices")
      .attr("d", arc)
      .style("stroke", "black")
      .style("stroke-width", 2)
      .style("fill", (d, i) => {
        if (d?.data?.name === "SBT") {
          return "#adb745"; // Set the color for "SBT" slice here
        } else if (i === 7) {
          return "#CCCCCC"; // Set the color for "Other" slice
        } else {
          return colorScale(i);
        }
      })
      .style("z-index", "15")
      .on("click", function (event, d) {
        // Reset the fill color of all slices to white
        svg.selectAll(".donutArcSlices").style("fill", "#fff");
        svg.selectAll(".donutText").style("fill", "#000");
        // Set the fill color of the clicked slice
        d3.select(this).style("fill", d?.data?.color);

        // Update the screen with the clicked slice's name

        if (screen === "DISCONNECT WALLET") {
          setScreen("DISCONNECT WALLET");
        } else {

          type==='solana' && setScreen(d?.data?.name);
        }
      })
      //Create the new invisible arcs and flip the direction for the bottom half labels
      .each(function (d, i) {
        //Search pattern for everything between the start and the first capital L
        var firstArcSection = /(^.+?)L/;

        //Grab everything up to the first Line statement
        var newArc = firstArcSection.exec(d3.select(this).attr("d"))[1];
        //Replace all the commas so that IE can handle it
        newArc = newArc.replace(/,/g, " "); 

        //If the end angle lies beyond a quarter of a circle (90 degrees or pi/2)
        //flip the end and start position
        if (d?.endAngle > Math.PI / 2)  {
          //Everything between the capital M and first capital A
          const startLoc = /M([^A]+)A/;
          const middleLoc = /A([^0]+)0 0 [01]/;
          const endLoc = /0 0 [01] ([^Z]+)/;
          //Flip the direction of the arc by switching the start and end point
          //and using a 0 (instead of 1) sweep flag
          var newStart = endLoc.exec(newArc)?.[1];
          var newEnd = startLoc.exec(newArc)?.[1];
          var middleSec = middleLoc.exec(newArc)?.[1];

          //Build up the new arc notation, set the sweep-flag to 0
          // newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
          newArc ='M-229.125 0A-229.125 229.125 0 1 0 229.125 0'
        } //if

        //Create a new invisible arc that the text can flow along
        svg
          .append("path")
          .attr("class", "hiddenDonutArcs")
          .attr("id", "donutArc" + i)
          .attr("d", newArc)
          .style("fill", "none");
      })


    svg
      .selectAll(".donutText")
      .data(donutData)
      .enter()
      .append("text")
      .on("mousemove", function (event, d) {

        const name = d.name?.split(' ').join('')
        const data = tooltipData[name?.toLowerCase()]

        // Show the tooltip and update its content
        tooltip
          .style("visibility", "visible")
          .html(`<div>
            <p class="font-inter text-[#344054] text-md font-bold">${data?.title}</p>
            <p class="font-inter text-[#344054]  text-sm font-light">${data?.description}</p>
          
          </div>`);
      })
      .on("mouseover", function (event, d) {
        let x, y;
        switch (d.name) {
          case "TRADE":
            x = 570;
            y = 80;
            break;
          case "CLAIM":
            x = 600;
            y = 320;
            break;
          case "CONNECT WALLET":
          case "DISCONNECT WALLET":
            x = 210;
            y = 500;
            break;
          case "STAKE":
            x = 200;
            y = -70;

            break
          case "MINT":
            x = -240;
            y = 100;
            break
          case "NODE":
            x = -220;
            y = 340;
            break
          default:
            break;
        }

        // Update tooltip position
        tooltip
          .style("top", `${y}px`)
          .style("left", `${x}px`)
          .style("z-index", "100")
        // .html(`<strong>${d.name}</strong><br>Value: ${d.value}`);

      })
      .on("mouseout", function () {
        // Hide the tooltip
        tooltip.style("visibility", "hidden");
      })
      .attr("class", "donutText")
      // .attr("dy", 28)
      .attr("dy", function (d, i) {
        // Set different dy values based on the index
        return i < donutData.length / 2 ? 28 : -20;
      })
      .style("z-index", "2")
      .on("click", function (event, d) {
        // Reset the fill color of all slices to white
        const type = store.getState().profile.type
        if (d.name === "CONNECT WALLET" && !type) return
        svg.selectAll(".donutArcSlices").style("fill", "#fff");
        svg.selectAll(".donutText").style("fill", "#000");
        // Find the corresponding slice and change its color
        svg
          .selectAll(".donutArcSlices")
          .filter(function (sliceData) {
            return sliceData.data.name === d.name;
          })
          .style("fill", d?.color);
        // Update the screen with the clicked slice's name
        setScreen(d?.name);
        tooltip.style("visibility", "hidden")

      })
      .append("textPath")
      .attr("startOffset", "50%")
      .style("text-anchor", "middle")
      .attr("xlink:href", function (d, i) {
        return "#donutArc" + i;
      })
      .text(function (d) {
        return d?.name;
      })
  }, [setScreen, donutData, disconnect]);

  return  (!disconnect ?
    <div
      ref={chartRef}
      className='cursor-pointer w-full sm:h-full flex items-center justify-center  chart text-center relative text-[16px] font-semibold font-inter z-[3]'
    ></div>:null
  ) 
};

export default SolanaChart;
