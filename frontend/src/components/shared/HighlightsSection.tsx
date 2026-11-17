// Highlights the four main strengths and professional characteristics relevant to recruiters.
import type { HighlightsSectionProps } from '../../@types/props/shared/shared.props'

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section
      aria-label="Points clés de mon profil"
      className="grid grid-cols-1 overflow-hidden border border-blue-200 bg-blue-50 lg:rounded-2xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {highlights.map((highlight, index) => {
        const Icon = highlight.icon

        // Adjusts separators to match the number of columns at each breakpoint.
        const separatorClasses = [
          index !== 0 && 'border-t border-blue-200 sm:border-t-0',
          index % 2 !== 0 && 'sm:border-l sm:border-blue-200',
          index !== 0 && 'lg:border-l lg:border-blue-200',
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <article
            key={highlight.title}
            className={`flex items-center gap-4 px-5 py-2 lg:gap-3 lg:px-4 ${separatorClasses}`}
          >
            <Icon
              aria-hidden="true"
              className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-9"
              strokeWidth={2.2}
            />

            <div className="min-w-0">
              <h3 className="text-xs font-bold leading-snug text-slate-900 md:text-base lg:text-lg">
                {highlight.title}
              </h3>

              <p className="text-xxs font-medium leading-relaxed text-slate-700 md:text-xs lg:text-sm">
                {highlight.description}
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
