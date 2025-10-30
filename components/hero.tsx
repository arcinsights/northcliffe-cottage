"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/northcliffe%20-%2017-WwUnjMMwCIntstT3iY9J5sESwBrbWd.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>
      {/* </CHANGE> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <MapPin className="w-5 h-5" />
          <p className="text-lg font-semibold tracking-wide">Hope Valley, Peak District</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up drop-shadow-lg font-serif">
          Northcliffe Cottage
        </h1>
        {/* </CHANGE> */}
        <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed animate-fade-in-up animation-delay-200 font-medium">
          Your luxury Peak District retreat with breathtaking views, modern comforts, and authentic charm
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Check Availability
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Gallery
          </Button>
          {/* </CHANGE> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
