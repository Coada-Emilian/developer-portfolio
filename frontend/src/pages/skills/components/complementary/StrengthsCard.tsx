import { BriefcaseBusiness, Check } from 'lucide-react'

import { profileStrengths } from '../../../../data/pages/skills'

export default function StrengthsCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      {/* Card heading */}
      <div className="mb-3 flex items-center gap-3">
        <BriefcaseBusiness className="size-8 shrink-0 text-blue-600" strokeWidth={2} />

        <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Mes atouts</h3>
      </div>

      {/* Professional strengths */}
      <ul className="space-y-1.5">
        {profileStrengths.map((strength) => (
          <li key={strength} className="flex items-start gap-2">
            <Check className="mt-0.5 size-5 shrink-0 text-blue-600" strokeWidth={2.5} />

            <span className="text-sm font-medium text-text-primary">{strength}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
