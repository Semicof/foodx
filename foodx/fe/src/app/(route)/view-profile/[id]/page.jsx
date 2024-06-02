"use client"
import React, { useEffect } from "react";
import { user_test } from "@/testData";

function page({ params }) {
  useEffect(()=>{
    const user = user_test.find(obj => obj.id === params.id);
    console.log(user);
  },[])
  return <div>
    
  </div>;
}

export default page;
