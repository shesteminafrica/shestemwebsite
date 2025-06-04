"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function PartnersSection() {
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
    <section className="w-full bg-gray-50 mb-8">
      <div className=" px-4 md:px-8">
        <RevealWrapper delay={0.4} direction="up" className="">
        <div className="scroller" ref={scrollerRef} data-direction="right" data-speed="slow">
          <div className="scroller__inner">
            {Array(57).fill('').map((_, i) => i + 1).map((_, index) => (
                <div className="bg-white rounded-2xl overflow-hidden p-2" key={`${index}pis`}>
                    <Image
                      key={`/logo sTEM ${index}.jpeg`}
                      src={`/shestemssafrica_logo.jpg`}
                      alt={`Partner ${index + 1}`}
                      width={100}
                      height={60}
                      className="h-12 w-auto object-contain"
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
