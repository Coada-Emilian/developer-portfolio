import { useParams } from 'react-router-dom'
import { projects } from '../../data/projects'
import HeroSection from './sections/HeroSection'

export default function ProjectPage() {
  const { id } = useParams()

  const currentProject = projects.find((project) => project.id === id)

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {currentProject && <HeroSection project={currentProject} />}
    </main>
  )
}
