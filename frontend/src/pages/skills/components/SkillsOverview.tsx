import { Check, Star, TrendingUp } from 'lucide-react'

import { globalLevels, levelWidths, strengths } from '../../../data/pages/skills'

export default function SkillsOverview() {
  return (
    <aside className="grid grid-cols-1 gap-5 lg:h-full lg:grid-rows-2">
      {/* Global proficiency levels */}
      <section className="h-fit min-h-0 rounded-2xl border border-border bg-blue-50 p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <TrendingUp className="size-8 lg:size-9" />
          </div>
          <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Niveau global</h3>
        </div>

        {/* Proficiency levels and progress bars */}
        <div className="space-y-4">
          {globalLevels.map((item) => (
            <div key={item.name} className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-text-primary lg:text-sm">
                  {item.name}
                </span>
                <span className="shrink-0 text-xs font-semibold text-blue-600 lg:text-sm">
                  {item.level}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-blue-100">
                <div
                  className={`h-full rounded-full bg-blue-600 ${levelWidths[item.level as keyof typeof levelWidths]}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional strengths */}
      <section className="h-full min-h-0 rounded-2xl border border-border bg-blue-50 p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Star className="size-8 lg:size-9" />
          </div>
          <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Points forts</h3>
        </div>

        {/* List of key strengths */}
        <ul className="space-y-3">
          {strengths.map((strength) => (
            <li key={strength} className="flex items-start gap-2">
              <Check className="mt-0.5 size-5 shrink-0 text-blue-600 lg:size-6" strokeWidth={2.5} />
              <span className="text-sm leading-relaxed text-text-primary lg:text-base">
                {strength}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
