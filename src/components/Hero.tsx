"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import heroImg from '../../public/Hero_Banner.png';
import { Reveal } from "./ui/Reveal";
export function SpotlightNewDemo() {
  return (
    <div className="min-h-screen w-full rounded-md flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <Reveal>
        <div className="">

      <div className=" p-4 max-w-7xl mx-auto relative z-10 mt-8 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl leading-[1.2] pb-1 font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hiring Needs Intelligence, Not Just Keywords.
        </h1>
        <p className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Alchorian builds AI-powered systems that evaluate readiness, structure, and intent — starting with ATS intelligence.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 " >
        <ButtonCustom variant="primary" href="https://ariademo.netlify.app">Get Your ATS Score (Beta)</ButtonCustom>
        <ButtonCustom variant="secondary" href="#research">Help Improve Hiring</ButtonCustom>
      </div>
        </div>
      </Reveal>
    </div>
  );
}


type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
};

function ButtonCustom({ children, variant = "primary", href, onClick }: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md bg-white min-w-[200px] button bg-white text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-lg shadow-purple-500/50 hover:from-blue-500 hover:to-purple-500",
    secondary:
      "bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-purple-500/50 shadow-none",
  };

  const className = `${base} ${variants[variant]}`;

    if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}