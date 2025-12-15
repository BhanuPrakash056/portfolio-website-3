"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { Mail, Linkedin, Send, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Additional glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(var(--primary), 0.4)",
                  "0 0 0 20px rgba(var(--primary), 0)",
                  "0 0 0 0 rgba(var(--primary), 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Let's Connect</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, or connect with fellow cloud enthusiasts.
              Whether you're looking for a dedicated cloud engineer or just want to talk about the latest in cloud technologies, I'd love to hear from you!
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="mailto:anushark7@gmail.com">
                <Button size="lg" className="min-w-50 group relative overflow-hidden shadow-2xl bg-primary hover:bg-primary/90">
                  <Mail className="mr-3 w-6 h-6 relative z-10 group-hover:animate-bounce" strokeWidth={2} />
                  <span className="relative z-10 font-semibold">Email Me</span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://linkedin.com" target="_blank">
                <Button size="lg" variant="outline" className="min-w-50 group border-2 hover:bg-primary/10 hover:border-primary shadow-2xl">
                  <Linkedin className="mr-3 w-6 h-6 transition-colors group-hover:text-primary" strokeWidth={2} />
                  <span className="font-semibold">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>anushark7@gmail.com</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-3 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span>Bengaluru, Karnataka, India</span>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  )
}
