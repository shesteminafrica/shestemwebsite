"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import Lenis from "lenis";

const BlogPageWrapper = () => {
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
    <div>BlogPageWrapper</div>
  )
}

export default BlogPageWrapper