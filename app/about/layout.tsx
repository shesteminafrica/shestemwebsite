import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - About Us.",
  description:
    "Discover She STEMin Africa's mission to empower women in STEM fields across Africa. Learn about our initiatives, impact, and commitment to fostering gender equality in science, technology, engineering, and mathematics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

