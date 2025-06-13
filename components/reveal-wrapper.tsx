"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation, type Variant } from "framer-motion"

interface RevealWrapperProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  className?: string
}

export function RevealWrapper({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  once = true,
  className = "",
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Set initial and animate variants based on direction
  const getDirectionalVariants = () => {
    const variants: { hidden: Variant; visible: Variant } = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    }

    switch (direction) {
      case "up":
        variants.hidden = { ...variants.hidden, y: distance }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "down":
        variants.hidden = { ...variants.hidden, y: -distance }
        variants.visible = { ...variants.visible, y: 0 }
        break
      case "left":
        variants.hidden = { ...variants.hidden, x: distance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "right":
        variants.hidden = { ...variants.hidden, x: -distance }
        variants.visible = { ...variants.visible, x: 0 }
        break
      case "none":
        // Just opacity animation, no movement
        break
    }

    return variants
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
      <motion.div initial="hidden" ref={ref} style={{ width }} animate={controls} variants={getDirectionalVariants()} className={className}>
        {children}
      </motion.div>
  )
}
