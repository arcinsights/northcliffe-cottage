import Hero from "@/components/hero"
import PhotoGallery from "@/components/photo-gallery"
import About from "@/components/about"
import Amenities from "@/components/amenities"
import Location from "@/components/location"
import BookingSection from "@/components/booking-section"
import Footer from "@/components/footer"

// </CHANGE>

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
