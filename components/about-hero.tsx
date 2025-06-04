"use client"

import Image from "next/image"
import { RevealWrapper } from "./reveal-wrapper"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/contexts/language-context"
import { Button3 } from "./button"

export function AboutHero() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}   
          <div>
            <RevealWrapper delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t("about.hero.title")}
              </h1>
            </RevealWrapper>

            <RevealWrapper delay={0.3} direction="up">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("about.hero.description")}</p>
            </RevealWrapper>

            <RevealWrapper delay={0.5} direction="up">
              <Button3 value="about.hero.button" />
            </RevealWrapper>
          </div>

          {/* Right Image */}
          <RevealWrapper delay={0.4} direction="right">
            <div className="relative">
              <Image
                src="/a1.png"
                alt="African women in STEM"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
