"use client";
import React from "react";
import ListUser from "../../_components_message/ListUser";
import Chat from "../../_components_message/Chat";
import ProtectedRoute from "@/components/ProtectedRoute";

function page() {
  return (
    <ProtectedRoute>
      <div className="flex flex-row border-[2px] h-[85vh]">
        <div className="basis-1/3">
          <ListUser />
        </div>
        <div className="basis-2/3">
          <Chat />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default page;
