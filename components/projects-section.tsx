"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { ExternalLink, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Advanced attendance system with eye blink detection for enhanced security and accuracy.",
    tags: ["Python", "Computer Vision", "ML"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Android App - Dharwad Co-op Milk Union",
    description: "Mobile application for managing milk union operations and customer interactions.",
    tags: ["Android", "Java", "Mobile Dev"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "IoT Based Farmer Assistant",
    description: "Smart farming solution using IoT sensors to assist farmers with real-time agricultural data.",
    tags: ["IoT", "Sensors", "Arduino"],
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
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions leveraging cutting-edge technologies
            </p>
          </motion.div>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group h-full"
            >
              <Card className="h-full bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden relative">
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
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-linear-to-br ${project.gradient} opacity-10 group-hover:opacity-25 blur-2xl`}
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

                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  {/* Project number badge */}
                  <motion.div
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-linear-to-br ${project.gradient} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {index + 1}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-balance pr-8 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
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
                    className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <span>View details</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
