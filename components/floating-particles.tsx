"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 15 + 10,
    }))
    setParticles(newParticles)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100)
      mouseY.set((e.clientY / window.innerHeight) * 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-40">
      {particles.map((particle) => {
        // Calculate distance from cursor for magnetic effect
        const distanceX = smoothMouseX.get() - particle.x
        const distanceY = smoothMouseY.get() - particle.y
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        const magneticStrength = Math.max(0, 1 - distance / 30) * 15

        return (
          <motion.div
            key={particle.id}
            className="from-primary to-accent absolute rounded-full bg-gradient-to-br"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15 + (distanceX * magneticStrength) / 100, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}
