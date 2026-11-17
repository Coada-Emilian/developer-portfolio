import { FishingRod } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'
import { interests } from '../../../../data/pages/skills'

export default function InterestsCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm flex flex-col gap-4">
      {/* Card heading */}

      <div className="mb-4 flex items-center gap-3">
        {' '}
        <FishingRod className="size-6 md:size-7 lg:size-9 shrink-0 text-blue-600" strokeWidth={2} />
        <SectionHeading title="Centres d’intérêt" />
      </div>

      {/* List of personal interests */}
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
        {interests.map((interest) => {
          const Icon = interest.icon

          return (
            <li
              key={interest.name}
              className="flex items-center lg:justify-center gap-3 rounded-lg border border-blue-100 bg-surface px-3 py-2 w-fit"
            >
              <Icon className="size-5 md:size-6 lg:size-7 shrink-0 text-blue-600" strokeWidth={2} />

              <span className="text-xs md:text-sm lg:text-base font-medium text-text-primary">
                {interest.name}
              </span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
