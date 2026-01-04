"use client"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
  if (index === 0) {
    // Role Intent Modeling - Sliders and priorities
    return (
      <svg className="w-full h-64" viewBox="0 0 400 200">
        {[0, 1, 2].map((i) => {
          const y = 50 + i * 50;
          return (
            <g key={i}>
              <line x1="50" y1={y} x2="350" y2={y} stroke="#374151" strokeWidth="2" />
              <motion.circle
                cx={150 + i * 50}
                cy={y}
                r="8"
                fill="#3b82f6"
                initial={{ cx: 50 }}
                whileInView={{ cx: 150 + i * 50 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
              <motion.line
                x1="50"
                y1={y}
                x2={150 + i * 50}
                y2={y}
                stroke="#3b82f6"
                strokeWidth="3"
                initial={{ x2: 50 }}
                whileInView={{ x2: 150 + i * 50 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  if (index === 1) {
    // Candidate Signal Analysis - Layered cards breaking into signals
    return (
      <svg className="w-full h-64" viewBox="0 0 400 200">
        {/* Profile card */}
        <motion.rect
          x="80"
          y="50"
          width="100"
          height="120"
          fill="#1a1a1a"
          stroke="#374151"
          strokeWidth="2"
          rx="4"
        />

        {/* Signals emerging */}
        {[0, 1, 2, 3, 4].map((i) => {
          const targetX = 220 + (i % 2) * 60;
          const targetY = 60 + i * 25;
          return (
            <g key={i}>
              <motion.line
                x1="180"
                y1="110"
                x2={targetX}
                y2={targetY}
                stroke="#3b82f6"
                strokeWidth="1"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
              <motion.circle
                cx={targetX}
                cy={targetY}
                r="6"
                fill={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  if (index === 2) {
    // Intent Matching - Alignment lines snapping together
    return (
      <svg className="w-full h-64" viewBox="0 0 400 200">
        {/* Left side signals */}
        {[0, 1, 2].map((i) => {
          const y = 50 + i * 50;
          return (
            <motion.circle
              key={`left-${i}`}
              cx="80"
              cy={y}
              r="8"
              fill="#3b82f6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          );
        })}

        {/* Right side signals */}
        {[0, 1, 2].map((i) => {
          const y = 50 + i * 50;
          return (
            <motion.circle
              key={`right-${i}`}
              cx="320"
              cy={y}
              r="8"
              fill="#8b5cf6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            />
          );
        })}

        {/* Connecting lines snapping */}
        {[0, 1, 2].map((i) => {
          const y = 50 + i * 50;
          return (
            <motion.line
              key={`line-${i}`}
              x1="88"
              y1={y}
              x2="312"
              y2={y}
              stroke="#3b82f6"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
            />
          );
        })}
      </svg>
    );
  }

  // Explainable Reasoning - Highlighted path with annotations
  return (
    <svg className="w-full h-64" viewBox="0 0 400 200">
      {/* Decision path */}
      <motion.path
        d="M 50 100 L 150 60 L 250 100 L 350 80"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Annotation points */}
      {[
        { x: 50, y: 100 },
        { x: 150, y: 60 },
        { x: 250, y: 100 },
        { x: 350, y: 80 },
      ].map((point, i) => (
        <g key={i}>
          <motion.circle
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#3b82f6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 + i * 0.2 }}
          />
          <motion.line
            x1={point.x}
            y1={point.y - 10}
            x2={point.x}
            y2={point.y - 30}
            stroke="#8b5cf6"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 2.3 + i * 0.2 }}
          />
          <motion.rect
            x={point.x - 20}
            y={point.y - 50}
            width="40"
            height="16"
            fill="#8b5cf6"
            opacity="0.2"
            rx="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 0.5, delay: 2.5 + i * 0.2 }}
          />
        </g>
      ))}
    </svg>
  );
}

export function HowItWorksSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] py-32 px-8">
      <motion.div style={{ opacity }} className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-500 text-sm uppercase tracking-widest mb-20"
        >
          How Aden Works
        </motion.p>

        {/* Chapters */}
        <div className="space-y-32">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-6xl font-light text-[#3b82f6] mb-4">{chapter.number}</div>
                <h3 className="text-3xl text-white mb-4">{chapter.title}</h3>
                <p className="text-gray-400 text-lg">{chapter.description}</p>
              </div>

              {/* Diagram */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                <ChapterDiagram index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
