import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - Opportunité de bourse : L'Oréal-UNESCO - Fullbright 2025-2026 - RSTMH (The Royal Society of Tropical Médecine & Hygiene)",
  description:
    "do not hesitate to contact us with your requirements. We will get back to you as soon as possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

