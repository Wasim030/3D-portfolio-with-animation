'use client'

import { useState } from 'react'
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { WelcomeScreen } from "@/components/sections/WelcomeScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScroll />
        <CustomCursor />
        <Header />

        {showWelcome ? (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        ) : (
          children
        )}
      </body>
    </html>
  )
}