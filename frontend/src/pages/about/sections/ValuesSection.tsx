import TitleUnderline from '../../../components/ui/TitleUnderline'
import { values } from '../../../data/pages/about'

export default function ValuesSection() {
  return (
    <section>
      {/* Section heading */}
      <h2 className="mb-2 text-base font-bold text-slate-900 sm:text-xl sm:font-extrabold">
        Ce qui me définit
      </h2>

      <TitleUnderline />

      {/* Grid of personal and professional values */}
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
