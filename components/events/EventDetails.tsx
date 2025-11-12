"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";
import { getLocalizedString, getLocalizedText, getLocalizedBlockContent, formatDate, urlFor } from "@/sanity";
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer";
import { Clock, Calendar, MapPin, ExternalLink, Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Event } from "@/types/sanity";

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  const { language } = useTranslation();
  const [eventUrl, setEventUrl] = useState("");

  useEffect(() => {
    setEventUrl(window.location.href);
  }, []);

  const title = getLocalizedString(event.title, language);
  const description = getLocalizedText(event.description, language);
  const content = event.content ? getLocalizedBlockContent(event.content, language) : [];
  const location = getLocalizedString(event.location, language);
  const formattedStartDate = formatDate(event.startDate, language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  const formattedEndDate = event.endDate ? formatDate(event.endDate, language, {
    hour: '2-digit',
    minute: '2-digit'
  }) : null;

  const encodedUrl = encodeURIComponent(eventUrl);

  // Share URLs
  const shareToWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} - ${eventUrl}`)}`;
  const shareToLinkedIn = `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodeURIComponent(title)}`;
  const shareToFacebook = `https://www.facebook.com/sharer.php?u=${encodedUrl}`;
  const shareToTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <section className="max-w-[100rem] mx-auto my-24">
        <div className="w-full h-auto lg:p-8 rounded-[2rem] bg-gradient-to-b from-[#DF1862]/20 from-20% to-30% to-[#66666600]">
          <div className="flex flex-col gap-12">
            {/* Top Section */}
            <div className="w-full flex flex-col gap-4 mt-12 px-8">
              {/* Event Info indicator */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-max border border-pink-500 px-5 py-2 flex items-center gap-2 rounded-[2rem]">
                  <Calendar className="w-4 h-4" />
                  <p className="text-sm text-black/60">{formattedStartDate}</p>
                  {formattedEndDate && (
                    <>
                      <span>-</span>
                      <p className="text-sm text-black/60">{formattedEndDate}</p>
                    </>
                  )}
                </div>

                {location && (
                  <div className="w-max border border-pink-500 px-5 py-2 flex items-center gap-2 rounded-[2rem]">
                    <MapPin className="w-4 h-4" />
                    <p className="text-sm text-black/60">{location}</p>
                  </div>
                )}

                <div className="w-max border border-gray-300 px-5 py-2 flex items-center gap-2 rounded-[2rem]">
                  <span className="text-sm text-black/60 capitalize">{event.eventType}</span>
                </div>

                {event.isPast && (
                  <div className="w-max bg-gray-400 text-white px-5 py-2 rounded-[2rem]">
                    <span className="text-sm font-medium">
                      {language === "fr" ? "Événement passé" : "Past Event"}
                    </span>
                  </div>
                )}
              </div>

              {/* Title and Image Section */}
              <div className="w-full flex justify-between items-start gap-8">
                <div className="w-full max-w-[679px] h-auto">
                  <h1 className="text-4xl lg:text-6xl font-medium leading-tight">{title}</h1>
                  <p className="text-lg text-gray-700 mt-6">{description}</p>
                </div>

                {event.mainImage && (
                  <div className="w-[30%] aspect-square relative rounded-3xl overflow-hidden">
                    <Image
                      src={urlFor(event.mainImage).width(500).height(500).url()}
                      fill
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-start px-8 pb-12 gap-8">
              {/* Left - Main Content */}
              <div className="w-[62.5%] h-auto">
                {content.length > 0 ? (
                  <PortableTextRenderer value={content} />
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                  </div>
                )}
              </div>

              {/* Right - Sidebar */}
              <div className="w-[30%] h-auto flex flex-col gap-8">
                {/* Registration Section */}
                {event.registrationLink && !event.isPast && (
                  <div className="w-full bg-white rounded-3xl p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {language === "fr" ? "Inscription" : "Registration"}
                    </h3>
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {language === "fr" ? "S'inscrire maintenant" : "Register Now"}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Share Section */}
                <div className="w-full bg-white rounded-3xl p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === "fr" ? "Partager cet événement" : "Share this event"}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      href={shareToLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <a
                      href={shareToFacebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a
                      href={shareToTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-black text-white hover:opacity-90 transition-opacity"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="text-sm font-medium">Twitter</span>
                    </a>
                    <a
                      href={shareToWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
