"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { OpportunityDetails } from "./OpportunityDetails";
import { OtherOpportunities } from "./OtherOpportunities";
import type { Opportunity } from "@/types/sanity";

interface OpportunityDetailsWrapperProps {
  opportunity: Opportunity;
  otherOpportunities: Opportunity[];
}

export function OpportunityDetailsWrapper({ opportunity, otherOpportunities }: OpportunityDetailsWrapperProps) {
  useEffect(() => {
    const lenisInstance = new Lenis({ duration: 1 });
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <OpportunityDetails opportunity={opportunity} />
      <OtherOpportunities opportunities={otherOpportunities} />
    </div>
  );
}
