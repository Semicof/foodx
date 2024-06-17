"use client";
import RatingFnc from "@/app/_helpers/RatingFnc";
import ImageUpload from "@/app/_upload/ImageUpload";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { postReview } from "@/app/_utils/GlobalAPI";
import { useAppContext } from "@/context/AppProvider";

function Page({ params }) {
  const router = useRouter();
  const { token } = useAppContext();
  const [restaurantId, setRestaurantId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rate, setRate] = useState(0);
  const [images, setImages] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImages(selectedFile);
  };

  useEffect(() => {
    setRestaurantId(params.id);
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const data = {
      restaurantId: restaurantId,
      reviewTitle: title,
      reviewContent: content,
      starNumber: rate,
    };

    formData.append("data", JSON.stringify(data));
    // images.forEach((image) => {
    //   console.log(image);
    //   formData.append("multipartFiles", image);
    // });
    if (images) {
      formData.append("multipartFiles", images);
    }

    console.log("form data:", formData.get("data"));
    // console.log("form multipart files:", formData.get("multipartFiles"));

    try {
      const resp = await postReview(formData, token);
      if (resp.ok) {
        router.push("/view-restaurant/" + params.id);
      } else {
        throw new Error("Failed to post review");
      }
    } catch (error) {
      console.error("Failed to post review: ", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="w-full mb-8 flex justify-center">
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
              className="min-h-40"
            />
          </div>

          <div className="flex gap-4 items-center">
            <h2>Rate this restaurant:</h2>
            <RatingFnc rating={rate} setRating={setRate} className="text-sm" />
          </div>

          <div>
            <h2>Add images</h2>
            {/* <ImageUpload setImages={setImages} /> */}
            <Input
              type="file"
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/jpg, image/gif"
            />
          </div>

          <div className="flex items-center justify-center">
            <Button type="submit" className="w-[20%]">
              Post review
            </Button>
          </div>
        </form>
      </div>
    </ProtectedRoute>
  );
}

export default Page;
