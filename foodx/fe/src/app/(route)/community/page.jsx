"use client"
import CategorySearch from "@/app/_components_home/CategorySearch";
import React, { useState } from "react";
import { user_test } from "@/testData";
import User from "@/app/_components_home/User";
import PaginationUtil from "@/app/_utils/PaginationUtil";

function page() {
  const [searchResult,setSearchResult] = useState([]);
  const [searchMsg,setSearchMsg] = useState("");
  return (
    <div className="w-full flex flex-col gap-4 mb-8">
      <div className="mt-8 flex flex-col items-center gap-3 mx-2">
        <h2 className="font-bold text-4xl tracking-wide">
          Search <span className="text-primary">Users</span>
        </h2>
        <h2 className="text-xl text-gray-500">
          Find the one you want to interact with here:
        </h2>
        <CategorySearch searchTable={"user"} setSearchResult={setSearchResult} setSearchMsg={setSearchMsg}/>
      </div>
      <div className=" px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Search Result</h2>
        {user_test && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-6">
              {user_test.map((user, index) => (
                <User user={user} index={index} />
              ))}
            </div>
            <PaginationUtil />
          </div>
        )}
      </div>
      <div className="px-6">
        <h2 className="text-2xl font-bold text-primary mb-4">
          People you may know
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-6">
          {user_test.map((user, index) => (
            <User user={user} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
