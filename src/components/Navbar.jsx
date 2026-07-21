import React from 'react'
import { Sun, Moon } from 'lucide-react'

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 glassmorphism transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-display bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Riya Dogra
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-medium">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a href="#about" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
            id="theme-toggler"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-600" />}
          </button>

          {/* Let's Talk button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
