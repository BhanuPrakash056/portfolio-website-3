"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, Sparkles, CloudOff, Server, Zap } from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useState, useEffect } from "react"

const funnyQuotes = [
  {
    text: "This 404 error is more reliable than my test environment deployments",
    author: "Every DevOps Engineer Ever"
  },
  {
    text: "Have you tried turning it off and on again? Oh wait, it doesn't exist...",
    author: "IT Support Wisdom"
  },
  {
    text: "This page is like my Kubernetes pod - it keeps crashing",
    author: "Anonymous Cloud Engineer"
  },
  {
    text: "Error 404: Page not found. Just like my work-life balance",
    author: "Senior Dev at 3 AM"
  },
  {
    text: "This page migrated to the cloud and never came back",
    author: "Cloud Migration Gone Wrong"
  },
  {
    text: "Even Terraform can't provision this page",
    author: "Infrastructure as Code Enthusiast"
  }
]

const statusMessages = [
  "Checking all 26 Azure regions... 🌍",
  "Searching through 847 Docker containers... 🐳",
  "Querying Kubernetes cluster... ⎈",
  "Scanning CI/CD pipeline logs... 📊",
  "Rolling back last deployment... ⏮️",
  "Page status: Indefinitely scaled to zero 📉"
]

export default function NotFound() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [statusMessage, setStatusMessage] = useState(0)
  
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length)
    }, 5000)
    
    const statusInterval = setInterval(() => {
      setStatusMessage((prev) => (prev + 1) % statusMessages.length)
    }, 3000)
    
    return () => {
      clearInterval(quoteInterval)
      clearInterval(statusInterval)
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        {/* ARK Logo/Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent p-[2px]"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                ARK
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* 404 Number with split animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <motion.h1
            className="text-[12rem] md:text-[16rem] font-bold leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Sparkle badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Houston, we have a problem! 🚀</span>
        </motion.div>

        {/* Description */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Even Azure can't find this page! ☁️
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Looks like this page took an unscheduled journey to the cloud... and never came back. 
          Don't worry, I'm a cloud engineer – I know how to bring things back! 
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground/70 mb-10 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Pro tip: This wouldn't happen with proper Kubernetes monitoring 😉
        </motion.p>

        {/* Loading-style status message */}
        <motion.div
          className="mb-10 flex items-center justify-center gap-3 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Server className="w-5 h-5 text-primary" />
          </motion.div>
          <motion.span
            key={statusMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-mono text-xs"
          >
            {statusMessages[statusMessage]}
          </motion.span>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <MagneticButton strength={0.4}>
            <Link href="/">
              <Button size="lg" className="group relative overflow-hidden min-h-11">
                <Home className="mr-2 w-4 h-4" />
                <span className="relative z-10">Deploy to Home 🚀</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.4}>
            <Button
              size="lg"
              variant="outline"
              className="group min-h-11"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:animate-pulse" />
              Rollback Changes
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Fun tech quotes */}
        <motion.div
          className="mt-12 p-6 rounded-xl bg-card/50 backdrop-blur border border-primary/10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              💡 DevOps Wisdom #{currentQuote + 1}:
            </p>
          </motion.div>
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base mb-2">
              "{funnyQuotes[currentQuote].text}"
            </p>
            <p className="text-sm text-primary font-semibold">
              - {funnyQuotes[currentQuote].author}
            </p>
          </motion.div>
        </motion.div>

        {/* Funny status badges */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono flex items-center gap-2">
            <CloudOff className="w-3 h-3" />
            Region: Unavailable
          </div>
          <div className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-mono">
            Replicas: 0/0
          </div>
          <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-mono">
            CPU: 0% (very efficient! 😎)
          </div>
        </motion.div>

        {/* Message for Software Engineers */}
        <motion.div
          className="mt-10 p-5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">👨‍💻</span>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <span>Hey, Software Engineer! 👋</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-accent"
                >
                  &lt;/&gt;
                </motion.span>
              </h3>
              
              {/* Funny Joke Section */}
              <motion.div 
                className="mb-4 p-4 rounded-lg bg-background/50 border border-primary/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">😂</span>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Developer Joke of the Day
                  </p>
                </div>
                <p className="text-sm text-foreground font-medium mb-2">
                  Q: Why did the software engineer get stuck on this 404 page?
                </p>
                <p className="text-sm text-muted-foreground italic">
                  A: Because they couldn't <span className="text-primary font-mono">resolve()</span> the issue, 
                  and the page was in a <span className="text-accent font-mono">catch()</span> block... 
                  Now they're just <span className="text-purple-400 font-mono">async</span>-ing 
                  themselves why they clicked that link! 🤦‍♂️
                </p>
                <motion.div
                  className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground/60"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💡 <span className="italic">Pro tip: If you're seeing this, it means you found a bug... or did you? 🐛</span>
                </motion.div>
              </motion.div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Since you're here checking out my 404 page, you might appreciate that this entire portfolio is built with{" "}
                <span className="text-primary font-semibold">Next.js 16</span>,{" "}
                <span className="text-accent font-semibold">TypeScript</span>, and{" "}
                <span className="text-purple-400 font-semibold">Framer Motion</span>. 
                All animations are GPU-accelerated, and yes, even this error page has magnetic buttons! 
                Feel free to inspect the source code – no jQuery was harmed in the making of this site. 🎨✨
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-mono">Next.js 16</span>
                <span className="px-2 py-1 rounded bg-accent/10 text-accent text-xs font-mono">TypeScript</span>
                <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-mono">Framer Motion</span>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono">Three.js</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Error code info */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-mono bg-red-500/10 text-red-500 px-2 py-1 rounded border border-red-500/20">Error Code: 404</span> | 
              <span className="ml-2">Status: Page Not Found in Any Region 🌐</span>
            </p>
            <div className="text-xs text-muted-foreground/60 space-y-1">
              <p>
                Kubernetes Namespace: <span className="text-primary font-mono">lost-pages</span> | 
                Pod Status: <span className="text-red-500 font-mono">Terminated</span> ⚠️
              </p>
              <p>
                Last Seen: <span className="text-accent font-mono">Never</span> | 
                Health Check: <span className="text-red-500 font-mono">Failed</span> ❌
              </p>
              <p className="text-muted-foreground/40 italic mt-2">
                🤔 Possible causes: Cosmic rays, quantum tunneling, or someone forgot to commit the code...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
