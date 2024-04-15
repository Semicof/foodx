"use client"

import { Button } from "@/components/ui/button";
import HeroSection from "./_components/HeroSection";
import CategorySearch from "./_components/CategorySearch";
import ImageUpload from "./_upload/ImageUploadButton";
import NearbyRestaurantsList from "./_components/NearbyRestaurantsList";
import HighlightedUser from "./_components/HighlightedUser";
import LatestComments from "./_components/LatestComments";


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
