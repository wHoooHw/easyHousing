import { MapPin, DollarSign, SquareStack, Clock, Shield, Zap } from 'lucide-react'

export function WhyUsSection() {
  const benefits = [
    {
      icon: MapPin,
      title: "Find Anywhere",
      description: "We search across all major housing platforms automatically",
      gradient: "from-indigo-500 to-purple-500",
      stat: "10+ Platforms"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "No more spending hours searching and applying manually",
      gradient: "from-blue-500 to-cyan-500",
      stat: "Save 20hrs/week"
    },
    {
      icon: SquareStack,
      title: "More Responses",
      description: "Apply faster and to more listings than ever possible",
      gradient: "from-green-500 to-emerald-500",
      stat: "3x Response Rate"
    },
    {
      icon: Zap,
      title: "Instant Apply",
      description: "Be the first to apply when new listings appear",
      gradient: "from-yellow-500 to-orange-500",
      stat: "< 5min Response"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared with third parties",
      gradient: "from-pink-500 to-rose-500",
      stat: "100% Secure"
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Student-friendly pricing that pays for itself",
      gradient: "from-violet-500 to-purple-500",
      stat: "From $9/month"
    }
  ]

  return (
    <section className="py-24 relative bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Students Choose Us
          </h2>
          <p className="text-xl text-slate-600">
            The smartest way to find your next home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity blur-3xl"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stat badge */}
              <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 mb-4">
                {benefit.stat}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ backgroundImage: `linear-gradient(to right, transparent, var(--tw-gradient-stops))` }} />
            </div>
          ))}
        </div>

        {/* Social proof section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-4 border-white flex items-center justify-center text-white font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">500+ Students</p>
              <p className="text-slate-600">Already on the waitlist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

