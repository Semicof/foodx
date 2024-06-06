import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavLink from "../_utils/NavLink";
import { useAppContext } from "@/context/AppProvider";
import UserDropdown from "./UserDropdown";
const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Explore",
    path: "/explore",
  },
  {
    id: 3,
    name: "Leader Board",
    path: "/leader-board",
  },
  {
    id: 4,
    name: "Community",
    path: "/community",
  },
];

function Header() {
  // const token  = localStorage.getItem('token');
  const {user} = useAppContext();

  return (
    <div className="flex justify-between py-4 px-20 shadow-sm items-center">
      <div className="flex items-center gap-10">
        <Link href={"/"}>
          <Image src="/logo/logo.svg" width={80} height={100} alt="Logo" />
        </Link>

        <ul className="md:flex gap-9 hidden">
          {menu.map((item, index) => (
            <NavLink item={item} key={index} />
          ))}
        </ul>
      </div>
      <div className="flex gap-10 items-center cursor-pointer">
        {user ? (
          <>
            <Link href="/add-listing">
              <Button>Add Listing</Button>
            </Link>
            <UserDropdown/>
            <Link className="message" href="/message">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 font-bold hover:text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </Link>
            <Link className="notification" href="/notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-9 h-9 font-bold hover:text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </Link>
          </>
        ) : (
          <Link href={"/login"}>
            <Button>Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
