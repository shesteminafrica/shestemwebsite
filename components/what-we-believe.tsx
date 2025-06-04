"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { RevealWrapper } from "./reveal-wrapper"
import { BarChart3, Eye, Target } from "lucide-react"
import { useTranslation } from "@/contexts/language-context"

interface BeliefSection {
  id: string
  name: string
  title: string
  description: string
  icon: React.ReactNode
  image: string
}

export function WhatWeBelieve() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("mission")

  const beliefSections: BeliefSection[] = [
    {
      id: "mission",
      name: t("about.beliefs.mission.name"),
      title: t("about.beliefs.mission.title"),
      description: t("about.beliefs.mission.description"),
      icon: <BarChart3 size={20} />,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "values",
      name: t("about.beliefs.values.name"),
      title: t("about.beliefs.values.title"),
      description: t("about.beliefs.values.description"),
      icon: <Target size={20} />,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "vision",
      name: t("about.beliefs.vision.name"),
      title: t("about.beliefs.vision.title"),
      description: t("about.beliefs.vision.description"),
      icon: <Eye size={20} />,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const currentSection = beliefSections.find((section) => section.id === activeSection) || beliefSections[0]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="text-center mb-12" width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{t("about.beliefs.title")}</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2">
            {beliefSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-6 pl-1 pr-6 py-1 rounded-full font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div className="bg-white rounded-full p-4 text-black">
                  {section.icon}
                </div>
                {section.name}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={0.3} direction="up">
          <div className="grid grid-cols-1 lg:flex lg:justify-between gap-12 items-center">
            {/* Left Content */}
            <div className=" max-w-[471px]">
              <div className="flex flex-col gap-4 mb-6">
                <span className="bottom-0 left-0 p-7 rounded-full bg-gray-100 font-bold text-sm w-fit">01</span>
                <h3 className="text-4xl font-medium text-pink-600">{currentSection.title}</h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">{currentSection.description}</p>
            </div>

            <div className="hidden lg:block h-[65%] my-auto mx-8 w-[1px] bg-red-400"></div>

            {/* Right Image */}
            <div className="relative w-full">
              <Image
                src={"/h2.png"}
                alt={currentSection.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
