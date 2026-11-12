import { approaches } from '../../../data/pages/about'

export default function ApproachSection() {
  return (
    <section className="flex w-full gap-4 rounded-xl border border-blue-100 bg-blue-100 p-4">
      {/* Approach section icon */}
      <svg
        viewBox="0 0 24 24"
        className="size-5 shrink-0 text-blue-800 sm:size-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>

      <div>
        {/* Section heading */}
        <div className="mb-2">
          <h2 className="text-base font-bold text-slate-900 sm:text-xl sm:font-extrabold">
            Mon approche
          </h2>
        </div>

        {/* List of development principles */}
        <ul className="flex flex-col gap-2 pl-1">
          {approaches.map((approach) => (
            <li
              key={approach}
              className="flex items-start gap-2 text-xxs font-medium leading-relaxed text-slate-700 sm:text-sm"
            >
              {/* List item checkmark */}
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 size-3.5 shrink-0 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 5 5L20 7" />
              </svg>
              <span>{approach}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
