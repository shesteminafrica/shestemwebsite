"use client";

import React, {useEffect} from 'react'
import Lenis from "lenis";

const HomePageWrapper = () => {
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
    <div>HomePageWrapper</div>
  )
}

export default HomePageWrapper