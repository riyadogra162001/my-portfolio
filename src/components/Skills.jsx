import React, { useState } from 'react'
import { Code, Layout, Layers, Settings } from 'lucide-react'
import { skills } from '../data/portfolioData'

const iconMap = {
  Code,
  Layout,
  Layers,
  Settings
}

function Skills() {
  const [skillCategory, setSkillCategory] = useState('all')

  const filteredSkills = skillCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === skillCategory)

  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-28">

      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple">
          <Code size={12} />
          <span>Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-slate-50">
          Technical Skillset
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
          Categorized skills highlighting my efficiency levels.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {['all', 'frontend', 'cms', 'design', 'tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSkillCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${
                skillCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20 scale-[1.02]'
                  : 'border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = iconMap[skill.icon] || Code
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm hover:border-violet-500/40 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-violet-500/20 transition-all">
                <IconComponent size={20} />
              </div>
              <span className="text-xs font-semibold text-center mb-1 text-slate-700 dark:text-slate-200">{skill.name}</span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{skill.category.toUpperCase()}</span>

              {/* Visual indicator bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
