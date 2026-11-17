import { Navigate, useLocation } from 'react-router-dom'

import { skillsSections } from '../../data/pages/skills'

import SkillsNavigation from './components/SkillsNavigation'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/PageSection'

import ComplementaryInformationSection from './sections/complementary/ComplementaryInformationSection'
import PersonalSkillsSection from './sections/personal/PersonalSkillsSection'
import TechnicalSkillsSection from './sections/technical/TechnicalSkillsSection'

// Renders the Skills page content according to the current route.
export default function SkillsPage() {
  const { pathname } = useLocation()

  // Resolve the section title from the current Skills route.
  const sectionTitle = skillsSections[pathname as keyof typeof skillsSections]

  // Redirect the base Skills route and unknown paths to Technical Skills.
  if (pathname === '/skills' || !sectionTitle) {
    return <Navigate to="/skills/technical" replace />
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <SkillsNavigation />

      <div className="mx-auto w-11/12">
        <SkillsSection title={sectionTitle}>
          {pathname === '/skills/technical' && <TechnicalSkillsSection />}

          {pathname === '/skills/personal' && <PersonalSkillsSection />}

          {pathname === '/skills/complementary' && <ComplementaryInformationSection />}
        </SkillsSection>
      </div>
    </main>
  )
}
