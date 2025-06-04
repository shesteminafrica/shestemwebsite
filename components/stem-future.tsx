"use client"

import { useState } from "react"
import Image from "next/image"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"

export function StemFuture() {
  const { t } = useTranslation()
  const [activeField, setActiveField] = useState("biology")

  const stemFields = [
    {
      id: "biology",
      name: "Guide Industrie agroalimentaire",
      title: "Trouver sa voie dans l'industrie agroalimentaire quand on vient d'une filière STEM",
      description: "",
      details: [t("about.stemFields.biology.details.0"), t("about.stemFields.biology.details.1")],
      careers: t("about.stemFields.biology.careers"),
      image: "/h3.png",
    },
    {
      id: "chemistry",
      name: "Combattre le syndrome de l'imposteur",
      title: t("about.stemFields.chemistry.title"),
      description: t("about.stemFields.chemistry.description"),
      details: [t("about.stemFields.chemistry.details.0"), t("about.stemFields.chemistry.details.1")],
      careers: t("about.stemFields.chemistry.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "physics",
      name: "Apprendre le français ou l'anglais",
      title: t("about.stemFields.physics.title"),
      description: t("about.stemFields.physics.description"),
      details: [t("about.stemFields.physics.details.0"), t("about.stemFields.physics.details.1")],
      careers: t("about.stemFields.physics.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "geology",
      name: "Apprendre le français ou l'anglais",
      title: t("about.stemFields.geology.title"),
      description: t("about.stemFields.geology.description"),
      details: [t("about.stemFields.geology.details.0"), t("about.stemFields.geology.details.1")],
      careers: t("about.stemFields.geology.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "computer-science",
      name: "Apprendre le français ou l'anglais",
      title: t("about.stemFields.computerScience.title"),
      description: t("about.stemFields.computerScience.description"),
      details: [t("about.stemFields.computerScience.details.0"), t("about.stemFields.computerScience.details.1")],
      careers: t("about.stemFields.computerScience.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mathematics",
      name: "Apprendre le français ou l'anglais",
      title: t("about.stemFields.mathematics.title"),
      description: t("about.stemFields.mathematics.description"),
      details: [t("about.stemFields.mathematics.details.0"), t("about.stemFields.mathematics.details.1")],
      careers: t("about.stemFields.mathematics.careers"),
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const currentField = stemFields.find((field) => field.id === activeField) || stemFields[0]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-12" width="100%">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {/* {t("about.stemFields.title")} */}
            Build your Future
            </h2>

          {/* Tabs */}
          <div className="w-full flex justify-between gap-2 bg-white p-5 rounded-[60px]">
            {stemFields.map((field) => (
              <button
                key={field.id}
                onClick={() => setActiveField(field.id)}
                className={`px-5 py-4 rounded-full text-sm max-w-[199px] font-medium transition-all duration-200 ${
                  activeField === field.id
                    ? "bg-[#DF1862] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {field.name}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={0.3} direction="up" className="bg-white rounded-[60px]" width="100%">
          <div className="grid grid-cols-1 lg:flex gap-12 items-start lg:px-20 py-10 w-full">
            {/* Left Content */}
            <div className=" max-w-[471px]">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-4xl font-bold text-gray-900">{currentField.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{currentField.description}</p>

              <div className="space-y-4 mb-6">
                {currentField.details.map((detail, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">{currentField.careers}</p>
            </div>

            <div className="hidden lg:block h-[65%] my-auto mx-8 w-[1px] bg-red-400"></div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src={currentField.image || "/placeholder.svg"}
                alt={currentField.title}
                width={600}
                height={600}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
