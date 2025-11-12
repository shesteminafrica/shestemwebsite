import { getEventBySlug, getAllEvents } from "@/sanity";
import { EventDetailsWrapper } from "@/components/events/EventDetailsWrapper";
import { notFound } from "next/navigation";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  // Récupérer d'autres événements pour les suggestions
  const allEvents = await getAllEvents();
  const otherEvents = allEvents.filter((e) => e._id !== event._id).slice(0, 3);

  return <EventDetailsWrapper event={event} otherEvents={otherEvents} />;
}

// Générer les routes statiques
export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    slug: event.slug.current,
  }));
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60;
