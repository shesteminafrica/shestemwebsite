"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import ContactForm from "./ContactForm";
import Volunteer from "../HomePage/Volunteer";
import JoinMovement from "./JoinMovement";
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
      <ContactForm/>
      <Volunteer/>
      <JoinMovement />
      <Footer />
    </div>
  );
};

export default ContactPageWrapper;
