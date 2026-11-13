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
import SkillsOverview from './components/SkillsOverview'
import TechnologyCategoryCard from './components/TechnologyCategoryCard'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'
import TrainingSection from './sections/TrainingSection'

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
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(240px,1fr)]">
              {/* Technology cards */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {technologyCategories.map((category) => (
                  <TechnologyCategoryCard key={category.title} {...category} />
                ))}
              </div>

              {/* Global overview */}
              <SkillsOverview />
            </div>
          )}

          {pathname === '/skills/personal' && <div>Personal skills content</div>}

          {pathname === '/skills/complementary' && <div>Complementary information content</div>}
        </SkillsSection>

        {pathname === '/skills/technical' && <TrainingSection />}
      </div>
    </main>
  )
}
