"use client"

import { Button } from "@/components/ui/button";
import HeroSection from "./_components_home/HeroSection";
import CategorySearch from "./_components_home/CategorySearch";
import ImageUpload from "./_upload/ImageUpload";
import NearbyRestaurantsList from "./_components_home/NearbyRestaurantsList";
import HighlightedUser from "./_components_home/HighlightedUser";
import LatestComments from "./_components_home/LatestComments";


export default function Home() {
  return (
    <div>
      <HeroSection/>

      <NearbyRestaurantsList/>

      <LatestComments/>

      <HighlightedUser/>
    </div>
  );
}
