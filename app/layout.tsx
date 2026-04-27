import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "RX Gerenciamento | Obras sem surpresas",
  description: "Orçamento, planejamento e gerenciamento para todo o Brasil! Metodologia tradicional, BIM 4D e 5D",
  icons: {
    icon: "/rxWhite.png",
  },
  openGraph: {
    siteName: "RX Geranciamento",
    title: "RX Geranciamento",
    type: "website",
    images: [
      {
        url: "/rxBlack.png",
        alt: "RX Geranciamento",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
