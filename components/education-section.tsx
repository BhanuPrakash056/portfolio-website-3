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
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Education
              </h2>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <AnimatedSection key={edu.degree} delay={index * 0.2}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <CardContent className="p-8 relative">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.p
                          className="text-lg mb-1 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          <GraduationCap className="w-4 h-4 text-primary" />
                          {edu.institution}
                        </motion.p>
                        <motion.p
                          className="text-muted-foreground flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          <Calendar className="w-4 h-4" />
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
                        <Trophy className="w-5 h-5 text-primary" />
                        <div className="text-2xl font-bold">{edu.gpa}</div>
                      </motion.div>
                    </div>
                    {edu.highlights.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {edu.highlights.map((highlight, i) => (
                          <motion.span
                            key={highlight}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
