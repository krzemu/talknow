import React from "react";
import Headline from "./headline";
import HeaderNav from "./header-nav";

export default function Header() {
  return (
    <header className="container w-full bg-gray-50/[2%] border-b p-5 lg:px-8 border-gray-500/20 mx-auto flex justify-between items-center">
      <Headline />
      <HeaderNav />
    </header>
  );
}
