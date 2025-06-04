"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";

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
    <div>ContactPageWrapper</div>
  )
}

export default ContactPageWrapper