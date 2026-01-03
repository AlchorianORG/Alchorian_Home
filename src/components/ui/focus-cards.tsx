"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Check } from 'lucide-react';
import Image from "next/image";
import Alchorian from '../../../public/alchorian_logo.png';

interface CardType{
  title: string,
  p1:string,
  p2:string,
  p3:string,
  p4:string,
  p5:string,
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-96 w-full transition-all duration-300 ease-out",
        // Base background
  "bg-linear-to-b from-slate-900/90 to-slate-900/50",

  // Border styles
  index === 0 &&
    "border-2 border-neutral-500/20 hover:border-neutral-400/40",
  index === 1 &&
    "border-2 border-purple-500/30 hover:border-purple-500/60 shadow-xl hover:shadow-purple-500/20",
        hovered !== null &&
        hovered !== index &&
        !(index === 1 && hovered === 0) && "blur-sm scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col gap-2 justify-around items-baseline py-8 px-4 transition-opacity duration-300",
          "opacity-100"
        )}
      >
        <div className="flex items-center justify-center gap-2 w-full">

        {index === 1?<Image src={Alchorian} alt="Logo" width={40} height={40} />:<></>}
        <h3 className="text-center alchorian_head text-xl text-#7c3aed md:text-2xl font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </h3>
        </div>
        {
          index === 0? 
          <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1">{<X className="w-5 h-5 text-red-400" />}{card.p1}</span>
          <span className="flex items-center gap-1">{<X className="w-5 h-5 text-red-400" />}{card.p2}</span>
          <span className="flex items-center gap-1">{<X className="w-5 h-5 text-red-400" />}{card.p3}</span>
          <span className="flex items-center gap-1">{<X className="w-5 h-5 text-red-400" />}{card.p4}</span>
          <span className="flex items-center gap-1">{<X className="w-5 h-5 text-red-400" />}{card.p5}</span>
        </div>:
          <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1">{<Check className="w-5 h-5 text-green-400" />}{card.p1}</span>
          <span className="flex items-center gap-1">{<Check className="w-5 h-5 text-green-400" />}{card.p2}</span>
          <span className="flex items-center gap-1">{<Check className="w-5 h-5 text-green-400" />}{card.p3}</span>
          <span className="flex items-center gap-1">{<Check className="w-5 h-5 text-green-400" />}{card.p4}</span>
          <span className="flex items-center gap-1">{<Check className="w-5 h-5 text-green-400" />}{card.p5}</span>
        </div>

        }
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string,
  p1:string,
  p2:string,
  p3:string,
  p4:string,
  p5:string,
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-full ">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
