import { HeroSection } from "@/components/hero-section"
import { ChallengesSection } from "@/components/challenges-section"
import { ActivitiesSection } from "@/components/activities-section"
import { EventsSection } from "@/components/events-section"
import { JoinUsSection } from "@/components/join-us-section"
import { NewsSection } from "@/components/news-section"
import { ContributeSection } from "@/components/contribute-section"
import { PartnersSection } from "@/components/partners-section"
import { ReportSection } from "@/components/activity-report"
import { StemFuture } from "@/components/stem-future"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ChallengesSection />
      <ActivitiesSection />
      <JoinUsSection />
      <StemFuture />
      <EventsSection />
      <NewsSection />
      <ReportSection />
      <PartnersSection />
      <ContributeSection />
    </main>
  )
}
