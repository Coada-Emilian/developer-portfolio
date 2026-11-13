import { Navigate, useLocation } from 'react-router-dom'

import { skillsSections } from '../../data/pages/skills'
import SkillsNavigation from './components/SkillsNavigation'
import HeroSection from './sections/HeroSection'
import SkillsSection from './sections/SkillsSection'

export default function SkillsPage() {
  const { pathname } = useLocation()

  const sectionTitle = skillsSections[pathname as keyof typeof skillsSections]

  if (pathname === '/skills') {
    return <Navigate to="/skills/technical" replace />
  }

  if (!sectionTitle) {
    return <Navigate to="/skills/technical" replace />
  }

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <SkillsNavigation />

      <div className="mx-auto w-11/12">
        <SkillsSection title={sectionTitle}>
          <h1>Content</h1>
        </SkillsSection>
      </div>
    </main>
  )
}
