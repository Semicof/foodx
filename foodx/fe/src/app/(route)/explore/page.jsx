"use client"
import Listing from "@/app/_component_explore/Listing";
import React, { useEffect, useState } from "react";
import { restaurant_test } from "@/testData";
import Map from "@/app/_component_explore/Map";

function page() {
  const [center, setCenter] = useState({
    lat: 9,
    lng: 9,
  }); 

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setCenter({lat:latitude,lng:longitude})
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  };

  useEffect(()=>{
    getCurrentLocation();
  },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-4 gap-8">
      <Listing listing={restaurant_test}/>
      <Map center={center} width={"100%"} height={"85vh"}/>
      
    </div>
  );
}

export default page;
