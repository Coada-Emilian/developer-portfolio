import { Navigate, useLocation } from 'react-router-dom'

import { skillsSections } from '../../data/pages/skills'

import SkillsNavigation from './components/SkillsNavigation'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/PageSection'

import ComplementaryInformationSection from './sections/complementary/ComplementaryInformationSection'
import PersonalSkillsSection from './sections/personal/PersonalSkillsSection'
import TechnicalSkillsSection from './sections/technical/TechnicalSkillsSection'

export default function SkillsPage() {
  const { pathname } = useLocation()

  // Get the title associated with the current Skills route.
  const sectionTitle = skillsSections[pathname as keyof typeof skillsSections]

  // Redirect the base Skills route and any unknown paths to Technical Skills.
  if (pathname === '/skills' || !sectionTitle) {
    return <Navigate to="/skills/technical" replace />
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Shared page introduction */}
      <HeroSection />

      {/* Navigation between Skills categories */}
      <SkillsNavigation />

      <div className="mx-auto w-11/12">
        <SkillsSection title={sectionTitle}>
          {/* Technical skills: technology categories and overview */}
          {pathname === '/skills/technical' && <TechnicalSkillsSection />}

          {/* Personal skills */}
          {pathname === '/skills/personal' && <PersonalSkillsSection />}

          {/* Complementary information */}
          {pathname === '/skills/complementary' && <ComplementaryInformationSection />}
        </SkillsSection>
      </div>
    </main>
  )
}
