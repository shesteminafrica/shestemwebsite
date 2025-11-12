"use client";

import React, { useEffect, Suspense } from "react";
import Lenis from "lenis";
import EventsContent from "./EventsContent";
import { CHeroSection } from "../common-hero";
import type { Event } from "@/types/sanity";

interface EventsPageWrapperProps {
  events: Event[];
}

const EventsPageWrapper = ({ events }: EventsPageWrapperProps) => {
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
        <CHeroSection value="Our Events" />
        <Suspense fallback={<div>Loading events…</div>}>
          <EventsContent events={events} />
        </Suspense>
      </div>
    </>
  );
};

export default EventsPageWrapper;
export { EventsPageWrapper };
