import { useParams } from 'react-router-dom'
import HighlightsSection from '../../components/shared/HighlightsSection'
import ProjectSection from '../../components/shared/project-section/ProjectSection'
import SectionHeading from '../../components/shared/SectionHeading'
import { highlights } from '../../data/pages/project'
import { projects } from '../../data/projects'
import HeroSection from './sections/HeroSection'
import QualityHighlightsSection from './sections/QualityHighlights'
import TechnicalChallengesSection from './sections/TechnicalChallengesSection'
import TechnicalOverviewSection from './sections/TechnicalOverviewSection'
import ProjectVideoSection from './sections/VideoSection'

export default function ProjectPage() {
  const { id } = useParams()

  const currentProject = projects.find((project) => project.id === id)

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {currentProject && <HeroSection project={currentProject} />}

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection highlights={highlights} />

        {currentProject && (
          <>
            {!currentProject.featured && (
              <SectionHeading title="Presentation du projet" underline />
            )}
            <ProjectSection project={currentProject} isProjectSection />
          </>
        )}

        {currentProject && <ProjectVideoSection project={currentProject} />}

        <TechnicalOverviewSection />

        <TechnicalChallengesSection />

        <QualityHighlightsSection />
      </div>
    </main>
  )
}
