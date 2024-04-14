import React from "react";
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";

function Header() {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/",
    },
    {
      id: 3,
      name: "Leader Board",
      path: "/",
    },
    {
      id: 4,
      name: "Contact us",
      path: "/",
    },
  ];
  return (
    <div className="flex justify-between py-4 px-20 shadow-sm items-center">
      <div className="flex items-center gap-10">
        <Image src="/logo/logo.svg" width={80} height={100} />
        <ul className="md:flex gap-9 hidden">
          {menu.map((item, index) => (
            <Link href={item.path} key={index}>
            <li className="hover:text-primary hover:scale-110 cursor-pointer transition-all ease-in-out font-bold text-lg">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started!</Button>
    </div>
  );
}

export default Header;
