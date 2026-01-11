"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Sparkles, CloudOff, Server, Zap } from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { useState, useEffect } from "react"

const funnyQuotes = [
  {
    text: "This 404 error is more reliable than my test environment deployments",
    author: "Every DevOps Engineer Ever",
  },
  {
    text: "Have you tried turning it off and on again? Oh wait, it doesn't exist...",
    author: "IT Support Wisdom",
  },
  {
    text: "This page is like my Kubernetes pod - it keeps crashing",
    author: "Anonymous Cloud Engineer",
  },
  {
    text: "Error 404: Page not found. Just like my work-life balance",
    author: "Senior Dev at 3 AM",
  },
  {
    text: "This page migrated to the cloud and never came back",
    author: "Cloud Migration Gone Wrong",
  },
  {
    text: "Even Terraform can't provision this page",
    author: "Infrastructure as Code Enthusiast",
  },
  {
    text: "My brother says he writes bug-free code. That's the biggest bug in his code.",
    author: "BPR's Sibling (me)",
  },
  {
    text: "BPR debugs his code by staring at it until it confesses",
    author: "His Debugging Strategy",
  },
  {
    text: "BPR's code reviews are like his jokes - they always have a punchline, but sometimes it takes a while to get it",
    author: "His Dev Team (probably)",
  },
  {
    text: "Why did BPR become a software engineer? Because 'Professional Code Whisperer' wasn't a real job title",
    author: "Career Choices 101",
  },
  {
    text: "BPR's favorite exercise? Running npm install. He says it's the only running he does.",
    author: "Fitness Goals 2024",
  },
  {
    text: "When BPR says 'it works on my machine', even his machine looks nervous",
    author: "The Machine Speaks",
  },
]

