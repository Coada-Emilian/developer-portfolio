import TitleUnderline from '../../../../components/shared/TitleUnderline'

import { values } from '../../../../data/about-page'

export default function ValuesSection() {
  return (
    <section>
      <h2 className="mb-2 text-base font-bold text-slate-900  sm:font-extrabold sm:text-xl">
        Ce qui me définit
      </h2>
      <TitleUnderline />

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
