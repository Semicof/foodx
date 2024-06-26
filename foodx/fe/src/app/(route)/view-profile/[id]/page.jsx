"use client";
import React, { useEffect } from "react";
import { user_test } from "@/testData";
import ProtectedRoute from "@/components/ProtectedRoute";
import Profile from "@/app/_component_user/Profile";

function page({ params }) {
  return <Profile id={params.id} />;
}

export default page;
