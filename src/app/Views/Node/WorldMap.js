"use client";
import ImageView from "../../Components/ImageView";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import mapData from "../Projects/data/countries.json";
import { MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import "../Projects/map.css";
import { Loader } from "../../Components/Loader";

const map = "/assets/images/nodeMap-bg.png";
const marker = "/assets/icons/marker.svg";
const MarkerIconSize = [35, 100];
const markerIcon = new L.Icon({
  iconUrl: "/assets/icons/marker-red.svg",
  iconSize: MarkerIconSize,
});
export default function WorldMap({ nodeList }) {
  const position = [20, 100];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const renderIcons = () => {
    return nodeList && nodeList.length
      ? nodeList.map((map, index) => (
          <Marker
            key={map.name}
            position={[
              map?.latitude ? map?.latitude : 17.89,
              map.longitude ? map.longitude : 89.56,
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
            <PopoverHandler map={map} key={map.name} id={map.name} />
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
        className="!w-full z-[-1] h-[50rem] object-cover"
      />
      <div className="flex flex-col pt-[2rem] absolute top-0 w-full gap-2 items-center">
        <p className="text-white font-light text-center text-[14px] font-inter">
          Nodes of $EARTH
        </p>
        <p className="text-white font-semibold text-center text-[30px] sm:text-[30px] !font-syne">
          $EARTH Mycelium map
        </p>
        <p className="text-white text-center font-light  text-[16px] font-inter">
          Nodes powering $EARTH map
        </p>
      </div>
      <MapContainer
        center={position}
        zoom={2}
        zoomControl={false}
        scrollWheelZoom={false}
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
  const socialIcons = [
    {
      icon: "/assets/icons/twitter.svg",
      link: map?.twitter,
    },

    {
      icon: "/assets/icons/linkedin.svg",
      link: map?.linkedin,
    },
    {
      icon: "/assets/icons/google.svg",
      link: map?.google,
    },
  ];
  return (
    <Popup className="map_popup" key={map.name}>
      <ImageView
        src={map.image}
        alt="alt"
        width={20}
        height={20}
        className="rounded-full"
      />
      <p className="text-[#344054] font-semibold  font-inter ">{map?.name}</p>
      <p className="text-[#667085] font-normal mt-2 font-inter ">
        Minted till date:
      </p>
      <p className="text-[#667085] font-normal font-inter">{map?.balance}</p>
      <div className="flex mt-2 gap-3">
        {socialIcons.map((icons, index) => (
          <Link href={icons?.link} key={index}>
            <ImageView
              src={icons?.icon}
              width={400}
              height={400}
              className="w-5  cursor-pointer h-5"
            />
          </Link>
        ))}
      </div>
    </Popup>
  );
}
