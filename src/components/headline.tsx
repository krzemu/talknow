import Image from "next/image";
import logo from "@/app/favicon.ico";
import React from "react";
import Link from "next/link";

export default function Headline() {
  return (
    <Link href="/" className="flex items-center gap-x-5">
      <Image src={logo} width={64} height={64} alt="Blog logo" />
      <p className="text-2xl lg:text-4xl">TalkNow</p>
    </Link>
  );
}
