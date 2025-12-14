"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Linkedin, Github, ChevronDown, Award } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Anusha <span className="text-muted-foreground">R Karegoudar</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-medium">
            Jr. Hybrid Cloud Ops Engineer | Azure & Cloud Specialist
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Building scalable cloud solutions with Azure, Terraform, and Kubernetes. Passionate about cloud computing,
            machine learning, and innovative technology. Currently at Elanco, passionate about continuous learning and
            excellence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("about")}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:anushark7@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About & Certifications Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column - About */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate cloud operations engineer with expertise in building scalable infrastructure and
                  implementing automation solutions. Currently working at Elanco as a Jr. Hybrid Cloud Ops Engineer, I
                  focus on managing hybrid cloud infrastructure and optimizing cloud operations for enterprise-scale
                  applications.
                </p>
                <p>
                  My journey has taken me through cutting-edge technologies including Azure, Kubernetes, Terraform, and
                  cloud platforms. I'm particularly enthusiastic about cloud computing, machine learning, and building
                  innovative solutions that make a real impact.
                </p>
                <p>
                  With a strong foundation in DevOps practices, CI/CD pipelines, and optimizing application performance,
                  I strive to craft efficient, maintainable infrastructure that drives business value.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    <span>Clean, maintainable infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    <span>Continuous learning and improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    <span>Collaborative problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground mt-1">•</span>
                    <span>Performance and scalability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-muted-foreground" />
                <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    provider: "Microsoft Certified",
                    title: "Azure Fundamentals",
                    code: "AZ-900",
                    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                  },
                  {
                    provider: "Google Cloud",
                    title: "Google Cloud Computing Foundations",
                    code: "Infrastructure in Google Cloud",
                    color: "bg-green-500/10 text-green-400 border-green-500/20",
                  },
                  {
                    provider: "Oracle Academy",
                    title: "Cloud Data Management Foundations",
                    code: "Associate",
                    color: "bg-red-500/10 text-red-400 border-red-500/20",
                  },
                  {
                    provider: "Oracle Academy",
                    title: "Cloud Infrastructure Foundations",
                    code: "Associate",
                    color: "bg-red-500/10 text-red-400 border-red-500/20",
                  },
                  {
                    provider: "Infosys Springboard",
                    title: "Fundamentals of Machine Learning",
                    code: "Certified",
                    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                  },
                  {
                    provider: "NPTEL",
                    title: "Ethical Hacking",
                    code: "Elite + Silver",
                    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                  },
                  {
                    provider: "NPTEL",
                    title: "Introduction to Internet of Things",
                    code: "Elite",
                    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                  },
                  {
                    provider: "360DigiTMG",
                    title: "Data Analytics Bootcamp",
                    code: "Data Science & Big Data",
                    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                  },
                ].map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-foreground/30 transition-all duration-300 hover:bg-card group overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-1.5 h-1.5 rounded-full ${cert.color.split(" ")[1].replace("text-", "bg-")} group-hover:scale-150 transition-transform`}
                        />
                        <div className="flex-1 min-w-0">
                          <div
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-1.5 border ${cert.color}`}
                          >
                            {cert.provider}
                          </div>
                          <h3 className="text-sm font-semibold mb-0.5 group-hover:text-foreground transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{cert.code}</p>
                        </div>
                        <Award className="w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-8">
            <div className="relative border-l-2 border-foreground/10 pl-8 pb-8">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-foreground" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Jr. Hybrid Cloud Ops Engineer</h3>
                  <p className="text-lg text-foreground/80">Elanco</p>
                </div>
                <p className="text-muted-foreground">Oct 2024 - Present</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Managing hybrid cloud infrastructure, implementing automation solutions, and optimizing cloud operations
                for enterprise-scale applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Terraform</Badge>
                <Badge variant="secondary">DevOps</Badge>
              </div>
            </div>

            <div className="relative border-l-2 border-foreground/10 pl-8 pb-8">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-foreground/50" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Engineering Trainee</h3>
                  <p className="text-lg text-foreground/80">Elanco</p>
                </div>
                <p className="text-muted-foreground">Oct 2023 - Oct 2024</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Developed expertise in cloud technologies, worked on infrastructure automation, and contributed to
                various cloud migration projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Cloud Migration</Badge>
                <Badge variant="secondary">Automation</Badge>
                <Badge variant="secondary">Infrastructure</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

          <div className="space-y-6">
            <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Master of Computer Applications</h3>
                    <p className="text-lg mb-1">REVA University</p>
                    <p className="text-muted-foreground">Feb 2022 - Dec 2023</p>
                  </div>
                  <div className="text-2xl font-bold">8.38/10</div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Cloud Computing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
                    <p className="text-lg mb-1">Karnataka University Dharwad</p>
                    <p className="text-muted-foreground">Jun 2018 - Sep 2021</p>
                  </div>
                  <div className="text-2xl font-bold">8.14/10</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Azure</Badge>
                <Badge>Google Cloud</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>Terraform</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>C/C++</Badge>
                <Badge>SQL</Badge>
                <Badge>HTML/CSS</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Machine Learning</Badge>
                <Badge>Cloud Computing</Badge>
                <Badge>IoT</Badge>
                <Badge>Ethical Hacking</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Leadership</Badge>
                <Badge variant="outline">Communication</Badge>
                <Badge variant="outline">Problem-solving</Badge>
                <Badge variant="outline">Quick Learner</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-foreground/20 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-balance">Face Recognition Attendance System</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                  Advanced attendance system with eye blink detection for enhanced security and accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">ML</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-foreground/20 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-balance">Android App - Dharwad Co-op Milk Union</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                  Mobile application for managing milk union operations and customer interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Android</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Mobile Dev</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-foreground/20 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-balance">IoT Based Farmer Assistant</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                  Smart farming solution using IoT sensors to assist farmers with real-time agricultural data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary">Sensors</Badge>
                  <Badge variant="secondary">Arduino</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Publications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-2">Springer - LNDECT Series</p>
                <h3 className="text-xl font-bold mb-3 text-balance">
                  Adoption of Cloud Computing and Relevant Technologies: Benefits, Challenges and Solutions
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Published in Springer's Lecture Notes on Data Engineering and Communications Technologies
                </p>
                <Link
                  href="https://link.springer.com/chapter/10.1007/978-981-99-3481-2_35"
                  target="_blank"
                  className="text-sm text-foreground hover:underline inline-flex items-center gap-1"
                >
                  View Publication →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-foreground/20 transition-colors">
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-2">Springer - LNDECT Series</p>
                <h3 className="text-xl font-bold mb-3 text-balance">
                  Detailed Study on Deep Learning Methodologies in Medical Imaging for Disease Identification
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Research on applying deep learning techniques to medical image analysis
                </p>
                <Link
                  href="https://link.springer.com/chapter/10.1007/978-981-99-3481-2_33"
                  target="_blank"
                  className="text-sm text-foreground hover:underline inline-flex items-center gap-1"
                >
                  View Publication →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud
            technologies and innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="mailto:anushark7@gmail.com">
              <Button size="lg" className="min-w-[200px]">
                <Mail className="mr-2 w-4 h-4" />
                Email Me
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <Mail className="w-5 h-5" />
            <span>anushark7@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-muted-foreground mt-2">
            <span>📍 Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Anusha R Karegoudar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
