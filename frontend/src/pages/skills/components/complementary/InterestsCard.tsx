import { interests } from '../../../../data/pages/skills'

export default function InterestsCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      {/* Card heading */}
      <h3 className="mb-4 text-lg font-extrabold text-text-primary md:text-xl">
        Centres d’intérêt
      </h3>

      {/* List of personal interests */}
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {interests.map((interest) => {
          const Icon = interest.icon

          return (
            <li
              key={interest.name}
              className="flex items-center gap-3 rounded-lg border border-blue-100 bg-surface px-3 py-2"
            >
              <Icon className="size-6 shrink-0 text-blue-600" strokeWidth={2} />

              <span className="text-sm font-medium text-text-primary">{interest.name}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
