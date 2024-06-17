"use client";
import React, { useEffect, useState } from "react";
import Map from "@/app/_component_explore/Map";
import StarRating from "@/app/_helpers/StarRating";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Reviews from "./Reviews";
import { getOpeningTime, getRestaurantById } from "../_utils/GlobalAPI";
import FormattedDateTime from "../_helpers/FormattedDatetime";
import { Skeleton } from "@/components/ui/skeleton"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function RestaurantInfo({ restaurantId }) {
  const [restaurant, setRestaurant] = useState();
  const [openingTimeTable, setOpeningTimeTable] = useState();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const getRestaurantInfo = async () => {
      try {
        const resp = await getRestaurantById(restaurantId);
        const restaurant_tmp = resp.data.result;
        setCenter({
          lat: parseFloat(restaurant_tmp.latitude),
          lng: parseFloat(restaurant_tmp.longitude),
        });
        setRestaurant(restaurant_tmp);
      } catch (error) {
        console.error("Failed to fetch restaurant info:", error);
      }
    };

    const getOpenTimeTable = async () => {
      try {
        const resp = await getOpeningTime(restaurantId);
        const o_tmp = resp.data.result;
        setOpeningTimeTable(o_tmp);
      } catch (err) {
        console.error("Fail to fetch opening time", err);
      }
    };

    getOpenTimeTable();
    getRestaurantInfo();
  }, [restaurantId]);

  return (
    <div className=" flex justify-center">
      {restaurant ? (
        <div className="grid grid-cols-2 gap-4 w-[70%] h-full ">
          {/* Left */}
          <div className="p-4">
            <h1 className="font-bold text-3xl text-primary">
              {restaurant.restaurantName}
            </h1>
            <StarRating rate={restaurant.points} />
            <Image
              src={restaurant?.restaurantImageResponseList[0].imageUrl}
              width={600}
              height={400}
              alt="res"
            />
            <h2 className="text-2xl font-semibold mt-4 text-primary">
              Overview:
            </h2>
            <div
              className="p-4"
              dangerouslySetInnerHTML={{ __html: restaurant.description }}
            />

            <div>
              <h2 className="text-2xl font-semibold mt-4 text-primary">
                Opening Times:
              </h2>
              {openingTimeTable && (
                <table className="min-w-full mt-2">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">Day</th>
                      <th className="border px-4 py-2">Opening Time</th>
                      <th className="border px-4 py-2">Closing Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openingTimeTable.map((time) => (
                      <tr key={time.id}>
                        <td className="border px-4 py-2">{time.dayOfWeek}</td>
                        <td className="border px-4 py-2">{time.openingTime}</td>
                        <td className="border px-4 py-2">{time.closingTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <Reviews restaurantId={restaurantId} />
          </div>

          {/* Right */}
          <div className="p-4">
            {/* Utilities */}
            <div className="mb-2 h-[5rem] flex items-center justify-end gap-6">
              <div className="flex gap-2 cursor-pointer hover:text-primary hover:font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
                Share
              </div>
              <div className="flex gap-2 cursor-pointer hover:text-primary hover:font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Favorite
              </div>
              <div className="flex gap-2 cursor-pointer hover:text-primary hover:font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
                Save
              </div>
            </div>

            <Map
              center={center}
              restaurant={restaurant}
              width={700}
              height={600}
            />

            {/* Contact Info */}
            <h2 className="font-semibold text-xl text-primary mt-5">
              Contacts:
            </h2>
            <div className="mt-2 flex-col">
              <div className="flex gap-2 text-xl mt-4 mb-4 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                {restaurant.ward}, {restaurant.district}, {restaurant.city}
              </div>

              <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {restaurant.phoneNumber}
              </div>

              <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>

                {restaurant.email}
              </div>

              <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                {restaurant.website}
              </div>

              <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                Socials:
                <a href={restaurant.facebookLink}>
                  <svg
                    class="w-6 h-6 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href={restaurant.instagramLink}>
                  <svg
                    class="w-6 h-6 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Dining Options */}
            <h2 className="font-semibold text-xl text-primary mt-5">
              Dining Options:
            </h2>
            <div>
              {restaurant.offerDelivery ? (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Delivery
                </div>
              ) : (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Delivery
                </div>
              )}

              {restaurant.offerTakeAway ? (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Take away
                </div>
              ) : (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Take away
                </div>
              )}

              {restaurant.OutDoorSeating ? (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Out door seating
                </div>
              ) : (
                <div className="flex gap-2 text-xl mt-4 mb-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Out door seating
                </div>
              )}

              {/* more info */}
              <div className="flex items-center gap-3 flex-wrap">
                {restaurant.tagDTOList.map((tag) => (
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
              <div className="flex flex-col gap-2 my-2">
                <span className="flex gap-2">
                  Added at:
                  <FormattedDateTime
                    dateTimeString={restaurant.timeAdded}
                  /> by {restaurant.userAdd.name}
                </span>
                {restaurant.userUpdate && (
                  <span>
                    Updated at:{" "}
                    <FormattedDateTime
                      dateTimeString={restaurant?.updateTime}
                    />{" "}
                    by {restaurant?.userUpdate?.name}
                  </span>
                )}
              </div>
            </div>

            {/* Function */}
            <div className="flex gap-4 items-center mt-5">
              <Link href={"/write-review/" + restaurantId}>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  Add new reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ):<Skeleton className="w-full h-screen"/>}
    </div>
  );
}

export default RestaurantInfo;
