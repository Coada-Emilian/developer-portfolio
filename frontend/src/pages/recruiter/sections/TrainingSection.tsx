import { Check, GraduationCap } from 'lucide-react'

import SectionHeading from '../../../components/shared/SectionHeading'
import { learningPoints } from '../../../data/pages/recruiter'

// Highlights ongoing training, practical learning and professional development.
export default function TrainingSection() {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-blue-100 bg-blue-100/60 p-4">
      {/* Introduces the section with its education and training icon. */}
      <div className="flex items-center gap-2">
        <GraduationCap className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" />

        <SectionHeading title="Formation & montée en compétences" />
      </div>

      {/* Lists the main areas of ongoing learning and professional development. */}
      <ul className="my-auto flex flex-col gap-2">
        {learningPoints.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-blue-600 md:size-6 lg:size-7"
              strokeWidth={2.5}
            />

            <span className="text-xs font-medium text-text-primary md:text-sm lg:text-base">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
