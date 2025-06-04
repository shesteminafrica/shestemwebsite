"use client"
import { AnimatedStatCard } from "./animated-stat-card"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { Users, Target, Award } from "lucide-react"

export function AboutStats() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <RevealWrapper delay={0.1} direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("about.stats.title")}</h2>
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
