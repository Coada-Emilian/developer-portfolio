import HighlightsSection from '../../components/shared/HighlightsSection'
import { highlights } from '../../data/pages/lead'
import FeaturedProjectSection from './sections/featured-project/FeaturedProjectSection'
import HeroSection from './sections/HeroSection'
import TechnicalEnvironmentSection from './sections/TechnicalEnvironmentSection'
import WorkflowSection from './sections/WorkflowSection'

export default function LeadPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Page introduction focused on technical leadership and collaboration. */}
      <HeroSection />

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection highlights={highlights} />
        <WorkflowSection />
        <TechnicalEnvironmentSection />
        <FeaturedProjectSection />
      </div>
    </main>
  )
}
