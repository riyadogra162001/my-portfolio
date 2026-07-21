import React from 'react'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200/50 dark:border-slate-700/50 py-8 text-center text-xs text-slate-500 dark:text-slate-400 bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Riya Dogra. All rights reserved.</p>
        <div className="flex items-center space-x-1.5 text-slate-500 dark:text-slate-400">
          <span>Made with</span>
          <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
