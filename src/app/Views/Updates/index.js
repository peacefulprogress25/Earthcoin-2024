import dynamic from "next/dynamic";
import "./update.css";

const Updates = dynamic(() => import("./chrono"), {
  ssr: false,
});

export default Updates;
