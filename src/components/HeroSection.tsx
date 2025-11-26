import { CTASection } from './CTASection'
import { Home, Search, CheckCircle2, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-30 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-100 rounded-full opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-cyan-200 rounded-full opacity-30 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Automated Housing Search
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Your housing search,{' '}
              <span className="text-indigo-600 inline-block animate-gradient">
                fully automated
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Stop wasting hours searching and applying. We find and apply to housing that matches your needs, automatically.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-slate-700 font-medium">24/7 Automated Search</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">Instant Applications</span>
              </div>
            </div>

            <div className="pt-6">
              <CTASection compact />
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20" />
                
                {/* Illustration content */}
                <div className="relative space-y-6">
                  {/* Search bar mockup */}
                  <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                    <Search className="w-5 h-5 text-slate-400" />
                    <div className="flex-1 h-4 bg-slate-200 rounded animate-pulse" />
                  </div>

                  {/* Housing cards */}
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 shadow-md border border-slate-100 animate-slide-in"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                          <Home className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-slate-200 rounded w-3/4" />
                          <div className="h-3 bg-slate-100 rounded w-1/2" />
                          <div className="flex gap-2 mt-2">
                            <div className="h-2 bg-indigo-200 rounded w-12" />
                            <div className="h-2 bg-purple-200 rounded w-12" />
                          </div>
                        </div>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">150+</div>
                    <div className="text-sm text-slate-600">Auto-applied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

