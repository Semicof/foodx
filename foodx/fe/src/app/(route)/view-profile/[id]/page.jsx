"use client";
import React, { useEffect } from "react";
import { user_test } from "@/testData";
import ProtectedRoute from "@/components/ProtectedRoute";
import Profile from "@/app/_component_user/Profile";

function page({ params }) {
  return (
    <ProtectedRoute>
      <Profile id={params.id} />
    </ProtectedRoute>
  );
}

export default page;
