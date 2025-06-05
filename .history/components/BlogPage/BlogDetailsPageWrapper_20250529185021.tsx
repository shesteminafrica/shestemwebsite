"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import BlogDetails from "./BlogDetails";
import Footer from "../Navigation/Footer";
import OtherBlogs from "./OtherBlogs";
import Lenis from "lenis";

const BlogDetailsPageWrapper = () => {
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
        <BlogDetails/>
        <OtherBlogs/>
        <Footer/>
      </div>
    </>
  )
}

export default BlogDetailsPageWrapper