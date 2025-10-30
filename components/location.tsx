import { MapPin, Navigation, Clock } from "lucide-react"

export default function Location() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Location</h2>
          {/* </CHANGE> */}
          <p className="text-lg text-muted-foreground">Perfectly positioned in Hope Valley, Peak District</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-card rounded-lg p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Northcliffe Cottage</h3>
                  <p className="text-muted-foreground">
                    Smithy Hill, Bradwell
                    <br />
                    Hope Valley, Derbyshire
                    <br />
                    S33 9JR
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                Nearby Attractions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Castleton</p>
                    <p className="text-sm text-muted-foreground">5 minutes drive - Caves & historic village</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Mam Tor</p>
                    <p className="text-sm text-muted-foreground">10 minutes drive - Iconic Peak District walk</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Chatsworth House</p>
                    <p className="text-sm text-muted-foreground">20 minutes drive - Historic stately home</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Bakewell</p>
                    <p className="text-sm text-muted-foreground">15 minutes drive - Market town & famous tarts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Sheffield</p>
                    <p className="text-sm text-muted-foreground">30 minutes drive - City amenities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.5!2d-1.7534!3d53.3478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487982e3c0e6e5e5%3A0x5f8e8e8e8e8e8e8e!2sSmithy%20Hill%2C%20Bradwell%2C%20Hope%20Valley%20S33%209JR!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Northcliffe Cottage Location - Smithy Hill, Bradwell, Hope Valley S33 9JR"
            />
          </div>
        </div>

        <div className="mt-12 bg-card rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Explore the Peak District</h3>
          {/* </CHANGE> */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hope Valley is the gateway to some of the Peak District's most spectacular scenery. From our cottage, you're
            perfectly positioned to explore dramatic limestone gorges, ancient caves, rolling hills, and charming
            villages. Whether you're an avid hiker, cyclist, or simply seeking peaceful countryside walks, the Peak
            District offers endless opportunities for adventure and relaxation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The area is rich in history and natural beauty, with excellent local pubs, cafes, and shops within easy
            reach. Our Hope Valley location means you can enjoy the tranquility of the countryside while being close to
            all amenities.
          </p>
        </div>
      </div>
    </section>
  )
}
