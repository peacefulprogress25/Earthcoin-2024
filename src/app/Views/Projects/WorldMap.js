import ImageView from "../../Components/ImageView";

const map = "/assets/images/map.svg";
export default function WorldMap() {
  return (
    <div className="w-full">
      {" "}
      <ImageView
        src={map}
        alt="map"
        width={600}
        height={800}
        className="!w-full object-cover"
      />
    </div>
  );
}
