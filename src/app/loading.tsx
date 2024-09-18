import LoadingSkeleton from "@/components/loading-skeleton";
import Main from "@/components/main";
import { WrapperBox } from "@/components/wrapper";
import React from "react";

export default function Loading() {
  return (
    <Main className="space-y-10">
      <WrapperBox>
        <LoadingSkeleton className="h-9 w-[200px]"></LoadingSkeleton>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[476px]">
          <LoadingSkeleton className="md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2" />
          <LoadingSkeleton className="md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1" />
          <LoadingSkeleton className="md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1" />
        </div>
      </WrapperBox>
      <WrapperBox>
        <LoadingSkeleton className="h-9 w-[200px]"></LoadingSkeleton>
        <div className="grid grid-cols-3 h-card gap-5 justify-center items-center">
          <LoadingSkeleton className="w-full h-full" />
          <LoadingSkeleton className="w-full h-full" />
          <LoadingSkeleton className="w-full h-full" />
        </div>
      </WrapperBox>
    </Main>
  );
}
