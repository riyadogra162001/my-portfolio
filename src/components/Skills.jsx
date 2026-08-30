import React, { useState } from 'react'
import { Code, Layout, Layers, Settings } from 'lucide-react'
import { skills } from '../data/portfolioData'
import useInView from '../hooks/useInView'

const iconMap = {
  Code,
  Layout,
  Layers,
  Settings
}

function Skills() {
  const [skillCategory, setSkillCategory] = useState('all')

  // Animation trigger
  const [ref, visible] = useInView()

  const filteredSkills =
    skillCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === skillCategory)

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-28"
    >

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div
        className={`
          space-y-4
          text-center
          max-w-3xl
          mx-auto
          mb-12 sm:mb-16

          transition-all
          duration-1000
          ease-out

          ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-12'
          }
        `}
      >

        {/* Badge */}
        <div
          className={`
            inline-flex
            items-center
            space-x-2
            px-3
            py-1
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/5
            text-violet-600
            dark:text-violet-400
            text-xs
            font-semibold
            uppercase
            tracking-wider
            badge-glow-purple

            transition-all
            duration-700

            ${
              visible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
            }
          `}
          style={{
            transitionDelay: visible ? '150ms' : '0ms'
          }}
        >
          <Code size={12} />
          <span>Expertise</span>
        </div>

        {/* Heading */}
        <h2
          className={`
            text-3xl
            md:text-4xl
            font-extrabold
            font-display
            text-slate-900
            dark:text-slate-50

            transition-all
            duration-700
            ease-out

            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
          style={{
            transitionDelay: visible ? '300ms' : '0ms'
          }}
        >
          Technical Skillset
        </h2>

        {/* Description */}
        <p
          className={`
            text-slate-500
            dark:text-slate-400
            font-light
            text-sm
            sm:text-base

            transition-all
            duration-700
            ease-out

            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
          style={{
            transitionDelay: visible ? '450ms' : '0ms'
          }}
        >
          Categorized skills highlighting my efficiency levels.
        </p>

        {/* =====================================================
            CATEGORY FILTERS
        ====================================================== */}
        <div
          className={`
            flex
            flex-wrap
            justify-center
            gap-2
            pt-5 sm:pt-6

            transition-all
            duration-700
            ease-out

            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
          style={{
            transitionDelay: visible ? '600ms' : '0ms'
          }}
        >
          {['all', 'frontend', 'cms', 'design', 'tools'].map(
            (cat, index) => (
              <button
                key={cat}
                onClick={() => setSkillCategory(cat)}
                className={`
                  px-3 sm:px-4
                  py-1.5
                  rounded-full
                  text-[10px] sm:text-xs
                  font-bold
                  uppercase
                  transition-all
                  duration-300

                  ${
                    skillCategory === cat
                      ? `
                        bg-violet-600
                        text-white
                        shadow-lg
                        shadow-violet-600/20
                        scale-105
                      `
                      : `
                        border
                        border-slate-200
                        dark:border-slate-700
                        text-slate-500
                        dark:text-slate-400

                        hover:bg-slate-100
                        dark:hover:bg-slate-800

                        hover:text-slate-700
                        dark:hover:text-slate-200

                        hover:-translate-y-0.5
                      `
                  }
                `}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'translateY(0)'
                    : 'translateY(15px)',
                  transition: 'all 600ms ease-out',
                  transitionDelay: visible
                    ? `${650 + index * 100}ms`
                    : '0ms'
                }}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          SKILL CARDS
      ====================================================== */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-3
          sm:gap-4
        "
      >

        {filteredSkills.map((skill, idx) => {
          const IconComponent = iconMap[skill.icon] || Code

          return (
            <div
              key={`${skillCategory}-${skill.name}`}
              className={`
                flex
                flex-col
                items-center
                justify-center

                p-4
                sm:p-5

                min-h-[150px]
                sm:min-h-[165px]

                rounded-2xl

                bg-white/30
                dark:bg-slate-900/40

                border
                border-slate-200/60
                dark:border-slate-700/60

                backdrop-blur-sm

                shadow-sm

                group

                transition-all
                duration-700
                ease-out

                hover:-translate-y-2
                hover:scale-[1.03]
                hover:border-violet-500/40
                hover:shadow-lg
                hover:shadow-violet-500/10

                ${
                  visible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{
                transitionDelay: visible
                  ? `${900 + idx * 120}ms`
                  : '0ms'
              }}
            >

              {/* =================================================
                  ICON
              ================================================== */}
              <div
                className="
                  w-10
                  h-10
                  rounded-xl

                  bg-violet-500/10
                  text-violet-500

                  border
                  border-violet-500/20

                  flex
                  items-center
                  justify-center

                  mb-3

                  transition-all
                  duration-500

                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-violet-500/20
                  group-hover:shadow-md
                  group-hover:shadow-violet-500/10
                "
              >
                <IconComponent size={20} />
              </div>

              {/* =================================================
                  SKILL NAME
              ================================================== */}
              <span
                className="
                  text-xs
                  font-semibold
                  text-center
                  mb-1

                  text-slate-700
                  dark:text-slate-200

                  transition-colors
                  duration-300

                  group-hover:text-violet-500
                  dark:group-hover:text-violet-400
                "
              >
                {skill.name}
              </span>

              {/* =================================================
                  CATEGORY
              ================================================== */}
              <span
                className="
                  text-[9px]
                  sm:text-[10px]

                  text-slate-400
                  dark:text-slate-500

                  font-mono
                "
              >
                {skill.category.toUpperCase()}
              </span>

              {/* =================================================
                  PROGRESS BAR
              ================================================== */}
              <div
                className="
                  w-full
                  bg-slate-200
                  dark:bg-slate-700

                  h-1

                  rounded-full
                  mt-3

                  overflow-hidden
                "
              >
                <div
                  className="
                    bg-gradient-to-r
                    from-violet-500
                    to-cyan-400

                    h-full
                    rounded-full

                    transition-all
                    duration-1000
                    ease-out
                  "
                  style={{
                    width: visible
                      ? `${skill.level}%`
                      : '0%',

                    transitionDelay: visible
                      ? `${1100 + idx * 120}ms`
                      : '0ms'
                  }}
                />
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Skills