"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Users, CheckCircle2, Code2, Sparkles, User } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { TiltCard } from "./tilt-card"
import { About3D } from "./about-3d"
import { useRef } from "react"

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

const _containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const _cardVariants = {
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
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} id="about" className="relative overflow-hidden px-4 py-24">
      {/* 3D Elements */}
      <About3D />

      {/* Animated background elements */}
      <motion.div
        className="bg-primary/5 absolute top-20 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{ y: y1 }}
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
        className="bg-accent/5 absolute bottom-20 left-0 h-80 w-80 rounded-full blur-3xl"
        style={{ y: y2 }}
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
              <User className="h-5 w-5" strokeWidth={2} />
              <span className="text-sm font-medium">Get to know me</span>
            </motion.div>
            <motion.h2
              className="mb-4 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-muted-foreground mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Experienced Cloud Operations Engineer specializing in hybrid cloud infrastructure,
              DevOps automation, and enterprise-scale cloud solutions. Dedicated to delivering
              reliable, secure, and high-performance cloud architectures.
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Stats Cards */}
        <AnimatedSection>
          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-3 gap-4 md:gap-6">
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltCard className="h-full">
                  <Card className="bg-card/80 group relative h-full overflow-hidden border-white/20 backdrop-blur transition-all duration-300 hover:border-white/40 hover:shadow-2xl">
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <CardContent className="relative p-6 text-center">
                      <motion.div
                        className="bg-primary/10 border-primary/20 mb-3 inline-flex rounded-xl border-2 p-4 shadow-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        <stat.icon className="text-primary h-8 w-8" strokeWidth={2} />
                      </motion.div>
                      <motion.div
                        className="mb-1 text-3xl font-bold md:text-4xl"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-muted-foreground text-xs font-medium md:text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bio and Core Values */}
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Bio Card */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-card/80 group overflow-hidden border-white/20 backdrop-blur transition-all duration-300 hover:border-white/40 hover:shadow-2xl">
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <CardContent className="relative p-8 md:p-10">
                  <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      I'm a passionate{" "}
                      <span className="text-foreground font-semibold">
                        Cloud Operations Engineer
                      </span>{" "}
                      with expertise in building scalable infrastructure and implementing automation
                      solutions. Currently thriving at{" "}
                      <span className="font-semibold text-white">Elanco</span> as a Jr. Hybrid Cloud
                      Ops Engineer, I focus on managing hybrid cloud infrastructure and optimizing
                      operations for enterprise-scale applications.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      My journey spans cutting-edge technologies including{" "}
                      <span className="text-foreground font-semibold">
                        Azure, Kubernetes, Terraform
                      </span>
                      , and cloud platforms. I'm particularly enthusiastic about cloud computing,
                      machine learning, and building innovative solutions that create lasting
                      impact.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>

          {/* Core Values Grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid gap-6 sm:grid-cols-2">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-card/60 group h-full border-white/20 backdrop-blur transition-all hover:border-white/40 hover:shadow-2xl">
                    <CardContent className="p-6">
                      <motion.div
                        className="bg-primary/10 border-primary/20 mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-2 shadow-2xl"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="text-primary h-7 w-7" strokeWidth={2} />
                      </motion.div>
                      <h4 className="group-hover:text-primary mb-2 font-semibold transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
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
