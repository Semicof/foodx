"use client";
import RatingFnc from "@/app/_helpers/RatingFnc";
import ImageUpload from "@/app/_upload/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";

const userInfo = {
  id: "1",
  name: "Asley",
  avatar_link:
    "https://res.cloudinary.com/ddinttgy0/image/upload/v1712909047/ivvn3honq3owtlvxsib3.png",
  ward: "Doi Can",
  district: "Ba Dinh",
  city: "Ha Noi",
  join_date: "2002-10-3",
  points: "30",
  number_of_reviews: "10",
};

function Page({ params }) {
  const [restaurantId, setRestaurantId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    setRestaurantId(params.id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    setTime(currentTime);

    const reviewData = {
      userId: userInfo.id,
      restaurantId,
      title,
      content,
      rate,
      time: currentTime,
      images,
    };
    console.log(reviewData);
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[60%] h-[88%] border rounded-lg p-4 flex flex-col gap-4 mt-5"
      >
        <h1 className="text-3xl font-bold text-center text-primary">
          Write your review
        </h1>

        <div>
          <h2>Title:</h2>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <h2>Your review:</h2>
          <Textarea
            placeholder="Write it down here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className=" min-h-40"
          />
        </div>

        <div className="flex gap-4 items-center">
          <h2>Rate this restaurant:</h2>
          <RatingFnc rating={rate} setRating={setRate} className="text-sm" />
        </div>

        <div>
          <h2>Add images</h2>
          <ImageUpload setImages={setImages} />
        </div>

        <div className="flex items-center justify-center">
          <Button type="submit" className="w-[20%]">
            Post review
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
