"use client"

import { useTranslation } from "@/contexts/language-context"
import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const changeLanguage = (lang: "en" | "fr") => {
    setLanguage(lang)
    closeDropdown()
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-sm font-medium hover:text-pink-600 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span className="hidden md:inline">{language === "en" ? "English" : "Français"}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={closeDropdown} aria-hidden="true" />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20 py-1 border border-gray-200">
            <button
              onClick={() => changeLanguage("en")}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              <span>English</span>
              {language === "en" && <Check size={16} className="text-pink-600" />}
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              <span>Français</span>
              {language === "fr" && <Check size={16} className="text-pink-600" />}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
