import { technologyCategories } from '../../../../data/pages/skills'
import SkillsOverview from '../../components/technical/SkillsOverview'
import TechnologyCategoryCard from '../../components/technical/TechnologyCategoryCard'

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(240px,1fr)] lg:items-stretch">
      {/* Technology category cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {technologyCategories.map((category) => (
          <TechnologyCategoryCard key={category.title} {...category} />
        ))}
      </div>

      {/* Global proficiency levels and professional strengths */}
      <SkillsOverview />
    </div>
  )
}
