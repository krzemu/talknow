import React from "react";
import { cn } from "../lib/utils";

type WrapperBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export function WrapperBox({ children, className }: WrapperBoxProps) {
  return (
    <section className={cn(`relative px-5 lg:px-10 flex flex-col gap-5`, className)}>
      {children}
    </section>
  );
}

export function Wrapper({ children, className }: WrapperBoxProps) {
  return <div className={cn(`relative flex flex-col gap-10`, className)}>{children}</div>;
}
