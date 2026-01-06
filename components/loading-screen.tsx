"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => setIsLoading(false), 1200)
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
        <>
          {/* Main Loading Screen */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-background overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          >
            {/* Animated Background Gradient Circles */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              exit={{
                scale: 2,
                opacity: 0,
              }}
            >
              <motion.div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, -50, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="relative z-30 text-center space-y-8"
              exit={{
                y: -50,
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Animated Logo/Name with letter reveal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-7xl md:text-9xl font-bold relative">
                  {["A", "R", "K"].map((letter, i) => (
                    <motion.span
                      key={i}
                      className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateX: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -30,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + i * 0.1,
                        exit: { delay: 0, duration: 0.4 },
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
                className="w-72 h-1.5 bg-border rounded-full overflow-hidden mx-auto relative shadow-lg"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, exit: { duration: 0.3 } }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-accent to-primary relative"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${progress}%`,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    width: { duration: 0.3 },
                    backgroundPosition: { duration: 2, repeat: Infinity },
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-sm"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Progress Percentage */}
              <motion.p
                className="text-muted-foreground text-base font-mono tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, exit: { duration: 0.2 } }}
              >
                {progress}%
              </motion.p>

              {/* Loading Text */}
              <motion.p
                className="text-muted-foreground/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                {isComplete ? 'Ready!' : 'Loading...'}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Curtain Reveal Effect */}
          {isComplete && (
            <>
              {/* Top Curtain */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary via-primary to-transparent z-[10001]"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
              {/* Bottom Curtain */}
              <motion.div
                className="fixed bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent via-accent to-transparent z-[10001]"
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
              {/* Center Flash */}
              <motion.div
                className="fixed inset-0 bg-white z-[10002]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              />
            </>
          )}
        </>
      )}
    </AnimatePresence>
  )
}
