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
import { getAllBlogs, getUpcomingEvents, getAllReports, getAllPartners } from "@/sanity"

export default async function Home() {
  // Récupérer les données depuis Sanity
  const [blogs, events, reports, partners] = await Promise.all([
    getAllBlogs(),
    getUpcomingEvents(),
    getAllReports(),
    getAllPartners(),
  ])

  // Limiter le nombre d'éléments à afficher sur la page d'accueil
  const recentBlogs = blogs.slice(0, 4)
  const upcomingEvents = events.slice(0, 6)
  const recentReports = reports.slice(0, 2)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ChallengesSection />
      <ActivitiesSection />
      <JoinUsSection />
      <StemFuture />
      <EventsSection events={upcomingEvents} />
      <NewsSection blogs={recentBlogs} />
      <ReportSection reports={recentReports} />
      <PartnersSection partners={partners} />
      <PartnersSection partners={partners} direction={"left"} wTitle={false} />
      <ContributeSection />
    </main>
  )
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60