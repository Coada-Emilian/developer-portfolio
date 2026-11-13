import { Check, Handshake } from 'lucide-react'

import { teamContributions } from '../../../../data/pages/skills'

export default function TeamContributionSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-50/50 p-3 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
        {/* Team contribution heading */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Handshake className="size-7" />
          </div>

          <h3 className="text-sm font-extrabold whitespace-nowrap text-text-primary lg:text-base">
            En équipe, j’apporte
          </h3>
        </div>

        {/* Vertical separator */}
        <div className="hidden h-10 w-px shrink-0 bg-blue-200 lg:block" />

        {/* Team contributions */}
        <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teamContributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-blue-600" strokeWidth={2.5} />

              <span className="text-xs leading-relaxed text-text-primary">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
