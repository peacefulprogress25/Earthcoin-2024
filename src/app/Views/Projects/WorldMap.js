import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import mapData from "./data/countries.json";
import { MapContainer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "./map.css";
import { Loader } from "../../Components/Loader";
import ImageView from "../../Components/ImageView";

const map = "/assets/images/map-bg.png";
const MarkerIconSize = [35, 100];
const markerIcon = new L.Icon({
  iconUrl: "/assets/icons/marker.svg",
  iconSize: MarkerIconSize,
});

// Custom hook to control zoom
const SetZoom = ({ setZoomLevel }) => {
  const map = useMap();

  useEffect(() => {
    // Detect screen size and set zoom level accordingly
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        map.setZoom(0.2); // Set zoom for screens below 640px
        setZoomLevel(0.2);
      } else {
        map.setZoom(1.7); // Set zoom for screens above 640px
        setZoomLevel(1.7);
      }
    };

    // Call on component mount
    handleResize();

    // Update zoom on window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [map, setZoomLevel]);

  return null;
};

export default function WorldMap({ projects }) {
  const position = [20, 100];
  const [loading, setLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderIcons = () => {
    return projects && projects.length
      ? projects.map((map, index) => (
          <Marker
            key={map.title}
            position={[
              map?.latitude ? map?.latitude : 17.89,
              map?.longitude ? map?.longitude : 89.56,
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
            <PopoverHandler map={map} key={map.subText} id={map.subText} />
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
        className="z-[-1] w-full h-[100vh] object-cover"
      />
      <div className="flex flex-col pt-[1rem] lg:pt-0 mg:pt-0 sm:pt-0   absolute mb-10 top-20  sm:top-9 w-full gap-1 items-center">
        <p className="text-white font-light text-center text-[14px] font-inter">
          PROJECTS
        </p>
        <p className="text-white font-semibold text-center text-[30px] !font-syne">
          RWAs backing $EARTH
        </p>
        <p className="text-white text-center font-light text-[16px] font-inter">
          Assets addressing climate change and catering to humanities core needs
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
        className="leaflet-Map h-[100vh] w-[100vh]  object-cover"
      >
        <SetZoom setZoomLevel={setZoomLevel} />
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
    <Popup className="map_popup" key={map.subText}>
      <ImageView src={map?.projectIcon} alt="alt" width={20} height={20} />
      <p className="text-[#344054] font-semibold font-inter">{map?.subText}</p>
      <p className="text-[#667085] font-normal mt-2 font-inter text-center">
        {map?.projectName}
      </p>
      <p className="text-[#667085] font-normal text-center font-inter">
        {map?.category}
      </p>
    </Popup>
  );
}
