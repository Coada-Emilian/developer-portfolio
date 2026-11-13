import { useLocation } from 'react-router-dom'
import type { SkillsSectionProps } from '../../../@types/props/pages/skills/skillsPage.props'
import TitleUnderline from '../../../components/ui/TitleUnderline'
import SkillStatusLegend from '../components/SkillStatusLegend'

export default function SkillsSection({ title, children }: SkillsSectionProps) {
  const { pathname } = useLocation()
  return (
    <section className="w-full mb-4 mt-2">
      <div className="md:flex lg:justify-between w-full">
        <div className="flex flex-col md:w-10/12">
          <h2 className="text-lg font-extrabold text-text-primary md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <TitleUnderline />
        </div>
        {pathname === '/skills/technical' && <SkillStatusLegend />}
      </div>

      <div className="mt-4">{children}</div>
    </section>
  )
}
