import ImageView from "../../Components/ImageView";

const mintermap = "/assets/images/mintermap.png";
export default function WorldMap() {
  return (
    <div className="w-full">
      {" "}
      <ImageView
        src={mintermap}
        alt="map"
        width={600}
        height={800}
        className="!w-full object-cover"
      />
    </div>
  );
}
