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
    <section id="certifications" className="bg-muted/30 relative overflow-hidden px-4 py-24">
      {/* Background effects */}
      <motion.div
        className="bg-primary/10 absolute top-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl"
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
        className="bg-accent/10 absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full blur-3xl"
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

      <div className="relative z-10 container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="h-5 w-5" strokeWidth={2} />
              <span className="text-sm font-medium">Certifications & Achievements</span>
            </motion.div>
            <motion.h2
              className="mb-4 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Certifications
            </motion.h2>
            <motion.p
              className="text-muted-foreground mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Industry-recognized certifications demonstrating expertise across cloud platforms,
              security, and emerging technologies
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Certifications Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={`${cert.provider}-${cert.title}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-card/80 border-primary/20 hover:border-primary/40 relative h-full overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-2xl">
                {/* Gradient overlay */}
                <motion.div
                  className="bg-primary/5 absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <CardContent className="relative p-6">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 text-5xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cert.icon}
                  </motion.div>

                  {/* Provider Badge */}
                  <div className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
                    {cert.provider}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors group-hover:text-white">
                    {cert.title}
                  </h3>

                  {/* Code */}
                  <p className="text-muted-foreground text-sm">{cert.code}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute right-0 bottom-0 left-0 h-1 bg-white"
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
