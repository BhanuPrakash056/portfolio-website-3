import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

// Metadata for SEO
export const metadata: Metadata = {
  title: "Anusha R Karegoudar - Software Engineer & AI Specialist",
  description:
    "Portfolio of Anusha R Karegoudar - Software Engineer specializing in AI, Machine Learning, and Full-Stack Development. Experienced in building innovative solutions with Python, Java, and modern web technologies.",
  authors: [{ name: "Anusha R Karegoudar" }],
  keywords: [
    "Software Engineer",
    "AI Specialist",
    "Machine Learning",
    "Full Stack Developer",
    "React",
    "Python",
    "Java",
    "Portfolio",
  ],
  metadataBase: new URL("https://anushark.co.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anushark.co.in",
    title: "Anusha R Karegoudar - Software Engineer & AI Specialist",
    description:
      "Portfolio of Anusha R Karegoudar - Software Engineer specializing in AI, Machine Learning, and Full-Stack Development.",
    siteName: "Anusha R Karegoudar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anusha R Karegoudar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anusha R Karegoudar - Software Engineer & AI Specialist",
    description:
      "Portfolio of Anusha R Karegoudar - Software Engineer specializing in AI, Machine Learning, and Full-Stack Development.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/mask-icon.svg",
        color: "#6d28d9",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <noscript>
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              background: "#1a1a1a",
              color: "#fff",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Anusha R Karegoudar</h1>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#888" }}>
              Software Engineer & AI Specialist
            </h2>
            <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "1rem" }}>
              Portfolio of Anusha R Karegoudar - Software Engineer specializing in AI, Machine Learning, and
              Full-Stack Development. Experienced in building innovative solutions with Python, Java, and modern web
              technologies.
            </p>
            <p style={{ color: "#888" }}>
              This portfolio uses JavaScript for interactive animations. Please enable JavaScript for the full
              experience.
            </p>
          </div>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
