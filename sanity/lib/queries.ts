import { groq } from 'next-sanity'

// Blog queries
export const blogQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author,
  mainImage,
  tag,
  excerpt,
  content,
  publishedAt,
  featured
}`

export const blogBySlugQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author,
  mainImage,
  tag,
  excerpt,
  content,
  publishedAt,
  featured
}`

export const featuredBlogsQuery = groq`*[_type == "blog" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  author,
  mainImage,
  tag,
  excerpt,
  publishedAt,
  featured
}`

// Event queries
export const eventsQuery = groq`*[_type == "event"] | order(startDate desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  eventType,
  mainImage,
  description,
  content,
  startDate,
  endDate,
  location,
  registrationLink,
  isPast
}`

export const upcomingEventsQuery = groq`*[_type == "event" && isPast == false] | order(startDate asc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  eventType,
  mainImage,
  description,
  startDate,
  endDate,
  location,
  registrationLink,
  isPast
}`

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  eventType,
  mainImage,
  description,
  content,
  startDate,
  endDate,
  location,
  registrationLink,
  isPast
}`

// Opportunity queries
export const opportunitiesQuery = groq`*[_type == "opportunity" && isActive == true] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  opportunityType,
  organization,
  mainImage,
  description,
  deadline,
  applicationLink,
  eligibility,
  amount,
  publishedAt,
  isActive
}`

export const opportunityBySlugQuery = groq`*[_type == "opportunity" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  opportunityType,
  organization,
  mainImage,
  description,
  content,
  deadline,
  applicationLink,
  eligibility,
  amount,
  publishedAt,
  isActive
}`

// Report queries
export const reportsQuery = groq`*[_type == "report"] | order(publishedAt desc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  reportType,
  coverImage,
  description,
  pdfFile,
  externalLink,
  publishedAt,
  year
}`

export const reportBySlugQuery = groq`*[_type == "report" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  reportType,
  coverImage,
  description,
  pdfFile,
  externalLink,
  publishedAt,
  year
}`

// Partner queries
export const partnersQuery = groq`*[_type == "partner" && isActive == true] | order(order asc) {
  _id,
  _createdAt,
  _updatedAt,
  name,
  logo,
  description,
  website,
  partnershipType,
  order,
  isActive
}`

// Initiative queries
export const initiativesQuery = groq`*[_type == "initiative" && isActive == true] | order(order asc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  mainImage,
  description,
  content,
  keyPoints,
  buttonText,
  buttonLink,
  initiativeType,
  order,
  isActive
}`

export const initiativeBySlugQuery = groq`*[_type == "initiative" && slug.current == $slug][0] {
  _id,
  _createdAt,
  _updatedAt,
  title,
  slug,
  mainImage,
  description,
  content,
  keyPoints,
  buttonText,
  buttonLink,
  initiativeType,
  order,
  isActive
}`
