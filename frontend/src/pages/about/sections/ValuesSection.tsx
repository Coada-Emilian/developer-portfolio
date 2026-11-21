import SectionHeading from '../../../components/shared/SectionHeading'
import { values } from '../../../data/pages/about'

// Highlights the personal and professional values that guide the user's work.
export default function ValuesSection() {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeading title="Ce qui me définit" underline subsection />

      <div className="grid grid-cols-5 gap-2">
        {values.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-100 p-2 text-center"
          >
            <Icon className="size-5 shrink-0 text-blue-700 sm:size-7" />

            <span className="text-xxs font-medium leading-tight text-slate-700 sm:text-sm sm:font-bold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
