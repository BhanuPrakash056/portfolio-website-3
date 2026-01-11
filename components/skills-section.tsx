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
    <section ref={ref} id="skills" className="bg-muted/30 relative overflow-hidden px-4 py-24">
      {/* Background decoration */}
      <motion.div
        className="bg-accent/10 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
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
        className="bg-primary/10 absolute top-1/4 right-0 h-80 w-80 rounded-full blur-3xl"
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

      <div className="relative z-10 container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="from-foreground via-primary to-foreground mb-4 bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Technical Skills
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              A diverse skill set spanning cloud infrastructure, programming, and cutting-edge
              technologies
            </p>
          </motion.div>
        </AnimatedSection>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
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
              <div className="bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-primary/10 relative h-full overflow-hidden rounded-xl border p-6 backdrop-blur transition-all duration-300 hover:shadow-xl">
                {/* 3D Background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Card3D
                    color={
                      categoryIndex === 0
                        ? "#60a5fa"
                        : categoryIndex === 1
                          ? "#34d399"
                          : categoryIndex === 2
                            ? "#a78bfa"
                            : "#f59e0b"
                    }
                  />
                </div>

                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-5 transition-opacity duration-300 group-hover:opacity-15`}
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
                    className={`bg-primary/10 border-primary/20 inline-flex rounded-xl border-2 p-4 shadow-2xl`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className="text-primary h-10 w-10" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <h3 className="relative mb-4 text-xl font-semibold">{category.title}</h3>

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">
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
                  className={`absolute -top-10 -right-10 h-20 w-20 rounded-full bg-linear-to-br ${category.color} opacity-10 blur-xl group-hover:opacity-30`}
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
