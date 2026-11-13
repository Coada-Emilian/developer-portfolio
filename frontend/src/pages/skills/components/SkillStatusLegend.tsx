import { statuses } from '../../../data/pages/skills'

export default function SkillStatusLegend() {
  return (
    <div className="mt-2 mb-2 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
      {/* Display each proficiency status with its corresponding colour */}
      {statuses.map((status) => (
        <div key={status.label} className="flex items-center gap-2">
          <span className={`size-2 rounded-full lg:size-3 ${status.color}`} />
          <span className="text-xs text-text-secondary lg:text-sm">{status.label}</span>
        </div>
      ))}
    </div>
  )
}
