"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, Linkedin, Github, ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"
import { Scene3D } from "./scene-3d"

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

const floatingVariants = {
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
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated grid */}
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

      <motion.div
        className="container mx-auto text-center max-w-4xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkle effect */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="inline-block bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Anusha
          </span>{" "}
          <motion.span
            className="inline-block bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
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

        <motion.div
          className="space-y-4 mb-8"
          variants={itemVariants}
        >
          <p className="text-2xl md:text-3xl font-semibold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Jr. Hybrid Cloud Ops Engineer
          </p>
          <p className="text-lg md:text-xl text-primary font-medium">
            Azure & Cloud Specialist
          </p>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Building scalable cloud solutions with Azure, Terraform, and Kubernetes. Passionate about cloud computing,
          machine learning, and innovative technology.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" onClick={() => scrollToSection("contact")} className="group relative overflow-hidden">
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-primary to-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="group">
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          variants={itemVariants}
        >
          {[
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Mail, href: "mailto:anushark7@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}
