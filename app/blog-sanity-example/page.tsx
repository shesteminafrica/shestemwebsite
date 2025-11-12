import { getAllBlogs } from '@/sanity'
import { SanityBlogCard } from '@/components/examples/SanityBlogExample'

/**
 * EXEMPLE DE PAGE BLOG UTILISANT SANITY
 *
 * Cette page est un exemple complet montrant comment :
 * - Récupérer les blogs depuis Sanity (Server Component)
 * - Afficher les blogs avec support bilingue
 * - Gérer le cas où aucun blog n'existe
 *
 * Pour l'utiliser :
 * 1. Renommez ce fichier en remplaçant le dossier actuel app/blog/
 * 2. Ou copiez le code dans votre page blog existante
 * 3. Ajoutez du contenu dans le Studio : http://localhost:3000/studio
 */

export default async function BlogPage() {
  // Récupérer tous les blogs depuis Sanity
  // Les blogs sont triés par date de publication (plus récents en premier)
  const blogs = await getAllBlogs()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-4">
            Blog
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Découvrez nos derniers articles sur les STEM en Afrique
          </p>
        </div>
      </section>

      {/* Liste des blogs */}
      <section className="container mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          // Message si aucun blog n'existe
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-6">
              Aucun article de blog pour le moment.
            </p>
            <p className="text-gray-500">
              Ajoutez votre premier article dans le{' '}
              <a
                href="/studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Sanity Studio
              </a>
            </p>
          </div>
        ) : (
          // Grille de cartes de blogs
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <SanityBlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>

      {/* Section articles en vedette (optionnel) */}
      {blogs.some((blog) => blog.featured) && (
        <section className="bg-white border-t py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Articles en vedette</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs
                .filter((blog) => blog.featured)
                .slice(0, 3)
                .map((blog) => (
                  <SanityBlogCard key={blog._id} blog={blog} />
                ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

// Métadonnées de la page
export const metadata = {
  title: 'Blog - She STEMin Africa',
  description: 'Découvrez nos articles sur les STEM en Afrique',
}

// Revalider la page toutes les 60 secondes (ISR)
export const revalidate = 60
