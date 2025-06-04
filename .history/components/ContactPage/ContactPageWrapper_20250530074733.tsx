"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Lenis from "lenis";

const ContactPageWrapper = () => {
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
    <div>
      <Navbar />
      
      <Footer />
    </div>
  );
};

export default ContactPageWrapper;
