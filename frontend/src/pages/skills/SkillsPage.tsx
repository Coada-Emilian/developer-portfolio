import SkillsNavigation from './components/SkillsNavigation'
import HeroSection from './sections/HeroSection'

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Page introduction and overview of professional skills. */}
      <HeroSection />

      <SkillsNavigation />
    </main>
  )
}
