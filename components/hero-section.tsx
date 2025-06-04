"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[url('../public/hero4.png')] bg-cover bg-no-repeat  py-16 md:py-24 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 right-20 text-pink-400 opacity-30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-40 text-pink-400 opacity-30">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-40 left-20 text-pink-400 opacity-30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-xl text-white mb-10 md:mb-0">
          <RevealWrapper delay={0.1} direction="left">
            <div className="inline-block bg-pink-500 text-white text-xs px-3  py-3 rounded-full mb-4">
              {t("hero.tagline")}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="up">
            <h1 className="text-4xl md:text-7xl lg:text-[84px] font-bold mb-6 leading-20">{t("hero.title")}</h1>
          </RevealWrapper>

          <RevealWrapper delay={0.5} direction="up">
            <p className="text-lg mb-8 text-pink-100">{t("hero.description")}</p>
          </RevealWrapper>

          <RevealWrapper delay={0.7} direction="up">
            <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-pink-100 transition-colors">
              {t("hero.button")}
              <div className="rounded-full bg-pink-600 p-2">
                <MoveUpRight className="text-white" />
              </div>
            </button>
          </RevealWrapper>
        </div>

        {/* <div className="md:w-1/2 flex justify-center">
          <RevealWrapper delay={0.5} direction="right">
            <div className="relative">
              <Image
                src="/placeholder.svg?key=q769k"
                alt="African woman in STEM"
                width={400}
                height={500}
                className="rounded-lg z-10 relative"
              />
            </div>
          </RevealWrapper>
        </div> */}
      </div>

      <div className="flex justify-between">
        .flex
      </div>
    </section>
  )
}
