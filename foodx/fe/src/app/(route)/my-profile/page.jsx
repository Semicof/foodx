"use client";
import React, { useEffect } from "react";
import { user_test } from "@/testData";
import ProtectedRoute from "@/components/ProtectedRoute";
import Profile from "@/app/_component_user/Profile";
import MyProfile from "@/app/_component_user/MyProfile";

function page() {
  return (
    <ProtectedRoute>
      <MyProfile/>
    </ProtectedRoute>
  );
}

export default page;
