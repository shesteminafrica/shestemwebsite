"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import { getLocalizedString, formatDate, urlFor, getFileUrl } from "@/sanity"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import type { Report } from "@/types/sanity"

interface ReportSectionProps {
  reports: Report[];
}

export function ReportSection({ reports }: ReportSectionProps) {
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("reports.title")}</h2>
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.3} direction="up" width="100%" className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {reports.length > 0 ? (
              reports.map((report, index) => {
                const title = getLocalizedString(report.title, language)
                const formattedDate = formatDate(report.publishedAt, language)
                const pdfUrl = getFileUrl(report.pdfFile)
                const link = pdfUrl || report.externalLink || `/reports/${report.slug.current}`

                return (
                  <Link
                    key={report._id}
                    href={link}
                    target={pdfUrl || report.externalLink ? "_blank" : undefined}
                    rel={pdfUrl || report.externalLink ? "noopener noreferrer" : undefined}
                    className="rounded-4xl overflow-hidden hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full px-3 md:px-5 py-2 md:py-3 cursor-pointer bg-white"
                  >
                    <div className="relative h-48 md:h-96">
                      {report.coverImage ? (
                        <Image
                          src={urlFor(report.coverImage).width(600).height(600).url()}
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
                    <div className="flex flex-col justify-center gap-3 md:gap-5">
                      <div className="text-xs md:text-sm text-[#7E8188] mb-1 md:mb-2 flex items-center gap-1">
                        <Image
                          src={"/svg.svg"}
                          alt=""
                          width={18}
                          height={18}
                        />
                        {formattedDate}
                        {report.year && <span className="ml-2">({report.year})</span>}
                      </div>
                      <h3 className="font-medium text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2">{title}</h3>
                    </div>
                  </Link>
                )
              })
            ) : (
              <div className="col-span-full text-center mx-auto py-16">
                <p className="text-gray-600 text-xl">
                  {language === "fr"
                    ? "Aucun rapport disponible pour le moment."
                    : "No reports available at the moment."}
                </p>
              </div>
            )}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
