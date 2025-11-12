// Client configuration
export { client, urlFor } from './config/client'

// Fetch functions
export {
  getAllBlogs,
  getBlogBySlug,
  getFeaturedBlogs,
  getAllEvents,
  getUpcomingEvents,
  getEventBySlug,
  getAllOpportunities,
  getOpportunityBySlug,
  getAllReports,
  getReportBySlug,
  getAllPartners,
  getAllInitiatives,
  getInitiativeBySlug,
} from './lib/fetch'

// Helper functions
export {
  getLocalizedString,
  getLocalizedText,
  getLocalizedBlockContent,
  formatDate,
  isPastDate,
  getFileUrl,
} from './lib/helpers'

// Queries (if needed for custom queries)
export * from './lib/queries'
