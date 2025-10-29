// import { CHeroSection } from "@/components/common-hero"
import { ArrowRight } from "lucide-react"

export default function LocalInitPage() {
  return (
    <main className="min-h-screen ">
      {/* <CHeroSection value="Our Local Initiatives" /> */}
      
      <div className="min-h-screen bg-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Local Initiatives</h1>
            <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
              At She STEM in Africa, we believe that change starts at the community level. Our local initiatives are
              designed to bring science, technology, engineering, and mathematics closer to African communities, while
              highlighting the creativity and leadership of women.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            {/* Mentors Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/she-stem-mentors-laptop-session.jpg"
                alt="She STEM mentors session"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Job Opportunity Card 1 */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-white text-5xl font-bold mb-2">OPPORTUNITÉ</div>
                <div className="text-white text-6xl font-bold">D'EMPLOI</div>
              </div>
            </div>

            {/* Space Apps Event */}
            <div className="rounded-2xl overflow-hidden">
              <img src="/space-apps-event-group.jpg" alt="Space Apps event" className="w-full h-full object-cover" />
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
          </div>

          {/* Articles Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Articles about local initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Article Card 1 */}
              <div className="rounded-3xl overflow-hidden bg-white border border-gray-200">
                <div className="relative h-80 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 p-8 flex flex-col items-center justify-center">
                  {/* She STEM Logo */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="text-pink-500 font-bold text-sm">
                      She
                      <br />
                      STEM
                    </div>
                  </div>

                  {/* World Intellectual Property Day */}
                  <div className="text-center mb-8">
                    <div className="text-pink-500 text-xl font-semibold mb-2">World</div>
                    <div className="text-white text-4xl font-bold mb-1">INTELLECTUAL</div>
                    <div className="text-white text-4xl font-bold mb-4">PROPERTY DAY</div>
                    <p className="text-white text-sm max-w-xs mx-auto">
                      Let's continue to support women and girls by respecting and valuing intellectual property
                    </p>
                  </div>

                  {/* Brain Icon */}
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-pink-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>

                  {/* Decorative Lines */}
                  <div className="absolute bottom-8 left-8 space-y-2">
                    <div className="w-1 h-12 bg-white"></div>
                    <div className="w-1 h-8 bg-white"></div>
                    <div className="w-1 h-6 bg-white"></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-gray-500 uppercase mb-2">Article</div>
                  <div className="text-xs text-gray-500 mb-3">April 30, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    From Curiosity to Discovery : Dr. Sabine Adeline Fanta Yadang's STEM Journey
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    In celebration of the International Day of Women and Girls in Science and STEM, I have been fascinated
                    by science with Africa!
                  </p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Article Card 2 */}
              <div className="rounded-3xl overflow-hidden bg-white border border-gray-200">
                <div className="relative h-80 bg-gradient-to-br from-pink-500 to-pink-600 p-8">
                  {/* She STEM Logo */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="text-pink-500 font-bold text-sm">
                      She
                      <br />
                      STEM
                    </div>
                  </div>

                  {/* Quote and Image */}
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-white text-3xl font-bold mb-4 leading-tight">
                      L'innovation c'est voir ce que tout le monde voit et penser à quoi personne ne pense
                    </h3>
                  </div>

                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-40">
                    <img
                      src="/scientist-working-laboratory.jpg"
                      alt="Scientist working"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Button */}
                  <button className="absolute bottom-6 left-6 bg-white text-pink-500 font-semibold px-6 py-2 rounded-full text-sm">
                    En savoir plus sur notre travail
                  </button>
                </div>

                <div className="p-6">
                  <div className="text-xs text-gray-500 uppercase mb-2">Article</div>
                  <div className="text-xs text-gray-500 mb-3">April 30, 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    From Curiosity to Discovery : Dr. Sabine Adeline Fanta Yadang's STEM Journey
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    In celebration of the International Day of Women and Girls in Science and STEM, I have been fascinated
                    by science with Africa!
                  </p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
