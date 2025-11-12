'use client'

import { useTranslation } from '@/contexts/language-context'
import { getLocalizedString, getLocalizedText, formatDate, urlFor } from '@/sanity'
import type { Blog } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Exemple de composant utilisant les données Sanity avec le système i18n existant
 * Ce composant affiche une carte de blog avec le contenu dans la langue actuelle
 */
export function SanityBlogCard({ blog }: { blog: Blog }) {
  const { language } = useTranslation()

  // Récupérer le contenu dans la langue actuelle
  const title = getLocalizedString(blog.title, language)
  const excerpt = getLocalizedText(blog.excerpt, language)
  const tag = getLocalizedString(blog.tag, language)
  const formattedDate = formatDate(blog.publishedAt, language)

  return (
    <Link href={`/blog/${blog.slug.current}`} className="block group">
      <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image */}
        {blog.mainImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={urlFor(blog.mainImage).width(600).height(400).url()}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {tag && (
              <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            )}
          </div>
        )}

        {/* Contenu */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
            <span>{blog.author}</span>
            <span>•</span>
            <time dateTime={blog.publishedAt}>{formattedDate}</time>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {excerpt && (
            <p className="text-gray-600 line-clamp-3">{excerpt}</p>
          )}

          {blog.featured && (
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                {language === 'fr' ? 'En vedette' : 'Featured'}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}

/**
 * Exemple de liste de blogs récupérés depuis Sanity
 * À utiliser dans un Server Component
 */
// import { getAllBlogs } from '@/sanity'
//
// export default async function BlogList() {
//   const blogs = await getAllBlogs()
//
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {blogs.map((blog) => (
//         <SanityBlogCard key={blog._id} blog={blog} />
//       ))}
//     </div>
//   )
// }
