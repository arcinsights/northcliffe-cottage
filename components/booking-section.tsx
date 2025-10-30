import { Button } from "@/components/ui/button"
import { Calendar, Star, Shield, Heart } from "lucide-react"

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
          Book Your <span className="text-teal-600">Peak District</span> Escape
        </h2>
        {/* </CHANGE> */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Experience the magic of Hope Valley at Northcliffe Cottage. Your perfect Peak District holiday cottage awaits.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-amber-500 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">5-Star Reviews</h3>
            <p className="text-sm text-gray-600">Highly rated by guests</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-teal-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Secure Booking</h3>
            <p className="text-sm text-gray-600">Safe & protected</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-rose-500 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Guest Favorite</h3>
            <p className="text-sm text-gray-600">Loved by visitors</p>
          </div>
        </div>

        <div className="bg-teal-600 rounded-2xl p-8 mb-8 shadow-xl text-white">
          <p className="text-lg mb-6 font-medium">
            Ready to experience the Peak District? Book directly through our Airbnb listing for the best rates and
            instant confirmation.
          </p>
          <Button
            size="lg"
            className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-bold"
            asChild
          >
            <a
              href="https://airbnb.co.uk/h/peakdistrict-northcliffe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Check Availability on Airbnb
            </a>
          </Button>
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-2 font-semibold">
            <span className="text-teal-600">Flexible Cancellation</span> •{" "}
            <span className="text-gray-700">Instant Booking</span> • <span className="text-gray-700">24/7 Support</span>
          </p>
          <p>Questions? Contact us through Airbnb messaging for quick responses</p>
        </div>
      </div>
    </section>
  )
}
