import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Shivananda | AI/ML Engineer & Researcher",
  description:
    "Portfolio of Gunda Sai Shivananda - Computer Science student at VIT-AP specializing in Machine Learning, Deep Learning, and Natural Language Processing. Building intelligent systems that solve real-world problems.",
  keywords: [
    "AI",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Portfolio",
    "Sai Shivananda",
    "VIT-AP",
  ],
  authors: [{ name: "Gunda Sai Shivananda" }],
  creator: "Gunda Sai Shivananda",
  generator: "v0.app",
  openGraph: {
    type: "website",
    title: "Sai Shivananda | AI/ML Engineer & Researcher",
    description:
      "Building intelligent systems that solve real-world problems through Machine Learning and Deep Learning",
    siteName: "Sai Shivananda Portfolio",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
