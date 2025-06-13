"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { Button3 } from "./button"

export function ActivitiesSection() {
  const { t } = useTranslation()

  // Définir les tableaux directement dans le composant
  const networkingItems = [
    t("activities.networking.items.0"),
    t("activities.networking.items.1"),
    t("activities.networking.items.2"),
  ]

  const coachingItems = [
    t("activities.coaching.items.0"),
    t("activities.coaching.items.1"),
    t("activities.coaching.items.2"),
    t("activities.coaching.items.3"),
  ]

  const grantItems = [
    t("activities.grant_advice.items.0"),
    t("activities.grant_advice.items.1"),
    t("activities.grant_advice.items.2"),
    t("activities.grant_advice.items.3"),
  ]

  return (
    <section className="w-full py-8 md:py-16" id="activities">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("activities.title")}</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 md:gap-12">
          <RevealWrapper delay={0.3} direction="left" width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-4xl px-4 md:px-6 py-6 md:py-10">
              <div className="">
                <Image
                  src="/h4.png"
                  alt="Networking event"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 md:gap-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">{t("activities.networking.title")}</h3>
                <ul className="space-y-2 md:space-y-4">
                  {networkingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3 max-w-lg">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button3
                  value="activities.knowMore"
                  link='/about'
                />
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="right" width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-4xl px-4 md:px-6 py-6 md:py-10">
              <div className="flex flex-col justify-center row-start-2 md:row-start-1 gap-3 md:gap-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">{t("activities.coaching.title")}</h3>
                <ul className="space-y-2 md:space-y-4">
                  {coachingItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3 max-w-lg">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button3
                  value={t("activities.knowMore")}
                  link='/about'
                />
              </div>
              <div className="">
                <Image
                  src="/h2.png"
                  alt="Coaching session"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.3} direction="left" width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-4xl px-4 md:px-6 py-6 md:py-10">
              <div className="">
                <Image
                  src="/h3.png"
                  alt="Networking event"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 md:gap-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">{t("activities.grant_advice.title")}</h3>
                <ul className="space-y-2 md:space-y-4">
                  {grantItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3 max-w-lg">
                      <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button3 value="activities.knowMore"
                  link='/about' />
              </div>
            </div> 
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
