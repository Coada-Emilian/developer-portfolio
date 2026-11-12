import TitleUnderline from '../../../../components/shared/TitleUnderline'
import { highlights } from '../../../../data/about-page'

export default function HighlightsSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-100 p-4 sm:10/12">
      {/* Section heading */}
      <div className="mb-3">
        <h2 className="text-base sm:text-xl sm:font-extrabold font-bold text-slate-900">
          En quelques points
        </h2>
        <TitleUnderline />
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2 sm:px-2">
        {highlights.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 text-xs font-medium text-slate-700 sm:text-sm sm:font-semibold"
          >
            <Icon className="size-4 shrink-0 text-blue-800 sm:size-6" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
