import { CTASection } from './CTASection'

export function FooterCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <CTASection />
        
        {/* Footer */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-slate-500">
            © 2025 easyHousing. Making housing search effortless.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
            <span>🔒 Secure & Private</span>
            <span>⚡ Lightning Fast</span>
            <span>💚 Student Friendly</span>
          </div>
        </div>
      </div>
    </section>
  )
}

