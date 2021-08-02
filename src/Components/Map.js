import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "650px",
  height: "400px",
};

const center = {
  lat: 59.92723492128399,
  lng: 30.345408047401552,
};

const adresses = [
  { key: 1, label: "1", position: {lng: 30.166975305008375, lat: 59.82693810998269}},
  { key: 2, label: "2", position: {lng: 30.280342131630597, lat: 59.89621778909477}},
  { key: 3, label: "3", position: {lng: 30.492007835627124, lat: 59.84051425782886}},
  { key: 4, label: "4", position: {lng: 30.303629187583883, lat: 59.95905278209715}},
  { key: 5, label: "5", position: {lng: 30.211767075758146, lat: 60.00764227529975}},
];

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCyHKISZ7KrtvcgBqon92yKBTKI6v1tpwE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {adresses.map((adress) => {return <Marker key={adress.key} label={adress.label} position={adress.position}/>})}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
