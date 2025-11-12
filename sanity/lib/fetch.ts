import { client } from '../config/client'
import type { Blog, Event, Opportunity, Report, Partner, Initiative } from '@/types/sanity'
import {
  blogQuery,
  blogBySlugQuery,
  featuredBlogsQuery,
  eventsQuery,
  upcomingEventsQuery,
  eventBySlugQuery,
  opportunitiesQuery,
  opportunityBySlugQuery,
  reportsQuery,
  reportBySlugQuery,
  partnersQuery,
  initiativesQuery,
  initiativeBySlugQuery,
} from './queries'

// Blog fetchers
export async function getAllBlogs(): Promise<Blog[]> {
  return client.fetch(blogQuery, {}, { next: { revalidate: 60 } })
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return client.fetch(blogBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  return client.fetch(featuredBlogsQuery, {}, { next: { revalidate: 60 } })
}

// Event fetchers
export async function getAllEvents(): Promise<Event[]> {
  return client.fetch(eventsQuery, {}, { next: { revalidate: 60 } })
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return client.fetch(upcomingEventsQuery, {}, { next: { revalidate: 60 } })
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  return client.fetch(eventBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

// Opportunity fetchers
export async function getAllOpportunities(): Promise<Opportunity[]> {
  return client.fetch(opportunitiesQuery, {}, { next: { revalidate: 60 } })
}

export async function getOpportunityBySlug(slug: string): Promise<Opportunity | null> {
  return client.fetch(opportunityBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

// Report fetchers
export async function getAllReports(): Promise<Report[]> {
  return client.fetch(reportsQuery, {}, { next: { revalidate: 60 } })
}

export async function getReportBySlug(slug: string): Promise<Report | null> {
  return client.fetch(reportBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

// Partner fetchers
export async function getAllPartners(): Promise<Partner[]> {
  return client.fetch(partnersQuery, {}, { next: { revalidate: 60 } })
}

// Initiative fetchers
export async function getAllInitiatives(): Promise<Initiative[]> {
  return client.fetch(initiativesQuery, {}, { next: { revalidate: 60 } })
}

export async function getInitiativeBySlug(slug: string): Promise<Initiative | null> {
  return client.fetch(initiativeBySlugQuery, { slug }, { next: { revalidate: 60 } })
}
