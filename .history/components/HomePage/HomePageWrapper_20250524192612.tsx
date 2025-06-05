"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import MainButton from "../ReUsables/MainButton"; ///Remove Later On
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
      </div>
    </>
  );
};

export default HomePageWrapper;
