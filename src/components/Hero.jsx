import React from 'react'
import { Download, Mail, Phone, Globe, Code } from 'lucide-react'
import { Github, Linkedin } from './icons/BrandIcons'

function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple">
            <span>Web Designer & Frontend Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-slate-900 dark:text-slate-50">
            Designing & Developing <br />
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent text-glow">
              Beautiful User Interfaces
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            Hi, I'm Riya Dogra. I specialize in building responsive, modern, and high-performance web applications using HTML, CSS, JavaScript, Bootstrap, React.js, Tailwind CSS, and
            custom design platforms. Additionally, I have basic knowledge of CMS platforms like Kajabi, Webflow, Squarespace, WordPress and Shopify, as well as design tools like Photoshop and Figma.
            I merge visual aesthetics with robust frontend code to deliver clean, user-friendly, and responsive web experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-all"
            >
              Get In Touch
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-full text-slate-500 hover:text-violet-500 dark:text-slate-400 dark:hover:text-violet-400 text-sm transition-all"
              title="Print / Save CV as PDF"
            >
              <Download size={16} />
              <span>Print Resume</span>
            </button>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="mailto:riyadogra162001@gmail.com" className="flex items-center space-x-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
              <Mail size={16} className="text-violet-500" />
              <span>riyadogra162001@gmail.com</span>
            </a>
            <a href="tel:+918968728161" className="flex items-center space-x-2 hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
              <Phone size={16} className="text-cyan-500" />
              <span>+91 8968728161</span>
            </a>
            <span className="flex items-center space-x-2">
              <Globe size={16} className="text-fuchsia-500" />
              <span>Pathankot, Punjab, India</span>
            </span>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

            {/* Outer Decorative Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/20 dark:border-violet-500/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/10 dark:border-cyan-500/25 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>

            {/* Main Glowing Card */}
            <div className="absolute inset-8 rounded-3xl overflow-hidden glassmorphism flex flex-col justify-between p-6 sm:p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/80 animate-float">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                  <Code size={20} />
                </div>
                <div className="flex space-x-1.5">
                  <span className="py-1 font-mono text-[9px] text-emerald-500 bg-emerald-500/10 rounded-full px-1.5 font-bold uppercase">Active</span>
                </div>
              </div>

              <div className="my-auto space-y-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold font-display">Title</p>
                  <p className="text-lg font-bold text-slate-800 dark:text-slate-100">Web Designer & Front-End Developer</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold font-display">Specialization</p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">UI Theme Customization, React.js, Tailwind</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-200/50 dark:border-slate-700/80">
                <div className="flex space-x-2">
                  <a href="https://github.com/riyadogra162001" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/riya-dogra-rd2001/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                </div>
                <span className="text-xs font-mono text-violet-500 dark:text-violet-400 font-bold">&lt;Riya /&gt;</span>
              </div>
            </div>

            {/* Little Floating Decorative Elements */}
            <div className="absolute top-2 right-2 p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 backdrop-blur-md text-xs font-mono hidden sm:block">
              const exp = "1+ Year"
            </div>
            <div className="absolute bottom-2 left-2 p-3 rounded-2xl bg-fuchsia-500/10 text-fuchsia-500 border border-fuchsia-500/20 backdrop-blur-md text-xs font-mono hidden sm:block">
              design: true
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
