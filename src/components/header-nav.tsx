"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

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
      <DesktopNav activePath={activePath} className="hidden lg:block" />
      <MobileNav className="block lg:hidden" />
    </nav>
  );
}

function DesktopNav({ activePath, className }: { activePath: string; className?: string }) {
  return (
    <div className={className}>
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
    </div>
  );
}

const variants = {
  open: { x: 0, scale: 1, display: "block" },
  closed: { x: "100%", scale: 0.6, display: "none" },
};

function MobileNav({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNav = () => {
    console.log(isOpen);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={className}>
        <HamburgerMenuIcon className="w-6 h-6 text-gray-50/90 mr-5" onClick={handleToggleNav} />
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          initial="closed"
          transition={{ duration: 0.15, ease: "linear" }}
          className={cn(
            `p-10 bg-gray-950/70 backdrop-blur-2xl absolute w-full z-50 top-0 right-0 h-screen  `
          )}>
          <ul className=" gap-y-3 flex flex-col items-end text-white relative">
            <li className="flex h-max gap-x-4 items-center text-2xl font-semibold mb-5">
              Categories:
            </li>
            {routes.map((route) => (
              <li key={route.path} className="relative group">
                <Link href={route.path} className="text-white/90 text-xl" onClick={handleToggleNav}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <Cross1Icon
            className="w-6 h-6 text-gray-50/90 absolute top-10 left-10"
            onClick={handleToggleNav}
          />
        </motion.div>
      </div>
    </>
  );
}
