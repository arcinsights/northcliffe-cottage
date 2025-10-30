import { MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Northcliffe Cottage</h3>
            <p className="text-background/80 leading-relaxed">
              Your luxury Peak District holiday cottage in the heart of Hope Valley. Experience authentic Derbyshire
              charm with modern comforts.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#gallery" className="hover:text-background transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="https://airbnb.co.uk/h/peakdistrict-northcliffe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Airbnb Listing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Location</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Hope Valley, Peak District
                  <br />
                  Derbyshire, England
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Northcliffe Cottage. All rights reserved.</p>
          <p className="text-xs">
            Peak District Holiday Cottage | Hope Valley Accommodation | Luxury Derbyshire Rental
          </p>
        </div>
      </div>
    </footer>
  )
}
