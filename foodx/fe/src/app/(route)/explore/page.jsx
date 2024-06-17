"use client"
import Listing from "@/app/_component_explore/Listing";
import React, { useEffect, useState } from "react";
import { restaurant_test } from "@/testData";
import Map from "@/app/_component_explore/Map";
import { useAppContext } from "@/context/AppProvider";
import { getNearbyRestaurant } from "@/app/_utils/GlobalAPI";

function page() {
  const [center, setCenter] = useState({
    lat: 9,
    lng: 9,
  }); 
  const [restaurants, setRestaurants] = useState([]);
  const {location} = useAppContext();

  useEffect(() => {
    if (location.lat && location.lng) {
      setCenter({lat:location.lat,lng:location.lng});
      getRestaurants();
    }
  }, [location]);

  const getRestaurants = async () => {
    const { lat, lng } = location;
    const requestBody = {
      request: {
        searchRequestDTO: [
        ],
        pageRequestDTO: {
          pageNo: 0,
          pageSize: 5,
        },
        sort: "ASC",
        sortByColumn: "restaurantName",
      },
      locationRequest: {
        latitude: lat,
        longitude: lng,
        radius: 50,
      },
    };

    try {
      const response = await getNearbyRestaurant(requestBody);

      setRestaurants(response.data.result.content);
    } catch (error) {
      console.error("Error fetching nearby restaurants", error);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen p-4 gap-8">
      <Listing listing={restaurants}/>
      <Map center={center} width={"100%"} height={"85vh"}/>
    </div>
  );
}

export default page;
