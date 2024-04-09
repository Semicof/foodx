"use client"

import { Button } from "@/components/ui/button";
import HeroSection from "./_components/HeroSection";
import CategorySearch from "./_components/CategorySearch";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CategorySearch/>
    </div>
  );
}
