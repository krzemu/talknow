import { cn } from "@/lib/utils";
import React from "react";

type LoadingSkeletonProps = {
  className?: string;
};

export default function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return <article className={cn(`bg-white/5 animate-pulse rounded-md`, className)}></article>;
}
