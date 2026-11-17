import { BriefcaseBusiness, Check } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'

import { profileStrengths } from '../../../../data/pages/skills'

export default function StrengthsCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm w-full">
      {/* Card heading */}
      <div className="mb-3 flex items-center gap-3">
        <BriefcaseBusiness
          className="size-6 md:size-7 lg:size-9 shrink-0 text-blue-600"
          strokeWidth={2}
        />

        <SectionHeading title="Mes atouts" />
      </div>

      {/* Professional strengths */}
      <ul className="space-y-1.5">
        {profileStrengths.map((strength) => (
          <li key={strength} className="flex items-center gap-2">
            <Check
              className="mt-0.5 size-5 md:size-6 lg:size-7 shrink-0 text-blue-600"
              strokeWidth={2.5}
            />

            <span className="text-xs md:text-sm lg:text-base font-medium text-text-primary">
              {strength}
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}
