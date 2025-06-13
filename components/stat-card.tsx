"use client"

import type React from "react"
import { RevealWrapper } from "./reveal-wrapper"

interface StatCardProps {
  number: string
  suffix?: string
  label: string
  icon: React.ReactNode
  index: string
  delay?: number
  className?: string
}

export function StatCard({ number, suffix = "", label, icon, index, delay = 0, className = "" }: StatCardProps) {
  return (
    <RevealWrapper delay={delay} direction="up" className={className}>
      <div className="bg-gray-50 rounded-2xl p-8 text-center relative hover:shadow-lg transition-all duration-300 group">
        {/* Index and Icon */}
        <div className="flex justify-between items-start mb-8">
          <span className="text-gray-400 text-sm font-medium">{index}</span>
          <div className="text-gray-600 group-hover:text-pink-600 transition-colors duration-300">{icon}</div>
        </div>

        {/* Main Number */}
        <div className="mb-4">
          <span className="text-5xl md:text-6xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
            {number}
          </span>
          {suffix && <span className="text-3xl md:text-4xl font-bold text-pink-600">{suffix}</span>}
        </div>

        {/* Label */}
        <p className="text-gray-700 font-medium text-lg leading-relaxed">{label}</p>
      </div>
    </RevealWrapper>
  )
}
