import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { navigationItems } from '../../../data/pages/skills'

export default function SkillsNavigation() {
  return (
    <nav aria-label="Navigation des compétences" className="mx-auto w-11/12 py-2 md:py-4">
      {/* Responsive navigation links */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:gap-0">
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group mx-auto flex w-11/12 items-center justify-between gap-3 rounded-xl border px-4 py-2 transition-colors duration-200 sm:px-5 ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-blue-200 bg-blue-50 text-text-primary hover:bg-blue-50'
                }`
              }
            >
              {/* Navigation label and category icon */}
              <div className="flex min-w-0 items-center gap-4 text-xs lg:text-sm">
                <Icon className="size-5 shrink-0 md:size-6 lg:size-7" strokeWidth={2} />

                <span className="font-semibold">{item.label}</span>
              </div>

              {/* Navigation direction indicator */}
              <ArrowRight
                className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
