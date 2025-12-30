"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-160 w-full rounded-md flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 mt-8 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hiring decisions need more than keywords.
        </h1>
        <p className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Alchorian bridges recruiter intent with candidate readiness through intelligent matching
        </p>
      </div>
    </div>
  );
}
