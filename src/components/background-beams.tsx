"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -left-[40%] top-0 h-[1000px] w-[1000px] rotate-12 bg-gradient-to-r from-indigo-500/30 to-transparent blur-[100px]" />
      <div className="absolute -right-[40%] bottom-0 h-[1000px] w-[1000px] rotate-12 bg-gradient-to-l from-indigo-500/30 to-transparent blur-[100px]" />
    </div>
  );
};
