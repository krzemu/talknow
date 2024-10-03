import React from "react";
import { cn } from "../lib/utils";

export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        `container w-full 2xl:max-w-[1300px] mx-auto py-5 bg-gray-50/[2%] flex-1 h-full`,
        className
      )}>
      {children}
    </main>
  );
}
