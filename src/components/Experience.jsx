import React from 'react'
import { Briefcase, ChevronRight } from 'lucide-react'
import { experiences } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple">
          <Briefcase size={12} />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-slate-50">
          Professional Experience
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
          Detailed outline of my professional roles as a Web/frontend designer.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-200 dark:border-slate-700 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline marker */}
            <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-violet-500 transition-all group-hover:scale-125"></span>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start bg-white/30 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-all group-hover:border-violet-500/40 group-hover:shadow-xl group-hover:shadow-violet-500/5">

              {/* Year/Time Period */}
              <div className="md:col-span-4 space-y-1">
                <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-full">{exp.period}</span>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium pt-2">{exp.location}</p>
              </div>

              {/* Role Description */}
              <div className="md:col-span-8 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{exp.company}</h4>
                </div>

                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-none pl-0">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <ChevronRight size={14} className="text-violet-500 mt-1 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
