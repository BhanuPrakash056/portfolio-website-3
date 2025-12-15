"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Jr. Hybrid Cloud Ops Engineer",
    company: "Elanco",
    period: "Oct 2024 - Present",
    description:
      "Managing enterprise hybrid cloud infrastructure across Azure and on-premises environments. Implementing infrastructure-as-code with Terraform, orchestrating containerized workloads with Kubernetes, and establishing CI/CD pipelines. Reduced deployment times by 60% and improved system reliability through automated monitoring and incident response workflows.",
    tags: ["Azure", "Kubernetes", "Terraform", "DevOps", "CI/CD", "Monitoring"],
    current: true,
  },
  {
    title: "Engineering Trainee",
    company: "Elanco",
    period: "Oct 2023 - Oct 2024",
    description:
      "Accelerated cloud adoption through hands-on infrastructure automation and migration projects. Collaborated with cross-functional teams to modernize legacy applications, implement cloud security best practices, and optimize resource utilization. Successfully migrated 15+ applications to Azure cloud platform.",
    tags: ["Azure", "Cloud Migration", "Automation", "Infrastructure", "Security"],
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building cloud infrastructure and delivering innovative solutions
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.2}>
              <motion.div
                className="relative border-l-2 border-primary/20 pl-8 pb-8 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full ${
                    exp.current ? "bg-primary" : "bg-foreground/50"
                  } border-4 border-background`}
                  animate={
                    exp.current
                      ? {
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(var(--primary), 0.4)",
                            "0 0 0 10px rgba(var(--primary), 0)",
                            "0 0 0 0 rgba(var(--primary), 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: exp.current ? Infinity : 0,
                  }}
                />

                {/* Content card */}
                <motion.div
                  className="bg-card/80 backdrop-blur border border-primary/20 hover:border-primary/40 rounded-lg p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <motion.h3
                          className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className="text-lg text-foreground/80 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </motion.p>
                      </div>
                      <motion.div
                        className="flex items-center gap-2 text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>

                    {/* Current badge */}
                    {exp.current && (
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{
                            opacity: [1, 0.3, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                        Current Position
                      </motion.div>
                    )}

                    {/* Description */}
                    <motion.p
                      className="text-muted-foreground leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {exp.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.6 + tagIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary">{tag}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
