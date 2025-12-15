"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Float, Text3D, Center, Environment } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Camera, Globe, MapPin, Heart, Video, Users, Sparkles, Code, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// 3D Camera component
function PhotoCamera() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-3, 0, 0]}>
        <boxGeometry args={[1, 0.8, 0.6]} />
        <meshStandardMaterial color="#4A5568" />
        <mesh position={[0.5, 0.2, 0.4]}>
          <cylinderGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#2D3748" />
        </mesh>
      </mesh>
    </Float>
  )
}

// 3D Globe component
function TravelGlobe() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#4299E1" wireframe />
      </mesh>
    </Float>
  )
}

// 3D Foosball Table component
function FoosballTable() {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={[0, -1, 0]}>
        <mesh>
          <boxGeometry args={[2, 0.1, 1]} />
          <meshStandardMaterial color="#48BB78" />
        </mesh>
        <mesh position={[-0.7, 0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshStandardMaterial color="#F6E05E" />
        </mesh>
        <mesh position={[0.7, 0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5]} />
          <meshStandardMaterial color="#FC8181" />
        </mesh>
      </group>
    </Float>
  )
}

// 3D Laptop component
function Laptop() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 0.05, 1]} />
          <meshStandardMaterial color="#2D3748" />
        </mesh>
        <mesh position={[0, 0.5, -0.5]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[1.5, 1, 0.05]} />
          <meshStandardMaterial color="#1A202C" emissive="#4299E1" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

// 3D Heart component
function HeartShape() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#FC8181" emissive="#FC8181" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

