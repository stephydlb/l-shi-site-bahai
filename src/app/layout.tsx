import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bahá'í Sounds Lubumbashi - Platforme Musicale Premium",
  description: "Découvrez les artistes bahá'ís de Lubumbashi. Écoutez, téléchargez et soutenez la musique spirituelle et inspirante.",
  keywords: ["Bahá'í", "Lubumbashi", "musique", "artistes", "spiritualité", "Congo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <Navigation />
        <main className="flex-1 pt-20">{children}</main>
      </body>
    </html>
  );
}
