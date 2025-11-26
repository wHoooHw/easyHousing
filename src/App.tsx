import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { WhyUsSection } from '@/components/WhyUsSection'
import { FooterCTA } from '@/components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyUsSection />
      <FooterCTA />
    </div>
  )
}

export default App
