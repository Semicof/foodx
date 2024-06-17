"use client"

import HeroSection from "./_components_home/HeroSection";
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
