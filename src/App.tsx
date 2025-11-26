import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Home, Search, FileText, Mail, CheckCircle2, MapPin, DollarSign, SquareStack } from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-12 h-12 text-indigo-600" />
            <h1 className="text-6xl font-bold text-slate-900">easyHousing</h1>
          </div>
          <p className="text-2xl text-slate-600 mb-8">
            Your housing search, fully automated
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Stop wasting hours searching and applying. We find and apply to housing that matches your needs.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <FileText className="w-10 h-10 text-indigo-600" />
              </div>
              <div className="w-1 h-8 bg-indigo-200 hidden md:block absolute translate-x-32 translate-y-24"></div>
              <h3 className="font-bold text-lg mb-2 text-slate-800">1. Set Preferences</h3>
              <p className="text-sm text-slate-600">Location, budget, size</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <div className="w-1 h-8 bg-blue-200 hidden md:block absolute translate-x-32 translate-y-24"></div>
              <h3 className="font-bold text-lg mb-2 text-slate-800">2. We Search</h3>
              <p className="text-sm text-slate-600">All platforms, 24/7</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <div className="w-1 h-8 bg-purple-200 hidden md:block absolute translate-x-32 translate-y-24"></div>
              <h3 className="font-bold text-lg mb-2 text-slate-800">3. Auto-Apply</h3>
              <p className="text-sm text-slate-600">Personal messages</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-800">4. You Get Notified</h3>
              <p className="text-sm text-slate-600">Take over when needed</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why Students Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Find Anywhere</h3>
              <p className="text-slate-600">We search across all major housing platforms automatically</p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Save Time</h3>
              <p className="text-slate-600">No more spending hours searching and applying manually</p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <SquareStack className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">More Responses</h3>
              <p className="text-slate-600">Apply faster and to more listings than ever possible</p>
            </div>
          </div>
        </div>

        {/* CTA Section with Email Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
            Join the Waitlist
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Be the first to know when we launch. Limited spots available.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-lg"
              />
              <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8">
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 text-green-600">
              <CheckCircle2 className="w-8 h-8" />
              <p className="text-xl font-semibold">You're on the list! We'll be in touch soon.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-slate-500">
          <p className="text-sm">© 2025 easyHousing. Making housing search effortless.</p>
        </div>
      </div>
    </div>
  )
}

export default App
