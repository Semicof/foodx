import React, { useEffect, useState } from "react";
import Image from "next/image";
import { restaurant_test } from "../../testData";
import StarRating from "../_helpers/StarRating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getNearbyRestaurant } from "../_utils/GlobalAPI";
import { useAppContext } from "@/context/AppProvider";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function NearbyRestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const { location } = useAppContext();

  useEffect(() => {
    if (location.lat && location.lng) {
      getRestaurants();
    }
  }, [location]);

  const getRestaurants = async () => {
    const { lat, lng } = location;

    const requestBody = {
      request: {
        searchRequestDTO: [],
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
    <div className="mb-10 px-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold sm:text-4xl text-red-500 mb-6">
          Restaurants in your city
        </h2>
        <Link href={"/explore"} className="text-blue-800">
          See more
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-6">
        {restaurants.length > 0
          ? restaurants.map((item, index) => (
              <Link
                href={"/view-restaurant/" + item.id}
                key={index}
                className="border-[1px] p-5 rounded-sm hover:shadow-lg"
              >
                <Image
                  src={item?.restaurantImageResponseList[0].imageUrl}
                  alt="restaurant image"
                  width={400}
                  height={200}
                  className="h-[200px] w-full object-cover rounded-md"
                />
                <h3 className="text-primary text-2xl font-bold my-1">
                  {item.restaurantName}
                </h3>
                <span>
                  {item.ward}, {item.district}, {item.city}
                </span>
                <StarRating rate={item.points} />
                <p className="my-1">{item.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  {item.tagDTOList.map((tag) => (
                    <HoverCard className="text-xs">
                      <HoverCardTrigger className=" bg-red-200 p-1 rounded-lg flex gap-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6h.008v.008H6V6Z"
                          />
                        </svg>
                        {tag.tagName}
                      </HoverCardTrigger>
                      <HoverCardContent>{tag.tagDescription}</HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </Link>
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="h-[220px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default NearbyRestaurantsList;
