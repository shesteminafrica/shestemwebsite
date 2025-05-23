import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";


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
  title: "She STEMin Africa - Join a movement that speaks your language, your passion, your ambition.",
  description: "Overcoming the socio-professional BARRIERS and UNCERTAINTIES faced by African girls and women in STEM fields & careers ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${regular.variable} ${medium.variable} ${semibold.variable}`}>
        {children}
      </body>
    </html>
  );
}
