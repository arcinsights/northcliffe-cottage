import type { Metadata } from "next"
import Hero from "@/components/hero"
import PhotoGallery from "@/components/photo-gallery"
import About from "@/components/about"
import Amenities from "@/components/amenities"
import Location from "@/components/location"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Northcliffe Cottage - Luxury Holiday Cottage in Hope Valley, Peak District",
  description:
    "Discover your perfect Peak District getaway at Northcliffe Cottage in Hope Valley. Luxury holiday cottage with jacuzzi, stunning views, modern amenities. Book your Peak District escape today.",
  keywords:
    "Peak District cottage, Hope Valley holiday cottage, Peak District accommodation, luxury cottage Peak District, holiday rental Hope Valley, Peak District getaway, Derbyshire cottage, Peak District vacation rental",
  openGraph: {
    title: "Northcliffe Cottage - Luxury Holiday Cottage in Hope Valley, Peak District",
    description: "Luxury holiday cottage in the heart of Hope Valley with stunning Peak District views",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PhotoGallery />
      <Amenities />
      <Location />
      <BookingSection />
      <Footer />
    </main>
  )
}
