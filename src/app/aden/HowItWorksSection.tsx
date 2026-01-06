"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

const chapters = [
  {
    number: "01",
    title: "Role Intent Modeling",
    description: "Define what actually matters — priorities, trade-offs, deal-breakers.",
  },
  {
    number: "02",
    title: "Candidate Signal Analysis",
    description: "Break profiles into meaningful signals beyond resume keywords.",
  },
  {
    number: "03",
    title: "Intent Matching",
    description: "Align candidate signals with role intent in context.",
  },
  {
    number: "04",
    title: "Explainable Reasoning",
    description: "Surface the why behind every match decision.",
  },
];

function ChapterDiagram({ index }: { index: number }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 01 */}
      {index === 0 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          {[0, 1, 2].map((i) => {
            const y = 50 + i * 50;
            const x = 150 + i * 50;

            return (
              <g key={i}>
                <line x1="50" y1={y} x2="350" y2={y} stroke="#374151" strokeWidth="2" />

                <motion.line
                  x1="50"
                  y1={y}
                  x2={x}
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="0 300"
                  animate={active ? { strokeDasharray: "300 0" } : undefined}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />

                <motion.circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="#3b82f6"
                  initial={{ scale: 0 }}
                  animate={active ? { scale: 1 } : undefined}
                  transition={{ delay: 0.6 + i * 0.2 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 02 */}
      {index === 1 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <rect x="80" y="50" width="100" height="120" rx="4" fill="#111" stroke="#374151" />

          {[0, 1, 2, 3, 4].map((i) => {
            const x = 220 + (i % 2) * 60;
            const y = 60 + i * 25;

            return (
              <g key={i}>
                <motion.line
                  x1="180"
                  y1="110"
                  x2={x}
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeDasharray="0 200"
                  animate={active ? { strokeDasharray: "200 0" } : undefined}
                  transition={{ delay: i * 0.1 }}
                />

                <motion.circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                  initial={{ scale: 0 }}
                  animate={active ? { scale: 1 } : undefined}
                  transition={{ delay: 0.8 + i * 0.1 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 03 */}
      {index === 2 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          {[0, 1, 2].map((i) => {
            const y = 50 + i * 50;

            return (
              <g key={i}>
                <circle cx="80" cy={y} r="8" fill="#3b82f6" />
                <circle cx="320" cy={y} r="8" fill="#8b5cf6" />

                <motion.line
                  x1="88"
                  y1={y}
                  x2="312"
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="0 300"
                  animate={active ? { strokeDasharray: "300 0" } : undefined}
                  transition={{ delay: 0.3 + i * 0.15 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 04 */}
      {index === 3 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <motion.path
            d="M 50 100 L 150 60 L 250 100 L 350 80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="0 600"
            animate={active ? { strokeDasharray: "600 0" } : undefined}
            transition={{ duration: 1.6 }}
          />
        </svg>
      )}
    </motion.div>
  );
}

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);

  // SSR-safe mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler(); // initial check
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen bg-[#0a0a0a] py-32 px-8">
      <motion.div
        style={{ opacity: isMobile ? 1 : scrollOpacity }}
        className="container mx-auto max-w-5xl"
      >
        <p className="text-gray-500 uppercase tracking-widest mb-20">
          How Aden Works
        </p>

        <div className="space-y-32">
          {chapters.map((chapter, index) => (
            <div key={chapter.number} className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-6xl text-blue-500">{chapter.number}</div>
                <h3 className="text-3xl text-white">{chapter.title}</h3>
                <p className="text-gray-400">{chapter.description}</p>
              </div>

              <ChapterDiagram index={index} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}