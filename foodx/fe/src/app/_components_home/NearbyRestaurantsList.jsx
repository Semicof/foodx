import React from "react";
import Image from "next/image";
import { restaurant_test } from "../../testData";
import StarRating from "../_helpers/StarRating";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NearbyRestaurantsList() {
  return (
    <div className="mb-10 px-10">
      <h2 className="text-3xl font-bold sm:text-4xl text-red-500 mb-6">
        Restaurants in your city
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-6">
        {restaurant_test
          ? restaurant_test.map((item, index) => (
              <Link
                href={"/view-restaurant/"+item.id}
                key={index}
                className="border-[1px] p-5 rounded-sm hover:shadow-lg"
              >
                <Image
                  src={item?.image}
                  alt="restaurant image"
                  width={400}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-md"
                />
                <h3 className="text-primary text-2xl font-bold my-1">
                  {item.restaurant_name}
                </h3>
                <span>
                  {item.house_number}, {item.ward}, {item.district}, {item.city}
                </span>
                <StarRating rate={item.rate} />
                <p className="my-1">{item.description}</p>
              
              </Link>
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div key={index} className="h-[220px] w-full bg-slate-200 animate-pulse rounded-lg"></div>
            ))}
      </div>
    </div>
  );
}

export default NearbyRestaurantsList;
