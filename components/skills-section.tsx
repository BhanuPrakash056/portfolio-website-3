"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { Code2, Cloud, Wrench, Brain } from "lucide-react"
import { Card3D } from "./card-3d"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Azure", "Google Cloud", "Kubernetes", "Terraform"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C/C++", "SQL", "HTML/CSS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Specializations",
    icon: Brain,
    skills: ["Machine Learning", "Cloud Computing", "IoT", "Ethical Hacking"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Soft Skills",
    icon: Wrench,
    skills: ["Leadership", "Communication", "Problem-solving", "Quick Learner"],
    color: "from-orange-500 to-red-500",
    variant: "outline" as const,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  
  return (
    <section ref={ref} id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        style={{ y: y1 }}
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
        className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set spanning cloud infrastructure, programming, and cutting-edge technologies
            </p>
          </motion.div>
        </AnimatedSection>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-card/80 backdrop-blur border border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Card3D color={categoryIndex === 0 ? "#60a5fa" : categoryIndex === 1 ? "#34d399" : categoryIndex === 2 ? "#a78bfa" : "#f59e0b"} />
                </div>
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  className="relative mb-4"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: categoryIndex * 0.2,
                  }}
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-primary/10 border-2 border-primary/20 shadow-2xl`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 relative">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant={category.variant || "default"} className="text-xs">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-linear-to-br ${category.color} opacity-10 group-hover:opacity-30 blur-xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: categoryIndex * 0.3,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
