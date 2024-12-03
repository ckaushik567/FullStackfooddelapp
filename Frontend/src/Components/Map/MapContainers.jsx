import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../../App.css";
import locatioPointer from '../../assets/locationPointer.png';

import markerIcon2x from '../../assets/locationPointer.png';
import markerIcon from '../../assets/locationPointer.png';
import markerShadow from '../../assets/locationPointer.png';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const customIcon = new L.Icon({
  className: "custom-marker",

   
  iconUrl: locatioPointer,
  iconSize: [60, 60],
  iconAnchor: [-87, 145 ],
  popupAnchor: [0, -20],
});

const MapContainers = () => {
  const position = [51.5081, -0.1281];

  return (
    <div className="map-wrapper">
      <div className="sidebar">
        <h2>McDonald's</h2>
        <p className="highlight">South London</p>
        <p>Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
        <p className="phoneNumber">
          <p>Phone number </p>
          <p className="highlight"> +934443-43 </p>
        </p>
        <div className="webSiteContainer">
          <p>Website</p>
          <p className="highlight">http://McDonalds.uk/</p>
        </div>
      </div>

      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "70vh", width: "100%", margin: "auto", boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup className="custom-popup" autoOpen={true}>
            <div className="popup-content">
              <strong>McDonald's</strong>
              <p>South London</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapContainers;
