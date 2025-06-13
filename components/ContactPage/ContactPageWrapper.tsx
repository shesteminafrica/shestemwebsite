"use client";

import React, { useEffect } from "react";
// import Navbar from "../Navigation/Navbar";
import ContactForm from "./ContactForm";
<<<<<<< HEAD
import Volunteer from "../HomePage/Volunteer";
import JoinMovement from "./JoinMovement";
import Footer from "../Navigation/Footer";
=======
// import Footer from "../Navigation/Footer";
>>>>>>> fabel
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
      {/* <Navbar /> */}
      <ContactForm/>
<<<<<<< HEAD
      <JoinMovement />
      <Volunteer/>
      <Footer />
=======
      {/* <Footer /> */}
>>>>>>> fabel
    </div>
  );
};

export default ContactPageWrapper;
