"use client"

import { useState } from "react"
import { User, Mail, CreditCard } from "lucide-react"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"
import Image from "next/image"
import { Button3 } from "./button"
import Link from "next/link"

export function DonationForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    needService: "",
    isAnonymous: false,
    contributionType: "financial",
    tellUsMore: "",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePayPalPayment = () => {
    console.log("Processing PayPal payment...")
    // Implement PayPal integration
  }

  const handleCardPayment = () => {
    console.log("Processing card payment...")
    // Implement card payment integration
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <RevealWrapper delay={0.1} direction="up" className="text-center mb-12 mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image
            src="/trait1.svg"
            alt="decorative trait"
            width={35}
            height={10}
            className="rounded-lg w-full"
          />
          <span className="text-lg md:text-4xl lg:text-[30px] min-w-fit w-full font-medium text-center">{t("donation.title")}</span>
          <Image
            src="/trait2.svg"
            alt="decorative trait"
            width={35}
            height={10}
            className="rounded-lg w-full"
          />
        </div>
      </RevealWrapper>

      {/* Main Title */}
      <RevealWrapper delay={0.2} direction="up" className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{t("donation.welcome")}</h2>
      </RevealWrapper>

      {/* Description */}
      <RevealWrapper delay={0.3} direction="up" className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-gray-600 text-sm md:text-lg mb-4">{t("donation.description1")}</p>
        <p className="text-gray-600 text-sm md:text-lg">{t("donation.description2")}</p>
      </RevealWrapper>

      {/* Payment Buttons */}
      <RevealWrapper delay={0.7} direction="up" className="max-w-lg mx-auto space-y-4" width="100%">
        <Link
          href={"https://www.paypal.com/donate/?hosted_button_id=4SGADSEBKD52Q"}
          target="_blank"
          onClick={handlePayPalPayment}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          {t("donation.payByPaypal")}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.85.97 1.213 2.115 1.074 3.507z" />
          </svg>
        </Link>

        <Link
          href={"https://www.helloasso.com/associations/she-stemin-africa/formulaires/1"}
          target="_blank"
          onClick={handleCardPayment}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          {t("donation.payByCard")}
          <CreditCard size={20} />
        </Link>
      </RevealWrapper>

      {/* In-Kind Donation Section */}
      <RevealWrapper delay={0.8} direction="up" className="text-center mx-auto mt-20 mb-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Image
            src="/trait1.svg"
            alt="decorative trait"
            width={35}
            height={10}
            className="rounded-lg w-full"
          />
          <span className="text-2xl md:text-4xl lg:text-[30px] min-w-fit w-full font-medium text-center">{t("inKindDonation.title")}</span>
          <Image
            src="/trait2.svg"
            alt="decorative trait"
            width={35}
            height={10}
            className="rounded-lg w-full"
          />
        </div>
      </RevealWrapper>

      {/* In-Kind Donation Section */}
      <RevealWrapper delay={0.8} direction="up" className="text-center flex flex-col justify-center items-center mx-auto mt-16 mb-12">
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">{t("inKindDonation.description")}</p>
      </RevealWrapper>

      {/* Information Form */}
      <RevealWrapper delay={0.6} direction="up" className="mb-8 mx-auto flex flex-col justify-center items-center bg-white py-10 rounded-3xl px-2 text-sm md:text-base" width="100%">
        <h3 className="text-2xl font-medium text-center mb-8 text-gray-900">{t("donation.yourInformation")}</h3>

        <div className="max-w-3xl mx-auto space-y-6 mb-8">

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder={t("donation.firstName")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder={t("donation.lastName")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Service Question */}
          <div>
            <label className="block text-gray-700 font-medium mb-3">
              {t("donation.serviceQuestion")} <span className="text-pink-600">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="needService"
                  value="non"
                  checked={formData.needService === "non"}
                  onChange={(e) => handleInputChange("needService", e.target.value)}
                  className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-600"
                />
                <span className="ml-2 text-gray-700">{t("donation.no")}</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="needService"
                  value="oui"
                  checked={formData.needService === "oui"}
                  onChange={(e) => handleInputChange("needService", e.target.value)}
                  className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-600"
                />
                <span className="ml-2 text-gray-700">{t("donation.yes")}</span>
              </label>
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder={t("donation.email")}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            />
          </div>

          {/* Anonymous Donation */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="anonymous"
              checked={formData.isAnonymous}
              onChange={(e) => handleInputChange("isAnonymous", e.target.checked)}
              className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-600"
            />
            <label htmlFor="anonymous" className="ml-2 text-gray-700">
              {t("donation.anonymousDonation")}
            </label>
          </div>

          {/* Contribution Type */}
          <div>
            <label htmlFor="contributionType" className="block text-gray-700 font-medium mb-3">
              {t("contributionType.label")}
            </label>
            <div className="relative">
              <select
                id="contributionType"
                value={formData.contributionType}
                onChange={(e) => handleInputChange("contributionType", e.target.value)}
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent appearance-none"
              >
                <option value="financial">{t("contributionType.options.financial")}</option>
                <option value="material">{t("contributionType.options.material")}</option>
                <option value="immaterial">{t("contributionType.options.immaterial")}</option>
                <option value="other">{t("contributionType.options.other")}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Tell us more */}
          <div>
            <label htmlFor="tellUsMore" className="block text-gray-700 font-medium mb-3">
              {t("tellUsMore")}
            </label>
            <textarea
              id="tellUsMore"
              value={formData.tellUsMore}
              onChange={(e) => handleInputChange("tellUsMore", e.target.value)}
              placeholder="Enter details here..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            ></textarea>
          </div>

        </div>

        <Button3 value="inKindDonation.button" />
      </RevealWrapper>
    </div>
  )
}
