"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { EventsCarousel } from "./events-carousel"
import { Button2 } from "./button"

export function EventsSection() {
  const { t } = useTranslation()

  const events = [
    {
      id: 1,
      title: "L'essentiel pour débuter sur LinkedIn",
      date: "April 10, 2025",
      image:
        "/er.png",
    },
    {
      id: 2,
      title: "Programme de Bourses UNESCO-Guinée Équatoriale",
      date: "April 10, 2025",
      image:
        "/er.png",
    },
    {
      id: 3,
      title: "Bourses du Projet COCREATE-Afrique",
      date: "April 10, 2025",
      image:
        "/er.png",
    },
    {
      id: 4,
      title: "Journée Internationale de la Femme Africaine",
      date: "April 10, 2025",
      image:
        "/er.png",
    },
    {
      id: 5,
      title: "Atelier de Formation en Data Science",
      date: "May 15, 2025",
      image: "/er.png",
    },
    {
      id: 6,
      title: "Conférence Women in Tech Africa",
      date: "June 20, 2025",
      image: "/er.png",
    },
  ]

  const handleRegister = (eventId: number) => {
    console.log(`Register for event ${eventId}`)
    // Implement registration logic here
  }

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 md:mb-12">
          <RevealWrapper delay={0.1} direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("events.title")}</h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2} direction="left">
            <Button2
              value="events.seeAll"
              link="#"
            />
          </RevealWrapper>
        </div>

        {/* Events Carousel */}
        <RevealWrapper delay={0.3} direction="up" width="100%">
          <EventsCarousel events={events} onRegister={handleRegister} />
        </RevealWrapper>
      </div>
    </section>
  )
}
