"use client"

import { useScroll, useTransform, MotionValue } from "framer-motion"
import { RefObject } from "react"

export function useParallax(
  ref: RefObject<HTMLElement>,
  distance: number = 100
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  return useTransform(scrollYProgress, [0, 1], [-distance, distance])
}
