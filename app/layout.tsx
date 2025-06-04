import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "She STEM Africa - Empowering African Women in STEM",
  description:
    "Developing the future professional workforce in Africa by supporting African girls and women in STEM fields & careers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
            {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
