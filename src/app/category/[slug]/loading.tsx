import LoadingSkeleton from "@/components/loading-skeleton";
import { WrapperBox } from "@/components/wrapper";
import Main from "@/components/main";
import React from "react";

export default function Loading() {
  return (
    <Main className="space-y-10 mt-5">
      <WrapperBox>
        <LoadingSkeleton className="h-9 mb-5 w-[200px] lg:w-[300px]"></LoadingSkeleton>
        <div className="grid grid-cols-3 gap-5 justify-center items-center">
          <LoadingSkeleton className="w-full h-card" />
          <LoadingSkeleton className="w-full h-card" />
          <LoadingSkeleton className="w-full h-card" />
          <LoadingSkeleton className="w-full h-card" />
          <LoadingSkeleton className="w-full h-card" />
          <LoadingSkeleton className="w-full h-card" />
        </div>
      </WrapperBox>
    </Main>
  );
}
