"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { GraduationCap, Calendar, Trophy } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "REVA University",
    period: "Feb 2022 - Dec 2023",
    gpa: "8.38/10",
    highlights: ["Machine Learning", "Artificial Intelligence", "Cloud Computing"],
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Karnataka University Dharwad",
    period: "Jun 2018 - Sep 2021",
    gpa: "8.14/10",
    highlights: [],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden px-4 py-24">
      <motion.div
        className="bg-accent/5 absolute top-1/3 left-1/4 h-96 w-96 rounded-full blur-3xl"
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
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <GraduationCap className="text-primary h-6 w-6" />
              <h2 className="from-foreground via-primary to-foreground bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Education
              </h2>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="mx-auto max-w-4xl space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.degree} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-primary/10 group overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-xl">
                  <motion.div
                    className="from-primary/5 via-primary/10 to-primary/5 absolute inset-0 bg-linear-to-r"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <CardContent className="relative p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <motion.h3
                          className="group-hover:text-primary mb-2 text-2xl font-bold transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.p
                          className="mb-1 flex items-center gap-2 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          <GraduationCap className="text-primary h-4 w-4" />
                          {edu.institution}
                        </motion.p>
                        <motion.p
                          className="text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </motion.p>
                      </div>
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      >
                        <Trophy className="text-primary h-5 w-5" />
                        <div className="text-2xl font-bold">{edu.gpa}</div>
                      </motion.div>
                    </div>
                    {edu.highlights.length > 0 && (
                      <motion.div
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {edu.highlights.map((highlight, i) => (
                          <motion.span
                            key={highlight}
                            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
