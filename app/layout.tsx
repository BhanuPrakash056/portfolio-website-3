"use client"

import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Metadata for SEO
const siteMetadata = {
  title: "Anusha R Karegoudar - Software Engineer & AI Specialist",
  description: "Portfolio of Anusha R Karegoudar - Software Engineer specializing in AI, Machine Learning, and Full-Stack Development. Experienced in building innovative solutions with Python, Java, and modern web technologies.",
  url: "https://anushark.co.in", // Replace with your actual domain
  image: "/og-image.jpg", // Add your OG image to public folder
  author: "Anusha R Karegoudar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="keywords" content="Software Engineer, AI Specialist, Machine Learning, Full Stack Developer, React, Python, Java, Portfolio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={`${siteMetadata.url}${siteMetadata.image}`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteMetadata.url} />
        <meta property="twitter:title" content={siteMetadata.title} />
        <meta property="twitter:description" content={siteMetadata.description} />
        <meta property="twitter:image" content={`${siteMetadata.url}${siteMetadata.image}`} />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#6d28d9" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteMetadata.url} />
      </head>
      <body className={`font-sans antialiased`}>
        <noscript>
          <div style={{ padding: '2rem', textAlign: 'center', background: '#1a1a1a', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Anusha R Karegoudar</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#888' }}>Software Engineer & AI Specialist</h2>
            <p style={{ maxWidth: '600px', lineHeight: '1.6', marginBottom: '1rem' }}>
              {siteMetadata.description}
            </p>
            <p style={{ color: '#888' }}>
              This portfolio uses JavaScript for interactive animations. Please enable JavaScript for the full experience.
            </p>
          </div>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
