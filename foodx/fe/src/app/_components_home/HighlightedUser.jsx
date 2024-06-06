import React, { useEffect } from "react";
import { user_test } from "@/testData";
import Image from "next/image";
import Link from "next/link";

function HighlightedUser() {
  return (
    <div className="">
      <div className="mb-10 px-10">
        <h2 className="text-3xl font-bold sm:text-4xl text-red-500 mb-6">
          Top Active User
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-6">
          {user_test
            ? user_test.map((item, index) => (
                <Link
                  key={index}
                  href={"/view-profile/" + item.id}
                  className="transition-all ease-in-out cursor-pointer shadow-md flex flex-col items-center hover:border-primary border-[1px] rounded-md px-2 py-8"
                >
                  <Image
                    src={item.avatar_link}
                    width={200}
                    height={200}
                    alt="avatar active user"
                    className="border-[1px] rounded-full"
                  />
                  <span className="font-bold text-blue-500 text-xl m-1">
                    {item.name}
                  </span>
                  <span className=" text-black text-sm ">{item.city}</span>
                  <div className="flex justify-between gap-12 mt-5">
                    <span className="flex gap-1">
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                      {item.number_of_reviews} reviews
                    </span>
                    <span className="flex gap-1">
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
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                      {item.points} points
                    </span>
                  </div>
                </Link>
              ))
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
