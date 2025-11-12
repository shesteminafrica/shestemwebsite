# Sanity CMS Integration Guide

Ce guide explique comment utiliser Sanity CMS dans le projet She STEMin Africa.

## 📋 Table des matières

1. [Accéder au Studio](#accéder-au-studio)
2. [Types de contenus disponibles](#types-de-contenus-disponibles)
3. [Utilisation dans les composants](#utilisation-dans-les-composants)
4. [Gestion de l'internationalisation](#gestion-de-linternationalisation)
5. [Exemples pratiques](#exemples-pratiques)

---

## 🚀 Accéder au Studio

### En développement local
1. Démarrer le serveur de développement : `npm run dev`
2. Accéder au studio : http://localhost:3000/studio
3. Se connecter avec vos identifiants Sanity

### En production
Le studio sera accessible à : `https://votre-domaine.com/studio`

---

## 📦 Types de contenus disponibles

### 1. **Blog Posts** (`blog`)
Articles de blog avec support bilingue (EN/FR)

**Champs principaux :**
- `title` (EN/FR) - Titre de l'article
- `slug` - URL unique
- `author` - Nom de l'auteur
- `mainImage` - Image principale
- `tag` (EN/FR) - Catégorie/tag
- `excerpt` (EN/FR) - Résumé court
- `content` (EN/FR) - Contenu complet (rich text)
- `publishedAt` - Date de publication
- `featured` - Article en vedette (oui/non)

### 2. **Events** (`event`)
Événements (webinaires, ateliers, conférences, etc.)

**Champs principaux :**
- `title` (EN/FR) - Titre de l'événement
- `eventType` - Type : webinar, workshop, conference, networking, other
- `mainImage` - Image principale
- `description` (EN/FR) - Description courte
- `content` (EN/FR) - Contenu détaillé
- `startDate` / `endDate` - Dates de l'événement
- `location` (EN/FR) - Lieu (ou "Online")
- `registrationLink` - Lien d'inscription
- `isPast` - Événement passé (oui/non)

### 3. **Opportunities** (`opportunity`)
Bourses, subventions, stages, emplois, formations

**Champs principaux :**
- `title` (EN/FR) - Titre de l'opportunité
- `opportunityType` - Type : scholarship, grant, fellowship, internship, job, training, other
- `organization` - Organisation offrant l'opportunité
- `description` (EN/FR) - Description
- `deadline` - Date limite de candidature
- `applicationLink` - Lien de candidature
- `eligibility` (EN/FR) - Critères d'éligibilité
- `amount` - Montant (si applicable)
- `isActive` - Opportunité active (oui/non)

### 4. **Reports & Info** (`report`)
Rapports annuels, newsletters, documents d'information

**Champs principaux :**
- `title` (EN/FR) - Titre du document
- `reportType` - Type : annual, activity, research, newsletter, info, other
- `coverImage` - Image de couverture
- `description` (EN/FR) - Description
- `pdfFile` - Fichier PDF (upload)
- `externalLink` - Lien externe (si pas de PDF)
- `year` - Année du rapport

### 5. **Partners** (`partner`)
Partenaires de l'organisation

**Champs principaux :**
- `name` - Nom du partenaire
- `logo` - Logo
- `description` (EN/FR) - Description
- `website` - Site web
- `partnershipType` - Type : strategic, academic, financial, community, media, other
- `order` - Ordre d'affichage
- `isActive` - Partenariat actif (oui/non)

### 6. **Initiatives** (`initiative`)
Initiatives locales, programmes, activités

**Champs principaux :**
- `title` (EN/FR) - Titre de l'initiative
- `mainImage` - Image principale
- `description` (EN/FR) - Description
- `content` (EN/FR) - Contenu détaillé
- `keyPoints` (EN/FR) - Points clés (liste)
- `buttonText` (EN/FR) / `buttonLink` - Bouton d'action
- `initiativeType` - Type : networking, coaching, grant, training, local, other
- `order` - Ordre d'affichage
- `isActive` - Initiative active (oui/non)

---

## 💻 Utilisation dans les composants

### Importer les fonctions de récupération

```typescript
import {
  getAllBlogs,
  getBlogBySlug,
  getFeaturedBlogs,
  getAllEvents,
  getUpcomingEvents,
  getAllOpportunities,
  getAllReports,
  getAllPartners,
  getAllInitiatives
} from '@/sanity/lib/fetch'
```

### Exemple : Récupérer tous les blogs

```typescript
// Dans un Server Component
import { getAllBlogs } from '@/sanity/lib/fetch'

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <div>
      {blogs.map((blog) => (
        <article key={blog._id}>
          <h2>{blog.title.en}</h2>
          <p>{blog.excerpt?.en}</p>
        </article>
      ))}
    </div>
  )
}
```

### Exemple : Récupérer un blog par slug

```typescript
import { getBlogBySlug } from '@/sanity/lib/fetch'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <article>
      <h1>{blog.title.en}</h1>
      <div>{/* Render content */}</div>
    </article>
  )
}
```

---

## 🌍 Gestion de l'internationalisation

### Helpers disponibles

```typescript
import {
  getLocalizedString,
  getLocalizedText,
  getLocalizedBlockContent,
  formatDate
} from '@/sanity/lib/helpers'
```

### Exemple avec la langue courante

```typescript
'use client'

import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString } from '@/sanity/lib/helpers'
import type { Blog } from '@/types/sanity'

export function BlogCard({ blog }: { blog: Blog }) {
  const { language } = useTranslation() // 'en' ou 'fr'

  return (
    <div>
      <h3>{getLocalizedString(blog.title, language)}</h3>
      <p>{getLocalizedText(blog.excerpt, language)}</p>
    </div>
  )
}
```

---

## 🎯 Exemples pratiques

### 1. Afficher les événements à venir

```typescript
import { getUpcomingEvents } from '@/sanity/lib/fetch'
import { getLocalizedString, formatDate } from '@/sanity/lib/helpers'

export default async function UpcomingEventsSection() {
  const events = await getUpcomingEvents()

  return (
    <section>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{getLocalizedString(event.title, 'en')}</h3>
          <p>{formatDate(event.startDate, 'en')}</p>
          <p>{getLocalizedText(event.description, 'en')}</p>
        </div>
      ))}
    </section>
  )
}
```

### 2. Afficher les opportunités actives

```typescript
import { getAllOpportunities } from '@/sanity/lib/fetch'

export default async function OpportunitiesPage() {
  const opportunities = await getAllOpportunities()

  return (
    <div>
      <h1>Opportunities</h1>
      {opportunities.map((opp) => (
        <div key={opp._id}>
          <h3>{opp.title.en}</h3>
          <p>Type: {opp.opportunityType}</p>
          <p>Organization: {opp.organization}</p>
          <a href={opp.applicationLink} target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </div>
      ))}
    </div>
  )
}
```

### 3. Afficher les partenaires

```typescript
import { getAllPartners } from '@/sanity/lib/fetch'
import { urlFor } from '@/sanity/config/client'
import Image from 'next/image'

export default async function PartnersSection() {
  const partners = await getAllPartners()

  return (
    <section>
      <h2>Our Partners</h2>
      <div className="grid grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div key={partner._id}>
            <Image
              src={urlFor(partner.logo).width(300).url()}
              alt={partner.name}
              width={300}
              height={150}
            />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

### 4. Rendu du contenu rich text (Portable Text)

Pour afficher le contenu riche (avec titres, liens, images, etc.), installez le package `@portabletext/react` :

```bash
npm install @portabletext/react
```

Puis utilisez-le dans vos composants :

```typescript
import { PortableText } from '@portabletext/react'
import { getLocalizedBlockContent } from '@/sanity/lib/helpers'

export function BlogContent({ blog, language }) {
  const content = getLocalizedBlockContent(blog.content, language)

  return (
    <div>
      <PortableText value={content} />
    </div>
  )
}
```

---

## 🔧 Configuration

Les variables d'environnement sont dans `.env.local` :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=mv97jgsb
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=votre-token-ici
```

---

## 📝 Bonnes pratiques

1. **Toujours remplir les deux langues** (EN et FR) dans le studio
2. **Utiliser les slugs uniques** pour chaque contenu
3. **Marquer les événements passés** avec `isPast = true`
4. **Désactiver les opportunités expirées** avec `isActive = false`
5. **Utiliser les numéros d'ordre** pour contrôler l'affichage des partenaires et initiatives
6. **Compresser les images** avant de les uploader dans Sanity

---

## 🆘 Support

Pour toute question sur Sanity :
- Documentation officielle : https://www.sanity.io/docs
- Votre projet Sanity : https://www.sanity.io/manage

---

**Créé pour She STEMin Africa** 🌍
