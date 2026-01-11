"use client"

import { motion } from "framer-motion"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (_i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  return (
    <motion.div
      className={`inline-block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: {
            y: 0,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  )
}
