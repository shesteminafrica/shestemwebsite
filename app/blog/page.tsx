import React from "react";
import { BlogPageWrapper } from "@/components";
import { getAllBlogs } from "@/sanity";

export default async function Blog() {
  // Récupérer tous les blogs depuis Sanity
  const blogs = await getAllBlogs();

  return (
    <div className="">
      <BlogPageWrapper blogs={blogs} />
    </div>
  );
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60;
