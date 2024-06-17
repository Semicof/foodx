import { MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CategorySearch from "../_components_home/CategorySearch";
import PaginationUtil from "../_utils/PaginationUtil";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


function Listing({ listing }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchMsg, setSearchMsg] = useState("");

  return (
    <div className="overflow-y-scroll h-[85vh]">
      <div className="mb-12 flex flex-col items-center gap-3 mx-2">
        <h2 className="font-bold text-4xl tracking-wide">
          Search <span className="text-primary">Restaurants</span>
        </h2>
        <h2 className="text-xl text-gray-500">
          Discover Restaurants in One click
        </h2>
        <CategorySearch
          searchTable={"restaurant"}
          searchOptions={["Name", "City", "District", "Ward"]}
          setSearchResult={setSearchResult}
          setSearchMsg={setSearchMsg}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {searchMsg ? (
          <div className="text-center col-span-full text-xl text-gray-500">
            {searchMsg}
            {console.log(searchResult)}
          </div>
        ) : searchResult.length ? (
          searchResult.map((item, index) => (
            <div
              key={index}
              className="p-3 m-2 hover:border hover:border-primary rounded-lg cursor-pointer"
            >
              <Image
                src={item.restaurantImageResponseList[0].imageUrl}
                width={800}
                height={150}
                className="rounded-lg object-cover h-[200px] m-1"
              />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{item.restaurantName}</h2>
                <h2 className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {item.ward}, {item.district}, {item.city}
                </h2>
              </div>
            </div>
          ))
        ) : (
          listing.map((item, index) => (
            <div
              key={index}
              className="p-3 m-2 hover:border hover:border-primary rounded-lg cursor-pointer"
            >
              <Image
                src={item.restaurantImageResponseList[0].imageUrl}
                width={800}
                height={150}
                className="rounded-lg object-cover h-[200px] m-1"
              />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">{item.restaurantName}</h2>
                <h2 className="flex gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {item.ward}, {item.district}, {item.city}
                </h2>
              </div>
            </div>
          ))
        )}
      </div>
      {/* <PaginationUtil /> */}
    </div>
  );
}

export default Listing;
