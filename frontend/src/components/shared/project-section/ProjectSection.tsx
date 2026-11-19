import ProjectCarousel from './components/ProjectCarousel'

import type { IProject } from '../../../@types/interfaces/pages/projects/IProject'
import ProjectInformation from './components/ProjectInformation'

interface ProjectSectionProps {
  project: IProject
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <section className="hidden bg-surface px-6 py-8 lg:block lg:px-12 xl:px-36">
      <div className="mx-auto">
        <div className="mx-auto mt-5 grid grid-cols-2 items-center gap-10">
          <ProjectCarousel key={project.slug} project={project} />

          <ProjectInformation project={project} />
        </div>
      </div>
    </section>
  )
}
