'use client'
import { motion } from "motion/react";

export function CircularFlow() {
  // Node positions
  const topNode = { x: 160, y: 40 };
  const rightNode = { x: 240, y: 200 };
  const leftNode = { x: 80, y: 200 };

  return (
    <div className="relative w-120 h-120 mt-10">
      {/* Rotating glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
        {/* Triangle connecting the three nodes */}
        <motion.path
          d={`M ${topNode.x} ${topNode.y} L ${rightNode.x} ${rightNode.y} L ${leftNode.x} ${leftNode.y} Z`}
          fill="none"
          stroke="rgba(167, 139, 250, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Flowing particle moving along the triangle */}
        <motion.circle
          r="4"
          fill="rgba(196, 181, 253, 0.9)"
          initial={{ cx: topNode.x, cy: topNode.y }}
          animate={{
            cx: [
              topNode.x, 
              (topNode.x + rightNode.x) / 2,
              rightNode.x,
              (rightNode.x + leftNode.x) / 2,
              leftNode.x,
              (leftNode.x + topNode.x) / 2,
              topNode.x
            ],
            cy: [
              topNode.y,
              (topNode.y + rightNode.y) / 2,
              rightNode.y,
              (rightNode.y + leftNode.y) / 2,
              leftNode.y,
              (leftNode.y + topNode.y) / 2,
              topNode.y
            ],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.166, 0.333, 0.5, 0.666, 0.833, 1]
          }}
        />
        
        {/* Glow effect for particle */}
        <motion.circle
          r="8"
          fill="rgba(196, 181, 253, 0.2)"
          initial={{ cx: topNode.x, cy: topNode.y }}
          animate={{
            cx: [
              topNode.x, 
              (topNode.x + rightNode.x) / 2,
              rightNode.x,
              (rightNode.x + leftNode.x) / 2,
              leftNode.x,
              (leftNode.x + topNode.x) / 2,
              topNode.x
            ],
            cy: [
              topNode.y,
              (topNode.y + rightNode.y) / 2,
              rightNode.y,
              (rightNode.y + leftNode.y) / 2,
              leftNode.y,
              (leftNode.y + topNode.y) / 2,
              topNode.y
            ],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.166, 0.333, 0.5, 0.666, 0.833, 1]
          }}
        />
      </svg>

      {/* Top node - Your skills */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "0px" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-md text-violet-200/90">Your skills</span>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-400/30 flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-violet-400/40" />
          </div>
        </div>
      </motion.div>

      {/* Right node - Job needs */}
      <motion.div
        className="absolute right-20 -translate-y-1/2"
        style={{ top: "310px" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-400/30 flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-violet-400/40" />
          </div>
          <span className="text-md text-violet-200/90">Job needs</span>
        </div>
      </motion.div>

      {/* Left node - Clear outcome */}
      <motion.div
        className="absolute left-20 -translate-y-1/2"
        style={{ top: "310px" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-400/30 flex items-center justify-center backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-violet-400/40" />
          </div>
          <span className="text-md text-violet-200/90">Clear outcome</span>
        </div>
      </motion.div>
    </div>
  );
}