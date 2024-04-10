import dynamic from "next/dynamic";

const Insight = dynamic(() => import("./WorldMap"), {
  ssr: false,
});

export default Insight;
