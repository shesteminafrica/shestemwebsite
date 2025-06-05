"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import OurEvents from "./OurEvents";
import Volunteer from "./Volunteer";
import OurPartners from "./OurPartners";
import AnnualReport from "./AnnualReport";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

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
        <OurEvents/>
        <OurPartners/>
        <Volunteer/>
        <Footer />
      </div>
    </>
  );
};

export default HomePageWrapper;
