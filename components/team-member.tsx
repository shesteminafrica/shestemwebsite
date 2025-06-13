import Image from "next/image"
import { Linkedin } from "lucide-react"
import { RevealWrapper } from "./reveal-wrapper"

interface TeamMemberProps {
  name: string
  title: string
  image: string
  delay?: number
  size?: "regular" | "large"
}

export function TeamMember({ name, title, image="", delay = 0, size = "regular" }: TeamMemberProps) {
  return (
    <RevealWrapper delay={delay} direction="up" width="100%">
      <div className="flex flex-row gap-2 items-start bg-white p-3 rounded-xl">
        {/* Profile Image */}
        <div className="rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={image ? image : "/a1.png"}
            alt={name}
            width={size === "large" ? 400 : 200}
            height={size === "large" ? 400 : 200}
            className={`object-cover ${size === "large" ? "w-full" : "w-[100px] h-[100px]"}`}
          />
        </div>

        {/* Name and Title */}
        <div>
          <h3 className="font-bold text-sm md:text-lg text-gray-900">{name}</h3>
          <p className="text-xs md:text-sm text-[#7E8188] mb-4">{title}</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <Linkedin size={14} />
            <span>Voir son profil LinkedIn</span>
          </a>
        </div>
      </div>
    </RevealWrapper>
  )
}
