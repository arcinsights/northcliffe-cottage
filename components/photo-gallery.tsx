"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2022-UXeaWI3t0WqwZ8vE9SUP0GaDyIGyIm.jpeg",
    alt: "Northcliffe Cottage exterior - traditional Peak District stone cottage",
    category: "exterior",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2017-WwUnjMMwCIntstT3iY9J5sESwBrbWd.jpeg",
    alt: "Stunning Peak District views from cottage",
    category: "exterior",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%207-2FcMhHLHLXxnGnjrs6Buamy06faGPj.jpeg",
    alt: "Cozy living room with modern decor",
    category: "living",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%208-zsIhGLf6KRW97eGvIiVxZGjpiLCofA.jpeg",
    alt: "Dining area and fully equipped kitchen",
    category: "living",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%209-3EiUsfF67igvY52h87aWfzUHRX7jmH.jpeg",
    alt: "Modern kitchen with quality appliances",
    category: "living",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2013-uV42JCzcR2eZkUXzExwZ6fIpEnJynG.jpeg",
    alt: "Master bedroom with teal accent wall",
    category: "bedroom",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2011-PEd9VGZGhGolS3I38vihw4JylXwjcN.jpeg",
    alt: "Bedroom with purple feature wall",
    category: "bedroom",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2019-n2NYwNltqKv15mROAzB8YvnTgkz7BI.jpeg",
    alt: "Twin bedroom with Peak District views",
    category: "bedroom",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%202-gHgU3iQQMX9f0fcbOB3w0cAbxihZEJ.jpeg",
    alt: "Luxury bathroom with jacuzzi tub",
    category: "bathroom",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%201-kzy2sghpWxoJcmXzvgokDeHWIEohwu.jpeg",
    alt: "Modern bathroom facilities",
    category: "bathroom",
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length)
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Explore our beautifully appointed Peak District holiday cottage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={photo.url || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <div className="flex flex-col items-center justify-center max-w-7xl max-h-[90vh] w-full h-full">
              <img
                src={photos[selectedImage].url || "/placeholder.svg"}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
              />
              <p className="text-white text-center mt-4 text-sm px-4">{photos[selectedImage].alt}</p>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
