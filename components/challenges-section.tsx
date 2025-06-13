"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { Button2 } from "./button"

export function ChallengesSection() {
  const { t } = useTranslation()

  const  challenges = [
    {
      title: t("challenges.imbalance.title"),
      percentage: "35%",
      description: [t("challenges.imbalance.description.0"),t("challenges.imbalance.description.1")],
    },
    {
      title: t("challenges.nonValuation.title"),
      percentage: "30%",
      description: [t("challenges.nonValuation.description.0"),t("challenges.nonValuation.description.1"),t("challenges.nonValuation.description.2"),],
    },
    {
      title: t("challenges.scarcity.title"),
      percentage: "165K+",
      description: [t("challenges.scarcity.description")],
    },
    {
      title: t("challenges.lossOfMoney.title"),
      percentage: "$30,000B",
      description: [t("challenges.lossOfMoney.description")],
    },
  ]

  return (
    <section className="w-full max-w-[100rem] mx-auto py-8 md:py-16">
      <div className="mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center">{t("challenges.title")}</h2>
        </RevealWrapper>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 md:max-h-[700px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {challenges.map((challenge, index) => (
              <RevealWrapper key={`${index}oc`} delay={0.2 + index * 0.1} direction="up" width="100%" className="size-full bg-white rounded-2xl">
                <div className="rounded-xl p-4 md:p-8 flex flex-col gap-2 md:gap-4 size-full">
                  <div className="flex flex-col gap-3 md:gap-5">
                    <div className="flex items-center gap-2 md:gap-4">
                      <Image
                        src="/trait1.svg"
                        alt="African woman in science lab"
                        width={35}
                        height={10}
                        className="rounded-lg w-full"
                      />
                      <span className="text-gray-900 uppercase text-lg md:text-xl font-medium min-w-max">{challenge.title}</span>
                      <Image
                        src="/trait2.svg"
                        alt="African woman in science lab"
                        width={35}
                        height={10}
                        className="rounded-lg w-full"
                      />
                    </div>
                    <div className="text-4xl md:text-6xl font text-center text-pink-600 mb-1 md:mb-2">{challenge.percentage}</div>
                  </div>
                  <ul>
                    {challenge.description.map((item, index) => (
                      <li key={`${index}d`} className="text-xs md:text-sm text-gray-600 text-center w-64 md:w-72 mx-auto list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="hidden sm:flex items-center justify-center max-w-xl relative w-full">
            <RevealWrapper delay={0.6} direction="left" width="100%" className="size-full">
              <div className="relative size-full">
                <Image
                  src="/h1.png"
                  alt="African woman in science lab"
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-full object-contain"
                />
                <div className="absolute -bottom-4 -left-4 text-pink-400 opacity-50">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper delay={0.7} direction="up" className="mt-8 md:mt-16">
          <div className="bg-[url('../public/oc1.png')] bg-cover bg-no-repeat text-white p-4 md:p-8 lg:p-12 rounded-4xl text-center relative overflow-hidden flex flex-col items-center w-full">
            <div className="absolute top-4 right-4 text-pink-400 opacity-30">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-lg md:text-3xl lg:text-4xl lg:py-4 lg:px-32 font-medium mb-4 md:mb-6 flex justify-center items-center">
              {t("challenges.blogCta")}
            </h3>
            <Button2 value={"challenges.visitOurBlog"} link="/blog" />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
