import { useParams } from 'react-router-dom'
import HighlightsSection from '../../components/shared/HighlightsSection'
import { highlights } from '../../data/pages/project'
import { projects } from '../../data/projects'
import HeroSection from './sections/HeroSection'

export default function ProjectPage() {
  const { id } = useParams()

  const currentProject = projects.find((project) => project.id === id)

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {currentProject && <HeroSection project={currentProject} />}

      <div className="flex flex-col gap-5 px-4 py-5 sm:gap-6 sm:px-6 lg:p-6">
        <HighlightsSection highlights={highlights} />
      </div>
    </main>
  )
}