export default function StoryPage() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sceneRef = useRef<HTMLDivElement>(null)

  // Cinematic chapter transitions
  const handleChapterChange = (newChapter: number) => {
    setIsTransitioning(true)
    
    gsap.to(".chapter-content", {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setCurrentChapter(newChapter)
        gsap.fromTo(".chapter-content", 
          { opacity: 0, scale: 1.05, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        setIsTransitioning(false)
      }
    })
  }

  // Cinematic scene animations
  useEffect(() => {
    if (currentChapter > 0 && !showMessage) {
      gsap.fromTo(".scene-3d",
        { opacity: 0, rotateY: -20 },
        { opacity: 1, rotateY: 0, duration: 1.5, ease: "power3.out" }
      )
    }
  }, [currentChapter, showMessage])

  const chapters = [
    {
      title: "The Beginning",
      subtitle: "Two Years Ago",
      description: "We met as interns at the same company. Two strangers who would become so much more.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      scene: "office"
    },
    {
      title: "Finding Common Ground",
      subtitle: "The Early Days",
      description: "Photography, traveling, and countless foosball games. We discovered shared passions and dreams.",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
      scene: "hobbies"
    },
    {
      title: "Growing Closer",
      subtitle: "Day by Day",
      description: "From colleagues to friends. Every conversation, every moment brought us closer.",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      scene: "friendship"
    },
    {
      title: "March 2024 - The Hackathon",
      subtitle: "A Pivotal Moment",
      description: "Working together on the same team. That's when everything clicked.",
      icon: Code,
      color: "from-orange-500 to-red-500",
      scene: "hackathon"
    },
    {
      title: "Brother & Sister",
      subtitle: "The Realization",
      description: "Through countless Teams calls and shared moments, I realized you're like a sister to me.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      scene: "siblings"
    }
  ]

  const currentScene = chapters[currentChapter]?.scene

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Cinematic Vignette Effect */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-radial-gradient opacity-60" 
           style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
      
      {/* Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-5 mix-blend-overlay"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      {/* Navigation */}
      <motion.div 
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/">
          <Button variant="outline" className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/20 transition-all">
            ← Back to Portfolio
          </Button>
        </Link>
      </motion.div>

      {/* 3D Background Scene with Cinematic Lighting */}
      <div className="fixed inset-0 -z-10 scene-3d" ref={sceneRef}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <fog attach="fog" args={['#1a0b2e', 5, 20]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="night" />
          
          {currentScene === "office" && (
            <group>
              <mesh position={[0, 0, -5]}>
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial color="#4A5568" />
              </mesh>
            </group>
          )}
          
          {currentScene === "hobbies" && (
            <group>
              <PhotoCamera />
              <TravelGlobe />
              <FoosballTable />
            </group>
          )}
          
          {currentScene === "friendship" && (
            <group>
              {[...Array(5)].map((_, i) => (
                <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.5}>
                  <mesh position={[Math.sin(i) * 3, Math.cos(i) * 2, -2]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#F6E05E" emissive="#F6E05E" emissiveIntensity={0.5} />
                  </mesh>
                </Float>
              ))}
            </group>
          )}
          
          {currentScene === "hackathon" && <Laptop />}
          
          {currentScene === "siblings" && (
            <group>
              <HeartShape />
              {[...Array(10)].map((_, i) => (
                <Float key={i} speed={2 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.8}>
                  <mesh position={[
                    Math.sin(i * 0.6) * 4,
                    Math.cos(i * 0.6) * 3,
                    Math.sin(i * 0.3) * 2
                  ]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#FC8181" emissive="#FC8181" emissiveIntensity={1} />
                  </mesh>
                </Float>
              ))}
            </group>
          )}
          
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Hero Section - Movie Opening */}
      <AnimatePresence mode="wait">
        {currentChapter === 0 && !showMessage && (
          <motion.div
            key="hero"
            className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
          >
            {/* Cinematic Title Reveal */}
            <motion.div
              className="text-center space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                  A Journey
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                  of Friendship
                </h2>
              </motion.div>

              <motion.div
                className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 1, delay: 2.5 }}
              />

              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1.5 }}
              >
                Two years of memories, laughter, and a bond that changed everything
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4, duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => handleChapterChange(1)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-12 py-6 shadow-2xl shadow-purple-500/50"
                >
                  Begin the Story
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Chapters - Cinematic Scene Transitions */}
      <AnimatePresence mode="wait">
        {currentChapter > 0 && currentChapter <= chapters.length && (
          <motion.div
            key={`chapter-${currentChapter}`}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10 chapter-content"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="max-w-4xl mx-auto backdrop-blur-2xl bg-black/30 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${chapters[currentChapter - 1].color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {(() => {
                    const Icon = chapters[currentChapter - 1].icon
                    return <Icon className="w-10 h-10" />
                  })()}
                </motion.div>
                <div>
                  <motion.p
                    className="text-sm text-gray-400 uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {chapters[currentChapter - 1].subtitle}
                  </motion.p>
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {chapters[currentChapter - 1].title}
                  </motion.h2>
                </div>
              </motion.div>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {chapters[currentChapter - 1].description}
              </motion.p>

            {/* Chapter-specific content with cinematic animations */}
            {currentChapter === 2 && (
              <motion.div
                className="grid grid-cols-3 gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, staggerChildren: 0.2 }}
              >
                {[
                  { icon: Camera, label: "Photography" },
                  { icon: Globe, label: "Traveling" },
                  { icon: Trophy, label: "Foosball" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10"
                    initial={{ opacity: 0, y: 30, rotateY: -20 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.1, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  >
                    <item.icon className="w-10 h-10" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {currentChapter === 4 && (
              <motion.div
                className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 mb-8 border border-orange-500/30 shadow-xl"
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Code className="w-8 h-8 text-orange-400" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold">The Hackathon Moment</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Working side by side, sharing ideas, late nights coding... That's when I knew our friendship was something special.
                </p>
              </motion.div>
            )}

            {currentChapter === 5 && (
              <motion.div
                className="space-y-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { icon: Video, text: "Countless Teams video calls...", delay: 1.2 },
                  { icon: Heart, text: "A bond that feels like family...", delay: 1.4 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-6 rounded-xl bg-pink-500/10 border border-pink-500/30"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <item.icon className="w-10 h-10 text-pink-400" />
                    <p className="text-gray-200 text-lg">{item.text}</p>
                  </motion.div>
                ))}
                
                <motion.div
                  className="text-center p-8 rounded-xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/50 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-3xl font-semibold text-pink-200">You're like a sister to me</p>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {currentChapter > 1 && (
                <Button
                  variant="outline"
                  onClick={() => handleChapterChange(currentChapter - 1)}
                  className="backdrop-blur bg-white/10 border-white/20 hover:bg-white/20 transition-all"
                  disabled={isTransitioning}
                >
                  Previous
                </Button>
              )}
              {currentChapter < chapters.length && (
                <Button
                  onClick={() => handleChapterChange(currentChapter + 1)}
                  className={`bg-gradient-to-r ${chapters[currentChapter - 1].color} hover:opacity-90 transition-all shadow-lg`}
                  disabled={isTransitioning}
                >
                  Next Chapter
                </Button>
              )}
              {currentChapter === chapters.length && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Button
                    onClick={() => {
                      setIsTransitioning(true)
                      gsap.to(".chapter-content", {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.6,
                        onComplete: () => {
                          setShowMessage(true)
                          setIsTransitioning(false)
                        }
                      })
                    }}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 shadow-xl shadow-pink-500/50"
                    disabled={isTransitioning}
                  >
                    Final Message ❤️
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Cinematic Progress indicator */}
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 backdrop-blur-lg bg-black/30 px-6 py-3 rounded-full border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            {chapters.map((_, i) => (
              <motion.div
                key={i}
                className={`rounded-full transition-all cursor-pointer ${
                  i + 1 === currentChapter
                    ? "bg-white w-12 h-3"
                    : i + 1 < currentChapter
                    ? "bg-white/50 w-3 h-3"
                    : "bg-white/20 w-3 h-3"
                }`}
                onClick={() => !isTransitioning && handleChapterChange(i + 1)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Final Message - Grand Finale */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            key="finale"
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="max-w-3xl mx-auto backdrop-blur-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl p-12 border border-pink-500/30 text-center shadow-2xl"
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 150 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-24 h-24 text-pink-400 mx-auto mb-8 drop-shadow-2xl" />
                </motion.div>
              </motion.div>
              
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                A Message to My Sister
              </motion.h2>
              
              <motion.div
                className="space-y-8 text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                {[
                  "Even though you may never know how I truly feel, I want you to know that these two years have meant everything to me.",
                  "From the first day we met to every moment we've shared - the laughs, the adventures, the late-night calls - you've become such an important part of my life.",
                  "You'll always be my sister, whether you know it or not.",
                  "Thank you for being you. Thank you for every memory. Thank you for being in my life."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + i * 0.3, duration: 0.8 }}
                    className={i === 2 ? "text-pink-300 font-semibold text-2xl md:text-3xl" : ""}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
              >
                <motion.p
                  className="text-gray-400 italic text-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                >
                  "Some bonds don't need words, they just need to be felt."
                </motion.p>
                <motion.p
                  className="text-white text-xl font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5, duration: 0.6 }}
                >
                  With all my heart ❤️
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-10 flex gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
              >
                <Button
                  onClick={() => {
                    gsap.to("body", {
                      opacity: 0,
                      duration: 0.8,
                      onComplete: () => {
                        setShowMessage(false)
                        setCurrentChapter(0)
                        gsap.to("body", { opacity: 1, duration: 0.8 })
                      }
                    })
                  }}
                  variant="outline"
                  className="backdrop-blur bg-white/10 border-white/20 hover:bg-white/20"
                >
                  Relive the Journey
                </Button>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                    Return Home
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Hearts Animation */}
            <div className="fixed inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 100,
                    opacity: 0
                  }}
                  animate={{
                    y: -100,
                    opacity: [0, 1, 1, 0],
                    x: Math.random() * window.innerWidth
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear"
                  }}
                >
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
