"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full bg-[url('../public/hero4.png')] bg-cover bg-no-repeat py-8 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 md:top-20 right-10 md:right-20 text-pink-400 opacity-30">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 md:bottom-20 left-10 md:left-40 text-pink-400 opacity-30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-20 md:top-40 left-10 md:left-20 text-pink-400 opacity-30">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 md:px-8 flex flex-col">
        <div className="md:w-xl text-white mb-6 md:mb-10">
          <RevealWrapper delay={0.1} direction="left">
            <div className="bg-[#F2A0BF47] text-sm text-white px-3 md:px-4 flex gap-[10px] items-center py-1 md:py-2 rounded-full mb-3 md:mb-4">
              {t("hero.tagline")}
              <Link href="#events" className="bg-white rounded-full px-4 py-2 text-[#880F3C] cursor-pointer">
                Next Event !
              </Link>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="up">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-10 md:leading-20">{t("hero.title")}</h1>
          </RevealWrapper>

          <RevealWrapper delay={0.5} direction="up">
            <p className="text-base md:text-lg mb-4 md:mb-8 text-pink-100">{t("hero.description")}</p>
          </RevealWrapper>

          <RevealWrapper delay={0.7} direction="up">
            <button className="bg-white text-pink-600 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium flex items-center gap-2 hover:bg-pink-100 transition-colors">
              {t("hero.button")}
              <div className="rounded-full bg-pink-600 p-1 md:p-2">
                <MoveUpRight className="text-white" />
              </div>
            </button>
          </RevealWrapper>
        </div>

        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-12 flex justify-center">
              <Image
                src={"/VectorEducation.svg"}
                alt=""
                height={58}
                width={72}
                className="w-10 md:w-14 h-auto"
              />
            </div>
            <div className="flex flex-col text-white text-base md:text-lg lg:text-xl font-medium">
              {t("hero.education")}
              <span>SDG 4</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-12 flex justify-center">
              <Image
                src={"/VectorSexe.svg"}
                alt=""
                height={58}
                width={72}
                className="w-8 md:w-10 h-auto"
              />
            </div>
            <div className="flex flex-col text-white text-base md:text-lg lg:text-xl font-medium">
              {t("hero.egality")}
              <span>SDG 5</span>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-12 flex justify-center">
              <Image
                src={"/Group.svg"}
                alt=""
                height={58}
                width={72}
                className="w-10 md:w-12 h-auto"
              />
            </div>
            <div className="flex flex-col text-white text-base md:text-lg lg:text-xl font-medium">
              {t("hero.inegality")}
              <span>SDG 10</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
