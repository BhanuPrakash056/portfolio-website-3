"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, Target, CheckCircle2, Code2, Sparkles, User } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { About3D } from "./about-3d"

const highlights = [
  {
    icon: Rocket,
    label: "Years of Experience",
    value: "2+",
  },
  {
    icon: Code2,
    label: "Certifications",
    value: "8+",
  },
  {
    icon: Sparkles,
    label: "Technologies",
    value: "20+",
  },
]

const coreValues = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient solutions",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Embracing new technologies and modern practices",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Team-oriented approach to problem-solving",
  },
  {
    icon: CheckCircle2,
    title: "Performance Focus",
    description: "Optimizing for speed, reliability, and scalability",
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Elements */}
      <About3D />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
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
              <User className="w-5 h-5" strokeWidth={2} />
              <span className="text-sm font-medium">Get to know me</span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experienced Cloud Operations Engineer specializing in hybrid cloud infrastructure, DevOps automation, and enterprise-scale cloud solutions.
              Dedicated to delivering reliable, secure, and high-performance cloud architectures.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Stats Cards */}
        <AnimatedSection>
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-card/80 backdrop-blur border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
                  <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-6 text-center relative">
                    <motion.div
                      className="inline-flex p-4 rounded-xl bg-primary/10 border-2 border-primary/20 shadow-2xl mb-3"
                      whileHover={{ scale: 1.2 }}
                    >
                      <stat.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                    </motion.div>
                    <motion.div
                      className="text-3xl md:text-4xl font-bold mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bio and Core Values */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Bio Card */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-card/80 backdrop-blur border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="p-8 md:p-10 relative">
                  <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      I'm a passionate <span className="text-foreground font-semibold">Cloud Operations Engineer</span> with expertise in building scalable infrastructure and
                      implementing automation solutions. Currently thriving at <span className="text-white font-semibold">Elanco</span> as a Jr. Hybrid Cloud Ops Engineer, I
                      focus on managing hybrid cloud infrastructure and optimizing operations for enterprise-scale applications.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      My journey spans cutting-edge technologies including <span className="text-foreground font-semibold">Azure, Kubernetes, Terraform</span>, and
                      cloud platforms. I'm particularly enthusiastic about cloud computing, machine learning, and building
                      innovative solutions that create lasting impact.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>

          {/* Core Values Grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-card/60 backdrop-blur border-white/20 hover:border-white/40 hover:shadow-2xl transition-all h-full group">
                    <CardContent className="p-6">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4 shadow-2xl"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
