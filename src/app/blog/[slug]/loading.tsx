import { WrapperBox } from "@/components/wrapper";
import Main from "@/components/main";
import React from "react";
import LoadingSkeleton from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <Main className="pt-0 container">
      <WrapperBox className="flex flex-col items-center gap-4 pt-10">
        <LoadingSkeleton className="w-[75px] h-[75px] rounded-full " />
        <LoadingSkeleton className="w-[250px] h-4" />
        <LoadingSkeleton className="w-[200px] h-4" />
        <LoadingSkeleton className="w-[300px] h-4" />
      </WrapperBox>
    </Main>
  );
}
