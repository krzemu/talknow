import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type AdBlockProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function AdBlock({ title, subtitle, imageSrc, className, children }: AdBlockProps) {
  return (
    <article className={`w-full h-[400px] relative bg-gray-900/30 p-10`}>
      <div className={cn(`flex items-end justify-start h-full w-full`, className)}>
        <div className="relative z-10 space-y-2 p-10">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl">{title}</h3>
          <p className="text-xl lg:text-2xl xl:text-3xl">{subtitle}</p>
        </div>
        {children}
        {imageSrc && (
          <Image
            src={imageSrc}
            width={1240}
            height={400}
            alt="Ad banner"
            className="h-[398px] w-[calc(100%-2px)] object-cover absolute inset-0 m-auto p-10"
          />
        )}
      </div>
    </article>
  );
}
