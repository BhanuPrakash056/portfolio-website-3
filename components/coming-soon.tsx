"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Clock, Sparkles, Coffee, Hourglass } from "lucide-react"

const patienceJokes = [
  {
    text: "Good things come to those who wait... and also to those who refresh the page 47 times",
    author: "Ancient Web Wisdom"
  },
  {
    text: "Patience is a virtue. But so is knowing when to CTRL+F5",
    author: "Impatient Developer"
  },
  {
    text: "Loading... Please wait. Just like you waited for your code to compile. Remember that feeling?",
    author: "Nostalgic Programmer"
  },
  {
    text: "This countdown is slower than npm install on a Monday morning",
    author: "Every Dev Ever"
  },
  {
    text: "Be patient. Rome wasn't built in a day. But this website? Yeah, still not done either.",
    author: "Procrastination Master"
  },
  {
    text: "You've been waiting for 5 seconds. That's like 5 hours in JavaScript promises",
    author: "async/await Gang"
  },
  {
    text: "While you're waiting, my brother is probably creating more bugs for you to discover",
    author: "Sibling Reality Check"
  },
  {
    text: "Patience level: Watching Terraform apply without --auto-approve",
    author: "DevOps Torture"
  }
]

export function ComingSoon() {
  const [currentJoke, setCurrentJoke] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState("")
  
  useEffect(() => {
    const jokeInterval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % patienceJokes.length)
    }, 4000)
    
    const updateCountdown = () => {
      const revealDate = new Date('2025-12-15T23:55:00')
      const now = new Date()
      const diff = revealDate.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeRemaining("NOW!")
        window.location.reload() // Reload to show the actual site
        return
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`)
    }
    
    updateCountdown()
    const countdownInterval = setInterval(updateCountdown, 1000)
    
    return () => {
      clearInterval(jokeInterval)
      clearInterval(countdownInterval)
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                ARK
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Coming Soon...
          </h1>
        </motion.div>

        {/* Sparkle badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Something epic is loading... 🚀</span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-12 p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground">Launching In:</h2>
          </div>
          <motion.div
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            key={timeRemaining}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {timeRemaining || "Calculating..."}
          </motion.div>
          <p className="text-sm text-muted-foreground mt-4">
            December 15, 2025 @ 23:55 🎯
          </p>
        </motion.div>

        {/* Patience jokes */}
        <motion.div
          className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-3 justify-center"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Coffee className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              ☕ Patience Wisdom #{currentJoke + 1}:
            </p>
          </motion.div>
          <motion.div
            key={currentJoke}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base mb-2 text-foreground">
              "{patienceJokes[currentJoke].text}"
            </p>
            <p className="text-sm text-primary font-semibold">
              - {patienceJokes[currentJoke].author}
            </p>
          </motion.div>
        </motion.div>

        {/* What to expect */}
        <motion.div
          className="p-6 rounded-xl bg-background/50 border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
            <Hourglass className="w-5 h-5 text-accent" />
            What's Coming?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-primary/5">
              <span className="text-2xl block mb-1">🎨</span>
              <span className="text-muted-foreground">Beautiful Design</span>
            </div>
            <div className="p-3 rounded-lg bg-accent/5">
              <span className="text-2xl block mb-1">⚡</span>
              <span className="text-muted-foreground">Fast Performance</span>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/5">
              <span className="text-2xl block mb-1">🚀</span>
              <span className="text-muted-foreground">Cool Projects</span>
            </div>
            <div className="p-3 rounded-lg bg-green-500/5">
              <span className="text-2xl block mb-1">😂</span>
              <span className="text-muted-foreground">Brother's Jokes</span>
            </div>
          </div>
        </motion.div>

        {/* Easter egg hint */}
        <motion.div
          className="mt-8 text-xs text-muted-foreground/50 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p>💡 Psst... When it launches, try visiting a page that doesn't exist. You might find something funny. 🎭</p>
        </motion.div>

        {/* Made with love */}
        <motion.div
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              className="text-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.span>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">
                Made with love by
              </p>
              <p className="text-xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Bhanu Prakash R
              </p>
              <motion.p
                className="text-xs text-muted-foreground/60 italic mt-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Crafted with care for someone special ✨
              </motion.p>
            </div>
            <motion.span
              className="text-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Special message for Anusha */}
        <motion.div
          className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-purple-500/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.div
            className="flex items-start gap-3 mb-4"
            whileHover={{ x: 5 }}
          >
            <span className="text-3xl">👩‍💻</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                For Anusha - The Cloud Queen ☁️👑
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This portfolio is for my amazing sister, who deploys code faster than I can deploy compliments. 
                She's the only person I know who can debug Kubernetes clusters and sibling arguments with equal expertise! 🚀
              </p>
            </div>
          </motion.div>

          <div className="space-y-3">
            <motion.div
              className="p-4 rounded-lg bg-background/50 border border-primary/10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
            >
              <p className="text-sm text-foreground">
                💡 <span className="font-semibold text-primary">Fun Fact:</span> Anusha's cloud infrastructure is more reliable than her brother's ability to arrive on time for family dinners.
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg bg-background/50 border border-accent/10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <p className="text-sm text-foreground">
                ⚡ <span className="font-semibold text-accent">Sister Logic:</span> "Why fix family drama when you can fix Azure deployments?" - Anusha's life motto, probably.
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg bg-background/50 border border-purple-500/10"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
            >
              <p className="text-sm text-foreground">
                🌟 <span className="font-semibold text-purple-400">Real Talk:</span> She's not just a cloud engineer - she's the person who turns "it doesn't work" into "it works perfectly." Basically, she's magic. ✨
              </p>
            </motion.div>

            <motion.div
              className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 }}
            >
              <p className="text-sm text-foreground">
                💚 <span className="font-semibold text-green-400">Brother's Confession:</span> I built this website to show off her skills, but honestly, she could probably build a better one while troubleshooting a production incident. That's just how awesome she is! 😄
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-4 pt-4 border-t border-border/50 text-center"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xs text-muted-foreground italic">
              🎉 Here's to my sister - may your uptime be 100%, your deployments smooth, and your coffee always hot! ☕
            </p>
          </motion.div>

          {/* Heartfelt message */}
          <motion.div
            className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
          >
            <div className="text-center space-y-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-4xl">🤝</span>
              </motion.div>
              <p className="text-base font-semibold text-foreground">
                No matter what challenges you face, what dreams you chase, or what path you take...
              </p>
              <p className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Your brother will always be there for you. 💙
              </p>
              <p className="text-sm text-muted-foreground italic">
                Whether you need support, encouragement, or just someone to celebrate your wins with - 
                I've got your back, always and forever. That's a promise! 🚀
              </p>
              <motion.div
                className="flex items-center justify-center gap-3 mt-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">👦</span>
                <span className="text-accent text-xl">❤️</span>
                <span className="text-2xl">👩</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated loading dots */}
        <motion.div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
