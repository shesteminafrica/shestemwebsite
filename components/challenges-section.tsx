"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { Button2 } from "./button"

export function ChallengesSection() {
  const { t, language } = useTranslation()

  const  challenges = [
    {
      title: t("challenges.imbalance.title"),
      percentage: "35%",
      description: {
        fr: [
          <ul>
            <li>
               • Seulement <span className="font-semibold">35% des étudiants africains</span> poursuivent des études en STEM, contre 50% dans les autres régions du monde.
            </li>
            <li>
               • Seulement <span className="font-semibold">7% des ingénieurs en électricité et électronique sont des femmes</span>. En ce qui concerne les professions liées à l'ingénierie.
            </li>
            <li>
               • Seulement <span className="font-semibold">70 chercheurs pour 1 million d’habitants en Afrique</span>, contre 1 680 chercheurs pour 1 million d’habitants en Europe.
            </li>
          </ul>
        ],
        en: [
          <ul>
            <li>
              • Only <span className="font-semibold">35% of African students</span> pursue studies in STEM, compared to 50% in other regions of the world.
            </li>
            <li>
              • Only  <span className="font-semibold">7% of electrical and electronics engineers are women</span>. When it comes to engineering-related professions.
            </li>
            <li>
              • Only <span className="font-semibold">70 researchers per 1 million inhabitants in Africa</span>, compared with 1,680 researchers per 1 million inhabitants in Europe.
            </li>
          </ul>
        ]
      },
    },
    {
      title: t("challenges.nonValuation.title"),
      percentage: "30%",
      description: {
        fr: [
          <ul>
            <li>
               • Les femmes ne représentent qu'<span className="font-semibold">un tiers des travailleurs</span> dans les emplois STEM.
            </li>
            <li>
               • Il y a une <span className="font-semibold">faible parité des genres</span> dans les domaines STEM avec seulement <span className="font-semibold">30% de femmes</span> dans les pays africains.
            </li>
            <li>
               • Une étude de Microsoft montre que seulement <span className="font-semibold">13%</span> des femmes seraient intéressées par une carrière dans les STIM <span className="font-semibold">sans mentor</span>, alors que <span className="font-semibold">18 %</span> admettent qu'elles seraient plus enclines à poursuivre une carrière dans les STIM <span className="font-semibold">avec un mentor</span>.
            </li>
          </ul>
        ],
        en: [
          <ul>
            <li>
               • Women represent only <span className="font-semibold">1/3 of workers</span> in STEM Jobs.
            </li>
            <li>
               • There is a <span className="font-semibold">low gender parity</span> in STEM fields with only <span className="font-semibold">30% of women</span> in African countries.
            </li>
            <li>
               • A study by Microsoft shows that only <span className="font-semibold">13%</span> of women would be interested in moving into STEM <span className="font-semibold">without a mentor</span>, while <span className="font-semibold">18%</span> admit they would be more inclined to pursue a STEM career <span className="font-semibold">with a mentor</span>.
            </li>
          </ul>
        ]
      }
    },
    {
      title: t("challenges.scarcity.title"),
      percentage: "165K+",
      description: {
        fr: [
          <p key={"csd"}>Selon le gouvernement américain, il y aura <span className="font-semibold">une pénurie de plus de 165 000 professionnels STEM d&apos;ici 2029</span>. Plusieurs facteurs contribuent à cette pénurie, notamment le manque d&apos;étudiantes en STEM.</p>
        ],
        en: [
          <p key={"csd"}>According to the US government, there will be a <span className="font-semibold">shortage of over 165,000 STEM professionals by 2029</span>. A number of factors are contributing to this shortage, including the lack of female STEM students.</p>
        ]
      }
    },
    {
      title: t("challenges.lossOfMoney.title"),
      percentage: "$30,000B",
      description: {
        fr: [
          <p key={"clomd"}>La Banque mondiale a rapporté que <span className="font-semibold">les pertes de productivité et de revenus sur la durée de vie</span> pour les filles ayant <span className="font-semibold">moins de 12 ans d&apos;éducation</span> sont estimées entre <span className="font-semibold">15 et 30 milliards</span> de dollars à l&apos;échelle mondiale.</p>
        ],
        en: [
          <p key={"clomd"}>The world bank reported that the <span className="font-semibold">lifetime productivity and income losses</span> for girls with <span className="font-semibold">less than 12 years of education</span> are estimated between <span className="font-semibold">$15 trillion</span> and <span className="font-semibold">$30 trillion</span> globally.</p>
        ]
      }
    },
  ]

  return (
    <section className="w-full max-w-[100rem] mx-auto py-8 md:py-16">
      <div className="mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center">{t("challenges.title")}</h2>
        </RevealWrapper>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 md:max-h-[700px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full">
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
                  <ul className="">
                    {challenge.description[language].map((item, index) => (
                      <li key={`${index}d`} className="text-xs md:text-sm text-gray-600 text-center w-64 md:w-72 mx-auto ">
                          {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="hidden xl:flex items-center justify-center max-w-xl relative w-full">
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
