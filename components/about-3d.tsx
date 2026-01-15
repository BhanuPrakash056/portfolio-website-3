"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useRef, useState, useEffect, useMemo, memo } from "react"
import * as THREE from "three"

const FloatingShape = memo(
  ({
    position,
    color,
    shape = "cube",
  }: {
    position: [number, number, number]
    color: string
    shape?: "cube" | "sphere" | "octahedron" | "dodecahedron"
  }) => {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
      if (meshRef.current) {
        const time = state.clock.getElapsedTime()
        meshRef.current.rotation.x = time * 0.2 + position[0]
        meshRef.current.rotation.y = time * 0.3 + position[1]
        meshRef.current.position.y = position[1] + Math.sin(time + position[0] * 2) * 0.1
      }
    })

    const geometry = useMemo(() => {
      switch (shape) {
        case "sphere":
          return <sphereGeometry args={[0.25, 32, 32]} />
        case "octahedron":
          return <octahedronGeometry args={[0.3]} />
        case "dodecahedron":
          return <dodecahedronGeometry args={[0.25]} />
        default:
          return <boxGeometry args={[0.3, 0.3, 0.3]} />
      }
    }, [shape])

    return (
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef} position={position} castShadow>
          {geometry}
          <meshPhysicalMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>
    )
  }
)

FloatingShape.displayName = "FloatingShape"

const WireframeTorus = memo(() => {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      torusRef.current.rotation.z = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={torusRef} position={[0, 0, -1]}>
        <torusGeometry args={[0.7, 0.12, 24, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          wireframe
          emissive="#6366f1"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
})

WireframeTorus.displayName = "WireframeTorus"

const DistortedSphere = memo(() => {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere args={[0.4, 64, 64]} position={[0, 0, -0.5]}>
        <MeshDistortMaterial
          color="#a78bfa"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
})

DistortedSphere.displayName = "DistortedSphere"

const Particles = memo(() => {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(150)
    for (let i = 0; i < 50; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
})

Particles.displayName = "Particles"

const Scene = memo(() => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#6366f1" castShadow />
      <pointLight position={[-5, -3, -2]} intensity={0.6} color="#a78bfa" />
      <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#60a5fa" />

      <FloatingShape position={[-1, 0.6, 0]} color="#6366f1" shape="octahedron" />
      <FloatingShape position={[1, 0.4, 0.3]} color="#60a5fa" shape="dodecahedron" />
      <FloatingShape position={[0.3, -0.7, 0.5]} color="#a78bfa" shape="sphere" />
      <FloatingShape position={[-0.5, -0.3, -0.2]} color="#818cf8" shape="cube" />

      <WireframeTorus />
      <DistortedSphere />
      <Particles />
    </>
  )
})

Scene.displayName = "Scene"

export function About3D() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Don't render on mobile for better performance or during SSR
  if (!mounted || isMobile) return null

  return (
    <div className="pointer-events-none absolute right-0 top-0 hidden h-[500px] w-[500px] opacity-50 md:block">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
