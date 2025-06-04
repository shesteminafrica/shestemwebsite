"use client"

import { useState } from "react"
import { Heart, User, Mail, CreditCard } from "lucide-react"
import { RevealWrapper } from "./reveal-wrapper"
import { useTranslation } from "@/contexts/language-context"

export function DonationForm() {
  const { t } = useTranslation()
  const [donationType, setDonationType] = useState<"monthly" | "one-time">("monthly")
  const [selectedAmount, setSelectedAmount] = useState(400)
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    needService: "",
    isAnonymous: false,
  })

  const predefinedAmounts = [100, 200, 300, 400]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(0)
  }

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
      <RevealWrapper delay={0.1} direction="up" className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-pink-600">
            <div className="w-8 h-0.5 bg-pink-600"></div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800 uppercase tracking-wider">{t("donation.title")}</h1>
          <div className="flex items-center gap-2 text-pink-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="w-8 h-0.5 bg-pink-600"></div>
          </div>
        </div>
      </RevealWrapper>

      {/* Main Title */}
      <RevealWrapper delay={0.2} direction="up" className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{t("donation.welcome")}</h2>
      </RevealWrapper>

      {/* Description */}
      <RevealWrapper delay={0.3} direction="up" className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-gray-600 text-lg mb-4">{t("donation.description1")}</p>
        <p className="text-gray-600 text-lg">{t("donation.description2")}</p>
      </RevealWrapper>

      {/* Donation Type Selection */}
      <RevealWrapper delay={0.4} direction="up" className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setDonationType("monthly")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              donationType === "monthly" ? "bg-pink-600 text-white shadow-md" : "text-gray-600 hover:text-pink-600"
            }`}
          >
            {donationType === "monthly" && <Heart size={18} fill="currentColor" />}
            {t("donation.monthlyDonation")}
          </button>
          <button
            onClick={() => setDonationType("one-time")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              donationType === "one-time" ? "bg-pink-600 text-white shadow-md" : "text-gray-600 hover:text-pink-600"
            }`}
          >
            {t("donation.oneTimeDonation")}
          </button>
        </div>
      </RevealWrapper>

      {/* Amount Selection */}
      <RevealWrapper delay={0.5} direction="up" className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {predefinedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                selectedAmount === amount
                  ? "bg-pink-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {amount}$
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="flex justify-center">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder="100"
              className="pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent w-32"
            />
          </div>
        </div>
      </RevealWrapper>

      {/* Information Form */}
      <RevealWrapper delay={0.6} direction="up" className="mb-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">{t("donation.yourInformation")}</h3>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder={t("donation.firstName")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder={t("donation.lastName")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
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
        </div>
      </RevealWrapper>

      {/* Payment Buttons */}
      <RevealWrapper delay={0.7} direction="up" className="max-w-md mx-auto space-y-4">
        <button
          onClick={handlePayPalPayment}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          {t("donation.payByPaypal")}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.85.97 1.213 2.115 1.074 3.507z" />
          </svg>
        </button>

        <button
          onClick={handleCardPayment}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
        >
          {t("donation.payByCard")}
          <CreditCard size={20} />
        </button>
      </RevealWrapper>
    </div>
  )
}
