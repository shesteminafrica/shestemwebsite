"use client";

import React, { useMemo } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/contexts/language-context";
import { getLocalizedString } from "@/sanity";
import EventCard from "./EventCard";
import type { Event } from "@/types/sanity";

interface EventsContentProps {
  events: Event[];
}

const EventsContent = ({ events }: EventsContentProps) => {
  const { language } = useTranslation();
  const filters = [
    {
      name: "All",
      slug: "all"
    },
    {
      name: "Webinar",
      slug: "webinar"
    },
    {
      name: "Workshop",
      slug: "workshop"
    },
    {
      name: "Conference",
      slug: "conference"
    },
    {
      name: "Networking",
      slug: "networking"
    },
    {
      name: "Other",
      slug: "other"
    }
  ];

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);

    if (filter == "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }

    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("filter") || "all";

  // Filtrer les événements selon le filtre actif
  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") {
      return events;
    }

    return events.filter((event) => {
      return event.eventType.toLowerCase() === activeFilter.toLowerCase();
    });
  }, [events, activeFilter]);

  return (
    <div className={`w-full flex flex-col max-w-[100rem] mt-8 md:mt-16 mx-auto text-white relative overflow-hidden gap-4 md:gap-6`}>
      {/* Tabs */}
      <div className="w-full flex justify-between gap-4 md:gap-10 bg-white p-3 md:p-5 rounded-[60px] overflow-y-auto">
        {filters.map((data, index) => (
          <button
            key={`${data.name}dsf${index}`}
            onClick={() => handleFilter(data.slug)}
            className={`px-3 md:px-5 py-2 md:py-4 rounded-full text-xs md:text-sm max-w-[199px] font-medium transition-all duration-200 min-w-[145px] md:min-w-[194px] min-h-[72px] ${
              activeFilter === data.slug
                ? "bg-[#DF1862] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {data.name}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-600 text-xl">
              {language === "fr"
                ? "Aucun événement trouvé pour ce filtre."
                : "No events found for this filter."}
            </p>
            <p className="text-gray-500 mt-4">
              {language === "fr"
                ? "Ajoutez des événements dans le "
                : "Add events in the "}
              <a
                href="/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DF1862] hover:underline"
              >
                Sanity Studio
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsContent;
