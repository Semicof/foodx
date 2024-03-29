"use client";
import React, { useContext } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { UserLocationContext } from "../../../../context/UserLocationContext";

function MapView() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const containerStyle = {
    width: "100%",
    height: "70vh",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCF__svPnNstW1B8BD_jdhGZZv_7RZOMgA",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={30}>
      <MarkerF 
      position={userLocation} 
    //   icon={{
    //     url:"/images/userLocationMarker.png",
    //     scaledSize:{
    //         width:50,
    //         height:50
    //     }
    //   }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapView;
