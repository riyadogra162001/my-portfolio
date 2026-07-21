import React from 'react'
import { Code, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-wider badge-glow-purple">
          <Code size={12} />
          <span>Showcase</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-slate-50">
          Featured Projects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-sm sm:text-base">
          Here are the primary projects I have designed and coded.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-3xl bg-white/30 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-700/60 p-6 backdrop-blur-sm shadow-xl hover:scale-[1.02] hover:border-violet-500/40 transition-all group"
          >
            <div className="space-y-4">
              {/* Header info */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
                  {proj.category}
                </span>

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-slate-400 dark:text-slate-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                    title="Visit Site"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                  {proj.tech}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex flex-wrap gap-1.5">
                {proj.highlights.map((h, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium border border-slate-200/60 dark:border-slate-700/60">
                    {h}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
