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
    <section id="experience" className="bg-muted/30 relative overflow-hidden px-4 py-24">
      {/* Background effects */}
      <motion.div
        className="bg-primary/10 absolute top-1/3 left-0 h-96 w-96 rounded-full blur-3xl"
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
        className="bg-accent/10 absolute right-0 bottom-1/4 h-80 w-80 rounded-full blur-3xl"
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
        className="from-primary/10 to-accent/10 absolute top-0 left-1/4 h-96 w-96 rounded-full bg-linear-to-br blur-3xl"
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

      <div className="relative z-10 container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <Briefcase className="text-primary h-6 w-6" />
              <h2 className="from-foreground via-primary to-foreground bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Professional Experience
              </h2>
            </div>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Building cloud infrastructure and delivering innovative solutions
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} delay={index * 0.2}>
              <motion.div
                className="border-primary/20 group relative border-l-2 pb-8 pl-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute top-0 left-0 h-4 w-4 -translate-x-2 rounded-full ${
                    exp.current ? "bg-primary" : "bg-foreground/50"
                  } border-background border-4`}
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
                  className="bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-primary/10 relative overflow-hidden rounded-lg border p-6 backdrop-blur transition-all duration-300 hover:shadow-xl"
                  whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className="from-primary/5 via-primary/10 to-primary/5 absolute inset-0 bg-linear-to-r"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <motion.h3
                          className="group-hover:text-primary mb-1 text-2xl font-bold transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className="text-foreground/80 flex items-center gap-2 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          <Briefcase className="h-4 w-4" />
                          {exp.company}
                        </motion.p>
                      </div>
                      <motion.div
                        className="text-muted-foreground flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>

                    {/* Current badge */}
                    {exp.current && (
                      <motion.div
                        className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <motion.div
                          className="bg-primary h-2 w-2 rounded-full"
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
                      className="text-muted-foreground mb-4 leading-relaxed"
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
