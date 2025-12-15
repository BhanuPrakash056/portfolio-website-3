"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function CloudParticle({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.6} />
      </mesh>
    </Float>
  )
}

function CodeSymbol({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh position={position}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

export function Scene3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Don't render 3D scene on mobile for better performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main animated sphere */}
        <AnimatedSphere />
        
        {/* Cloud particles for cloud engineer theme */}
        {[...Array(8)].map((_, i) => (
          <CloudParticle
            key={`cloud-${i}`}
            position={[
              Math.sin(i * 0.8) * 4,
              Math.cos(i * 0.8) * 3,
              Math.sin(i * 0.4) * 2 - 3
            ]}
          />
        ))}
        
        {/* Code symbols */}
        {[...Array(6)].map((_, i) => (
          <CodeSymbol
            key={`code-${i}`}
            position={[
              Math.cos(i * 1.2) * 3.5,
              Math.sin(i * 1.2) * 2.5,
              Math.cos(i * 0.6) * 2 - 2
            ]}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
