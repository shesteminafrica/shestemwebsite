import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const regular = localFont({
  src: "./fonts/DMSans_Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./fonts/DMSans_Medium.ttf",
  variable: "--medium-font",
});

const semibold = localFont({
  src: "./fonts/DMSans_SemiBold.ttf",
  variable: "--semibold-font",
});

export const metadata: Metadata = {
  title:
    "She STEMin Africa",
  description:
    "Overcoming the socio-professional BARRIERS and UNCERTAINTIES faced by African girls and women in STEM fields & careers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${regular.variable} ${medium.variable} ${semibold.variable} bg-[#f5f5f5]`}
      >
        <LanguageProvider>
          <Header />
            {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

