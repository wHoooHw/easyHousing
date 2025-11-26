import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle2 } from 'lucide-react'

interface CTASectionProps {
  compact?: boolean
}

export function CTASection({ compact = false }: CTASectionProps) {
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

  if (compact) {
    return (
      <div className="w-full">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 h-12 px-6 whitespace-nowrap">
              Join Waitlist
            </Button>
          </form>
        ) : (
          <div className="flex items-center gap-2 text-green-600 py-2">
            <CheckCircle2 className="w-6 h-6" />
            <p className="font-semibold">You're on the list!</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-3xl" />
      
      <div className="relative">
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
    </div>
  )
}

