"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="from-primary via-accent to-primary fixed top-0 right-0 left-0 z-[9998] h-1 origin-left bg-gradient-to-r"
      style={{ scaleX }}
    />
  )
}
