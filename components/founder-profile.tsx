import Image from "next/image"
import { Linkedin } from "lucide-react"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"

export function FounderProfile() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center bg-white px-4 md:px-20 py-11 rounded-[40px]">
      {/* Founder Image */}
      <RevealWrapper delay={0.1} direction="left" className="h-full flex flex-col justify-between relative" width="100%">
        <div className="rounded-[32px] flex-1 overflow-hidden">
          <Image
            src="/a1.png"
            alt="Dr. Pulchérie Matsodoum Nguemté"
            width={468}
            height={388}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-gray-900 text-lg">Pulchérie Matsodoum Nguemté, PhD - MBus</h3>
          <p className="text-sm text-[#7E8188] mb-4">{t("about.founder.position")}</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <Linkedin size={14} />
            <span>Voir son profil LinkedIn</span>
          </a>
        </div>
      </RevealWrapper>

      {/* Founder Bio */}
      <RevealWrapper delay={0.3} direction="right" className="" width="100%">
        <div>
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            {t("about.founder.title")}
          </h2>
          <div className="space-y-4 text-sm md:text-lg text-[#656565]">
            <p className=" leading-7">
              {t("about.founder.bio1")}
            </p>
            <p className=" leading-7">
              {t("about.founder.bio2")}
            </p>
          </div>
        </div>
      </RevealWrapper>
    </div>
  )
}
