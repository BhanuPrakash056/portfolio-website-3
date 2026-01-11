"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { Mail, Linkedin, Send, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24">
      {/* Animated background */}
      <motion.div
        className="from-primary/10 to-accent/10 absolute inset-0 bg-linear-to-br via-transparent"
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
        className="bg-primary/20 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
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

      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-primary/10 border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
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
              <Send className="text-primary h-4 w-4" />
              <span className="text-sm font-medium">Let's Connect</span>
            </motion.div>

            <h2 className="from-foreground via-primary to-foreground mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Let's Build Something Amazing
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              I'm always excited to discuss new opportunities, collaborate on innovative projects,
              or connect with fellow cloud enthusiasts. Whether you're looking for a dedicated cloud
              engineer or just want to talk about the latest in cloud technologies, I'd love to hear
              from you!
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="mailto:anushark7@gmail.com">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 relative min-w-50 overflow-hidden shadow-2xl"
                >
                  <Mail
                    className="relative z-10 mr-3 h-6 w-6 group-hover:animate-bounce"
                    strokeWidth={2}
                  />
                  <span className="relative z-10 font-semibold">Email Me</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://linkedin.com" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="group hover:bg-primary/10 hover:border-primary min-w-50 border-2 shadow-2xl"
                >
                  <Linkedin
                    className="group-hover:text-primary mr-3 h-6 w-6 transition-colors"
                    strokeWidth={2}
                  />
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
              className="text-muted-foreground flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="text-primary h-5 w-5" />
              <span>anushark7@gmail.com</span>
            </motion.div>
            <motion.div
              className="text-muted-foreground flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="text-primary h-5 w-5" />
              <span>Bengaluru, Karnataka, India</span>
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Decorative elements */}
        <motion.div
          className="bg-primary/10 absolute top-1/4 left-10 h-20 w-20 rounded-full blur-xl"
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
          className="bg-accent/10 absolute right-10 bottom-1/4 h-32 w-32 rounded-full blur-xl"
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
