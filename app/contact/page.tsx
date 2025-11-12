"use client"

import type React from "react"

import { ArrowRight, User, Mail } from "lucide-react"
import { useState } from "react"
import { ContributeSection } from "@/components/contribute-section"
import { RevealWrapper } from "@/components/reveal-wrapper"
import Image from "next/image"
import { Button3 } from "@/components/button"
import { useTranslation } from "@/contexts/language-context"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    levelOfStudy: "",
    message: "",
    services: [] as string[],
  })
  const { t } = useTranslation()

  const networkingItems = [
    t("activities.networking.items.0"),
    t("activities.networking.items.1"),
    t("activities.networking.items.2"),
  ]
  
  const coachingItems = [
    t("activities.coaching.items.0"),
    t("activities.coaching.items.1"),
    t("activities.coaching.items.2"),
    t("activities.coaching.items.3"),
    t("activities.coaching.items.4"),
  ]

  const grantItems = [
    t("activities.grant_advice.items.0"),
    t("activities.grant_advice.items.1"),
    t("activities.grant_advice.items.2"),
    t("activities.grant_advice.items.3"),
  ]

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-16 lg:py-20 max-w-[100rem] mx-auto">
      <div className="max-w-[100rem] mx-auto mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Illustration */}
          <div className="flex items-center justify-center lg:sticky lg:top-8">
            <div className="relative w-full max-w-md">
              <img
                src="/customer-support-illustration.jpg"
                alt="Customer support representative"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-lg">
            {/* Header Card */}
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-8 md:p-10 mb-8 shadow-lg">
              <div className="text-sm text-white/90 text-center mb-3 font-medium">Contact us</div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-balance text-center">
                Please do not hesitate to contact us with your requirements. We
                will get back to you as soon as possible.
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter last your name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Level of Study */}
              <div>
                <input
                  type="text"
                  placeholder="Level of study or Profession *"
                  value={formData.levelOfStudy}
                  onChange={(e) => setFormData({ ...formData, levelOfStudy: e.target.value })}
                  className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Please Tell us more *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Services Checkboxes */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">Which service do you need? *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Left Column */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("funding")}
                        onChange={() => handleCheckboxChange("funding")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Search for funding</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("mentoring")}
                        onChange={() => handleCheckboxChange("mentoring")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Mentoring</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("research")}
                        onChange={() => handleCheckboxChange("research")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Research initiation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("networking")}
                        onChange={() => handleCheckboxChange("networking")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Networking</span>
                    </label>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("coaching")}
                        onChange={() => handleCheckboxChange("coaching")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">
                        Coaching / Personal support
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("vocational")}
                        onChange={() => handleCheckboxChange("vocational")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">
                        Vocational guidance / Career choice
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("school")}
                        onChange={() => handleCheckboxChange("school")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">School guidance</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes("other")}
                        onChange={() => handleCheckboxChange("other")}
                        className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900">Other</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Message <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <RevealWrapper delay={0.1} direction="up" className="mb-6 md:mb-12 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Rejoignez le mouvement She STEMin Africa</h2>
      </RevealWrapper>
      
      <div className="grid grid-cols-1 gap-6 md:gap-12">
        <RevealWrapper delay={0.1} direction="left" width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-4xl px-4 md:px-6 py-6 md:py-10">
            <div className="">
              <Image
                src="/h4.png"
                alt="Networking event"
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 md:gap-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">Pourquoi devenir membre&nbsp;?</h3>
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Un accès privilégié à nos événements et ateliers</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Des invitations exclusives à de conférences</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">La possibilité de mentorer ou parrainer une jeune fille</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Une voix dans nos décisions stratégiques</span>
                </li>
              </ul>
              <Button3
                value="Devenir Membre"
                link='/about'
              />
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1} direction="right" width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-white rounded-4xl px-4 md:px-6 py-6 md:py-10">
            <div className="flex flex-col justify-center row-start-2 md:row-start-1 gap-3 md:gap-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">Pourquoi rejoindre la communauté&nbsp;?</h3>
              <ul className="space-y-2 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Un accès privilégié à nos événements et ateliers</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Des invitations exclusives à de conférences</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">La possibilité de mentorer ou parrainer une jeune fille</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 max-w-lg">
                  <div className="mt-1 bg-pink-600 rounded-full p-1 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" /></svg>
                  </div>
                  <span className="text-sm md:text-lg lg:text-xl text-[#464A54]">Une voix dans nos décisions stratégiques</span>
                </li>
              </ul>
              <Button3
                value="Devenir Membre"
                link='/about'
              />
            </div>
            <div className="">
              <Image
                src="/h2.png"
                alt="Coaching session"
                width={300}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>

      <ContributeSection />
    </div>
  )
}
