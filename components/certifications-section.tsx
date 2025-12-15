"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const certifications = [
  {
    provider: "Microsoft Certified",
    title: "Azure Fundamentals",
    code: "AZ-900",
    icon: "☁️",
  },
  {
    provider: "Google Cloud",
    title: "Google Cloud Computing Foundations",
    code: "Infrastructure in Google Cloud",
    icon: "🌐",
  },
  {
    provider: "Oracle Academy",
    title: "Cloud Data Management Foundations",
    code: "Associate",
    icon: "💾",
  },
  {
    provider: "Oracle Academy",
    title: "Cloud Infrastructure Foundations",
    code: "Associate",
    icon: "🏗️",
  },
  {
    provider: "Infosys Springboard",
    title: "Fundamentals of Machine Learning",
    code: "Certified",
    icon: "🤖",
  },
  {
    provider: "NPTEL",
    title: "Ethical Hacking",
    code: "Elite + Silver",
    icon: "🔐",
  },
  {
    provider: "NPTEL",
    title: "Introduction to Internet of Things",
    code: "Elite",
    icon: "📡",
  },
  {
    provider: "360DigiTMG",
    title: "Data Analytics Bootcamp",
    code: "Data Science & Big Data",
    icon: "📊",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 mb-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-5 h-5" strokeWidth={2} />
              <span className="text-sm font-medium">Certifications & Achievements</span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Certifications
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Industry-recognized certifications demonstrating expertise across cloud platforms, security, and emerging technologies
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Certifications Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.provider}-${cert.title}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <CardContent className="p-6 relative">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Provider Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-3">
                    {cert.provider}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>

                  {/* Code */}
                  <p className="text-sm text-muted-foreground">{cert.code}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
