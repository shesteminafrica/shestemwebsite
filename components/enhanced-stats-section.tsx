"use client"

import { StatCard } from "./stat-card"
import { RevealWrapper } from "./reveal-wrapper"
// import { useTranslation } from "@/contexts/language-context"
import { Calendar, Users, Award, Globe, BookOpen, Target, Heart, TrendingUp } from "lucide-react"

export function EnhancedStatsSection() {
  // const { t } = useTranslation()

  const stats = [
    {
      number: "16",
      suffix: "+",
      label: "Years of Experience",
      icon: <Calendar size={24} />,
      index: "001",
    },
    {
      number: "200",
      suffix: "+",
      label: "Active Women",
      icon: <Users size={24} />,
      index: "002",
    },
    {
      number: "50",
      suffix: "+",
      label: "Success Stories",
      icon: <Award size={24} />,
      index: "003",
    },
    {
      number: "15",
      suffix: "+",
      label: "Countries Reached",
      icon: <Globe size={24} />,
      index: "004",
    },
    {
      number: "100",
      suffix: "+",
      label: "Opportunities Created",
      icon: <Target size={24} />,
      index: "005",
    },
    {
      number: "25",
      suffix: "+",
      label: "Partner Organizations",
      icon: <Heart size={24} />,
      index: "006",
    },
    {
      number: "500",
      suffix: "+",
      label: "Workshop Hours",
      icon: <BookOpen size={24} />,
      index: "007",
    },
    {
      number: "85",
      suffix: "%",
      label: "Career Advancement Rate",
      icon: <TrendingUp size={24} />,
      index: "008",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <RevealWrapper delay={0.1} direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These numbers represent the real impact we&apos;ve made in empowering African women in STEM fields. Each
            statistic tells a story of transformation, growth, and success.
          </p>
        </RevealWrapper>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={stat.index}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <RevealWrapper delay={0.8} direction="up" className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Be Part of Our Success Story?</h3>
            <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
              Join thousands of African women who are already transforming their careers in STEM. Your journey to
              success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-200">
                Join Our Community
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
