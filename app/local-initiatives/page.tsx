// import { CHeroSection } from "@/components/common-hero"
import ArticleCard from "@/components/BlogPage/ArticleCard"
import { RevealWrapper } from "@/components/reveal-wrapper"
import { getAllInitiatives } from "@/sanity";
import { ArrowRight } from "lucide-react"

export default async function LocalInitPage() {
  const allInitiatives = await getAllInitiatives();
  return (
    <main className="min-h-screen ">
      {/* <CHeroSection value="Our Local Initiatives" /> */}
      
      <div className="min-h-screen px-6 py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12 mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-center">Our Local Initiatives</h1>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
                At She STEM in Africa, we believe that change starts at the community level. Our local initiatives are designed to bring science, technology, engineering, and mathematics closer to African communities, while highlighting the creativity and leadership of women.
              </p>
            </RevealWrapper>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {/* Mentors Image */}
            <div className="rounded-2xl overflow-hidden bg-violet-500 h-full  row-span-2">
              {/* <img
                src="/she-stem-mentors-laptop-session.jpg"
                alt="She STEM mentors session"
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Job Opportunity Card 1 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>

            {/* Space Apps Event */}
            <div className="rounded-2xl overflow-hidden bg-violet-500 h-full row-span-2">
              {/* <img src="/space-apps-event-group.jpg" alt="Space Apps event" className="w-full h-full object-cover" /> */}
            </div>

            {/* Job Opportunity Card 2 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>

            {/* Job Opportunity Card 3 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>

            {/* Job Opportunity Card 4 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>

            {/* Job Opportunity Card 5 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="mb-12">
            <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12 mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center">
                Articles about local initiatives
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {
                allInitiatives.map((initiative) => (
                  <ArticleCard key={initiative._id} blog={initiative} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
