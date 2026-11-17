import { MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

import SectionHeading from '../../../components/shared/SectionHeading'
import { technologies } from '../../../data/pages/recruiter'

// Highlights the main technologies used across personal and professional development projects.
export default function TechnicalSkillsSection() {
  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Compétences techniques" underline />

      {/* Displays the highlighted technologies in a responsive five-column grid. */}
      <div className="my-auto grid h-full grid-cols-5 gap-2 sm:gap-3">
        {technologies.map(({ name, icon: Icon }) => (
          <article
            key={name}
            className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-blue-100 bg-blue-100 px-1 py-2 transition-colors"
          >
            <Icon className="size-5 md:size-7 lg:size-9" />

            <span className="text-center text-[8px] font-semibold leading-tight text-text-primary md:text-xs lg:text-sm">
              {name}
            </span>
          </article>
        ))}

        {/* Links to the complete technical skills overview. */}
        <Link
          to="/skills/technical"
          className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-blue-100 bg-blue-100 px-1 py-2 transition-colors hover:border-blue-300 hover:bg-blue-100/70"
        >
          <MoreHorizontal aria-hidden="true" className="size-5 text-blue-600 md:size-7 lg:size-9" />

          <span className="text-center text-[8px] font-semibold leading-tight text-text-primary md:text-xs lg:text-sm">
            et plus
          </span>
        </Link>
      </div>
    </section>
  )
}
