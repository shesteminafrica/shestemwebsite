"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { ReportDetails } from "./ReportDetails";
import { OtherReports } from "./OtherReports";
import type { Report } from "@/types/sanity";

interface ReportDetailsWrapperProps {
  report: Report;
  otherReports: Report[];
}

export function ReportDetailsWrapper({ report, otherReports }: ReportDetailsWrapperProps) {
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
      <ReportDetails report={report} />
      <OtherReports reports={otherReports} />
    </div>
  );
}
