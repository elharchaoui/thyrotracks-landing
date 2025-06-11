// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thyrotracks - Smarter thyroid care starts here.",
  description: "Your health, upgraded with AI.",
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
      </body>
    </html>
  );
}