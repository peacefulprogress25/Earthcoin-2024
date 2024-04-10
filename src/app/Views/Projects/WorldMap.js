"use client";
import ImageView from "../../Components/ImageView";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import mapData from "./data/countries.json";
import { MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";
import { Loader } from "../../Components/Loader";

const map = "/assets/images/map-bg.png";
const marker = "/assets/icons/marker.svg";
const MarkerIconSize = [35, 100];
const markerIcon = new L.Icon({
  iconUrl: "/assets/icons/marker.svg",
  iconSize: MarkerIconSize,
});
export default function WorldMap() {
  const position = [20, 100];
  const [loading, setLoading] = useState(true);
  const Popupdata = [
    {
      title: "Index",
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      coordinates: { latitude: "46.51802000", longitude: "-95.37615000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      title: "Index",
      subtitle: "Ethic Hub",
      coordinates: { latitude: "-33.64656000", longitude: "150.73515000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      title: "Index",
      subtitle: "Ethic Hub",
      coordinates: { latitude: "46.51802000", longitude: "-95.37615000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      title: "Index",
      subtitle: "Ethic Hub",
      coordinates: { latitude: "-39.64656000", longitude: "150.73515000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      title: "Index",
      subtitle: "Ethic Hub",

      coordinates: { latitude: "56.13068000", longitude: "68.70829000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      title: "Index",
      coordinates: { latitude: "36.95127000", longitude: "72.31800000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      title: "Index",
      coordinates: { latitude: "13.08784000", longitude: "80.27847000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      title: "Index",
      coordinates: { latitude: "36.95127000", longitude: "72.31800000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      title: "Index",
      coordinates: { latitude: "35.90617000", longitude: "68.48869000" },
    },
    {
      logo: "/assets/icons/polygon.svg",
      subtitle: "Ethic Hub",
      title: "Index",
      coordinates: { latitude: "34.98735000", longitude: "63.12891000" },
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const renderIcons = () => {
    return Popupdata && Popupdata.length
      ? Popupdata.map((map, index) => (
          <Marker
            key={map.title}
            position={[
              map?.coordinates?.latitude ? map?.coordinates?.latitude : 17.89,
              map?.coordinates?.longitude ? map?.coordinates?.longitude : 89.56,
            ]}
            icon={markerIcon}
            eventHandlers={{
              mouseover: (event) => {
                console.log("called");
                event.target.openPopup();
              },
              mouseout: (event) => {
                // setTimeout(() => {
                //   console.log("close");
                event.target.closePopup();
                // }, 30000);
              },
            }}
          >
            <PopoverHandler map={map} key={map.title} id={map.title} />
          </Marker>
        ))
      : null;
  };
  return (
    <div className="w-full flex flex-col relative">
      {" "}
      <ImageView
        src={map}
        alt="map"
        width={600}
        height={800}
        className="!w-full z-[-1] object-cover"
      />
      <div className="flex flex-col pt-[4rem] absolute top-0 w-full gap-2 items-center">
        <p className="text-white font-light text-center text-[14px] font-inter">
          PROJECTS
        </p>
        <p className="text-white font-semibold text-center text-[30px] sm:text-[30px] !font-syne">
          Climate Solutions backing $EARTH
        </p>
        <p className="text-white text-center font-light  text-[16px] font-inter">
          $Earth treasury funds the following climate action projects
        </p>
      </div>
      <MapContainer
        center={position}
        zoom={2}
        zoomControl={false}
        scrollWheelZoom={true}
        attributionControl={false}
        className="leaflet-Map"
      >
        {loading ? (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            <GeoJSON data={mapData.features} className="geoJson" />
            {renderIcons()}
          </>
        )}
      </MapContainer>
    </div>
  );
}
function PopoverHandler({ map, id }) {
  return (
    <Popup className="map_popup" key={map.title}>
      <ImageView src={map.logo} alt="alt" width={20} height={20} />
      <p className="text-[#344054] font-semibold  font-inter ">{map?.title}</p>
      <p className="text-[#667085] font-normal mt-2 font-inter ">
        {map?.title}
      </p>
      <p className="text-[#667085] font-normal font-inter">{map?.subtitle}</p>
    </Popup>
  );
}
