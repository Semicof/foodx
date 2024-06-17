import React, { useEffect, useState } from "react";
import { user_test } from "@/testData";
import User from "./User";
import Link from "next/link";
import { searchUsers } from "../_utils/GlobalAPI";

function HighlightedUser() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    // const getUsers = async()=>{
    //   const data = {
    //     searchRequestDTO: [
          
    //     ],
    //     pageRequestDTO: {
    //       pageNo: 0,
    //       pageSize: 5
    //     },
    //     sort: "DESC",
    //     sortByColumn: "points"
    //   }
    //   const resp = await searchUsers(data);
    //   setUsers(resp.data.result);
    // }

    // getUsers();
    setUsers(user_test);
  },[])

  
  return (
    <div className="">
      <div className="mb-10 px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl text-red-500 mb-6">
            Top Active Users
          </h2>
          <Link href={"/community"} className="text-blue-800">
            See more
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-6">
          {users
            ? users.map((item, index) => <User user={item} key={index}/>)
            : [1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="h-[220px] w-full bg-slate-200 animate-pulse rounded-lg"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default HighlightedUser;
