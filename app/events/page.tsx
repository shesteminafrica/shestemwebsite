import React from "react";
import { EventsPageWrapper } from "@/components/EventsPage/EventsPageWrapper";
import { getAllEvents } from "@/sanity";

export default async function EventsPage() {
  // Récupérer tous les événements depuis Sanity
  const events = await getAllEvents();

  return (
    <div className="">
      <EventsPageWrapper events={events} />
    </div>
  );
}

// Métadonnées de la page
export const metadata = {
  title: 'Events - She STEMin Africa',
  description: 'Découvrez nos événements, webinaires, ateliers et conférences',
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60;
