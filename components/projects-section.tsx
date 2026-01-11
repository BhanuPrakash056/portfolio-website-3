"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { ExternalLink, Sparkles } from "lucide-react"
import { useRef } from "react"

const projects = [
  {
    title: "Face Recognition Attendance System",
    description:
      "Intelligent attendance tracking system featuring real-time face recognition and liveness detection through eye blink analysis. Implements computer vision algorithms for enhanced security, achieving 98%+ accuracy in identity verification.",
    tags: ["Python", "OpenCV", "Machine Learning", "Deep Learning"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Dharwad Co-op Milk Union Mobile App",
    description:
      "Enterprise Android application streamlining milk collection, quality testing, and payment processing for cooperative milk unions. Reduced administrative overhead by 40% while serving 5000+ dairy farmers.",
    tags: ["Android", "Java", "SQLite", "REST API"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "IoT-Based Smart Farming Assistant",
    description:
      "Comprehensive agricultural IoT solution providing real-time soil moisture, temperature, and humidity monitoring. Enables data-driven farming decisions, reducing water consumption by 30% and improving crop yields.",
    tags: ["IoT", "Arduino", "Sensors", "Cloud Integration"],
    gradient: "from-purple-500 to-pink-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden px-4 py-24 md:px-6 lg:px-8"
    >
      {/* Animated background */}
      <motion.div
        className="bg-primary/10 absolute top-1/2 right-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-accent/10 absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-0">
        <AnimatedSection>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <Sparkles className="text-primary h-6 w-6" />
              <h2 className="from-foreground via-primary to-foreground bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Featured Projects
              </h2>
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Innovative solutions leveraging cutting-edge technologies
            </p>
          </motion.div>
        </AnimatedSection>

        <motion.div
          className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants} className="group flex">
              <TiltCard className="w-full">
                <Card className="bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-primary/20 relative flex h-full flex-col overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-2xl">
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-5 group-hover:opacity-15`}
                    initial={false}
                    animate={{ opacity: 0.05 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Animated corner decoration */}
                  <motion.div
                    className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br ${project.gradient} opacity-10 blur-2xl group-hover:opacity-25`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <CardContent className="relative z-10 flex flex-1 flex-col p-6">
                    {/* Project number badge */}
                    <motion.div
                      className={`absolute top-4 right-4 h-8 w-8 rounded-full bg-linear-to-br ${project.gradient} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {index + 1}
                    </motion.div>

                    <h3 className="group-hover:text-primary mb-3 pr-8 text-xl font-bold text-balance transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed text-pretty">
                      {project.description}
                    </p>

                    <div className="mt-auto mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* View details link */}
                    <motion.div
                      className="text-primary mt-2 flex items-center gap-2 text-sm opacity-0 transition-opacity group-hover:opacity-100"
                      whileHover={{ x: 5 }}
                    >
                      <span>View details</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
