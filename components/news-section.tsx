"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { getLocalizedString, formatDate, urlFor } from "@/sanity"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import type { Blog } from "@/types/sanity"

interface NewsSectionProps {
  blogs: Blog[];
}

export function NewsSection({ blogs }: NewsSectionProps) {
  const { t, language } = useTranslation()
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Ajouter l'attribut `data-animated="true"`
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLElement | null;
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);
      // Cloner et ajouter chaque élément à `.scroller__inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }

  }, []);

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div className="flex justify-center items-center mb-6 md:mb-12">
          <RevealWrapper delay={0.1} direction="up" className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("news.title")}</h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.3} direction="up" width="100%" className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => {
                const title = getLocalizedString(blog.title, language)
                const tag = getLocalizedString(blog.tag, language) || (language === "fr" ? "Article" : "Article")
                const formattedDate = formatDate(blog.publishedAt, language)

                return (
                  <Link
                    key={blog._id}
                    href={`/blog/${blog.slug.current}`}
                    className="rounded-4xl overflow-hidden hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full px-3 md:px-5 py-2 md:py-3 cursor-pointer bg-white"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-2 md:gap-3">
                        <div className="text-xs md:text-sm text-[#464A54] border border-[#E7E7E7] rounded-full py-1 md:py-2 px-3 md:px-5 max-w-fit">
                          {tag}
                        </div>
                        <div className="text-xs md:text-sm text-[#7E8188] mb-1 md:mb-2 flex items-center gap-1">
                          <Image
                            src={"/svg.svg"}
                            alt=""
                            width={18}
                            height={18}
                          />
                          {formattedDate}
                        </div>
                      </div>
                      <h3 className="font-medium text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2">{title}</h3>
                      <p className="text-[#7E8188] text-xs md:text-sm">
                        {language === "fr" ? "Posté par" : "Posted by"} {blog.author}
                      </p>
                    </div>
                    <div className="relative h-48 md:h-96">
                      {blog.mainImage ? (
                        <Image
                          src={urlFor(blog.mainImage).width(600).height(600).url()}
                          alt={title}
                          fill
                          className="object-cover rounded-3xl"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-gray-600 text-xl">
                  {language === "fr"
                    ? "Aucun article disponible pour le moment."
                    : "No articles available at the moment."}
                </p>
              </div>
            )}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
