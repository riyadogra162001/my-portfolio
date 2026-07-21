import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Toggle theme class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-violet-600/10 dark:bg-violet-600/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] rounded-full bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero />

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      {/* About & Education / Certifications Section */}
      <About />

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      {/* Experience Section */}
      <Experience />

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      {/* Projects Section */}
      <Projects />

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      {/* Skills Section */}
      <Skills />

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App
