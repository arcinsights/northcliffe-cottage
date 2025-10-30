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
// </CHANGE>

export const metadata: Metadata = {
  title: "Northcliffe Cottage - Luxury Peak District Holiday Cottage in Hope Valley",
  description:
    "Stunning holiday cottage in Hope Valley, Peak District. Modern luxury accommodation with jacuzzi bath, mountain views, and stylish interiors. Perfect for families and couples.",
  generator: "v0.app",
}

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
      {/* </CHANGE> */}
    </html>
  )
}

export const metadata = {
  title: "Northcliffe Cottage",
  description: "A charming Peak District stone cottage with stunning views.",
  openGraph: {
    title: "Northcliffe Cottage",
    description: "A charming Peak District stone cottage with stunning views.",
    url: "https://northcliffe-cottage.uk",
    siteName: "Northcliffe Cottage",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2022-UXeaWI3t0WqwZ8vE9SUP0GaDyIGyIm.jpeg",
        width: 1200,
        height: 630,
        alt: "Northcliffe Cottage exterior",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northcliffe Cottage",
    description: "A charming Peak District stone cottage with stunning views.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2022-UXeaWI3t0WqwZ8vE9SUP0GaDyIGyIm.jpeg",
    ],
  },
};
