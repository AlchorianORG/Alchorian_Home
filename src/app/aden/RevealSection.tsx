'use client'

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function RevealSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.8, 1, 1]);

  return (
    <section ref={ref} className="min-h-screen relative flex items-center bg-[#0a0a0a] px-8">
      <div className="container mx-auto">
        <motion.div style={{ opacity, scale }} className="relative max-w-4xl mx-auto">
          {/* Background intent graph (subtle) */}
          <svg className="absolute inset-0 w-full h-full opacity-20 -z-10" viewBox="0 0 800 600">
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 800;
              const y1 = Math.random() * 600;
              const x2 = Math.random() * 800;
              const y2 = Math.random() * 600;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                  strokeWidth="1"
                  opacity="0.3"
                />
              );
            })}
          </svg>

          {/* Logo reveal */}
          <div className="text-center relative">
            {/* Halo glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.5, 1.2] }}
              transition={{ duration: 2, delay: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-[#3b82f6] blur-[100px]" />
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="relative z-10 mb-12"
            >
              <h1 className="text-9xl font-light text-white tracking-wider">Aden</h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent mt-4"
              />
            </motion.div>

            {/* Supporting text floating around */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="space-y-8 mt-16"
            >
              <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                An AI hiring system that understands what you're actually looking for.
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

            {/* Subtle animated signal lines radiating */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-[#3b82f6]/0 to-[#3b82f6]/30"
                style={{
                  transformOrigin: "bottom",
                  transform: `rotate(${i * 60}deg)`,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: [0, 1, 1, 0],
                  opacity: [0, 0.5, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 3 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
