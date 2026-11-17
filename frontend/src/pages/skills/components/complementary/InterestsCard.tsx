import { FishingRod } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'
import { interests } from '../../../../data/pages/skills'

// Displays the user's personal interests with their associated icons.
export default function InterestsCard() {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <FishingRod className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" strokeWidth={2} />
        <SectionHeading title="Centres d’intérêt" />
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest) => {
          const Icon = interest.icon

          return (
            <li
              key={interest.name}
              className="flex w-fit items-center gap-3 rounded-lg border border-blue-100 bg-blue-100 px-3 py-2 lg:justify-center"
            >
              <Icon className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-7" strokeWidth={2} />

              <span className="text-xs font-medium text-text-primary md:text-sm lg:text-base">
                {interest.name}
              </span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
