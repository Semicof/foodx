import React, { useEffect, useState } from "react";
import Image from "next/image";

function Review({setComments,item,index}) {
  function formatDate(isoString) {
    const date = new Date(isoString);

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = String(date.getUTCFullYear()).slice(2);

    return `${hours}:${minutes}  ${day}-${month}-${year}`;
  }

  function handleLikeToggle(index) {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? {
              ...comment,
              liked: !comment.liked,
              disliked: comment.liked ? comment.disliked : false,
            }
          : comment
      )
    );
  }

  function handleDislikeToggle(index) {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? {
              ...comment,
              disliked: !comment.disliked,
              liked: comment.disliked ? comment.liked : false,
            }
          : comment
      )
    );
  }
  return (
    <div key={index} className="w-full mt-6 border rounded-lg overflow-hidden ">
      {/* Top */}
      <div className="flex gap-3 p-4 bg-red-400 text-white items-center justify-between">
        <div>
          <Image src={item.userReview.avatarLink} width={60} height={60} alt="s" />
          <div className="">
            <h2 className="text-xl font-bold">{item.userReview.name}</h2>
            <span>{item.userReview.points} points</span>
          </div>
        </div>

        <div>
          <span>{formatDate(item.reviewDate)}</span>
        </div>
      </div>

      {/* Center */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-primary mt-4 mb-4">
          {item.reviewTitle}
        </h3>
        <hr />

        <div className="flex items-center flex-wrap gap-4 m-2">
          {item.images
            ? item.reviewImageIds.map((img, index) => (
                <Image
                  src={img.imageUrl}
                  width={100}
                  height={100}
                  alt="img"
                  className="rounded-md"
                />
              ))
            : "No image for this review"}
        </div>
        <hr />

        <p className="p-2">{item.reviewContent}</p>
      </div>

      {/* Bot */}
      <div className="flex gap-3 p-4 bg-gray-200 items-center justify-evenly">
        <div
          className="flex gap-2 items-center font-bold cursor-pointer"
          onClick={() => handleLikeToggle(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={item.liked ? "green" : "black"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
          {item.likeNumber}
        </div>

        <div
          className="flex gap-2 items-center font-bold cursor-pointer"
          onClick={() => handleDislikeToggle(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={item.disliked ? "red" : "black"}
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
            />
          </svg>
          {item.unlikeNumber}
        </div>
      </div>
    </div>
  );
}

export default Review;