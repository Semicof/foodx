"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ item, index }) {
    const pathName = usePathname();
  return (
    <Link href={item.path} key={index}>
      <li className={`${"hover:text-primary hover:scale-110 cursor-pointer transition-all ease-in-out font-bold text-xl px-2 py-1"} ${pathName===item.path?" border-b-2 border-primary  ":""}`}>
        {item.name}
      </li>
    </Link>
  );
}

export default NavLink;
