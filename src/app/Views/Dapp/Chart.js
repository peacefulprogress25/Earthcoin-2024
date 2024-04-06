import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Chart = ({ setScreen }) => {
  const chartRef = useRef();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const margin = { left: 20, top: 20, right: 20, bottom: 20 };
    const width = Math.min(screenWidth, 535) - margin.left - margin.right;
    const height = Math.min(screenWidth, 535) - margin.top - margin.bottom;

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
        );
    }

    const donutData = [
      { name: "STAKE", value: 100, color: "#2c7bb6" },
      { name: "TRADE", value: 100, color: "#ffffbf" },
      { name: "CLAIM", value: 100, color: "#d7191c" },
      { name: "DISCONNECT WALLET", value: 180, color: "#fdae61" },
      { name: "SBT", value: 100, color: "#abd9e9" },
      { name: "MINT", value: 100, color: "#d7191c" },
    ];

    const colorScale = d3
      ?.scaleLinear()
      .domain([1, 3.5, 6])
      .range(["#fff"])
      .interpolate(d3.interpolateHcl);

    const arc = d3
      .arc()
      .innerRadius((width * 0.75) / 2)
      .outerRadius((width * 0.75) / 2 + 30);

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
        if (i === 7) return "#CCCCCC"; //Other
        else return colorScale(i);
      })
      .on("click", function (event, d) {
        // Reset the fill color of all slices to white
        svg.selectAll(".donutArcSlices").style("fill", "#fff");

        // Set the fill color of the clicked slice
        d3.select(this).style("fill", d.data.color);

        // Update the screen with the clicked slice's name
        setScreen(d.data.name);
      })
      .each(function (d, i) {
        const firstArcSection = /(^.+?)L/;
        let newArc = firstArcSection.exec(d3.select(this).attr("d"))[1];
        newArc = newArc.replace(/,/g, " ");
        svg
          .append("path")
          .attr("class", "hiddenDonutArcs")
          .attr("id", `donutArc${i}`)
          .attr("d", newArc)
          .style("fill", "none");
      });

    svg
      .selectAll(".donutText")
      .data(donutData)
      .enter()
      .append("text")
      .attr("class", "donutText")
      .attr("dy", -13)
      .append("textPath")
      .attr("startOffset", "50%")
      .style("text-anchor", "middle")
      .attr("xlink:href", (d, i) => `#donutArc${i}`)
      .text((d) => d.name);
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default Chart;
