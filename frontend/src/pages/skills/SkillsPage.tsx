import { Navigate, useLocation } from 'react-router-dom'

import {
  backendSkills,
  databaseSkills,
  frontendSkills,
  methodologySkills,
  skillsSections,
  testingSkills,
  toolsSkills,
} from '../../data/pages/skills'

import SkillsNavigation from './components/SkillsNavigation'
import TechnologyCategoryCard from './components/TechnologyCategoryCard'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'

const technologyCategories = [
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolsSkills,
  testingSkills,
  methodologySkills,
]

export default function SkillsPage() {
  const { pathname } = useLocation()

  const sectionTitle = skillsSections[pathname as keyof typeof skillsSections]

  if (pathname === '/skills' || !sectionTitle) {
    return <Navigate to="/skills/technical" replace />
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <SkillsNavigation />

      <div className="mx-auto w-11/12">
        <SkillsSection title={sectionTitle}>
          {pathname === '/skills/technical' && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologyCategories.map((category) => (
                <TechnologyCategoryCard key={category.title} {...category} />
              ))}
            </div>
          )}

          {pathname === '/skills/personal' && <div>Personal skills content</div>}

          {pathname === '/skills/complementary' && <div>Complementary information content</div>}
        </SkillsSection>
      </div>
    </main>
  )
}
