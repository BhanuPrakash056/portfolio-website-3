"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress faster
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => setIsLoading(false), 250)
          return 100
        }
        return prev + 25
      })
    }, 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Main Loading Screen */}
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.1, ease: "easeInOut" }}
          >
            {/* Animated Vignette Effect */}
            <motion.div
              className="absolute inset-0 opacity-60"
              style={{
                background: "radial-gradient(circle, transparent 0%, transparent 50%, black 100%)",
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Film Grain Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Camera Aperture Blades */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-full origin-center"
                  style={{
                    rotate: `${i * 45}deg`,
                  }}
                  animate={{
                    scale: isComplete ? [1, 0] : [0.3, 1],
                  }}
                  transition={{
                    duration: isComplete ? 0.3 : 0.25,
                    delay: isComplete ? i * 0.02 : 0,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-1/2 bg-gradient-to-b from-primary/60 to-transparent blur-sm" />
                </motion.div>
              ))}
            </motion.div>

            {/* Center Aperture Opening */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              exit={{
                scale: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="relative z-30 text-center space-y-8 px-4"
              exit={{
                y: -30,
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Camera Icon / Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex justify-center"
              >
                <motion.div
                  className="relative w-20 h-16"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Camera Body */}
                  <svg
                    viewBox="0 0 80 64"
                    fill="none"
                    className="w-full h-full"
                  >
                    <motion.path
                      d="M10 20 L20 10 L60 10 L70 20 L70 54 L10 54 Z"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="40"
                      cy="35"
                      r="12"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="40"
                      cy="35"
                      r="7"
                      fill="url(#gradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.6 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <motion.rect
                      x="58"
                      y="22"
                      width="6"
                      height="6"
                      rx="1"
                      fill="url(#gradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Lens Flare Effect */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Animated Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                    backgroundSize: "200% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ARK
                </motion.h1>
                <motion.p
                  className="text-gray-400 text-sm tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  PORTFOLIO
                </motion.p>
              </motion.div>

              {/* Film Strip Progress Bar */}
              <motion.div
                className="w-80 max-w-full mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="relative h-12 border-2 border-primary/30 rounded-sm overflow-hidden bg-black/50">
                  {/* Film Sprocket Holes */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-2 bg-primary/20 rounded-sm"
                      />
                    ))}
                  </div>
                  
                  {/* Progress Fill */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40"
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
                  />
                  
                  {/* Scanning Line */}
                  <motion.div
                    className="absolute inset-y-0 w-1 bg-white/60 shadow-lg shadow-white/50"
                    animate={{
                      left: [`${progress}%`],
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Progress Counter with F-Stop Style */}
              <motion.div
                className="flex items-center justify-center gap-6 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-mono">ƒ/</span>
                  <motion.span 
                    className="text-primary font-mono text-lg font-bold"
                    key={progress}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {progress}
                  </motion.span>
                </div>
                <div className="text-gray-600">|</div>
                <div className="text-gray-400 font-mono text-xs">
                  {isComplete ? 'FOCUSED' : 'FOCUSING...'}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Smooth Radial Reveal */}
          {isComplete && (
            <motion.div
              className="fixed inset-0 z-[10001] pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ clipPath: "circle(60% at 50% 50%)", opacity: 0.4 }}
                animate={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  )
}
