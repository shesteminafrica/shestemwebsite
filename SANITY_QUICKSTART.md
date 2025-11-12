# Guide de démarrage rapide Sanity

## ✅ Configuration terminée

L'intégration Sanity est maintenant complète ! Voici ce qui a été configuré :

### 📦 Packages installés
- `sanity` - CMS principal
- `next-sanity` - Intégration Next.js
- `@sanity/vision` - Outil de test des requêtes
- `@sanity/image-url` - Optimisation d'images
- `@portabletext/react` - Rendu du contenu riche
- `groq` - Langage de requête

### 🗂️ Structure créée

```
shestem/
├── sanity/
│   ├── config/
│   │   └── client.ts          # Client Sanity configuré
│   ├── schemas/
│   │   ├── objects/           # Types réutilisables (localeString, etc.)
│   │   ├── documents/         # Schémas de contenus
│   │   └── index.ts           # Export de tous les schémas
│   ├── lib/
│   │   ├── queries.ts         # Requêtes GROQ
│   │   ├── fetch.ts           # Fonctions de récupération
│   │   └── helpers.ts         # Helpers d'internationalisation
│   └── index.ts               # Export principal
├── types/
│   └── sanity.ts              # Types TypeScript
├── app/
│   └── studio/
│       └── [[...index]]/      # Route du Sanity Studio
├── .env.local                 # Variables d'environnement
├── sanity.config.ts           # Configuration Sanity
├── SANITY_README.md           # Documentation complète
└── SANITY_QUICKSTART.md       # Ce fichier
```

### 🎨 Types de contenus disponibles
1. **Blog** - Articles de blog bilingues
2. **Events** - Événements et webinaires
3. **Opportunities** - Bourses, stages, emplois
4. **Reports** - Rapports annuels et documents
5. **Partners** - Partenaires de l'organisation
6. **Initiatives** - Programmes et initiatives locales

---

## 🚀 Premiers pas

### 1. Accéder au Studio

```bash
npm run dev
```

Puis ouvrez : http://localhost:3000/studio

Connectez-vous avec votre compte Sanity.

### 2. Créer votre premier blog

1. Dans le Studio, cliquez sur **"Blog Posts"**
2. Cliquez **"Create"**
3. Remplissez :
   - **Title** : EN et FR
   - **Slug** : Cliquez "Generate" depuis le titre EN
   - **Author** : Votre nom
   - **Main image** : Uploadez une image
   - **Content** : EN et FR
   - **Published at** : Date de publication
4. Cliquez **"Publish"**

### 3. Utiliser dans un composant

#### Server Component (recommandé)

```typescript
// app/blog/page.tsx
import { getAllBlogs } from '@/sanity'
import { SanityBlogCard } from '@/components/examples/SanityBlogExample'

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <SanityBlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
```

#### Client Component

```typescript
'use client'

import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString } from '@/sanity'
import type { Blog } from '@/types/sanity'

export function BlogTitle({ blog }: { blog: Blog }) {
  const { language } = useTranslation()

  return <h1>{getLocalizedString(blog.title, language)}</h1>
}
```

### 4. Afficher les images Sanity

```typescript
import { urlFor } from '@/sanity'
import Image from 'next/image'

<Image
  src={urlFor(blog.mainImage).width(800).height(600).url()}
  alt={title}
  width={800}
  height={600}
/>
```

---

## 🔄 Migration des données existantes

Pour migrer vos données actuelles de `utils/index.ts` vers Sanity :

### Option 1 : Manuelle (recommandé)
1. Ouvrir le Studio : http://localhost:3000/studio
2. Créer chaque contenu manuellement avec les données de `utils/index.ts`
3. Avantage : Données propres, bien formatées, optimisées

### Option 2 : Script d'importation
Créer un script pour importer automatiquement :

```typescript
// scripts/import-to-sanity.ts
import { client } from '@/sanity/config/client'
import { BlogData } from '@/utils'

async function importBlogs() {
  for (const blog of BlogData) {
    await client.create({
      _type: 'blog',
      title: {
        en: blog.name,
        fr: blog.name, // À traduire
      },
      slug: {
        current: blog.name.toLowerCase().replace(/\s+/g, '-'),
      },
      author: blog.contributor,
      publishedAt: blog.date,
      // ... autres champs
    })
  }
}

importBlogs()
```

---

## 🌐 Utilisation avec le système i18n existant

Le système est déjà intégré avec votre contexte de langue :

```typescript
'use client'

import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString } from '@/sanity'

export function MyComponent({ data }) {
  const { language } = useTranslation() // 'en' ou 'fr'

  // Récupère automatiquement la bonne traduction
  const title = getLocalizedString(data.title, language)

  return <h1>{title}</h1>
}
```

---

## 📝 Exemples d'utilisation

### Blogs récents

```typescript
import { getAllBlogs } from '@/sanity'

const blogs = await getAllBlogs()
const recentBlogs = blogs.slice(0, 3)
```

### Événements à venir

```typescript
import { getUpcomingEvents } from '@/sanity'

const events = await getUpcomingEvents()
```

### Opportunités actives

```typescript
import { getAllOpportunities } from '@/sanity'

const opportunities = await getAllOpportunities()
```

### Partenaires

```typescript
import { getAllPartners } from '@/sanity'

const partners = await getAllPartners()
```

---

## 🔧 Fonctions utiles

### Helpers disponibles

```typescript
import {
  getLocalizedString,    // Pour les titres, noms, etc.
  getLocalizedText,      // Pour les descriptions
  getLocalizedBlockContent, // Pour le contenu riche
  formatDate,            // Formater les dates
  urlFor,                // Optimiser les images
} from '@/sanity'
```

### Exemple complet

```typescript
'use client'

import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString, formatDate, urlFor } from '@/sanity'
import type { Event } from '@/types/sanity'
import Image from 'next/image'

export function EventCard({ event }: { event: Event }) {
  const { language } = useTranslation()

  return (
    <div className="border rounded-lg p-4">
      <Image
        src={urlFor(event.mainImage).width(400).height(300).url()}
        alt={getLocalizedString(event.title, language)}
        width={400}
        height={300}
      />
      <h3>{getLocalizedString(event.title, language)}</h3>
      <p>{formatDate(event.startDate, language)}</p>
      <p>{getLocalizedText(event.description, language)}</p>
    </div>
  )
}
```

---

## 🐛 Dépannage

### Le Studio ne se charge pas
- Vérifiez que les variables d'environnement sont correctes dans `.env.local`
- Redémarrez le serveur : `npm run dev`

### Images ne s'affichent pas
- Assurez-vous d'utiliser `urlFor()` pour générer les URLs
- Vérifiez que les images sont bien uploadées dans Sanity

### Contenu ne s'affiche pas
- Vérifiez que le contenu est publié dans le Studio (bouton "Publish")
- Vérifiez les requêtes avec Sanity Vision : http://localhost:3000/studio/vision

---

## 📚 Ressources

- **Documentation complète** : Voir `SANITY_README.md`
- **Documentation Sanity** : https://www.sanity.io/docs
- **Votre projet** : https://www.sanity.io/manage
- **Composant exemple** : `components/examples/SanityBlogExample.tsx`

---

## ✨ Prochaines étapes

1. ✅ Accéder au Studio
2. ✅ Créer du contenu de test
3. ✅ Intégrer dans vos pages existantes
4. 🔄 Migrer les données de `utils/index.ts`
5. 🎨 Personnaliser les composants d'affichage
6. 🚀 Déployer le Studio en production

---

**Félicitations ! Sanity est prêt à l'emploi** 🎉
