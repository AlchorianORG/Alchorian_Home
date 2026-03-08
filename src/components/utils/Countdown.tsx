"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-03-13T00:00:00Z").getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-bold uppercase tracking-wide text-purple-300">
        Aria Launching In
      </p>

      <div className="flex gap-4">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-w-[70px]">
    <span className="text-2xl font-bold text-white">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs text-gray-400 uppercase">
      {label}
    </span>
  </div>
);

export default Countdown;
