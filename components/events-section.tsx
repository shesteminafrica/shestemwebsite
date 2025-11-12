"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { EventsCarousel } from "./events-carousel"
import { Button2 } from "./button"
import type { Event } from "@/types/sanity"

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  const { t } = useTranslation()

  return (
    <section className="w-full py-8 md:py-16 lg:py-24" id="events">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 md:mb-12">
          <RevealWrapper delay={0.1} direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("events.title")}</h2>
          </RevealWrapper>

          <RevealWrapper delay={0.2} direction="left">
            <Button2
              value="events.seeAll"
              link="/events"
            />
          </RevealWrapper>
        </div>

        {/* Events Carousel */}
        <RevealWrapper delay={0.3} direction="up" width="100%">
          {events.length > 0 ? (
            <EventsCarousel events={events} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                {t("events.noEvents") || "No events available at the moment."}
              </p>
            </div>
          )}
        </RevealWrapper>
      </div>
    </section>
  )
}
