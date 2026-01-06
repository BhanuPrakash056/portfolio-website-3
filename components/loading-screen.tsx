"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 400)
          return 100
        }
        return prev + 20
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated Background Gradient Circles */}
          <motion.div
            className="absolute inset-0 opacity-30"
            exit={{
              scale: 3,
              rotate: 180,
              opacity: 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Split Screen Wipe Effect */}
          <motion.div
            className="absolute inset-0 bg-primary z-10"
            initial={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ originX: 0 }}
          />
          <motion.div
            className="absolute inset-0 bg-background z-20"
            initial={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ originX: 0 }}
          />

          {/* Main Content */}
          <motion.div
            className="relative z-30 text-center space-y-8"
            exit={{
              y: -100,
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Animated Logo/Name with split effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -50,
                rotateX: 90,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold relative">
                {["A", "R", "K"].map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{
                      opacity: 0,
                      y: -50,
                      rotateX: 90,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                      exit: { delay: i * 0.05 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Loading Bar with Glow Effect */}
            <motion.div
              className="w-64 h-1 bg-border rounded-full overflow-hidden mx-auto relative"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{
                opacity: 0,
                scaleX: 0,
                y: 20,
              }}
              transition={{ delay: 0.4, exit: { duration: 0.4 } }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-md"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Progress Percentage */}
            <motion.p
              className="text-muted-foreground text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: 10,
              }}
              transition={{ delay: 0.6, exit: { duration: 0.3 } }}
            >
              {progress}%
            </motion.p>

            {/* Animated Dots with Bounce */}
            <motion.div
              className="flex gap-2 justify-center"
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{ exit: { duration: 0.3 } }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    exit: { delay: i * 0.05, duration: 0.2 },
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Particle Burst Effect on Exit */}
          {progress === 100 && (
            <motion.div className="absolute inset-0 pointer-events-none z-40">
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i * 360) / 20
                const distance = 300
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * distance,
                      y: Math.sin((angle * Math.PI) / 180) * distance,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                )
              })}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
