import Image from "next/image"
import { Linkedin } from "lucide-react"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"

export function FounderProfile() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Founder Image */}
      <RevealWrapper delay={0.1} direction="left" className="md:col-span-1" width="100%">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/a1.png"
            alt="Dr. Pulchérie Matsodoum Nguemté"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-gray-900">Pulchérie Matsodoum Nguemté, PhD - MBus</h3>
          <p className="text-sm text-gray-600 mb-2">Founder & Founder</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-pink-600 transition-colors"
          >
            <Linkedin size={14} />
            <span>Voir son profil LinkedIn</span>
          </a>
        </div>
      </RevealWrapper>

      {/* Founder Bio */}
      <RevealWrapper delay={0.3} direction="right" className="md:col-span-2 " width="100%">
        <div>
          <h2 className="text-xl font-bold mb-4">
            « She STEMin Africa » project is the initiative of Dr. Pulchérie Matsodoum Nguemté.
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Pulcherie comes from the western region of Cameroon (« Bamiléké »), and is the 3rd of 5 children, mainly
              girls. Among her siblings, she is by far the least intelligent (or so she has always convinced herself),
              due to her poor academic prowess in high school. But, she quickly realized her abilities when she
              determined to achieve her goals. In fact, she is persevering and has always been described as a strong
              woman. She ended up passing all her classes to the point of becoming the first (men and women combined) to
              hold a PhD degree in her entire extended family.
            </p>
            <p>
              Dr. Matsodoum studied in Cameroon and obtained a Master's degree in Plant Biotechnology. After being
              selected for a doctorate, her thesis topic, which dealt with the clean-up of hydrocarbon-polluted soils,
              was funded by the Schlumberger Foundation (Faculty For The Future). This grant is awarded to women from
              developing countries enrolled in doctoral or post-doctoral studies. Dr. Matsodoum pursued her thesis work
              in partnership with the University of Yaoundé I in Cameroon and the University of Strasbourg in France and
              defended her doctoral thesis in Biotechnologies and Environment on May 20, 2019. This day is a celebration
              day in her country and will remain memorable for her, especially as it marks Cameroon's independence.
            </p>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
