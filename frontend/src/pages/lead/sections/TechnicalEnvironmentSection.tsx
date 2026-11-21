import SectionHeading from '../../../components/shared/SectionHeading'
import { environments } from '../../../data/pages/lead'

// Groups the main technologies into backend, frontend and data/tooling categories.
export default function TechnicalEnvironmentSection() {
  return (
    <section className="flex flex-col gap-3">
      <SectionHeading title="Mon environnement technique" underline />

      {/* Organizes the technologies into three responsive categories. */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {environments.map(({ title, icon: Icon, technologies }) => (
          <article
            key={title}
            className="flex min-w-0 items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3"
          >
            <Icon
              aria-hidden="true"
              className="mt-0.5 size-5 md:size-6 lg:size-7 shrink-0 text-blue-600"
              strokeWidth={2}
            />

            <div className="flex min-w-0 flex-col gap-2 lg:gap-4">
              <h3 className="text-xs font-bold leading-snug text-text-primary md:text-sm lg:text-lg">
                {title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-blue-200 bg-white px-2 py-1 text-xxs font-medium text-text-primary md:text-xs lg:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
