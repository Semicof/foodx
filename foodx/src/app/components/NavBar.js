"use client"
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function NavBar() {
    const {data:session} = useSession();
  return (
    <div className=" flex items-center justify-between p-6 bg-nav-bg">

      <div className="flex items-center gap-4 w-[35%]">
        <Image
          src="/images/logoW.png"
          width={100}
          height={100}
          className=" rounded-full"
        />
        <h1 className="text-gray-700 text-2xl hover:text-white hover:underline cursor-pointer transition duration-300 ease-in-out">Home</h1>
        <h1 className="text-gray-700 text-2xl hover:text-white hover:underline cursor-pointer transition duration-300 ease-in-out">Add Location</h1>
        <h1 className="text-gray-700 text-2xl hover:text-white hover:underline cursor-pointer transition duration-300 ease-in-out">Leader Board</h1>
      </div>

      <div className=" lg:flex items-center bg-gray-100 p-2 rounded-md w-[45%] hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black bg-transparent mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input type="text" placeholder="Search..." className=" bg-transparent outline-none text-black "></input>
      </div>

      <div className="flex items-center h-full gap-4 w-[20%] justify-end">
        <div>
            {
                session?.user ? 
                <Image src={session.user.image} width={50} height={50} className="rounded-full"/>: "avatar"
            }
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
