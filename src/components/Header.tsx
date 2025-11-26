import { Home } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <Home className="w-6 h-6 text-indigo-600" />
        <span className="text-xl font-bold text-slate-900">easyHousing</span>
      </div>
    </header>
  )
}

