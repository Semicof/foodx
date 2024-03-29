"use client"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryList from "./components/Home/CategoryList";
import RangeSelection from "./components/Home/RangeSelection";
import RatingSelection from "./components/Home/RatingSelection";
import MapView from "./components/Home/MapView";


export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(!session?.user){
      router.push("/Login");
    }
  },[session])
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-screen pt-5">
      <div className="flex flex-col items-center text-center">
        <CategoryList/>
        <RangeSelection/>
        <RatingSelection/>
      </div>
      <div className=" col-span-3">
        <MapView/>
      </div>
    </main>
  );
}
