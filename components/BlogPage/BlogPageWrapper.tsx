"use client";

import React, { useEffect, Suspense } from "react";
import Lenis from "lenis";
import BlogContent from "./BlogContent";
import { CHeroSection } from "../common-hero";
import type { Blog } from "@/types/sanity";

interface BlogPageWrapperProps {
  blogs: Blog[];
}

const BlogPageWrapper = ({ blogs }: BlogPageWrapperProps) => {
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
        {/* <Navbar /> */}
        <CHeroSection value="Our blog" />
        <Suspense fallback={<div>Loading articles…</div>}>
          <BlogContent blogs={blogs} />
        </Suspense>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default BlogPageWrapper;
