import { useLocation } from 'react-router-dom'

import type { PageSectionProps } from '../../../@types/props/pages/skills/skillsPage.props'
import SectionHeading from '../../../components/shared/SectionHeading'

import SkillStatusLegend from '../components/technical/SkillStatusLegend'

// Provides a shared section layout with a route-specific technical skills legend.
export default function PageSection({ title, children }: PageSectionProps) {
  const { pathname } = useLocation()

  return (
    <section className="mt-2 mb-4 w-full">
      <div className="flex w-full flex-col md:flex-row lg:justify-between">
        <div className="flex flex-col md:w-10/12">
          <SectionHeading title={title} underline />
        </div>

        {/* Display the status legend only on the technical skills page */}
        {pathname === '/skills/technical' && <SkillStatusLegend />}
      </div>

      <div className="mt-4">{children}</div>
    </section>
  )
}
