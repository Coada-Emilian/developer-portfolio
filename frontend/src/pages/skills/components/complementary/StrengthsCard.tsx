import { BriefcaseBusiness, Check } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'

import { profileStrengths } from '../../../../data/pages/skills'

// Highlights the user's professional strengths and key assets.
export default function StrengthsCard() {
  return (
    <article className="w-full rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <BriefcaseBusiness
          className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9"
          strokeWidth={2}
        />

        <SectionHeading title="Mes atouts" />
      </div>

      <ul className="space-y-1.5">
        {profileStrengths.map((strength) => (
          <li key={strength} className="flex items-center gap-2">
            <Check
              className="mt-0.5 size-5 shrink-0 text-blue-600 md:size-6 lg:size-7"
              strokeWidth={2.5}
            />

            <span className="text-xs font-medium text-text-primary md:text-sm lg:text-base">
              {strength}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
