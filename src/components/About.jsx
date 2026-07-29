import React, { useState } from 'react'
import { User, GraduationCap, Award } from 'lucide-react'
import { education, training } from '../data/portfolioData'

function About() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Heading and Info */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-slate-900 dark:text-slate-50">
            Professional Journey <br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              & Education
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            I am a focused Web Designer & frontend specialist bridging the gap between layouts and code. With a background in science and computer applications, I build layouts that are visually balanced and functionally robust.
          </p>

          {/* Interactive Tabs */}
          <div className="flex flex-col space-y-2 pt-4">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl border text-left transition-all ${activeTab === 'profile' ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'}`}
            >
              <User size={18} />
              <span className="text-sm">Personal Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl border text-left transition-all ${activeTab === 'education' ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'}`}
            >
              <GraduationCap size={18} />
              <span className="text-sm">Education Timeline</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl border text-left transition-all ${activeTab === 'certifications' ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'}`}
            >
              <Award size={18} />
              <span className="text-sm">Training & Certifications</span>
            </button>
          </div>
        </div>

        {/* Right Column: Tab Content */}
        <div className="lg:col-span-7 bg-white/30 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm min-h-[350px]">

          {/* Tab: Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400">About Me Summary</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                A skilled Web Designer and Front-End Developer with a proven record of building clean, user-centric interfaces & building responsive directory websites. Basic understanding of Photoshop, Figma, Git, CMS platforms, and CRM dashboard development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold font-display">Interests</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Coding, Traveling, Music, Social Activities</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold font-display">Languages</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">English, Hindi, Punjabi</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold font-display">Core Strengths</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Problem Solving, Usability Layout Design, Debugging</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold font-display">Soft Skills</span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Analytical Thinking, Teamwork, Communication</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Education */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400 mb-4">Academic Timeline</h3>
              <div className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6">
                    {/* Timeline dot */}
                    <span className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-violet-500 border-2 border-white dark:border-slate-900"></span>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">{edu.period}</span>
                      <span className="text-xs font-bold text-emerald-500 font-mono">{edu.score}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">{edu.degree}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.institution}, {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Certifications */}
          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400 mb-4">Training & Specializations</h3>
              <div className="grid grid-cols-1 gap-6">
                {training.map((train, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <Award size={20} />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">{train.period}</span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">{train.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{train.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}

export default About
