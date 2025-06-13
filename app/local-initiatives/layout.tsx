import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - Our Local Initiatives.",
  description:
    "Explore She STEMin Africa's local initiatives designed to empower girls and women in STEM across various communities. Discover our on-the-ground programs, impact stories, and how we are fostering STEM education and careers at the local level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

