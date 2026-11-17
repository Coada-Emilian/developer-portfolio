import SectionHeading from '../../../components/shared/SectionHeading'
import { collaborationValues } from '../../../data/pages/lead'

// Highlights the collaboration values and professional qualities brought to a team.
export default function CollaborationSection() {
  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Collaboration & vie d'équipe" underline />

      {/* Displays collaboration values in a responsive card grid. */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {collaborationValues.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex min-w-0 items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3"
          >
            <Icon
              aria-hidden="true"
              className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-9"
              strokeWidth={2}
            />

            <div className="min-w-0">
              <h3 className="text-xs font-bold leading-snug text-slate-900 md:text-base lg:text-lg">
                {title}
              </h3>

              <p className="text-xxs font-medium leading-relaxed text-slate-700 md:text-xs lg:text-sm">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
