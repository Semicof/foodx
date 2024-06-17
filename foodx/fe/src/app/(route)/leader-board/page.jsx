"use client";
import React, { useEffect, useState } from "react";
import { user_test } from "@/testData";
import Image from "next/image";
import Link from "next/link";
import PaginationUtil from "@/app/_utils/PaginationUtil";

function page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    const user_tmp = user_test.slice(0, 5);
    user_tmp.sort((a, b) => b.points - a.points);
    setUsers(user_tmp);
  };
  return (
    <div className="w-full h-screen gap-4 flex flex-col items-center pt-8">
      <h1 className="text-3xl text-primary font-bold">Leader board</h1>
      <div className="w-[40%] flex flex-col gap-4 p-4 ">
        {users.map((user, index) => (
          <Link
          href={"/view-profile/"+user.id}
            key={index}
            className="flex gap-2 items-center justify-between p-4 bg-gray-100 rounded-lg cursor-pointer hover:border border-primary"
          >
            <div className="flex items-center gap-2">
              <Image src={user.avatarLink} alt="user" width={50} height={50} className="rounded-full" />
              <div>
                <h2 className="font-bold text-xl text-primary">{user.name}</h2>
                <h2>{user.city}</h2>
              </div>
            </div>

            <span>{user.points} points</span>
          </Link>
        ))}
      </div>
      <PaginationUtil/>
    </div>
  );
}

export default page;
