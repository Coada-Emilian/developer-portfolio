import TitleUnderline from '../../../../components/shared/TitleUnderline'
import { interests } from '../../../../data/about-page'

export default function InterestsSection() {
  return (
    <section>
      {/* Section heading */}
      <div className="mb-2">
        <h2 className="mb-2 text-base font-bold text-slate-900  sm:font-extrabold sm:text-xl">
          Centres d'intérêt
        </h2>

        <TitleUnderline />
      </div>

      {/* Interests */}
      <div className="grid grid-cols-5 gap-2 lg:flex lg:flex-col lg:gap-2 rounded-xl lg:border lg:border-blue-100 lg:bg-blue-100 lg:p-3 ">
        {interests.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-100 p-2 text-center lg:flex-row lg:justify-start lg:border-0 lg:bg-transparent lg:p-1"
          >
            <Icon className="size-5 shrink-0 text-blue-800 sm:size-7" />

            <span className="text-xxs font-medium leading-tight text-slate-700 sm:text-sm sm:font-bold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
