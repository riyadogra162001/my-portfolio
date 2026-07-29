import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 glassmorphism transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-display bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            Riya Dogra
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-medium">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-slate-700 dark:text-slate-300 hover:bg-violet-500/10 hover:text-violet-600 dark:hover:text-violet-400 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white py-3 font-semibold"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;