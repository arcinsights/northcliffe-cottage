import type React from "react"
import type { Metadata } from "next"
import { Outfit, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Northcliffe Cottage - Luxury Peak District Holiday Cottage in Hope Valley",
  description:
    "Discover your perfect Peak District getaway at Northcliffe Cottage in Hope Valley. Luxury holiday cottage with jacuzzi, stunning views, modern amenities, and pet-friendly accommodation. Book your Peak District escape today.",
  keywords:
    "Peak District cottage, Hope Valley holiday cottage, Peak District accommodation, luxury cottage Peak District, holiday rental Hope Valley, Peak District getaway, Derbyshire cottage, Peak District vacation rental, Bradwell cottage",
  openGraph: {
    title: "Northcliffe Cottage - Luxury Peak District Holiday Cottage",
    description:
      "Stunning holiday cottage in Hope Valley with jacuzzi bath, mountain views, and stylish interiors. Perfect for families and couples.",
    url: "https://northcliffe-cottage.uk",
    siteName: "Northcliffe Cottage",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2022-UXeaWI3t0WqwZ8vE9SUP0GaDyIGyIm.jpeg",
        width: 1200,
        height: 630,
        alt: "Northcliffe Cottage - Traditional Peak District stone cottage exterior",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northcliffe Cottage - Peak District Holiday Cottage",
    description: "Luxury holiday cottage in Hope Valley with stunning Peak District views and modern amenities.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2022-UXeaWI3t0WqwZ8vE9SUP0GaDyIGyIm.jpeg",
    ],
  },
  generator: "v0.app",
}
// </CHANGE>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dancingScript.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
