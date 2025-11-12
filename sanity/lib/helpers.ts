import type { LocaleString, LocaleText, LocaleBlockContent } from '@/types/sanity'
import type { PortableTextBlock } from '@portabletext/types'

/**
 * Get localized string based on current language
 * Falls back to English if translation not available
 */
export function getLocalizedString(
  localeString: LocaleString | undefined,
  locale: 'en' | 'fr' = 'en'
): string {
  if (!localeString) return ''
  return localeString[locale] || localeString.en || ''
}

/**
 * Get localized text based on current language
 * Falls back to English if translation not available
 */
export function getLocalizedText(
  localeText: LocaleText | undefined,
  locale: 'en' | 'fr' = 'en'
): string {
  if (!localeText) return ''
  return localeText[locale] || localeText.en || ''
}

/**
 * Get localized block content based on current language
 * Falls back to English if translation not available
 */
export function getLocalizedBlockContent(
  localeBlockContent: LocaleBlockContent | undefined,
  locale: 'en' | 'fr' = 'en'
): PortableTextBlock[] {
  if (!localeBlockContent) return []
  return localeBlockContent[locale] || localeBlockContent.en || []
}

/**
 * Format date to locale-specific string
 */
export function formatDate(
  date: string | Date,
  locale: 'en' | 'fr' = 'en',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }

  return dateObj.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', defaultOptions)
}

/**
 * Check if a date is in the past
 */
export function isPastDate(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj < new Date()
}

/**
 * Get file URL from Sanity file asset
 */
export function getFileUrl(fileAsset: { asset: { url: string } } | undefined): string | null {
  return fileAsset?.asset?.url || null
}
