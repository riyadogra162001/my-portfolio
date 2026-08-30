import React, { useState } from 'react'
import { User, GraduationCap, Award } from 'lucide-react'
import { education, training } from '../data/portfolioData'
import useInView from '../hooks/useInView'

function About() {
  const [activeTab, setActiveTab] = useState('profile')
  // tabKey increments on every tab change so React re-mounts the content
  // block, which resets keyframe animations and plays them cleanly each time
  const [tabKey, setTabKey] = useState(0)
  const [ref, visible] = useInView()

  function switchTab(tab) {
    setActiveTab(tab)
    setTabKey(k => k + 1)
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* =========================
            LEFT COLUMN
        ========================== */}
        <div
          className={`
            lg:col-span-5
            space-y-6
            transition-all
            duration-1000
            ease-out
            ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }
          `}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight text-slate-900 dark:text-slate-50">
            Professional Journey
            <br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              &amp; Education
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            I am a focused Web Designer &amp; frontend specialist bridging the gap
            between layouts and code. With a background in science and computer
            applications, I build layouts that are visually balanced and
            functionally robust.
          </p>

          {/* =========================
              TABS
          ========================== */}
          <div className="flex flex-col space-y-2 pt-4">

            {/* Profile */}
            <button
              onClick={() => switchTab('profile')}
              className={`
                flex items-center space-x-3
                px-4 py-3 rounded-xl border text-left
                transition-all duration-300
                ${
                  activeTab === 'profile'
                    ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }
              `}
            >
              <User size={18} />
              <span className="text-sm">Personal Profile</span>
            </button>

            {/* Education */}
            <button
              onClick={() => switchTab('education')}
              className={`
                flex items-center space-x-3
                px-4 py-3 rounded-xl border text-left
                transition-all duration-300
                ${
                  activeTab === 'education'
                    ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }
              `}
            >
              <GraduationCap size={18} />
              <span className="text-sm">Education Timeline</span>
            </button>

            {/* Certifications */}
            <button
              onClick={() => switchTab('certifications')}
              className={`
                flex items-center space-x-3
                px-4 py-3 rounded-xl border text-left
                transition-all duration-300
                ${
                  activeTab === 'certifications'
                    ? 'border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400 font-bold scale-[1.01]'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                }
              `}
            >
              <Award size={18} />
              <span className="text-sm">Training &amp; Certifications</span>
            </button>

          </div>
        </div>

        {/* =========================
            RIGHT COLUMN
        ========================== */}
        <div
          className={`
            lg:col-span-7
            bg-white/30 dark:bg-slate-900/40
            border border-slate-200/60 dark:border-slate-700/60
            rounded-3xl p-6 sm:p-8
            backdrop-blur-sm min-h-[350px]
            transition-all duration-1000 ease-out
            ${
              visible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-16'
            }
          `}
          style={{ transitionDelay: visible ? '250ms' : '0ms' }}
        >

          {/* =========================
              PROFILE TAB
          ========================== */}
          {activeTab === 'profile' && (
            <div
              key={`profile-${tabKey}`}
              className="space-y-6 animate-fade-up"
              style={{ animationDuration: '0.45s', animationFillMode: 'both' }}
            >

              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400">
                About Me Summary
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                A skilled Web Designer and Front-End Developer with a proven
                record of building clean, user-centric interfaces &amp; building
                responsive directory websites. Basic understanding of
                Photoshop, Figma, Git, CMS platforms, and CRM dashboard
                development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {[
                  { label: 'Interests',      value: 'Coding, Traveling, Music, Social Activities' },
                  { label: 'Languages',      value: 'English, Hindi, Punjabi' },
                  { label: 'Core Strengths', value: 'Problem Solving, Usability Layout Design, Debugging' },
                  { label: 'Soft Skills',    value: 'Analytical Thinking, Teamwork, Communication' },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className="space-y-1 animate-fade-up"
                    style={{
                      animationDelay: `${80 + idx * 90}ms`,
                      animationDuration: '0.55s',
                      animationFillMode: 'both',
                    }}
                  >
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold font-display">
                      {item.label}
                    </span>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================
              EDUCATION TAB
          ========================== */}
          {activeTab === 'education' && (
            <div
              key={`education-${tabKey}`}
              className="space-y-6 animate-fade-up"
              style={{ animationDuration: '0.45s', animationFillMode: 'both' }}
            >

              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400 mb-4">
                Academic Timeline
              </h3>

              {/* Timeline track */}
              <div className="relative border-l-2 border-violet-500/20 dark:border-violet-500/30 ml-3 space-y-8">

                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 animate-fade-left"
                    style={{
                      animationDelay: `${idx * 140}ms`,
                      animationDuration: '0.55s',
                      animationFillMode: 'both',
                    }}
                  >

                    {/* Dot */}
                    <span className="
                      absolute -left-[7px] top-1.5
                      w-3.5 h-3.5 rounded-full
                      bg-violet-500
                      border-2 border-white dark:border-slate-900
                      shadow-[0_0_0_3px_rgba(139,92,246,0.15)]
                      transition-all duration-300
                      hover:scale-[1.6]
                      hover:shadow-[0_0_0_5px_rgba(139,92,246,0.25)]
                    " />

                    {/* Period + score */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-emerald-500 font-mono">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">
                      {edu.degree}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {edu.institution}, {edu.location}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          )}

          {/* =========================
              CERTIFICATIONS TAB
          ========================== */}
          {activeTab === 'certifications' && (
            <div
              key={`certifications-${tabKey}`}
              className="space-y-6 animate-fade-up"
              style={{ animationDuration: '0.45s', animationFillMode: 'both' }}
            >

              <h3 className="text-xl font-bold font-display text-violet-500 dark:text-violet-400 mb-4">
                Training &amp; Specializations
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {training.map((train, idx) => (
                  <div
                    key={idx}
                    className="
                      flex items-start space-x-4
                      p-4 rounded-2xl
                      bg-slate-100/70 dark:bg-slate-800/50
                      border border-slate-200/60 dark:border-slate-700/60
                      hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-lg
                      transition-transform transition-shadow duration-300
                      animate-fade-up
                    "
                    style={{
                      animationDelay: `${idx * 110}ms`,
                      animationDuration: '0.55s',
                      animationFillMode: 'both',
                    }}
                  >

                    {/* Icon */}
                    <div className="
                      p-3 rounded-xl shrink-0
                      bg-violet-500/10 text-violet-500
                      border border-violet-500/20
                      flex items-center justify-center
                    ">
                      <Award size={20} />
                    </div>

                    {/* Content */}
                    <div className="space-y-0.5">
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                        {train.period}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                        {train.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {train.provider}
                      </p>
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