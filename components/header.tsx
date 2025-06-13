"use client"

import { useState } from "react"
import Image from "next/image"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslation } from "@/contexts/language-context"
import { Button1 } from "./button"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-md">
      <div className="mx-auto px-4 py-4 flex items-center justify-between max-w-[100rem]">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="She STEM Africa Logo" width={40} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center text-[#4D576D] gap-8">
            <Link href="/about" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors">
              {t("header.about")}
            </Link>
            <Link href="/blog" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors">
              {t("header.blog")}
            </Link>
            <Link href="/contribute" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors">
              {t("header.contributions")}
            </Link>
            <Link href="/local-initiatives" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors">
              {t("header.local_init")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button1 value="header.contact" link="/contact" />
          </div>
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col items-start text-[#4D576D] gap-4">
            <Link href="/about" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors w-full py-2" onClick={toggleMenu}>
              {t("header.about")}
            </Link>
            <Link href="/blog" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors w-full py-2" onClick={toggleMenu}>
              {t("header.blog")}
            </Link>
            <Link href="/contribute" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors w-full py-2" onClick={toggleMenu}>
              {t("header.contributions")}
            </Link>
            <Link href="/local-initiatives" className="text-sm uppercase font-medium hover:text-[#DF1862] transition-colors w-full py-2" onClick={toggleMenu}>
              {t("header.local_init")}
            </Link>
            <div className="w-full py-2">
              <Button1 value="header.contact" link="/contact" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
