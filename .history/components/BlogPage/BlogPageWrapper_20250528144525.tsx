"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import BlogHero from "./BlogHero";
import Lenis from "lenis";
import BlogContent from "./BlogContent";

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
    <>
      <div style={{ height: "200vh" }}>
        <Navbar />
        <BlogHero />
        <BlogContent />
      </div>
    </>
  );
};

export default BlogPageWrapper;
