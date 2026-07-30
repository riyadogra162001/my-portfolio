import React from 'react'
import { Download, Mail, Phone, Globe, Code } from 'lucide-react'
import { Github, Linkedin } from './icons/BrandIcons'

function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">

        {/* Hero Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple animate-float">
            <span>Web Designer & Frontend Developer</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-slate-900 dark:text-slate-50">

            <span className="hero-word-toggle">
              <span className="hero-word-item hero-designing">
                Designing
              </span>

              <span className="hero-word-item hero-developing">
                Developing
              </span>
            </span>

            <br />

            <span className="hero-animate hero-delay-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent text-glow">
              Beautiful User Interfaces
            </span>

          </h1>
          

          <p className="mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
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
        <div className="lg:col-span-5 flex justify-center mt-10 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96">

            {/* Outer Decorative Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/20 dark:border-violet-500/30 animate-spin-slow"></div>
            <div
              className="absolute inset-4 rounded-full border border-cyan-500/10 dark:border-cyan-500/25 animate-spin-slow"
              style={{
                animationDirection: "reverse",
                animationDuration: "25s",
              }}
            ></div>

            {/* Main Card */}
            <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-2xl sm:rounded-3xl overflow-hidden glassmorphism flex flex-col justify-between p-4 sm:p-6 md:p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/80 animate-float">

              {/* Top */}
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 border border-violet-500/20">
                  <Code size={18} className="sm:w-5 sm:h-5" />
                </div>

                <span className="px-2 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold uppercase text-emerald-500 bg-emerald-500/10 rounded-full">
                  Active
                </span>
              </div>

              {/* Content */}
              <div className="my-auto space-y-3 sm:space-y-4">

                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold font-display">
                    Title
                  </p>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight text-slate-800 dark:text-slate-100">
                    Web Designer &
                    <br />
                    Front-End Developer
                  </h3>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold font-display">
                    Specialization
                  </p>

                  <p className="text-xs sm:text-sm leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                    UI Theme Customization,
                    <br />
                    React.js & Tailwind CSS
                  </p>
                </div>

              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/80">

                <div className="flex gap-2">
                  <a
                    href="https://github.com/riyadogra162001"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/riya-dogra-rd2001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <Linkedin size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>

                <span className="text-[10px] sm:text-xs font-mono font-bold text-violet-500 dark:text-violet-400">
                  &lt;Riya /&gt;
                </span>
              </div>
            </div>

            {/* Floating Badge - Experience */}
            <div className="absolute -top-3 right-0 sm:top-2 right-2 block">
              <div className="px-3 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-500 text-xs font-mono whitespace-nowrap shadow-lg">
                const exp = "1+ Year"
              </div>
            </div>

            {/* Floating Badge - Design */}
            <div className="absolute -bottom-1 sm:bottom-1 left-0 lg:bottom-4 left-2 block">
              <div className="px-3 py-2 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 backdrop-blur-md text-fuchsia-500 text-xs font-mono whitespace-nowrap shadow-lg">
                design: true
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
