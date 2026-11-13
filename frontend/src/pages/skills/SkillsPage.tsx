import { Navigate, useLocation } from 'react-router-dom'
import TechnicalSkillsSection from './sections/technical/TechnicalSkillsSection'

import { skillsSections } from '../../data/pages/skills'

import SkillsNavigation from './components/SkillsNavigation'
import ComplementaryInformationSection from './sections/complementary/ComplementaryInformationSection'

import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/PageSection'
import PersonalSkillsSection from './sections/personal/PersonalSkillsSection'

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
          {pathname === '/skills/technical' && <TechnicalSkillsSection />}

          {/* Personal skills section */}
          {pathname === '/skills/personal' && <PersonalSkillsSection />}

          {/* Complementary information section */}
          {pathname === '/skills/complementary' && <ComplementaryInformationSection />}
        </SkillsSection>
      </div>
    </main>
  )
}
