// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thyrotracks - AI-Powered Thyroid Health Management",
  description: "Join the waitlist for Thyrotracks - revolutionary AI-powered thyroid health monitoring and management platform. Get personalized insights, track symptoms, and optimize your thyroid care with cutting-edge artificial intelligence.",
  keywords: "thyroid health, AI healthcare, thyroid monitoring, health management, artificial intelligence, medical technology",
  authors: [{ name: "Thyrotracks" }],
  creator: "Thyrotracks",
  publisher: "Thyrotracks",
  openGraph: {
    title: "Thyrotracks - AI-Powered Thyroid Health Management",
    description: "Revolutionary AI-powered platform for thyroid health monitoring and management. Join our waitlist today.",
    url: "https://thyrotracks.com",
    siteName: "Thyrotracks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thyrotracks - AI-Powered Thyroid Health Management",
    description: "Revolutionary AI-powered platform for thyroid health monitoring and management. Join our waitlist today.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-100`}>
        {/* Header remains outside the main scrolling area */}
        <Header /> 
        <main>{children}</main>
        {/* Footer is now part of the page's children */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}