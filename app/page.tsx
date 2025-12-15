"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { PublicationsSection } from "@/components/publications-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingParticles } from "@/components/floating-particles"
import { motion } from "framer-motion"

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingParticles />
      <Header />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <CertificationsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />

      {/* Footer */}
      <motion.footer
        className="py-8 px-4 border-t border-border relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-accent/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="container mx-auto text-center text-sm text-muted-foreground relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2025 Anusha R Karegoudar. All rights reserved.
          </motion.p>
          <motion.p
            className="mt-2 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built with Next.js, TypeScript, and Framer Motion
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}
