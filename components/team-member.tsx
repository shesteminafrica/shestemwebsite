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

export function TeamMember({ name, title, image, delay = 0, size = "regular" }: TeamMemberProps) {
  return (
    <RevealWrapper delay={delay} direction="up">
      <div className="flex flex-row gap-2 items-start">
        {/* Profile Image */}
        <div className="mb-3 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={"/a1.png"}
            alt={name}
            width={size === "large" ? 400 : 200}
            height={size === "large" ? 400 : 200}
            className={`object-cover ${size === "large" ? "w-full" : "w-[100px] h-[100px]"}`}
          />
        </div>

        {/* Name and Title */}
        <div>
          <h3 className="font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-pink-600 transition-colors"
          >
            <Linkedin size={14} />
            <span>Voir son profil LinkedIn</span>
          </a>
        </div>
      </div>
    </RevealWrapper>
  )
}
