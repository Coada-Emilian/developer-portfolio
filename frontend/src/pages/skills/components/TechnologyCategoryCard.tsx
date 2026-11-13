import type { TechnologyCategoryCardProps } from '../../../@types/props/pages/skills/skillsPage.props'
import { statusColors } from '../../../data/pages/skills'

export default function TechnologyCategoryCard({
  title,
  description,
  icon: CategoryIcon,
  technologies,
}: TechnologyCategoryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-6">
      {/* Category heading */}
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {CategoryIcon && <CategoryIcon size={24} />}
        </div>

        <h3 className="text-lg font-bold text-text-primary md:text-xl">{title}</h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">{description}</p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => {
          const TechnologyIcon = technology.icon

          return (
            <div
              key={technology.name}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-text-primary"
            >
              {TechnologyIcon && <TechnologyIcon size={18} />}

              <span className="font-medium">{technology.name}</span>

              <span
                className={`size-2 shrink-0 rounded-full ${statusColors[technology.status]}`}
                title={technology.status}
                aria-label={`${technology.name}: ${technology.status}`}
              />
            </div>
          )
        })}
      </div>
    </article>
  )
}
