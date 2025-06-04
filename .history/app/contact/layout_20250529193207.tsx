import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "She STEMin Africa - Contact Us. Do not hesitate to contact us with your requirements. We will get back to you as soon as possible.",
  description:
    "Do not hesitate to contact us with your requirements. We will get back to you as soon as possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

