"use client";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListBulletIcon } from "@radix-ui/react-icons";

const routes = [
  {
    name: "All",
    path: "/category/all",
  },

  {
    name: "Technology",
    path: "/category/technology",
  },
  {
    name: "Automotive",
    path: "/category/automotive",
  },
  {
    name: "Lifestyle",
    path: "/category/lifestyle",
  },
];

export default function HeaderNav() {
  const activePath = usePathname();
  return (
    <nav>
      <ul className="flex gap-x-5 items-center text-gray-50/90">
        <li className="flex gap-x-1 items-center">
          <ListBulletIcon />
          Categories:
        </li>
        {routes.map((route) => (
          <li
            key={route.path}
            className="px-4 py-2 text-gray-50/70 hover:text-gray-50 transition text-sm relative group">
            <Link href={route.path}>{route.name}</Link>
            {activePath === route.path && (
              <motion.div
                layoutId="underline-nav"
                className="w-3/5 mx-auto h-[1px] border-b border-gray-50/40  absolute bottom-0 inset-x-0 "
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
