import SectionHeading from '../../../components/shared/SectionHeading'
import { highlights } from '../../../data/pages/about'

// Displays a concise overview of the user's personal and professional highlights.
export default function HighlightsSection() {
  return (
    <section className="flex flex-col gap-2 rounded-xl border border-blue-100 bg-blue-100 p-4">
      <SectionHeading title="En quelques points" subsection underline />

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
