"use client"

import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ComingSoon } from "@/components/coming-soon"
import { useState, useEffect } from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Check if current time is past December 15, 2025 23:55
    const revealDate = new Date('2025-12-15T23:55:00')
    const now = new Date()
    setIsRevealed(now >= revealDate)
    setIsLoading(false)
  }, [])
  
  if (isLoading) {
    return (
      <html lang="en" className="dark">
        <body className={`font-sans antialiased`}>
          <div className="min-h-screen bg-background" />
        </body>
      </html>
    )
  }
  
  if (!isRevealed) {
    return (
      <html lang="en" className="dark">
        <body className={`font-sans antialiased`}>
          <ComingSoon />
          <Analytics />
        </body>
      </html>
    )
  }
  
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
