import { Search, FileText, Mail, CheckCircle2 } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: FileText,
      title: "Set Preferences",
      description: "Location, budget, size",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Search,
      title: "We Search",
      description: "All platforms, 24/7",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Auto-Apply",
      description: "Personal messages",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: CheckCircle2,
      title: "You Get Notified",
      description: "Take over when needed",
      color: "green",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    }
  ]

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Simple, automated, effective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-200 to-transparent" />
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${step.bgColor} rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-600">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

