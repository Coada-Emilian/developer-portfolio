import { Check, Handshake } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'
import { teamContributions } from '../../../../data/pages/skills'

// Highlights the user's contributions and collaborative strengths within a team.
export default function TeamContributionSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full text-blue-600">
            <Handshake className="size-6 md:size-7 lg:size-9" />
          </div>

          <SectionHeading title="En équipe, j’apporte" />
        </div>

        {/* Vertical separator displayed only on large screens */}
        <div className="hidden h-10 w-px shrink-0 bg-blue-200 lg:block" />

        <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teamContributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-2">
              <Check className="mt-0.5 size-5 shrink-0 text-blue-600 lg:size-6" strokeWidth={2.5} />

              <span className="text-xs font-medium leading-relaxed text-text-secondary md:text-sm lg:text-base">
                {contribution}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
