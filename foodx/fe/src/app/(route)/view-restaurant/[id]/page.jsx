"use client";
import RestaurantInfo from "@/app/_components_restaurant/RestaurantInfo";
import React from "react";

function page({ params }) {
  return (
    <div className="w-full mb-8">
      <RestaurantInfo restaurantId={params.id} />
    </div>
  );
}

export default page;
