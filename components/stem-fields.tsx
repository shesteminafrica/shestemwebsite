"use client"

import { useState } from "react"
import Image from "next/image"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"

export function StemFields() {
  const { t } = useTranslation()
  const [activeField, setActiveField] = useState("biology")

  const stemFields = [
    {
      id: "biology",
      name: t("about.stemFields.biology.name"),
      title: t("about.stemFields.biology.title"),
      description: t("about.stemFields.biology.description"),
      details: [t("about.stemFields.biology.details.0"), t("about.stemFields.biology.details.1")],
      careers: t("about.stemFields.biology.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "chemistry",
      name: t("about.stemFields.chemistry.name"),
      title: t("about.stemFields.chemistry.title"),
      description: t("about.stemFields.chemistry.description"),
      details: [t("about.stemFields.chemistry.details.0"), t("about.stemFields.chemistry.details.1")],
      careers: t("about.stemFields.chemistry.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "physics",
      name: t("about.stemFields.physics.name"),
      title: t("about.stemFields.physics.title"),
      description: t("about.stemFields.physics.description"),
      details: [t("about.stemFields.physics.details.0"), t("about.stemFields.physics.details.1")],
      careers: t("about.stemFields.physics.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "geology",
      name: t("about.stemFields.geology.name"),
      title: t("about.stemFields.geology.title"),
      description: t("about.stemFields.geology.description"),
      details: [t("about.stemFields.geology.details.0"), t("about.stemFields.geology.details.1")],
      careers: t("about.stemFields.geology.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "computer-science",
      name: t("about.stemFields.computerScience.name"),
      title: t("about.stemFields.computerScience.title"),
      description: t("about.stemFields.computerScience.description"),
      details: [t("about.stemFields.computerScience.details.0"), t("about.stemFields.computerScience.details.1")],
      careers: t("about.stemFields.computerScience.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mathematics",
      name: t("about.stemFields.mathematics.name"),
      title: t("about.stemFields.mathematics.title"),
      description: t("about.stemFields.mathematics.description"),
      details: [t("about.stemFields.mathematics.details.0"), t("about.stemFields.mathematics.details.1")],
      careers: t("about.stemFields.mathematics.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const currentField = stemFields.find((field) => field.id === activeField) || stemFields[0]

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-12" width="100%">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-center mb-8">{t("about.stemFields.title")}</h2>

          {/* Tabs */}
          <div className="w-full flex justify-between overflow-y-auto gap-2 bg-white p-5 rounded-[60px]">
            {stemFields.map((field) => (
              <button
                key={field.id}
                onClick={() => setActiveField(field.id)}
                className={`flex items-center justify-center min-w-[178px] min-h-[54px] rounded-full font-medium transition-all duration-200 ${
                  activeField === field.id
                    ? "bg-[#DF1862] text-white shadow-lg"
                    : "bg-[#F8F8F8] text-[#656565] hover:bg-gray-200"
                }`}
              >
                {field.name}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={0.3} direction="up" className="bg-white rounded-4xl lg:rounded-[60px]" width="100%">
          <div className="grid grid-cols-1 lg:flex gap-6 md:gap-12 items-start px-4 lg:px-10 md:px-20 py-6 md:py-10 w-full relative">
            {/* Left Content */}
            <div className="h-full max-w-[471px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-2 rounded-full bg-black" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{currentField.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base pl-5">{currentField.description}</p>

              <div className="space-y-4 mb-6 pl-5 text-sm md:text-base">
                {currentField.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed pl-5 text-sm md:text-base">{currentField.careers}</p>
            </div>

            <span className="absolute bottom-4 left-4 p-8 rounded-full bg-[#F8F8F8] font-bold text-sm">01</span>
            
            <div className="hidden lg:block h-[65%] my-auto mx-8 w-[1px] bg-red-400"></div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src={"/h2.png"}
                alt={currentField.title}
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
