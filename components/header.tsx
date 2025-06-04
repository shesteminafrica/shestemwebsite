"use client"

import Image from "next/image"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="w-full max-w-[100rem] mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="She STEM Africa Logo" width={40} height={40} className="h-10 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center text-[#4D576D] gap-8">
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.about")}
          </a>
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.blog")}
          </a>
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.contributions")}
          </a>
          <a href="#" className="text-sm uppercase font-medium hover:text-pink-600 transition-colors">
            {t("header.build_future")}
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <button className="border border-[#F2A0BF] w-[199px] h-[76px] rounded-full text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4     hover:text-white text-[#880F3C]">
          {t("header.contact")}
          <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
            <MoveUpRight className="text-white group-hover:text-[#880F3C]" />
          </div>
        </button>
      </div>
    </header>
  )
}
