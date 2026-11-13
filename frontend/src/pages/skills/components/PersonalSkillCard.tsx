import type { ElementType } from 'react'

interface PersonalSkillCardProps {
  title: string
  description: string
  icon: ElementType
}

export default function PersonalSkillCard({
  title,
  description,
  icon: SkillIcon,
}: PersonalSkillCardProps) {
  return (
    <article className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/40 p-4 shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Personal skill icon */}
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
        <SkillIcon className="size-6" strokeWidth={2} />
      </div>

      {/* Skill title and description */}
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-sm font-extrabold text-text-primary lg:text-base">{title}</h3>

        <p className="text-xs leading-relaxed text-text-secondary">{description}</p>
      </div>
    </article>
  )
}
