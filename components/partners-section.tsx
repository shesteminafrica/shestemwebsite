"use client"

import { useTranslation } from "@/contexts/language-context"
import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function PartnersSection({direction="right", wTitle=true}:{direction?:string, wTitle?:boolean}) {
  const { t } = useTranslation()
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
    <section className="w-full">
      {
        wTitle && (
          <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12 mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium">{t("partners.title")}</h2>
          </RevealWrapper>
        )
      }
      <div className="px-4 md:px-8">
        <RevealWrapper delay={0.4} direction="up" className="">
          <div className="scroller" ref={scrollerRef} data-direction={direction} data-speed="slow">
            <div className="scroller__inner">
              {Array(57).fill('').map((_, i) => i + 1).map((_, index) => (
                <div className="bg-white rounded-2xl overflow-hidden p-1 md:p-2" key={`${index}pis`}>
                  <Image
                    key={`/logo sTEM ${index}.jpeg`}
                    src={`/shestemssafrica_logo.jpg`}
                    alt={`Partner ${index + 1}`}
                    width={100}
                    height={60}
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
