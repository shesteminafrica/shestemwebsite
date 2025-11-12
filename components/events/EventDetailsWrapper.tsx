"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { EventDetails } from "./EventDetails";
import { OtherEvents } from "./OtherEvents";
import type { Event } from "@/types/sanity";

interface EventDetailsWrapperProps {
  event: Event;
  otherEvents: Event[];
}

export function EventDetailsWrapper({ event, otherEvents }: EventDetailsWrapperProps) {
  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div>
        <EventDetails event={event} />
        <OtherEvents events={otherEvents} />
      </div>
    </>
  );
}
