'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";

/* ---------- deterministic PRNG ---------- */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function RevealSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.8, 1, 1]);

  /* ---------- deterministic background lines ---------- */
  const lines = useMemo(() => {
    const rand = mulberry32(42); // FIXED SEED — critical
    return Array.from({ length: 20 }).map(() => ({
      x1: rand() * 800,
      y1: rand() * 600,
      x2: rand() * 800,
      y2: rand() * 600,
      color: rand() > 0.5 ? "#3b82f6" : "#8b5cf6",
    }));
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen relative flex items-center bg-[#0a0a0a] px-8"
    >
      <div className="container mx-auto">
        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Background graph */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 -z-10"
            viewBox="0 0 800 600"
          >
            {lines.map((l, i) => (
              <line
                key={i}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke={l.color}
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
          </svg>

          {/* Content */}
          <div className="text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.5, 1.2] }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-[#3b82f6] blur-[100px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="relative z-10 mb-12"
            >
              <h1 className="text-9xl font-light text-white tracking-wider">
                Aden
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent mt-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="space-y-8 mt-16"
            >
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                An AI hiring system that understands what youre actually looking
                for.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="flex items-center justify-center gap-8 text-sm text-gray-500"
              >
                <span>Intent-first matching</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Signal analysis</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Explainable reasoning</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
