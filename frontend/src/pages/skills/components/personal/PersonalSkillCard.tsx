import type { PersonalSkillCardProps } from '../../../../@types/props/pages/skills/skillsPage.props'
import SectionHeading from '../../../../components/shared/SectionHeading'

// Displays a personal skill with its associated icon, title and description.
export default function PersonalSkillCard({
  title,
  description,
  icon: SkillIcon,
}: PersonalSkillCardProps) {
  return (
    <article className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg text-blue-600">
        <SkillIcon className="size-6 md:size-7 lg:size-9" strokeWidth={2} />
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <SectionHeading title={title} subsection />

        <p className="text-xs font-medium leading-relaxed text-text-secondary md:text-sm lg:text-base">
          {description}
        </p>
      </div>
    </article>
  )
}
