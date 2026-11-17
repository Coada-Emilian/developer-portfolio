import SectionHeading from '../../../components/shared/SectionHeading'
import { interests } from '../../../data/pages/about'

export default function InterestsSection() {
  return (
    <section className="flex flex-col gap-2">
      {/* Section heading */}
      <SectionHeading title="Centres d'intérêt" underline subsection />

      {/* Interests grid on mobile and tablet, vertical list on desktop */}
      <div className="grid grid-cols-5 gap-2 rounded-xl lg:flex lg:flex-col lg:gap-2 lg:border lg:border-blue-100 lg:bg-blue-100 lg:p-3">
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
