import { statuses } from '../../../data/pages/skills'

export default function SkillStatusLegend() {
  return (
    <div className="mb-2 flex flex-wrap items-center w-full justify-center gap-x-5 gap-y-2 mt-2 lg:justify-end">
      {statuses.map((status) => (
        <div key={status.label} className="flex items-center gap-2">
          <span className={`size-2 rounded-full lg:size-3 ${status.color}`} />
          <span className="text-xs text-text-secondary lg:text-sm">{status.label}</span>
        </div>
      ))}
    </div>
  )
}
