import { getBlogBySlug, getAllBlogs } from '@/sanity'
import { PortableTextRenderer } from '@/components/sanity/PortableTextRenderer'
import { getLocalizedString, getLocalizedBlockContent, formatDate, urlFor } from '@/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

/**
 * EXEMPLE DE PAGE DE DÉTAIL D'UN BLOG
 *
 * Cette page montre :
 * - Comment récupérer un blog par son slug
 * - Afficher le contenu riche avec PortableText
 * - Gérer l'internationalisation
 * - Optimiser les images avec Sanity
 *
 * Pour l'utiliser :
 * 1. Renommez ce dossier pour remplacer app/blog/[blog]/
 * 2. Ou copiez le code dans votre page existante
 */

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  // Si le blog n'existe pas, afficher la page 404
  if (!blog) {
    notFound()
  }

  // Pour cet exemple, on utilise l'anglais par défaut
  // Dans un vrai cas, récupérez la langue depuis le contexte
  const language = 'en' as const

  const title = getLocalizedString(blog.title, language)
  const content = getLocalizedBlockContent(blog.content, language)
  const tag = getLocalizedString(blog.tag, language)
  const formattedDate = formatDate(blog.publishedAt, language)

  return (
    <article className="min-h-screen bg-white">
      {/* En-tête de l'article */}
      <header className="relative w-full h-[500px]">
        {blog.mainImage && (
          <Image
            src={urlFor(blog.mainImage).width(1920).height(1080).url()}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Informations superposées */}
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="container mx-auto max-w-4xl">
            {tag && (
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                {tag}
              </span>
            )}
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <span>{blog.author}</span>
              <span>•</span>
              <time dateTime={blog.publishedAt}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu de l'article */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <PortableTextRenderer value={content} />
      </div>

      {/* Bouton retour */}
      <div className="container mx-auto max-w-4xl px-4 pb-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:underline"
        >
          ← Retour aux articles
        </Link>
      </div>

      {/* Section partage (optionnel) */}
      <aside className="bg-gray-50 border-t py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <h3 className="text-xl font-semibold mb-4">Partagez cet article</h3>
          <div className="flex gap-4">
            {/* Ajoutez vos boutons de partage ici */}
            <p className="text-gray-600">
              Boutons de partage social à venir...
            </p>
          </div>
        </div>
      </aside>
    </article>
  )
}

// Générer les routes statiques pour tous les blogs
export async function generateStaticParams() {
  const blogs = await getAllBlogs()

  return blogs.map((blog) => ({
    slug: blog.slug.current,
  }))
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return {
      title: 'Blog not found',
    }
  }

  const title = getLocalizedString(blog.title, 'en')
  const excerpt = blog.excerpt?.en || ''

  return {
    title: `${title} - She STEMin Africa`,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      images: blog.mainImage ? [urlFor(blog.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60
