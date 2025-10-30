import {
  Wifi,
  Tv,
  Car,
  Coffee,
  Wind,
  Waves,
  Thermometer,
  UtensilsCrossed,
  Shirt,
  Mountain,
  Trees,
  Home,
} from "lucide-react"

export default function Amenities() {
  const amenities = [
    { icon: Wifi, label: "High-Speed WiFi", description: "Stay connected", color: "text-teal-600" },
    { icon: Tv, label: "Smart TV", description: "Entertainment", color: "text-gray-600" },
    { icon: Car, label: "Free Parking", description: "On-site parking", color: "text-slate-600" },
    { icon: Coffee, label: "Full Kitchen", description: "Fully equipped", color: "text-teal-700" },
    { icon: Waves, label: "Jacuzzi Bath", description: "Luxury bathroom", color: "text-cyan-600" },
    { icon: Thermometer, label: "Central Heating", description: "Year-round comfort", color: "text-gray-700" },
    { icon: Wind, label: "Fresh Linens", description: "Quality bedding", color: "text-slate-500" },
    { icon: UtensilsCrossed, label: "Dining Area", description: "Seats 6 guests", color: "text-teal-600" },
    { icon: Shirt, label: "Washer", description: "Laundry facilities", color: "text-gray-600" },
    { icon: Mountain, label: "Mountain Views", description: "Stunning scenery", color: "text-emerald-600" },
    { icon: Trees, label: "Garden Access", description: "Outdoor space", color: "text-green-600" },
    { icon: Home, label: "Entire Home", description: "Complete privacy", color: "text-slate-700" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Amenities & <span className="text-teal-600">Features</span>
          </h2>
          <p className="text-lg text-gray-600">Everything you need for a comfortable Peak District stay</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover-lift border border-transparent hover:border-gray-200"
            >
              <amenity.icon className={`w-10 h-10 mb-3 ${amenity.color}`} />
              <h3 className="font-semibold mb-1">{amenity.label}</h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-600 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">What Makes Us Special</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-300 font-bold text-xl">✓</span>
              <span>
                <strong>Prime Hope Valley Location:</strong> Perfect base for exploring the Peak District National Park
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-300 font-bold text-xl">✓</span>
              <span>
                <strong>Luxury Jacuzzi Bathroom:</strong> Unwind after a day of Peak District adventures
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-300 font-bold text-xl">✓</span>
              <span>
                <strong>Stunning Views:</strong> Wake up to breathtaking Peak District landscapes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-300 font-bold text-xl">✓</span>
              <span>
                <strong>Traditional Character:</strong> Authentic stone cottage with modern comforts
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-300 font-bold text-xl">✓</span>
              <span>
                <strong>Family Friendly:</strong> Spacious accommodation perfect for families and groups
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
