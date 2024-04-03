import dynamic from "next/dynamic";

const Updates = dynamic(() => import("./chrono"), {
  ssr: false,
});

export default Updates;
