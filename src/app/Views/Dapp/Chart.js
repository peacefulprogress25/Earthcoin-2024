import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { connectWallet } from "./utils";
import { useSelector } from "react-redux";
import { profileState } from "../../redux/profileSlice";

const Chart = ({ setScreen, screen, callBack }) => {
  const chartRef = useRef();
  const [disconnect, setDisconnect] = useState(false);
  const { wallet } = useSelector(profileState);

  const init = [
    { name: "MINT", value: 200, color: "#adb745" },
    { name: "STAKE", value: 200, color: "#adb745" },
    { name: "TRADE", value: 200, color: "#adb745" },
    { name: "CLAIM", value: 170, color: "#adb745" },
    {
      name: "CONNECT WALLET",
      value: 270,
      color: wallet ? "#c1272d" : "#045047",
    },
    { name: "SBT", value: 170, color: "#adb745" },
  ];
  const [donutData, setDonutData] = useState(init);

  useEffect(() => {
    setDonutData((data) => {
      data[4] = {
        name: wallet ? "DISCONNECT WALLET" : "CONNECT WALLET",
        value: 270,
        color: wallet ? "#c1272d" : "#045047",
      };
      return data;
    });
  }, []);

  useEffect(() => {
    if (screen === "CONNECT WALLET" || screen === "DISCONNECT WALLET") {
      setDisconnect(true);
      connectWallet({ wallet });
      if (screen === "CONNECT WALLET") {
        setDonutData((prevData) =>
          prevData.map((d) =>
            d.name === "CONNECT WALLET"
              ? { ...d, name: "DISCONNECT WALLET", color: "#045047" }
              : d
          )
        );
      } else {
        setDonutData(init);
      }
      setInterval(() => {
        setDisconnect(false);
      }, 500);
      callBack();
    }
  }, [screen]);

  console.log(donutData);

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
        .attr("class", "wrapper")
        .attr(
          "transform",
          `translate(${width / 2 + margin.left},${height / 2 + margin.top})`
        )
        .on("mouseover", (data, d) => {
          console.log("hello", d);
        });
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
        if (d.data.name === "SBT") {
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
        d3.select(this).style("fill", d.data.color);

        // Update the screen with the clicked slice's name

        if (screen === "DISCONNECT WALLET") {
          setScreen("DISCONNECT WALLET");
        } else {
          console.log(d.data.name);
          setScreen(d.data.name);
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
        if (d.endAngle > (90 * Math.PI) / 180) {
          //Everything between the capital M and first capital A
          var startLoc = /M(.*?)A/;
          //Everything between the capital A and 0 0 1
          var middleLoc = /A(.*?)0 0 1/;
          //Everything between the 0 0 1 and the end of the string (denoted by $)
          var endLoc = /0 0 1 (.*?)$/;
          //Flip the direction of the arc by switching the start and end point
          //and using a 0 (instead of 1) sweep flag
          var newStart = endLoc.exec(newArc)[1];
          var newEnd = startLoc.exec(newArc)[1];
          var middleSec = middleLoc.exec(newArc)[1];

          //Build up the new arc notation, set the sweep-flag to 0
          newArc = "M" + newStart + "A" + middleSec + "0 0 0 " + newEnd;
        } //if

        //Create a new invisible arc that the text can flow along
        svg
          .append("path")
          .attr("class", "hiddenDonutArcs")
          .attr("id", "donutArc" + i)
          .attr("d", newArc)
          .style("fill", "none");
      });

    svg
      .selectAll(".donutText")
      .data(donutData)
      .enter()
      .append("text")
      .attr("class", "donutText")
      // .attr("dy", 28)
      .attr("dy", function (d, i) {
        // Set different dy values based on the index
        return i < donutData.length / 2 ? 28 : -18;
      })
      .style("z-index", "2")
      .on("click", function (event, d) {
        // Reset the fill color of all slices to white
        svg.selectAll(".donutArcSlices").style("fill", "#fff");
        svg.selectAll(".donutText").style("fill", "#000");
        // Find the corresponding slice and change its color
        svg
          .selectAll(".donutArcSlices")
          .filter(function (sliceData) {
            return sliceData.data.name === d.name;
          })
          .style("fill", d.color);

        // Update the screen with the clicked slice's name
        setScreen(d.name);
        console.log(d.name);
      })
      .append("textPath")
      .attr("startOffset", "50%")
      .style("text-anchor", "middle")
      .attr("xlink:href", function (d, i) {
        return "#donutArc" + i;
      })
      .text(function (d) {
        return d.name;
      });
  }, [setScreen, donutData, disconnect]);

  return !disconnect ? (
    <div
      ref={chartRef}
      className='cursor-pointer chart text-center relative text-[16px] font-semibold font-inter z-[3]'
    ></div>
  ) : null;
};

export default Chart;
