"use client";

import React from 'react';
import { useTranslation } from '@/contexts/language-context';
import { getLocalizedString, formatDate, urlFor } from '@/sanity';
import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/types/sanity';
import styles from "../../styles/BlogPage/otherblog.module.scss";

interface OtherEventsProps {
  events: Event[];
}

export function OtherEvents({ events }: OtherEventsProps) {
  const { language } = useTranslation();

  return (
    <div className={`sectioner ${styles.ob__section}`}>
      <div className={`containerr ${styles.ob__container}`}>
        <h2 className={styles.ob__h2}>
          {language === 'fr' ? 'Autres Événements' : 'Other Events'}
        </h2>
        <div className={styles.ob__bottom}>
          {events.length > 0 ? (
            events.map((event) => {
              const title = getLocalizedString(event.title, language);
              const formattedDate = formatDate(event.startDate, language);

              return (
                <Link
                  key={event._id}
                  href={`/events/${event.slug.current}`}
                  className="w-full flex flex-col gap-4 bg-white rounded-3xl overflow-hidden p-4 transition-all duration-600 ease-in-out transform-none hover:scale-97"
                >
                  <div className="w-full aspect-square relative rounded-2xl overflow-hidden">
                    {event.mainImage ? (
                      <Image
                        fill
                        quality={100}
                        alt={title}
                        src={urlFor(event.mainImage).width(600).height(600).url()}
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 w-full px-4">
                    <div className="w-full flex justify-between items-center">
                      <span className="text-gray-600 px-4 py-1.5 rounded-full border border-gray-300 text-sm capitalize">
                        {event.eventType}
                      </span>
                      <span className="text-gray-600">{formattedDate}</span>
                    </div>
                    <div className="flex flex-col gap-4 w-[95%] mb-4">
                      <h3 className="line-clamp-2 text-black overflow-hidden font-normal font-medium text-3xl leading-tight">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              {language === 'fr'
                ? 'Aucun autre événement disponible.'
                : 'No other events available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
