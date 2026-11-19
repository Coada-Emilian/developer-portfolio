import HighlightSection from '../../components/shared/HighlightsSection'
import { highlights } from '../../data/pages/dev'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/project/ProjectsSection'

export default function DevPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        {' '}
        <HighlightSection highlights={highlights} />
        <ProjectsSection />
      </div>
    </main>
  )
}
