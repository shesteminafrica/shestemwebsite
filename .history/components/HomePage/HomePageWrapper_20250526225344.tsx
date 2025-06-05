"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import OurEvents from "./OurEvents";
import Volunteer from "./Volunteer";
import VisitBlog from "./VisitBlog";
import OurPartners from "./OurPartners";
import AnnualReport from "./AnnualReport";
import Footer from "../Navigation/Footer";
import BlogSection from "./BlogSection";
import OurActivities from "./OurActivities";
import Lenis from "lenis";
import JoinWhatsapp from "./JoinWhatsapp";

const HomePageWrapper = () => {
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
        <Navbar />
        <HomeHero/>
        <VisitBlog/>
        <OurEvents/>
        <JoinWhatsapp/>
        <BlogSection/>
        <AnnualReport/>
        <OurPartners/>
        <Volunteer/>
        <Footer />
      </div>
    </>
  );
};

export default HomePageWrapper;
