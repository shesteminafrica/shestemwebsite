"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { RevealWrapper } from "./reveal-wrapper"

interface AnimatedStatCardProps {
  targetNumber: number
  suffix?: string
  label: string
  icon: React.ReactNode
  index: string
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedStatCard({
  targetNumber,
  suffix = "",
  index,
  label,
  icon,
  delay = 0,
  duration = 2000,
  className = "",
}: AnimatedStatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const steps = 60
        const increment = targetNumber / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= targetNumber) {
            setCount(targetNumber)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, targetNumber, delay, duration])

  return (
    <RevealWrapper delay={delay / 1000} direction="up" width="100%" className={className}>
      <div
        ref={ref}
        className="bg-[#F8F8F8] rounded-2xl p-8 h-64 relative hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between"
      >
        {/* Index and Icon */}
        <div className="flex justify-between items-center mb-8">
          {/* <span className="text-gray-400 text-sm font-medium">{index}</span> */}
          {/* Main Number with Animation */}
          <div className="mb-4">
            <span className="text-5xl md:text-6xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
              {count}
            </span>
            {suffix && <span className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-pink-600">{suffix}</span>}
          </div>
          <div className="text-gray-600 group-hover:text-pink-600 rounded-full bg-pink-200 p-4 transition-colors duration-300">{icon}</div>
        </div>

        <div className="flex justify-between items-center">

          {/* Label */}
          <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed flex items-center gap-6"><span className="size-2 bg-[#9C1145] rounded-full"></span>{label}</p>
          <p className="text-[#E7E7E7] text-xl md:text-3xl">
            {index}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-pink-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </RevealWrapper>
  )
}
