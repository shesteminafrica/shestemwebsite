"use client";

import React from 'react'
import Image from 'next/image'
import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString, getLocalizedText, formatDate, urlFor } from '@/sanity'
import { Button3 } from '../button'
import type { Event } from '@/types/sanity'
import { Calendar, MapPin } from 'lucide-react'

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { language } = useTranslation();

  // Récupérer les données dans la langue actuelle
  const title = getLocalizedString(event.title, language);
  const description = getLocalizedText(event.description, language);
  const location = getLocalizedString(event.location, language);
  const formattedDate = formatDate(event.startDate, language);

  return (
    <div className="w-full flex flex-col gap-4 bg-white rounded-3xl overflow-hidden p-4 transition-all duration-600 ease-in-out transform-none hover:scale-97">
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
        {event.isPast && (
          <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {language === 'fr' ? 'Passé' : 'Past'}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full px-4">
        <div className="w-full flex justify-between items-center">
          <span className="text-gray-600 px-4 py-1.5 rounded-full border border-gray-300 text-sm capitalize">
            {event.eventType}
          </span>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
        {location && (
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
        )}
        <div className="flex flex-col gap-4 w-[95%] mb-4">
          <h3 className="line-clamp-2 text-black overflow-hidden font-normal font-medium text-3xl leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2 overflow-hidden">
            {description || (language === 'fr' ? 'Aucune description disponible.' : 'No description available.')}
          </p>
        </div>
        <Button3
          value={language === 'fr' ? 'Voir les détails' : 'View Details'}
          link={`/events/${event.slug.current}`}
        />
      </div>
    </div>
  )
}

export default EventCard
