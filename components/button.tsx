"use client"

import { useTranslation } from "@/contexts/language-context"
import { MoveUpRight } from "lucide-react"
import Link from "next/link"

export function Button1({value, link=""}:{value:string, link?:string}) {
  const { t } = useTranslation()

  return (
    <button className={link ? "" : "border border-[#F2A0BF] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4     hover:text-white text-[#880F3C]"}>
      {
        link ? (
          <Link href={link} className="border border-[#F2A0BF] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4     hover:text-white text-[#880F3C]">
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-white group-hover:text-[#880F3C]" />
            </div>
          </Link>
        ) : (
          <>
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-white group-hover:text-[#880F3C]" />
            </div>
          </>
        )
      }
    </button>
  )
}

export function Button2({value, link=""}:{value:string, link?:string}) {
  const { t } = useTranslation()

  return (
    <button className={link ? "" : "border bg-white px-5 h-12 md:h-16 rounded-full font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4 text-sm md:text-base hover:text-white text-[#880F3C]"}>
      {
        link ? (
          <Link href={link} className="border bg-white px-5 h-12 md:h-16 rounded-full font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4 text-sm md:text-base hover:text-white text-[#880F3C]">
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className=    "text-white group-hover:text-[#880F3C]" />
            </div>
          </Link>
        ) : (
          <>
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className=    "text-white group-hover:text-[#880F3C]" />
            </div>
          </>
        )
      }
    </button>
  )
}

export function Button3({value, link=""}:{value:string, link?:string}) {
  const { t } = useTranslation()

  return (
    <button className={link ? "" : "border bg-[#DF1862] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4 hover:text-white text-white w-max"}>
      {
        link ? (
          <Link href={link} className="border bg-[#DF1862] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4 hover:text-white text-white w-max">
            {t(value)}
            <div className="rounded-full bg-white group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-[#DF1862] group-hover:text-[#DF1862]" />
            </div>
          </Link>
        ) : (
          <>
            {t(value)}
            <div className="rounded-full bg-white group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-[#DF1862] group-hover:text-[#DF1862]" />
            </div>
          </>
        )
      }
    </button>
  )
}

export function Button4({value, link=""}:{value:string, link?:string}) {
  const { t } = useTranslation()

  return (
    <button className={link ? "" : "border border-[#F2A0BF] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4     hover:text-white text-[#880F3C]"}>
      {
        link ? (
          <Link href={link} className="border border-[#F2A0BF] px-5 h-12 md:h-16 rounded-full text-sm md:text-base font-medium hover:bg-[#880F3C] group transition-colors flex items-center justify-center gap-4     hover:text-white text-[#880F3C]">
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-white group-hover:text-[#880F3C]" />
            </div>
          </Link>
        ) : (
          <>
            {t(value)}
            <div className="rounded-full bg-[#880F3C] group-hover:bg-white size-[36px] flex items-center justify-center">
              <MoveUpRight className="text-white group-hover:text-[#880F3C]" />
            </div>
          </>
        )
      }
    </button>
  )
}