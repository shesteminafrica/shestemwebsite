"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";
import { getLocalizedString, getLocalizedBlockContent, formatDate, urlFor } from "@/sanity";
import { PortableTextRenderer } from "@/components/sanity/PortableTextRenderer";
import { Clock, Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Blog } from "@/types/sanity";
import { authors } from "@/constants/authors";

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  const { language } = useTranslation();
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  // Récupérer les données dans la langue actuelle
  const title = getLocalizedString(blog.title, language);
  const content = getLocalizedBlockContent(blog.content, language);
  const tag = getLocalizedString(blog.tag, language) || (language === "fr" ? "Article" : "Article");
  const formattedDate = formatDate(blog.publishedAt, language);

  // Calculer le temps de lecture (environ 200 mots par minute)
  const wordCount = content.reduce((count, block) => {
    if (block._type === 'block' && block.children) {
      return count + block.children.reduce((childCount: number, child: any) => {
        return childCount + (child.text ? child.text.split(' ').length : 0);
      }, 0);
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const encodedUrl = encodeURIComponent(blogUrl);

  // Share URLs
  const shareToWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} - ${blogUrl}`)}`;
  const shareToLinkedIn = `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodeURIComponent(title)}`;
  const shareToFacebook = `https://www.facebook.com/sharer.php?u=${encodedUrl}`;
  const shareToTwitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      {/* Main Section */}
      <section className="max-w-[100rem] mx-auto my-24">
        {/* Wrapper with gradient background */}
        <div className="w-full h-auto lg:p-8 rounded-[2rem] bg-gradient-to-b from-[#DF1862]/20 from-20% to-30% to-[#66666600]">
          {/* Container */}
          <div className="flex flex-col gap-12">
            {/* Top Section */}
            <div className="w-full flex flex-col gap-4 mt-12 px-8">
              {/* Reading time indicator */}
              <div className="w-max border border-pink-500 px-5 py-2 flex items-center gap-6 rounded-[2rem]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <p className="text-sm text-black/60">
                    {readingTime} min {language === "fr" ? "de lecture" : "read"}
                  </p>
                </div>
                <div className="block w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-black/60">{formattedDate}</p>
                </div>
              </div>

              {/* Title and Image Section */}
              <div className="w-full flex justify-between items-start gap-8">
                {/* Left - Title */}
                <div className="w-full max-w-[679px] h-auto">
                  <h1 className="text-4xl lg:text-6xl font-medium leading-tight">{title}</h1>
                  <p className="text-lg text-gray-600 mt-4">
                    {language === "fr" ? "Par" : "By"} {blog.author}
                  </p>
                  {tag && (
                    <span className="inline-block mt-4 text-gray-600 px-4 py-1.5 rounded-full border border-gray-300 text-sm">
                      {tag}
                    </span>
                  )}
                </div>

                {/* Right - Featured Image */}
                {blog.mainImage && (
                  <div className="w-[30%] aspect-square relative rounded-3xl overflow-hidden">
                    <Image
                      src={urlFor(blog.mainImage).width(500).height(500).url()}
                      fill
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-start px-8 pb-12 gap-8">
              {/* Left - Main Content */}
              <div className="w-[62.5%] h-auto">
                <PortableTextRenderer value={content} />
              </div>

              {/* Right - Sidebar */}
              <div className="w-[30%] h-auto flex flex-col gap-8">
                {/* Share Section */}
                <div className="w-full bg-white rounded-3xl p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === "fr" ? "Partager cet article" : "Social Share:"}
                  </h3>
                  <div className="flex flex-row gap-3">
                    <a
                      href={shareToLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-full text-black border border-gray-400 hover:opacity-90 transition-all hover:bg-[#880F3C] hover:text-white"
                    >
                      <Linkedin className="w-5 h-5" />
                      {/* <span className="text-sm font-medium">LinkedIn</span> */}
                    </a>
                    <a
                      href={shareToFacebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-full text-black border border-gray-400 hover:opacity-90 transition-opacity hover:bg-[#880F3C] hover:text-white"
                    >
                      <Facebook className="w-5 h-5" />
                      {/* <span className="text-sm font-medium">Facebook</span> */}
                    </a>
                    <a
                      href={shareToTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-full text-black border border-gray-400 hover:opacity-90 transition-opacity hover:bg-[#880F3C] hover:text-white"
                    >
                      <Twitter className="w-5 h-5" />
                      {/* <span className="text-sm font-medium">Twitter</span> */}
                    </a>
                    <a
                      href={shareToWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-full text-black border border-gray-400 hover:opacity-90 transition-opacity hover:bg-[#880F3C] hover:text-white"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {/* <span className="text-sm font-medium">WhatsApp</span> */}
                    </a>
                  </div>
                </div>

                {/* Author Section */}
                <div className="w-full bg-white rounded-3xl p-3 items-center flex flex-row gap-4">
                  {/* <h3 className="text-xl font-semibold text-gray-900">
                    {language === "fr" ? "À propos de l'auteur" : "About the author"}
                  </h3> */}
                  <Image 
                    src={authors[`${blog.author}`]?.photo || "/default-author.png"}
                    alt={blog.author}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-medium text-gray-900">{blog.author}</p>
                    <p className="text-sm text-gray-600">
                      {language === "fr"
                        ? "Contributeur She STEMin Africa"
                        : "She STEMin Africa Contributor"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
