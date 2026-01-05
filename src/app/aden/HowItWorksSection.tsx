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
      className="w-full"
    >
      {/* 01 — Role Intent Modeling */}
      {index === 0 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          {[0, 1, 2].map((i) => {
            const y = 50 + i * 50;
            const xTarget = 150 + i * 50;
            return (
              <g key={i}>
                <line x1="50" y1={y} x2="350" y2={y} stroke="#374151" strokeWidth="2" />
                <motion.line
                  x1="50"
                  y1={y}
                  x2={xTarget}
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="3"
                  animate={active ? { strokeDasharray: "300 0" } : { strokeDasharray: "0 300" }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
                <motion.circle
                  cx={xTarget}
                  cy={y}
                  r="8"
                  fill="#3b82f6"
                  animate={active ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.2 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 02 — Candidate Signal Analysis */}
      {index === 1 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <rect
            x="80"
            y="50"
            width="100"
            height="120"
            rx="4"
            fill="#111"
            stroke="#374151"
            strokeWidth="2"
          />

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
                  opacity="0.6"
                  animate={active ? { strokeDasharray: "200 0" } : { strokeDasharray: "0 200" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                  animate={active ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 03 — Intent Matching */}
      {index === 2 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          {[0, 1, 2].map((i) => {
            const y = 50 + i * 50;
            return (
              <g key={i}>
                <motion.circle
                  cx="80"
                  cy={y}
                  r="8"
                  fill="#3b82f6"
                  animate={active ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                />
                <motion.circle
                  cx="320"
                  cy={y}
                  r="8"
                  fill="#8b5cf6"
                  animate={active ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
                <motion.line
                  x1="88"
                  y1={y}
                  x2="312"
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  opacity="0.6"
                  animate={active ? { strokeDasharray: "300 0" } : { strokeDasharray: "0 300" }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* 04 — Explainable Reasoning */}
      {index === 3 && (
        <svg className="w-full h-64" viewBox="0 0 400 200">
          <motion.path
            d="M 50 100 L 150 60 L 250 100 L 350 80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            animate={active ? { strokeDasharray: "600 0" } : { strokeDasharray: "0 600" }}
            transition={{ duration: 1.8 }}
          />

          {[
            [50, 100],
            [150, 60],
            [250, 100],
            [350, 80],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill="#3b82f6"
              animate={active ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
            />
          ))}
        </svg>
      )}
    </motion.div>
  );
}

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = isMobile
    ? 1
    : useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] py-32 px-8"
    >
      <motion.div style={{ opacity }} className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-sm uppercase tracking-widest mb-20"
        >
          How Aden Works
        </motion.p>

        <div className="space-y-32">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-6xl font-light text-[#3b82f6] mb-4">
                  {chapter.number}
                </div>
                <h3 className="text-3xl text-white mb-4">{chapter.title}</h3>
                <p className="text-gray-400 text-lg">{chapter.description}</p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <ChapterDiagram index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
