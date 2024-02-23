import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const position = [36.59783708008768, 53.06466164759884];

const customIcon = new icon({
  iconUrl: 'https://cdn.icon-icons.com/icons2/2044/PNG/512/maps_logo_map_marker_icon_124343.png',
  iconSize: [64, 68],
});

const MapLeafLet = () => {
  return (
    <MapContainer
      className="w-full h-full"
      center={position}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution="&copy; "
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={position} >
        <Popup> آکادمی سپهر</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLeafLet;
