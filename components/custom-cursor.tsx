"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect touch devices
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkMobile()
  }, [])

  useEffect(() => {
    // Don't show custom cursor on mobile
    if (isMobile) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Track hoverable elements
    const hoverElements = document.querySelectorAll("a, button, [data-magnetic]")
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [isMobile])

  // Don't render custom cursor on mobile/touch devices
  if (isMobile) return null

  return (
    <>
      {/* Main cursor - center dot with mix-blend */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            scale: isHovering ? 0.5 : 1,
          }}
        />
      </motion.div>

      {/* Outer circle with animated gradient border */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full relative"
          animate={{
            scale: isHovering ? 1.8 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary opacity-60" />
          <div className="absolute inset-0 rounded-full border-2 border-accent opacity-40 animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Text label on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        animate={{
          x: mousePosition.x + 25,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          Click
        </motion.div>
      </motion.div>

      {/* Trailing glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
        }}
      >
        <motion.div
          className="w-15 h-15 rounded-full blur-xl"
          style={{
            background: "radial-gradient(circle, oklch(var(--primary) / 0.3), oklch(var(--accent) / 0.2), transparent)",
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 0.4,
          }}
        />
      </motion.div>
    </>
  )
}
