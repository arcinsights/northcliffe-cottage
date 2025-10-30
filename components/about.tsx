import { Home, Users, Bed, Bath } from "lucide-react"

export default function About() {
  const features = [
    { icon: Users, label: "Sleeps 6", description: "3 Bedrooms", color: "from-teal-500 to-teal-600" },
    { icon: Bed, label: "3 Bedrooms", description: "Comfortable beds", color: "from-slate-600 to-slate-700" },
    { icon: Bath, label: "2 Bathrooms", description: "Including jacuzzi", color: "from-teal-600 to-cyan-600" },
    { icon: Home, label: "Entire Home", description: "Private cottage", color: "from-gray-600 to-gray-700" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-serif">
              Your Perfect <span className="text-teal-600">Peak District</span> Holiday Cottage
            </h2>
            {/* </CHANGE> */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nestled in the heart of Hope Valley, Northcliffe Cottage offers the perfect blend of traditional Peak
              District charm and contemporary luxury. This beautifully renovated stone cottage provides an idyllic base
              for exploring the stunning Derbyshire countryside.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wake up to panoramic views of the Peak District hills, enjoy modern amenities including a luxurious
              jacuzzi bathroom, and relax in stylishly decorated living spaces. Whether you're seeking adventure or
              tranquility, our Hope Valley cottage is your home away from home.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover-lift border border-gray-100"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{feature.label}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
