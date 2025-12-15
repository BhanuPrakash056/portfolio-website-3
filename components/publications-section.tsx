"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    publisher: "Springer - LNDECT Series",
    title: "Adoption of Cloud Computing and Relevant Technologies: Benefits, Challenges and Solutions",
    description: "Comprehensive analysis of cloud computing adoption trends, examining the strategic benefits, implementation challenges, and practical solutions for enterprise cloud migration. Published in Springer's prestigious Lecture Notes on Data Engineering and Communications Technologies series.",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-3481-2_35",
    color: "from-blue-500 to-cyan-500",
  },
  {
    publisher: "Springer - LNDECT Series",
    title: "Detailed Study on Deep Learning Methodologies in Medical Imaging for Disease Identification",
    description: "In-depth research exploring state-of-the-art deep learning architectures and methodologies for automated disease detection in medical imaging. Investigates CNN, transfer learning, and advanced neural network techniques for improving diagnostic accuracy and healthcare outcomes.",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-3481-2_33",
    color: "from-purple-500 to-pink-500",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-4 bg-muted/30 relative overflow-hidden">      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedSection>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Publications
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contributing to academic research and knowledge sharing
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="h-full bg-card/80 backdrop-blur border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group">
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${pub.color} opacity-5 group-hover:opacity-15`}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-linear-to-br ${pub.color} opacity-10 group-hover:opacity-30 blur-2xl`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <motion.p
                      className="text-sm text-primary mb-2 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {pub.publisher}
                    </motion.p>
                    <motion.h3
                      className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {pub.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm mb-4 grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {pub.description}
                    </motion.p>
                    <motion.div whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                      <Link href={pub.url} target="_blank" className="inline-flex items-center gap-2">
                        View Publication
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </motion.div>
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
