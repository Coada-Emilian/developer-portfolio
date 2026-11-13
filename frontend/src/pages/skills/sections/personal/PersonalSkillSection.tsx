import { Check, Target } from 'lucide-react'

import { personalSkills, workingPrinciples } from '../../../../data/pages/skills'

import PersonalSkillCard from '../../components/personal/PersonalSkillCard'

export default function PersonalSkillsSection() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr] lg:gap-5">
      {/* Personal skills cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {personalSkills.map((skill) => (
          <PersonalSkillCard key={skill.title} {...skill} />
        ))}
      </div>

      {/* Working principles and professional approach */}
      <aside className="flex flex-col rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3 rounded-lg p-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-blue-600">
            <Target className="size-8" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-extrabold text-text-primary md:text-xl">
            Ma façon de travailler
          </h3>
        </div>

        {/* List of working principles */}
        <ul className="space-y-3">
          {workingPrinciples.map((principle) => (
            <li key={principle} className="flex items-start gap-2">
              <Check
                className="mt-0.5 size-4 shrink-0 text-blue-600 md:size-4.5 lg:size-5"
                strokeWidth={2.5}
              />

              <span className="text-xs leading-relaxed font-medium text-text-secondary lg:text-sm">
                {principle}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
