import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from '@portabletext/types'

export interface LocaleString {
  en?: string
  fr?: string
}

export interface LocaleText {
  en?: string
  fr?: string
}

export interface LocaleBlockContent {
  en?: PortableTextBlock[]
  fr?: PortableTextBlock[]
}

export interface Blog {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: LocaleString
  slug: {
    current: string
  }
  author: string
  mainImage: SanityImageSource
  tag?: LocaleString
  excerpt?: LocaleText
  content: LocaleBlockContent
  publishedAt: string
  featured: boolean
}

export interface Event {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: LocaleString
  slug: {
    current: string
  }
  eventType: 'webinar' | 'workshop' | 'conference' | 'networking' | 'other'
  mainImage: SanityImageSource
  description: LocaleText
  content?: LocaleBlockContent
  startDate: string
  endDate?: string
  location?: LocaleString
  registrationLink?: string
  isPast: boolean
}

export interface Opportunity {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: LocaleString
  slug: {
    current: string
  }
  opportunityType: 'scholarship' | 'grant' | 'fellowship' | 'internship' | 'job' | 'training' | 'other'
  organization: string
  mainImage?: SanityImageSource
  description: LocaleText
  content?: LocaleBlockContent
  deadline?: string
  applicationLink: string
  eligibility?: LocaleText
  amount?: string
  publishedAt: string
  isActive: boolean
}

export interface Report {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: LocaleString
  slug: {
    current: string
  }
  reportType: 'annual' | 'activity' | 'research' | 'newsletter' | 'info' | 'other'
  coverImage: SanityImageSource
  description: LocaleText
  pdfFile?: {
    asset: {
      url: string
    }
  }
  externalLink?: string
  publishedAt: string
  year?: string
}

export interface Partner {
  _id: string
  _createdAt: string
  _updatedAt: string
  name: string
  logo: SanityImageSource
  description?: LocaleText
  website?: string
  partnershipType?: 'strategic' | 'academic' | 'financial' | 'community' | 'media' | 'other'
  order: number
  isActive: boolean
}

export interface Initiative {
  _id: string
  _createdAt: string
  _updatedAt: string
  excerpt?: LocaleText
  title: LocaleString
  slug: {
    current: string
  }
  mainImage: SanityImageSource
  tag?: LocaleString
  description: LocaleText
  publishedAt: string
  content?: LocaleBlockContent
  keyPoints?: {
    en?: string[]
    fr?: string[]
  }
  buttonText?: LocaleString
  buttonLink?: string
  initiativeType?: 'networking' | 'coaching' | 'grant' | 'training' | 'local' | 'other'
  order: number
  isActive: boolean
}
