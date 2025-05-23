"use client";
import ImageView from "../../Components/ImageView";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import mapData from "../Projects/data/countries.json";
import { MapContainer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
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

// Custom hook to set zoom level based on screen size
const SetZoom = ({ setZoomLevel }) => {
  const map = useMap();

  useEffect(() => {
    // Function to adjust zoom based on screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        map.setZoom(0.2);
        setZoomLevel(0.2);
      } else if (screenWidth < 1024) {
        map.setZoom(1.3);
        setZoomLevel(1.3);
      } else if (screenWidth < 1700) {
        map.setZoom(1.6);
        setZoomLevel(1.6);
      } else {
        map.setZoom(2.2);
        setZoomLevel(2.2);
      }
    };

    // Set zoom on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [map, setZoomLevel]);

  return null;
};

export default function WorldMap({ nodeList }) {
  const position = [20, 100];
  const [loading, setLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

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
                event.target.openPopup();
              },
              mouseout: (event) => {
                event.target.closePopup();
              },
            }}
          >
            <PopoverHandler map={map} key={map.name} id={map.name} />
          </Marker>
        ))
      : null;
  };

  return (
    <div className="relative flex flex-col w-full">
      <ImageView
        src={map}
        alt="map"
        width={600}
        height={600}
        className="!w-full z-[-1] h-[100vh] sm:h-[100vh] object-cover"
      />
      <div className="flex flex-col pt-[1rem] md:pt-0 absolute top-10 w-full gap-1 items-center">
        <p className="text-white font-light text-center text-[14px] font-inter">
          $EARTH NODES
        </p>
        <p className="text-white font-semibold text-center text-[24px] sm:text-[30px] !font-syne">
          Mycelium Network
        </p>
        <p className="text-white text-center font-light  text-[16px] font-inter">
          Nodes powering $EARTH network
        </p>
      </div>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        zoomControl={false}
        zoomSnap={0.1}
        zoomDelta={0.1}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        attributionControl={false}
        className="leaflet-Map h-[100vh] w-[100vh] flex items-center justify-center object-cover"
      >
        <SetZoom setZoomLevel={setZoomLevel} />
        {loading ? (
          <div className="h-[60vh] w-full flex items-center  justify-center">
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
      <p className="text-[#344054] font-semibold font-inter">{map?.name}</p>
      <p className="text-[#667085] font-normal mt-2 font-inter">
        Minted till date:
      </p>
      <p className="text-[#667085] font-normal font-inter">{map?.balance}</p>
      <div className="flex gap-3 mt-2">
        {socialIcons.map((icons, index) => (
          <Link href={icons?.link} key={index}>
            <ImageView
              src={icons?.icon}
              width={400}
              height={400}
              className="w-5 h-5 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </Popup>
  );
}
