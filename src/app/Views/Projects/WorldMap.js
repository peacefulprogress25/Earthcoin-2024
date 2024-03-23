import ImageView from "../../Components/ImageView";

const map = "/assets/images/map.png";
export default function WorldMap() {
  return (
    <div className="w-full h-[100vh]">
      {" "}
      <ImageView
        src={map}
        alt="map"
        width={600}
        height={900}
        className="w-full object-cover h-full"
      />
    </div>
  );
}
