"use client"

import { RevealWrapper } from "./reveal-wrapper"
import { TeamMember } from "./team-member"
import { FounderProfile } from "./founder-profile"
import { useTranslation } from "@/contexts/language-context"

export function TeamSection() {
  const { t } = useTranslation()

  // Sample team data - replace with actual data
  const teamMembers = [
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const boardMembers = [
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jessica Dacleu Ndengue, Ph.D",
      title: "Coordinator of the Mentoring activities",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="max-w-[100rem] mx-auto px-4 py-16 md:py-24">
      {/* Team and Ambassadors Section */}
      <RevealWrapper delay={0.1} direction="up" className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team and Ambassadors</h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>

      {/* Board Members Section */}
      <RevealWrapper delay={0.1} direction="up" className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Board Members</h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
        {boardMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            delay={0.1 + index * 0.1}
          />
        ))}
      </div>

      {/* Founder Section */}
      <div className="mt-24 mb-16">
        <FounderProfile />
      </div>
    </div>
  )
}
