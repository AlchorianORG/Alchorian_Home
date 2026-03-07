'use client'

import { motion } from 'motion/react'
import { useEffect,useState } from 'react'

interface RevealProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export const Reveal = ({ children, delay = 0, className }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerItemProps {
    children: React.ReactNode
    index: number
    baseDelay?: number
    stagger?: number
    className?: string
}

export const StaggerItem = ({
    children,
    index,
    baseDelay = 0,
    stagger = 0.2,
    className,
}: StaggerItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: baseDelay + index * stagger,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}


export const SideReveal = ({
    children,
    index,
    className,
}: StaggerItemProps) => {
    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={className}
        // className="flex items-start gap-3"
        >
            {children}
        </motion.li>
    )
}


export const CardAnimation = ({children}:RevealProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("building-next-section");
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
                isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="group"
        >
            {children}
        </motion.div>
    )
}