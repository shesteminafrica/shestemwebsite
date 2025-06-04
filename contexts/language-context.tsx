"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<{[key: string | "en" | "fr"]: {}}>({
    en: {},
    fr: {},
  })

  useEffect(() => {
    // Charger les traductions au démarrage
    const loadTranslations = async () => {
      const enTranslations = await import("@/translations/en.json").then((module) => module.default)
      const frTranslations = await import("@/translations/fr.json").then((module) => module.default)

      setTranslations({
        en: enTranslations,
        fr: frTranslations,
      })
    }

    loadTranslations()

    // Vérifier si une langue est déjà stockée dans localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Sauvegarder la langue dans localStorage quand elle change
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      if (!value || typeof value !== 'object' || !(k in value)) return key
      value = (value as Record<string, any>)[k]
    }

    return typeof value === 'string' ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
