"use client";

import React, { useEffect } from "react";
import BlogDetails from "./BlogDetails";
import OtherBlogs from "./OtherBlogs";
import Lenis from "lenis";
import type { Blog } from "@/types/sanity";

interface BlogDetailsPageWrapperProps {
  blog: Blog;
  otherBlogs: Blog[];
}

const BlogDetailsPageWrapper = ({ blog, otherBlogs }: BlogDetailsPageWrapperProps) => {
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
        <BlogDetails blog={blog} />
        <OtherBlogs blogs={otherBlogs} />
      </div>
    </>
  )
}

export default BlogDetailsPageWrapper