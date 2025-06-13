"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { Button2 } from "./button"

export function ContributeSection() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-8 md:py-14 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center rounded-4xl p-8 md:p-15 bg-[url('../public/frame63.png')] bg-top bg-cover bg-no-repeat">
          <RevealWrapper delay={0.1} direction="left">
            <div className="s">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6 w-52">{t("contribute.title")}</h2>
              <p className="text-base md:text-lg text-pink-100 mb-4 md:mb-8 leading-6 md:leading-8">{t("contribute.description")}</p>
              <Button2 value="contribute.button" />
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="right" width="100%">
            <div className="relative w-fit float-start md:float-end">
              <Image
                src="/icon 1.svg"
                alt="Volunteer"
                width={145}
                height={400}
                className="rounded-lg"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
