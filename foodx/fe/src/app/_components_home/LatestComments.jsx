import React from "react";
import { comment_test } from "@/testData";
import Link from "next/link";
import Image from "next/image";
import ReviewSummary from "../_helpers/ReviewSummary";
import TimeAgo from "../_helpers/TimeAgo";
import StarRating from "../_helpers/StarRating";
import BriefReview from "../_helpers/BriefReview";

function LatestComments() {
  return (
    <div className="mb-20 mt-20 px-10 ">
      <h2 className="text-3xl font-bold sm:text-4xl text-red-500 mb-6">
        Latest Reviews
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mb-6">
        {comment_test?comment_test.map((item, index) => (
          <div
            className=" shadow-md flex flex-col gap-5 items-center  rounded-md p-4"
            href="/"
            key={index}
          >
            <div className="flex items-center justify-between gap-12">
              <div className="flex gap-2">
                <Image
                  src={item.user_avatar}
                  width={50}
                  height={50}
                  alt="user avatar"
                  className="rounded-full"
                />
                <ReviewSummary
                  username={item.user_name}
                  content={item.review_content}
                  numberOfPhotos={item.images.length}
                />
              </div>
              <TimeAgo timestamp={Date.parse(item.review_date)} />
            </div>
            <Image
              src={item.images[0]}
              width={500}
              height={300}
              alt="review image"
              className="rounded-md"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-primary text-2xl">{item.restaurant_name}</h2>
              <span className=" text-gray-600">{item.restaurant_address}</span>
              <hr className="my-2"/>
              <StarRating rate={item.star_number} />
              <span className="font-bold text-xl">{item.review_title}</span>
              <BriefReview content={item.review_content} maxLength={200} />
            </div>
          </div>
        ))
        : [1, 2, 3, 4].map((item, index) => (
          <div key={index} className="h-[220px] w-full bg-slate-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}

export default LatestComments;
