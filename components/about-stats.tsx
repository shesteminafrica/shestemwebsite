"use client"
import { AnimatedStatCard } from "./animated-stat-card"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { Users, Target, Award } from "lucide-react"

export function AboutStats() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 bg-white rounded-[40px] py-14">
        <RevealWrapper delay={0.1} direction="up" className="mb-16" width="100%">
          <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-center">{t("about.stats.title")}</h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedStatCard
            targetNumber={200}
            suffix="+"
            label={t("about.stats.activeWomen")}
            icon={<Users size={24} />}
            index="001"
            delay={200}
            className="w-full"
          />
          <AnimatedStatCard
            targetNumber={10}
            suffix="+"
            label={t("about.stats.partners")}
            icon={<Target size={24} />}
            index="002"
            delay={400}
            className="w-full"
          />
          <AnimatedStatCard
            targetNumber={100}
            suffix="+"
            label={t("about.stats.opportunities")}
            icon={<Award size={24} />}
            index="003"
            delay={600}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
