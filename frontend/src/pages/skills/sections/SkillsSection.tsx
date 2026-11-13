import { useLocation } from 'react-router-dom'

import type { SkillsSectionProps } from '../../../@types/props/pages/skills/skillsPage.props'
import TitleUnderline from '../../../components/ui/TitleUnderline'

import SkillStatusLegend from '../components/SkillStatusLegend'

export default function SkillsSection({ title, children }: SkillsSectionProps) {
  const { pathname } = useLocation()

  return (
    <section className="mt-2 mb-4 w-full">
      {/* Section heading and optional technology status legend */}
      <div className="flex w-full md:flex-row lg:justify-between">
        <div className="flex flex-col md:w-10/12">
          <h2 className="text-lg font-extrabold text-text-primary md:text-2xl lg:text-3xl">
            {title}
          </h2>

          <TitleUnderline />
        </div>

        {/* Display the status legend only on the technical skills page */}
        {pathname === '/skills/technical' && <SkillStatusLegend />}
      </div>

      {/* Section content */}
      <div className="mt-4">{children}</div>
    </section>
  )
}
