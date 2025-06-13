"use client"

import { RevealWrapper } from "./reveal-wrapper"
// import { useTranslation } from "@/contexts/language-context"

export function CHeroSection({value}: {value: string}) {
  // const { t } = useTranslation()

  return (
    <section className="w-full bg-[url('../public/ch.png')] bg-cover bg-no-repeat  py-16 md:py-24 relative overflow-hidden h-[500px] flex justify-center items-center">

      <div className="max-w-[100rem] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <RevealWrapper delay={0.1} direction="left" className="">
            <div className="inline-block text-white text-3xl md:text-6xl px-3 font-medium py-3 rounded-full mb-4">
              {/* {t("hero.tagline")} */}
              {value}
            </div>
          </RevealWrapper>
      </div>
    </section>
  )
}
