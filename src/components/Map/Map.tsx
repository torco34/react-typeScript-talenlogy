import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 11.423765,
  lng: -1.664428,
};

export function Map() {
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      { lat: 11.423765, lng: -1.664428 },
    ]);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAWvkFBiaYjQK_hj28MtSeRW9N9PiuJG8c">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
