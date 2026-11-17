import { Check, Target } from 'lucide-react'
import SectionHeading from '../../../../../components/shared/SectionHeading'
import { technicalChallenges } from '../../../../../data/pages/lead'

export default function ProjectChallenges() {
  return (
    <div className="w-full rounded-xl bg-blue-50 py-3 lg:px-4 flex gap-6 items-center ">
      <div className="w-0.5 bg-gray-200 h-64 hidden lg:block"></div>
      <div className="h-full flex flex-col lg:gap-6">
        <div className="mb-3 flex items-center gap-2">
          <Target
            aria-hidden="true"
            className="size-5 md:size-6 lg:size-7 shrink-0 text-blue-600"
          />

          <SectionHeading title="Défis techniques" subsection />
        </div>
        <ul className="grid grid-cols-1 gap-3 ">
          {technicalChallenges.map((challenge) => (
            <li key={challenge} className="flex items-center gap-2">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-5 md:size-6 lg:size-7 shrink-0 text-blue-600"
                strokeWidth={2.5}
              />

              <span className="text-xs md:text-sm lg:text-base leading-relaxed text-text-primary sm:text-sm">
                {challenge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
