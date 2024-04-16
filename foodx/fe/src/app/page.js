"use client"

import { Button } from "@/components/ui/button";
import HeroSection from "./_components-home/HeroSection";
import CategorySearch from "./_components-home/CategorySearch";
import ImageUpload from "./_upload/ImageUploadButton";
import NearbyRestaurantsList from "./_components-home/NearbyRestaurantsList";
import HighlightedUser from "./_components-home/HighlightedUser";
import LatestComments from "./_components-home/LatestComments";


export default function Home() {
  return (
    <div>
      <HeroSection/>

      <CategorySearch/>

      <NearbyRestaurantsList/>

      <LatestComments/>

      <HighlightedUser/>

      {/* <ImageUpload/> */}
    </div>
  );
}
