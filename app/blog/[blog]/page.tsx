import React from "react";
import { BlogDetailsPageWrapper } from "@/components";
import { getBlogBySlug, getAllBlogs } from "@/sanity";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{ blog: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { blog: slug } = await params;

  // Récupérer le blog depuis Sanity
  const blog = await getBlogBySlug(slug);

  // Si le blog n'existe pas, afficher la page 404
  if (!blog) {
    notFound();
  }

  // Récupérer tous les blogs pour la section "Autres articles"
  const allBlogs = await getAllBlogs();
  const otherBlogs = allBlogs.filter((b) => b._id !== blog._id).slice(0, 3);

  return (
    <div className="main">
      <BlogDetailsPageWrapper blog={blog} otherBlogs={otherBlogs} />
    </div>
  );
}

// Générer les routes statiques pour tous les blogs
export async function generateStaticParams() {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => ({
    blog: blog.slug.current,
  }));
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60;
