import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EPPAD - Ethiopian Pharmacists and Pharmaceutical Scientists Association in Diaspora",
  description:
    "Empowering Ethiopian pharmaceutical professionals worldwide through education, collaboration, and community impact.",
  keywords: ["EPPAD", "Ethiopian pharmacists", "pharmaceutical scientists", "diaspora", "healthcare", "pharmacy"],
  authors: [{ name: "EPPAD" }],
  openGraph: {
    title: "EPPAD - Ethiopian Pharmacists and Pharmaceutical Scientists Association in Diaspora",
    description: "Empowering Ethiopian pharmaceutical professionals worldwide",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