const statusMessages = [
  "Checking all 26 Azure regions... 🌍",
  "Searching through 847 Docker containers... 🐳",
  "Querying Kubernetes cluster... ⎈",
  "Scanning CI/CD pipeline logs... 📊",
  "Rolling back last deployment... ⏮️",
  "Page status: Indefinitely scaled to zero 📉",
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
    <div className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="bg-primary/20 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl"
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
        className="bg-accent/20 absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
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

      <div className="relative z-10 container mx-auto max-w-3xl px-4 text-center">
        {/* ARK Logo/Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="from-primary to-accent inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br p-[2px]"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="bg-background flex h-full w-full items-center justify-center rounded-2xl">
              <span className="from-primary to-accent bg-gradient-to-br bg-clip-text text-2xl font-bold text-transparent">
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
            className="text-[12rem] leading-none font-bold md:text-[16rem]"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
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
          className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Sparkles className="text-primary h-4 w-4" />
          <span className="text-sm font-medium">Houston, we have a problem! 🚀</span>
        </motion.div>

        {/* Description */}
        <motion.h2
          className="mb-4 text-2xl font-bold md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Even Azure can't find this page! ☁️
        </motion.h2>

        <motion.p
          className="text-muted-foreground mx-auto mb-4 max-w-xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Looks like this page took an unscheduled journey to the cloud... and never came back.
          Don't worry, I'm a cloud engineer – I know how to bring things back!
        </motion.p>

        <motion.p
          className="text-muted-foreground/70 mb-10 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Pro tip: This wouldn't happen with proper Kubernetes monitoring 😉
        </motion.p>

        {/* Loading-style status message */}
        <motion.div
          className="text-muted-foreground mb-10 flex items-center justify-center gap-3 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Server className="text-primary h-5 w-5" />
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
              <Button size="lg" className="group relative min-h-11 overflow-hidden">
                <Home className="mr-2 h-4 w-4" />
                <span className="relative z-10">Deploy to Home 🚀</span>
                <motion.div
                  className="from-primary to-accent absolute inset-0 bg-gradient-to-r"
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
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Rollback Changes
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Fun tech quotes */}
        <motion.div
          className="bg-card/50 border-primary/10 mx-auto mt-12 max-w-2xl rounded-xl border p-6 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            className="mb-2 flex items-center gap-2"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="text-primary h-4 w-4" />
            <p className="text-muted-foreground text-sm">💡 DevOps Wisdom #{currentQuote + 1}:</p>
          </motion.div>
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-base">"{funnyQuotes[currentQuote].text}"</p>
            <p className="text-primary text-sm font-semibold">
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
          <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-500">
            <CloudOff className="h-3 w-3" />
            Region: Unavailable
          </div>
          <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 font-mono text-xs text-yellow-500">
            Replicas: 0/0
          </div>
          <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-xs text-purple-500">
            CPU: 0% (very efficient! 😎)
          </div>
        </motion.div>

        {/* Message for Software Engineers */}
        <motion.div
          className="from-primary/5 to-accent/5 border-primary/20 mx-auto mt-10 max-w-2xl rounded-xl border bg-gradient-to-r p-5"
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
                ease: "easeInOut",
              }}
            >
              <span className="text-2xl">👨‍💻</span>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-primary mb-3 flex items-center gap-2 text-sm font-semibold">
                <span>Hey, Software Engineer! 👋</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-accent"
                >
                  &lt;/&gt;
                </motion.span>
              </h3>

              {/* Funny Joke Section - By BPR */}
              <motion.div
                className="from-background/80 via-primary/5 to-accent/5 border-primary/20 mb-4 rounded-lg border bg-gradient-to-br p-4 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">😂</span>
                    <p className="text-accent text-xs font-semibold tracking-wider uppercase">
                      Developer Joke Special
                    </p>
                  </div>
                  <motion.span
                    className="bg-primary/20 text-primary rounded-full px-2 py-0.5 font-mono text-[10px]"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    By BPR ⭐
                  </motion.span>
                </div>

                <p className="text-foreground mb-2 text-sm font-medium">
                  Q: Why did the software engineer get stuck on this 404 page?
                </p>
                <p className="text-muted-foreground mb-3 text-sm italic">
                  A: Because they couldn't <span className="text-primary font-mono">resolve()</span>{" "}
                  the issue, and the page was in a{" "}
                  <span className="text-accent font-mono">catch()</span> block... Now they're just{" "}
                  <span className="font-mono text-purple-400">async</span>-ing themselves why they
                  clicked that link! 🤦‍♂️
                </p>

                <motion.div
                  className="border-border/50 mt-3 border-t pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-muted-foreground text-xs">
                    👨‍💻 <span className="text-foreground font-semibold">Joke crafted by BPR</span> -
                    my brother, a software engineer who debugs code by day and crafts dad jokes by
                    night!
                  </p>
                </motion.div>

                <motion.div
                  className="border-border/50 text-muted-foreground/60 mt-3 border-t pt-3 text-xs"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💡{" "}
                  <span className="italic">
                    Pro tip: If you're seeing this, it means you found a bug... or did you? 🐛
                  </span>
                </motion.div>
              </motion.div>

              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                Since you're here checking out my 404 page, you might appreciate that this entire
                portfolio is built with{" "}
                <span className="text-primary font-semibold">Next.js 16</span>,{" "}
                <span className="text-accent font-semibold">TypeScript</span>, and{" "}
                <span className="font-semibold text-purple-400">Framer Motion</span>. All animations
                are GPU-accelerated, and yes, even this error page has magnetic buttons! Feel free
                to inspect the source code – no jQuery was harmed in the making of this site. 🎨✨
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary rounded px-2 py-1 font-mono text-xs">
                  Next.js 16
                </span>
                <span className="bg-accent/10 text-accent rounded px-2 py-1 font-mono text-xs">
                  TypeScript
                </span>
                <span className="rounded bg-purple-500/10 px-2 py-1 font-mono text-xs text-purple-400">
                  Framer Motion
                </span>
                <span className="rounded bg-green-500/10 px-2 py-1 font-mono text-xs text-green-400">
                  Three.js
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-primary/30 absolute h-2 w-2 rounded-full"
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
          className="border-border/50 mt-12 border-t pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm">
              <span className="rounded border border-red-500/20 bg-red-500/10 px-2 py-1 font-mono text-red-500">
                Error Code: 404
              </span>{" "}
              |<span className="ml-2">Status: Page Not Found in Any Region 🌐</span>
            </p>
            <div className="text-muted-foreground/60 space-y-1 text-xs">
              <p>
                Kubernetes Namespace: <span className="text-primary font-mono">lost-pages</span> |
                Pod Status: <span className="font-mono text-red-500">Terminated</span> ⚠️
              </p>
              <p>
                Last Seen: <span className="text-accent font-mono">Never</span> | Health Check:{" "}
                <span className="font-mono text-red-500">Failed</span> ❌
              </p>
              <p className="text-muted-foreground/40 mt-2 italic">
                🤔 Possible causes: Cosmic rays, quantum tunneling, or someone forgot to commit the
                code...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Blame BPR Section */}
        <motion.div
          className="mx-auto mt-8 max-w-2xl rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-yellow-500/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              <span className="text-3xl">🎯</span>
            </motion.div>
            <div className="flex-1">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-red-500">
                <span>Root Cause Analysis</span>
                <motion.span
                  className="rounded-full bg-red-500/20 px-2 py-0.5 font-mono text-xs text-red-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  CRITICAL
                </motion.span>
              </h3>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                After extensive investigation, log analysis, and multiple coffee breaks ☕, we've
                traced the source of this 404 error to...
              </p>
              <motion.div
                className="mb-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <p className="text-foreground mb-2 text-base font-semibold">
                  🚨 <span className="text-red-500">Blame Assigned To:</span> My Brother (The
                  Alleged "Software Engineer")
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Yes, the same guy who shares my DNA. The one with the fancy degree. The "I know
                  how to code" sibling. He said he'd "just push a quick fix" last Tuesday. This is
                  the result. 🤦‍♂️
                </p>
              </motion.div>
              <div className="text-muted-foreground/70 space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <span className="text-red-500">▸</span>
                  <span className="font-mono">git blame</span> output:
                  <span className="font-mono text-red-400">
                    The Guy Who Borrowed Mom's Laptop (100% of broken lines)
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">▸</span>
                  Last commit message by The Keyboard Warrior:
                  <span className="font-mono text-orange-400 italic">
                    "Fixed everything (I think) 🤞"
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-yellow-500">▸</span>
                  Tests run by That One Sibling:
                  <span className="font-mono text-yellow-400">
                    0 (testing is for the weak, apparently)
                  </span>
                </p>
                <motion.p
                  className="mt-3 flex items-center gap-2 border-t border-red-500/20 pt-3"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-red-500">💀</span>
                  <span className="italic">
                    Note: The Code Whisperer claims it's "a feature, not a bug". We're still
                    investigating his sanity...
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
