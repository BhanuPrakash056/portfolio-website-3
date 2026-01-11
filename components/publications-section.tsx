"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animated-section"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    publisher: "Springer - LNDECT Series",
    title:
      "Adoption of Cloud Computing and Relevant Technologies: Benefits, Challenges and Solutions",
    description:
      "Comprehensive analysis of cloud computing adoption trends, examining the strategic benefits, implementation challenges, and practical solutions for enterprise cloud migration. Published in Springer's prestigious Lecture Notes on Data Engineering and Communications Technologies series.",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-3481-2_35",
    color: "from-blue-500 to-cyan-500",
  },
  {
    publisher: "Springer - LNDECT Series",
    title:
      "Detailed Study on Deep Learning Methodologies in Medical Imaging for Disease Identification",
    description:
      "In-depth research exploring state-of-the-art deep learning architectures and methodologies for automated disease detection in medical imaging. Investigates CNN, transfer learning, and advanced neural network techniques for improving diagnostic accuracy and healthcare outcomes.",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-3481-2_33",
    color: "from-purple-500 to-pink-500",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="bg-muted/30 relative overflow-hidden px-4 py-24">
      {" "}
      {/* Background effects */}
      <motion.div
        className="bg-accent/10 absolute top-1/2 left-1/3 h-96 w-96 rounded-full blur-3xl"
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
        className="bg-primary/10 absolute right-1/4 bottom-0 h-80 w-80 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />{" "}
      <motion.div
        className="bg-primary/5 absolute right-0 bottom-0 h-96 w-96 rounded-full blur-3xl"
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
      <div className="relative z-10 container mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <BookOpen className="text-primary h-6 w-6" />
              <h2 className="from-foreground via-primary to-foreground bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Publications
              </h2>
            </div>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Contributing to academic research and knowledge sharing
            </p>
          </motion.div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, index) => (
            <AnimatedSection key={pub.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="bg-card/80 border-primary/20 hover:border-primary/40 hover:shadow-primary/10 group h-full overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-xl">
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${pub.color} opacity-5 group-hover:opacity-15`}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-linear-to-br ${pub.color} opacity-10 blur-2xl group-hover:opacity-30`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <CardContent className="relative z-10 flex h-full flex-col p-8">
                    <motion.p
                      className="text-primary mb-2 text-sm font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {pub.publisher}
                    </motion.p>
                    <motion.h3
                      className="group-hover:text-primary mb-3 text-xl font-bold text-balance transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {pub.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground mb-4 grow text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {pub.description}
                    </motion.p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary inline-flex items-center gap-2 text-sm font-medium"
                    >
                      <Link
                        href={pub.url}
                        target="_blank"
                        className="inline-flex items-center gap-2"
                      >
                        View Publication
                        <ExternalLink className="h-4 w-4" />
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
