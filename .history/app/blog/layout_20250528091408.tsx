import type { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "She STEMin Africa - Join a movement that speaks your language, your passion, your ambition.",
  description:
    "Overcoming the socio-professional BARRIERS and UNCERTAINTIES faced by African girls and women in STEM fields & careers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

