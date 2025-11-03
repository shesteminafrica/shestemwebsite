# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the She STEMin Africa website - a Next.js 15 application promoting STEM education and careers for African girls and women. The site is built with React 19, TypeScript, and Tailwind CSS 4, using the App Router architecture.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The dev server runs on http://localhost:3000

## Architecture Overview

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - Route structure: `about/`, `api/`, `blog/`, `contact/`, `contribute/`, `local-initiatives/`
  - API routes in `app/api/contactform/` handle Google Sheets integration
- `components/` - React components organized by page/feature
  - `HomePage/` - Home page specific components
  - `BlogPage/` - Blog related components
  - `ContactPage/` - Contact form components
  - `Navigation/` - Header/footer navigation
  - `ReUsables/` - Shared reusable components
  - Root level components are shared across pages
- `contexts/` - React Context providers (language-context.tsx)
- `translations/` - i18n JSON files (en.json, fr.json)
- `utils/` - Static data exports (PartnersData, BlogData, ActivitiesData, etc.)
- `styles/` - Global styles organized by feature (SCSS + CSS)
- `animations/` - Framer Motion animation configurations
- `public/` - Static assets (images, SVGs, PDFs)
- `types/` - TypeScript type definitions

### Key Architectural Patterns

**Internationalization (i18n)**
- Custom i18n implementation using React Context
- Language state managed in `contexts/language-context.tsx`
- Translations stored in `translations/en.json` and `translations/fr.json`
- Access via `useTranslation()` hook which provides `t()` function for key-based lookups
- Language preference persisted to localStorage
- Dot notation for nested keys: `t("section.subsection.key")`

**Styling System**
- Primary: Tailwind CSS 4 with custom configuration
- SCSS modules for page-specific styles in `styles/`
- Global styles in `app/globals.css` and `styles/globals.scss`
- Custom fonts loaded via Next.js `localFont` (DMSans Regular, Medium, SemiBold)
- CSS variables: `--regular-font`, `--medium-font`, `--semibold-font`

**Component Organization**
- Page components import from `@/components/` using path alias
- Barrel exports via `components/index.ts` for commonly used components
- Page wrappers in subdirectories (e.g., `HomePage/HomePageWrapper.tsx`)
- Shared components at root level, page-specific in subdirectories

**Data Management**
- Static data exported from `utils/index.ts`
- Data structures: PartnersData, AnnualReportData, BlogData, ActivitiesData, JoinData, BuildFutureData, ChallengesData, ContactFormFields
- No external CMS - content is hardcoded in utils

**Animation System**
- Framer Motion for animations
- GSAP integration via `@gsap/react`
- Lenis for smooth scrolling
- Animation configs exported from `animations/index.ts`
- Common pattern: `RevealWrapper` component for scroll-based reveals

### API Integration

**Contact Form → Google Sheets**
- Route: `POST /api/contactform`
- Authenticates with Google Sheets API using service account credentials
- Environment variables required:
  - `GOOGLE_CLIENT_EMAIL` - Service account email
  - `GOOGLE_PRIVATE_KEY` - Service account private key (with escaped newlines)
  - `GOOGLE_SHEET_ID` - Target spreadsheet ID
- Form data includes: firstname, lastname, email, levelstudy, abstract, services[]
- Services array is joined into comma-separated string before appending

### Path Aliases

The `@/` alias maps to the project root, configured in `tsconfig.json`:
```typescript
"paths": {
  "@/*": ["./*"]
}
```

Use `@/components/`, `@/utils/`, `@/contexts/`, etc. for imports.

### Layout System

- Root layout in `app/layout.tsx` wraps all pages with:
  - LanguageProvider context
  - Header component (navigation)
  - Footer component
  - Global font loading
  - Background color: `#f5f5f5`

### Key Libraries

- **Animation**: Framer Motion, GSAP, Lenis
- **UI Components**: Swiper for carousels, Lucide React for icons, Iconify for additional icons
- **API**: googleapis for Google Sheets integration
- **Styling**: Tailwind CSS 4, PostCSS, Sass

## Development Notes

- TypeScript strict mode is enabled
- ESLint configured with Next.js recommended rules
- Turbopack used for faster dev builds
- Target ES2017 for compatibility
- All components use React 19 features

## Environment Setup

Create `.env.local` with:
```
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id
```

Note: Private key newlines must be escaped as `\n` in the .env file.
