import HighlightSection from '../../components/shared/HighlightsSection'
import { highlights } from '../../data/pages/dev'
import ContactSectionFooter from './sections/ContactSectionFooter'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/project/ProjectsSection'

export default function DevPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="flex flex-col gap-4 px-4 py-5 sm:gap-6 sm:px-6 ">
        <HighlightSection highlights={highlights} />

        <ProjectsSection />

        <ContactSectionFooter />
      </div>
    </main>
  )
}
