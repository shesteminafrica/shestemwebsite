import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - Blog sharing transformative stories & STEM insights",
  description:
    "Explore inspiring stories, practical resources and expert insights on She STEMin Africa’s blog, dedicated to breaking down socio-professional barriers and empowering African girls and women to thrive in STEM careers across the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

