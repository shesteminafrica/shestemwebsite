import { AboutHero } from "@/components/about-hero"
import { AboutStats } from "@/components/about-stats"
import { CHeroSection } from "@/components/common-hero"
import { JoinUsSection } from "@/components/join-us-section"
import { StemFields } from "@/components/stem-fields"
import { TeamSection } from "@/components/team-section"
import { WhatWeBelieve } from "@/components/what-we-believe"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <CHeroSection value="About" />
      <AboutHero />
      <AboutStats />
      <WhatWeBelieve />
      <TeamSection />
      <StemFields />
      <JoinUsSection />
    </main>
  )
}
