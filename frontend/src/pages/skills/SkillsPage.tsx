import { Navigate, useLocation } from 'react-router-dom'

import { skillsSections, technologyCategories } from '../../data/pages/skills'

import SkillsNavigation from './components/SkillsNavigation'
import SkillsOverview from './components/technical/SkillsOverview'
import TechnologyCategoryCard from './components/technical/TechnologyCategoryCard'
import PersonalSkillsSection from './sections/personal/PersonalSkillSection'

import LanguagesCard from './components/complementary/LanguagesCard'
import HeroSection from './sections/HeroSection'
import TeamContributionSection from './sections/personal/TeamContributionSection'
import SkillsSection from './sections/technical/TechnicalSkillsSection'
import TrainingSection from './sections/technical/TrainingSection'

export default function SkillsPage() {
  const { pathname } = useLocation()

  // Retrieve the section title corresponding to the current route.
  const sectionTitle = skillsSections[pathname as keyof typeof skillsSections]

  // Redirect the base Skills route and unknown paths to technical skills.
  if (pathname === '/skills' || !sectionTitle) {
    return <Navigate to="/skills/technical" replace />
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Shared page introduction and section navigation */}
      <HeroSection />

      <SkillsNavigation />

      <div className="mx-auto w-11/12">
        <SkillsSection title={sectionTitle}>
          {/* Technical skills: technology categories and global overview */}
          {pathname === '/skills/technical' && (
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
          )}

          {/* Personal skills section */}
          {pathname === '/skills/personal' && (
            <div className="space-y-10">
              <PersonalSkillsSection />
              <TeamContributionSection />
            </div>
          )}

          {/* Complementary information section */}
          {pathname === '/skills/complementary' && (
            <>
              <div>Complementary information content</div>
              <LanguagesCard />
            </>
          )}
        </SkillsSection>

        {/* Training overview displayed only on the technical skills page */}
        {pathname === '/skills/technical' && (
          <>
            <TrainingSection />
          </>
        )}
      </div>
    </main>
  )
}
