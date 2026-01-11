"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

function FloatingCube({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
    </Float>
  )
}

export function About3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Don't render on mobile for better performance
  if (isMobile) return null

  return (
    <div className="pointer-events-none absolute top-0 right-0 hidden h-96 w-96 opacity-40 md:block">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 2]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#6366f1" />

        <FloatingCube position={[-0.8, 0.5, 0]} color="#6366f1" />
        <FloatingCube position={[0.8, 0.5, 0]} color="#60a5fa" />
        <FloatingCube position={[0, -0.5, 0]} color="#a78bfa" />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
          <mesh position={[0, 0, -1]}>
            <torusGeometry args={[0.6, 0.15, 16, 100]} />
            <meshStandardMaterial color="#818cf8" wireframe />
          </mesh>
        </Float>
      </Canvas>
    </div>
  )
}
