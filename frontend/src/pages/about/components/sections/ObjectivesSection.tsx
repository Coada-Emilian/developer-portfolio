import { objectives } from '../../../../data/aboutObjectives'

export default function ObjectivesSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-100 p-4 w-fit flex gap-4 ">
      {/* Section heading */}

      <svg
        viewBox="0 0 24 24"
        className="size-6 shrink-0 text-blue-800 sm:size-7"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="15" width="4" height="7" rx="1" />
        <rect x="9.5" y="9" width="4" height="13" rx="1" />
        <rect x="17" y="2" width="4" height="20" rx="1" />
      </svg>

      <div>
        <div className="mb-2">
          <h2 className="text-base font-bold text-slate-900">Mes objectifs</h2>
          <div className="mt-1 h-0.5 w-8 rounded-full bg-blue-500" />
        </div>
        {/* Objectives */}
        <ul className="flex flex-col gap-2 pl-1">
          {objectives.map((objective) => (
            <li
              key={objective}
              className="flex items-start gap-2 text-xxs font-medium leading-relaxed text-slate-700 sm:text-xs"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
