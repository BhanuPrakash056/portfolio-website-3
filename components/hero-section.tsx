"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github, ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"
import { Scene3D } from "./scene-3d"
import { MagneticButton } from "./magnetic-button"
import { usePerformance } from "@/hooks/use-performance"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const containerVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
}

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

const _floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
}

export function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const performance = usePerformance()
  const variants = performance.reducedMotion ? containerVariantsReduced : containerVariants
  const itemVars = performance.reducedMotion ? itemVariantsReduced : itemVariants

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* 3D Scene Background - only on high-end devices */}
      {performance.enable3D && <Scene3D />}

      {/* Animated gradient background */}
      <div className="from-primary/10 to-accent/10 pointer-events-none absolute inset-0 bg-linear-to-br via-transparent" />

      {/* Large gradient orbs - only with animations enabled */}
      {performance.enableHeavyAnimations && (
        <>
          <div className="bg-primary/20 absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div
            className="bg-accent/20 absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      {/* Animated grid - only with animations enabled */}
      {performance.enableHeavyAnimations && (
        <motion.div
          className="absolute inset-0 opacity-[0.05]"
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
      )}

      <motion.div
        className="relative z-10 container mx-auto max-w-4xl text-center"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkle effect */}
        <motion.div
          className="bg-primary/10 border-primary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2"
          initial={{ opacity: 0, scale: performance.reducedMotion ? 1 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: performance.reducedMotion ? 0.2 : 0.5 }}
        >
          <Sparkles className="text-primary h-4 w-4" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </motion.div>

        <motion.h1 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl" variants={itemVars}>
          <span className="from-foreground via-foreground to-muted-foreground inline-block bg-linear-to-r bg-clip-text text-transparent">
            Anusha
          </span>{" "}
          <motion.span
            className="from-primary via-accent to-primary inline-block bg-linear-to-r bg-clip-text text-transparent"
            animate={
              performance.enableHeavyAnimations
                ? {
                    backgroundPosition: ["0%", "100%", "0%"],
                  }
                : {}
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            R Karegoudar
          </motion.span>
        </motion.h1>

        <motion.div className="mb-8 space-y-4" variants={itemVars}>
          <p className="from-foreground to-muted-foreground bg-linear-to-r bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            Jr. Hybrid Cloud Ops Engineer
          </p>
          <p className="text-primary text-lg font-medium md:text-xl">Azure & Cloud Specialist</p>
        </motion.div>

        <motion.p
          className="text-muted-foreground mx-auto mb-12 max-w-2xl text-base leading-relaxed md:text-lg"
          variants={itemVars}
        >
          Architecting and managing enterprise-scale hybrid cloud infrastructure with Azure,
          Terraform, and Kubernetes. Passionate about cloud-native technologies, infrastructure
          automation, and driving digital transformation through innovative solutions.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          variants={itemVars}
        >
          {performance.enableHeavyAnimations ? (
            <MagneticButton strength={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="group relative min-h-11 touch-manipulation overflow-hidden"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="from-primary to-accent absolute inset-0 bg-linear-to-r"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </MagneticButton>
          ) : (
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="min-h-11 touch-manipulation"
            >
              Get In Touch
            </Button>
          )}

          {performance.enableHeavyAnimations ? (
            <MagneticButton strength={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="group min-h-11 touch-manipulation">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </motion.div>
            </MagneticButton>
          ) : (
            <Button size="lg" variant="outline" className="min-h-11 touch-manipulation">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          )}
        </motion.div>

        <motion.div className="flex items-center justify-center gap-6" variants={itemVars}>
          {[
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Mail, href: "mailto:anushark7@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.div
              key={social.label}
              whileHover={performance.enableHeavyAnimations ? { scale: 1.2 } : undefined}
              whileTap={performance.enableHeavyAnimations ? { scale: 0.9 } : undefined}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                className="text-muted-foreground hover:text-foreground flex min-h-11 min-w-11 touch-manipulation items-center justify-center p-2 transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll down button - positioned at bottom of hero section */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="text-muted-foreground hover:text-primary absolute bottom-12 left-1/2 z-20 flex min-h-11 min-w-11 -translate-x-1/2 cursor-pointer touch-manipulation items-center justify-center p-2 transition-colors"
        initial={{ opacity: 0, y: performance.reducedMotion ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: performance.reducedMotion ? 0 : 1,
          duration: performance.reducedMotion ? 0.2 : 0.8,
        }}
        whileHover={performance.enableHeavyAnimations ? { scale: 1.2 } : undefined}
      >
        {performance.enableHeavyAnimations ? (
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        ) : (
          <ChevronDown className="h-8 w-8" />
        )}
      </motion.button>
    </section>
  )
}
