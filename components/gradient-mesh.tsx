"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function GradientMesh() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reduce animations on mobile for better performance
  const animationDuration = isMobile ? 30 : 20
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="bg-primary/20 absolute top-0 left-0 h-[600px] w-[600px] rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="bg-accent/20 absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: animationDuration + 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/2 h-[550px] w-[550px] rounded-full bg-purple-500/10 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: animationDuration + 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  )
}
