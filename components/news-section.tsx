"use client"

import { RevealWrapper } from "./reveal-wrapper"
import Image from "next/image"
import { useTranslation } from "@/contexts/language-context"
import { useEffect, useRef } from "react"

export function NewsSection() {
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

  const newsItems = [
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      category: "Documentation",
      date: "15 Mar 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      category: "Documentation",
      date: "02 Apr 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      category: "Documentation",
      date: "10 May 2023",
      image: "/e2.jpg",
    },
    {
      title: "Rapport d'activité détaillé 2023 - 2024 de l'association SheSTEMin Africa",
      category: "Documentation",
      date: "25 May 2023",
      image: "/e2.jpg",
    },
  ]

  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8">
        <div className="flex justify-center items-center mb-6 md:mb-12">
          <RevealWrapper delay={0.1} direction="up" className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">{t("news.title")}</h2>
          </RevealWrapper>

          {/* <RevealWrapper delay={0.2} direction="left">
            <a
              href="#"
              className="text-pink-600 font-medium flex items-center gap-2 hover:text-pink-700 transition-colors"
            >
              {t("news.seeAll")}
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-pink-100 transition-colors">
                {t("challenges.readMore")}
                <div className="rounded-full bg-pink-600 p-2">
                  <MoveUpRight className="text-white" />
                </div>
              </button>
            </a>
          </RevealWrapper> */}
        </div>

        <RevealWrapper delay={0.3} direction="up" className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {newsItems.map((item, index) => (
              <div key={`fgd${index}gfdg`} className="rounded-4xl overflow-hidden hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full px-3 md:px-5 py-2 md:py-3 cursor-pointer bg-white">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2 md:gap-3">
                    <div className="text-xs md:text-sm text-[#464A54] border border-[#E7E7E7] rounded-full py-1 md:py-2 px-3 md:px-5 max-w-fit">{item.category}</div>
                    <div className="text-xs md:text-sm text-[#7E8188] mb-1 md:mb-2 flex items-center gap-1">
                      <Image 
                        src={"/svg.svg"}
                        alt=""
                        width={18}
                        height={18}
                      />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-medium text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-[#7E8188] text-xs md:text-sm">
                    Posted by Pulchérie Matsodoum Nguemté
                  </p>
                </div>
                <div className="relative h-48 md:h-96">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover rounded-3xl" />
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
