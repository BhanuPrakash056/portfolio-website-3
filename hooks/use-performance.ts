"use client"

import { useState, useEffect } from "react"

interface PerformanceConfig {
  reducedMotion: boolean
  enableHeavyAnimations: boolean
  enable3D: boolean
  enableParticles: boolean
  deviceTier: "high" | "mid" | "low"
}

/**
 * Hook to detect device capabilities and user preferences
 * Adapts animations and effects based on:
 * - prefers-reduced-motion setting
 * - Device memory
 * - Hardware concurrency (CPU cores)
 * - Connection speed
 */
export function usePerformance(): PerformanceConfig {
  const [config, setConfig] = useState<PerformanceConfig>({
    reducedMotion: false,
    enableHeavyAnimations: true,
    enable3D: true,
    enableParticles: true,
    deviceTier: "high",
  })

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Detect device tier based on hardware
    let deviceTier: "high" | "mid" | "low" = "high"

    // Check device memory (if available)
    const deviceMemory = (navigator as { deviceMemory?: number }).deviceMemory
    const hardwareConcurrency = navigator.hardwareConcurrency || 4

    // Check connection type
    const connection = (navigator as { connection?: { effectiveType?: string } }).connection
    const effectiveType = connection?.effectiveType || "4g"

    // Determine device tier
    if (deviceMemory && deviceMemory < 4) {
      deviceTier = "low"
    } else if (hardwareConcurrency < 4 || effectiveType === "3g" || effectiveType === "2g") {
      deviceTier = "mid"
    } else if (deviceMemory && deviceMemory >= 8 && hardwareConcurrency >= 8) {
      deviceTier = "high"
    } else {
      deviceTier = "mid"
    }

    // Mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile && deviceTier === "high") {
      deviceTier = "mid" // Downgrade mobile devices by default to save battery
    }

    // Calculate performance config
    const newConfig: PerformanceConfig = {
      reducedMotion: prefersReducedMotion,
      enableHeavyAnimations: !prefersReducedMotion && deviceTier !== "low",
      enable3D: !prefersReducedMotion && deviceTier === "high",
      enableParticles: !prefersReducedMotion && deviceTier !== "low",
      deviceTier,
    }

    setConfig(newConfig)

    // Listen for changes to reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setConfig((prev) => ({
        ...prev,
        reducedMotion: e.matches,
        enableHeavyAnimations: !e.matches && prev.deviceTier !== "low",
        enable3D: !e.matches && prev.deviceTier === "high",
        enableParticles: !e.matches && prev.deviceTier !== "low",
      }))
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return config
}
