import { Check, Target } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'

import { personalSkills, workingPrinciples } from '../../../../data/pages/skills'

import PersonalSkillCard from '../../components/personal/PersonalSkillCard'

// Combines the personal skills cards with an overview of working principles.
export default function SkillsSection() {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr] lg:gap-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
        {personalSkills.map((skill) => (
          <PersonalSkillCard key={skill.title} {...skill} />
        ))}
      </div>

      <aside className="flex flex-col rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3 rounded-lg p-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-blue-600">
            <Target className="size-6 md:size-7 lg:size-9" strokeWidth={2} />
          </div>

          <SectionHeading title="Ma façon de travailler" />
        </div>

        {/* Presents the principles that guide the user's working approach. */}
        <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-col">
          {workingPrinciples.map((principle) => (
            <li key={principle} className="flex items-center gap-2">
              <Check className="mt-0.5 size-5 shrink-0 text-blue-600 lg:size-6" strokeWidth={2.5} />

              <span className="text-xs font-medium leading-relaxed text-text-secondary md:text-sm lg:text-base">
                {principle}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
