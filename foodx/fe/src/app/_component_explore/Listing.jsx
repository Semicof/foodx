import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategorySearch from "../_components_home/CategorySearch";

function Listing({ listing }) {
  return (
    <div className="overflow-y-scroll h-[85vh]">
      <CategorySearch />
      <div className="grid md:grid-cols-2 gap-5">
        {listing.map((item, index) => (
          <div
            key={index}
            className="p-3 m-2 hover:border hover:border-primary rounded-lg cursor-pointer"
          >
            <Image
              src={item.image}
              width={800}
              height={150}
              className="rounded-lg object-cover h-[200px] m-1"
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl">{item.restaurant_name}</h2>
              <h2 className="flex gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                {item.ward}, {item.district}, {item.city}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;
