import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - Contribution.",
  description:
    "Support She STEMin Africa's mission by contributing to our initiatives. Learn how you can make a difference through donations, volunteering, or in-kind support to empower women in STEM across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

