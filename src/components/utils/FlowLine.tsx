'use client'
import { motion } from "motion/react";
import { FileText, Send, Filter, MailX } from "lucide-react";
const FlowLine = () => {
    // Node positions for horizontal layout
    const nodes = [
        { x: 80, y: 120, icon: FileText, label: "Taylored Resume" },   // Resume
        { x: 240, y: 120, icon: Send, label: "Applying" },      // Send
        { x: 400, y: 120, icon: Filter, label: "Keyword Filtering" },    // Filter
        { x: 560, y: 120, icon: MailX, label: "No replies" },     // No response
    ];

    // Create multiple particles with different start delays
    const particles = [0, 0.5, 1, 1.5, 2, 2.5];
    return (
        <div className="">

            <svg className="absolute  inset-0 w-full h-full" viewBox="0 0 640 200">
                <defs>
                    {/* Gradient for the connecting line */}
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                        <stop offset="50%" stopColor="rgba(167, 139, 250, 0.6)" />
                        <stop offset="100%" stopColor="rgba(196, 181, 253, 0.4)" />
                    </linearGradient>

                    {/* Glow filter */}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connecting lines between nodes 1-2-3 */}
                <motion.line
                    x1={nodes[0].x}
                    y1={nodes[0].y}
                    x2={nodes[1].x}
                    y2={nodes[1].y}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.line
                    x1={nodes[1].x}
                    y1={nodes[1].y}
                    x2={nodes[2].x}
                    y2={nodes[2].y}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                />

                {/* Broken/cracked line from node 3 to 4 */}
                <motion.path
                    d={`M ${nodes[2].x} ${nodes[2].y} L ${nodes[2].x + 40} ${nodes[2].y} L ${nodes[2].x + 45} ${nodes[2].y - 3} L ${nodes[2].x + 50} ${nodes[2].y + 2} L ${nodes[2].x + 70} ${nodes[2].y}`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                />

                {/* Crack/break visual */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <line
                        x1={nodes[2].x + 70}
                        y1={nodes[2].y - 8}
                        x2={nodes[2].x + 70}
                        y2={nodes[2].y + 8}
                        stroke="rgba(167, 139, 250, 0.3)"
                        strokeWidth="1"
                    />
                    <line
                        x1={nodes[2].x + 68}
                        y1={nodes[2].y - 5}
                        x2={nodes[2].x + 72}
                        y2={nodes[2].y + 5}
                        stroke="rgba(167, 139, 250, 0.3)"
                        strokeWidth="1"
                    />
                </motion.g>

                {/* Flowing particles */}
                {particles.map((delay, index) => (
                    <motion.g key={index}>
                        {/* Main particle */}
                        <motion.circle
                            r="3"
                            fill="rgba(196, 181, 253, 0.9)"
                            filter="url(#glow)"
                            initial={{
                                cx: nodes[0].x - 50,
                                cy: nodes[0].y,
                                opacity: 0
                            }}
                            animate={{
                                cx: [
                                    nodes[0].x - 50,
                                    nodes[0].x,
                                    nodes[1].x,
                                    nodes[2].x,
                                    nodes[2].x + 70,
                                    nodes[2].x + 70,
                                ],
                                cy: [
                                    nodes[0].y,
                                    nodes[0].y,
                                    nodes[1].y,
                                    nodes[2].y,
                                    nodes[2].y,
                                    nodes[2].y + 80,
                                ],
                                opacity: [0, 1, 1, 1, 1, 0],
                            }}
                            transition={{
                                duration: 5,
                                delay: delay,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                                ease: "linear",
                                times: [0, 0.1, 0.35, 0.6, 0.75, 1],
                            }}
                        />

                        {/* Particle glow */}
                        <motion.circle
                            r="6"
                            fill="rgba(139, 92, 246, 0.2)"
                            initial={{
                                cx: nodes[0].x - 50,
                                cy: nodes[0].y,
                                opacity: 0
                            }}
                            animate={{
                                cx: [
                                    nodes[0].x - 50,
                                    nodes[0].x,
                                    nodes[1].x,
                                    nodes[2].x,
                                    nodes[2].x + 70,
                                    nodes[2].x + 70,
                                ],
                                cy: [
                                    nodes[0].y,
                                    nodes[0].y,
                                    nodes[1].y,
                                    nodes[2].y,
                                    nodes[2].y,
                                    nodes[2].y + 80,
                                ],
                                opacity: [0, 0.6, 0.6, 0.6, 0.6, 0],
                            }}
                            transition={{
                                duration: 5,
                                delay: delay,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                                ease: "linear",
                                times: [0, 0.1, 0.35, 0.6, 0.75, 1],
                            }}
                        />
                    </motion.g>
                ))}
            </svg>

            {/* Nodes */}

            {nodes.map((node, index) => (
                <motion.div
                    key={index}
                    className="absolute -translate-x-1/2 -translate-y-1/2 px-5 "
                    style={{
                        left: `${(node.x / 640) * 100}%`,
                        top: `${(node.y / 200) * 100}%`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                >
                    <div className="flex items-center justify-center flex-col ">

                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-900/40 to-violet-900/40 border border-purple-700/40 flex items-center justify-center backdrop-blur-sm">
                            <node.icon className="w-7 h-7 text-violet-300/70" strokeWidth={1.5} />
                        </div>
                        <p className="text-[12px] md:text-lg ">{node.label}</p>
                    </div>
                </motion.div>
            ))}

        </div>
    )
}

export default FlowLine