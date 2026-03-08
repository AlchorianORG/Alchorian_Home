'use client'
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Target } from 'lucide-react';

const ANIMATION_DURATION = 8;
import React from 'react'

const ResumeAnimation = () => {
  const [key, setKey] = useState(0);

  // Reset animation every cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setKey((prev) => prev + 1);
    }, ANIMATION_DURATION * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center overflow-hidden bg-slate-950 rounded-xl">
      {/* Background Grid */}
      <BackgroundGrid key={`bg-${key}`} />

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full p-6">
        {/* Resume Preview - Shows first, then fades out */}
        <ResumePanel key={`resume-${key}`} />

        {/* Scoring Panel - Fades in after resume */}
        <ScoringPanel key={`score-${key}`} />
      </div>
    </div>
  );
}

export default ResumeAnimation


function BackgroundGrid({ }: { key?: string }) {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-slate-600"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated connection dots */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${20 + i * 20}%`}
            cy={`${30 + (i % 2) * 30}%`}
            r="2"
            className="fill-blue-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function ResumePanel() {
  return (
    <motion.div
      className="absolute inset-6 bg-slate-900 rounded-lg shadow-xl p-5 border border-slate-800"
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: [0, 1, 1, 0], filter: ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'] }}
      transition={{ duration: 4, times: [0, 0.1, 0.6, 0.75] }}
    >
      {/* Header */}
      <div className="mb-4 pb-3 border-b border-slate-700">
        <div className="h-4 w-32 bg-slate-300 rounded mb-2" />
        <div className="h-2.5 w-24 bg-slate-600 rounded" />
      </div>

      {/* Content Lines */}
      <div className="space-y-4">
        {[...Array(3)].map((_, sectionIdx) => (
          <div key={sectionIdx}>
            <div className="h-3 w-20 bg-slate-700 rounded mb-2.5" />
            {[...Array(3)].map((_, lineIdx) => {
              const globalLineIdx = sectionIdx * 3 + lineIdx;
              return (
                <motion.div
                  key={lineIdx}
                  className="relative mb-2"
                  initial={{ backgroundColor: 'transparent' }}
                  animate={{
                    backgroundColor: [
                      'transparent',
                      'rgba(59, 130, 246, 0.15)',
                      'transparent',
                    ],
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + globalLineIdx * 0.12,
                    times: [0, 0.5, 1],
                  }}
                >
                  <div
                    className="h-2 bg-slate-700 rounded"
                    style={{ width: `${60 + (lineIdx * 10)}%` }}
                  />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Keywords */}
      {[
        { top: '30%', left: '25%', text: 'Python' },
        { top: '50%', left: '40%', text: 'Leadership' },
      ].map((keyword, idx) => (
        <motion.div
          key={idx}
          className="absolute px-2 py-1 bg-blue-500 text-white text-xs rounded"
          style={{ top: keyword.top, left: keyword.left }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0, 0, 0.9],
            scale: [0.8, 0.8, 0.8, 1],
            boxShadow: [
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 12px rgba(59, 130, 246, 0.6)',
            ],
          }}
          transition={{
            duration: 4,
            delay: 2.2 + idx * 0.2,
            times: [0, 0.7, 0.85, 1],
          }}
        >
          {keyword.text}
        </motion.div>
      ))}

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ top: '20%', opacity: 0 }}
        animate={{
          top: ['20%', '80%'],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </motion.div>
  );
}

function ScoringPanel() {
  return (
    <motion.div
      className="absolute inset-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0, 1] }}
      transition={{ duration: 1, delay: 3 }}
    >
      {/* Score Circle */}
      <CircularScore />

      {/* Feedback Tags */}
      <div className="mt-6 space-y-2.5 w-full">
        <FeedbackTag
          icon={<Target className="w-4 h-4" />}
          text="Boolean Keyword Matching"
          delay={4.2}
        />
        <FeedbackTag
          icon={<AlertCircle className="w-4 h-4" />}
          text="Missing Keywords"
          delay={4.4}
        />
        <FeedbackTag
          icon={<AlertCircle className="w-4 h-4" />}
          text="Synonyms & Term Validations"
          delay={4.4}
        />
        <FeedbackTag
          icon={<CheckCircle2 className="w-4 h-4" />}
          text="AI Summary"
          delay={4.6}
        />
      </div>
    </motion.div>
  );
}

function CircularScore() {
  const [score, setScore] = useState(0);
  const targetScore = 82;
  const circumference = 2 * Math.PI * 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1200;
      const steps = 50;
      const increment = targetScore / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= targetScore) {
          setScore(targetScore);
          clearInterval(interval);
        } else {
          setScore(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const progress = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="50"
            className="stroke-slate-700"
            strokeWidth="6"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="50"
            className="stroke-blue-500"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.2, delay: 3.2, ease: 'easeOut' }}
            style={{
              filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))',
            }}
          />
        </svg>

        {/* Score number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-4xl text-slate-100"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 3.8 }}
          >
            {score}
          </motion.div>
          <motion.div
            className="text-xs text-slate-500 mt-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 4 }}
          >
            / 100
          </motion.div>
        </div>
      </div>

      <motion.div
        className="text-xs text-slate-400 mt-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 4 }}
      >
        ATS Compatibility Score
      </motion.div>
    </div>
  );
}

function FeedbackTag({
  icon,
  text,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      className="bg-slate-800 rounded-full shadow-lg px-4 py-2.5 border border-slate-700 flex items-center gap-2.5"
      initial={{ opacity: 0, x: -15, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      <div className="text-blue-400 shrink-0">{icon}</div>
      <div className="text-xs text-slate-300">{text}</div>
    </motion.div>
  );
}