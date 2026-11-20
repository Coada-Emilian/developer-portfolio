import ProjectCarousel from './components/ProjectCarousel'

import type { IProject } from '../../../@types/interfaces/pages/projects/IProject'
import SectionHeading from '../SectionHeading'
import ProjectInformation from './components/ProjectInformation'

interface ProjectSectionProps {
  project: IProject
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  return (
    <section className="bg-surface px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-8 xl:px-36">
      {project.featured && <SectionHeading title="Projet principal" underline />}

      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 lg:mt-5 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
        <ProjectCarousel key={project.slug} project={project} />

        <div className="mt-4 lg:mt-0 lg:flex lg:gap-2 lg:h-full lg:items-center">
          <div className="bg-blue-200/75 w-0.5 h-11/12 hidden lg:block"></div>
          <ProjectInformation project={project} />
        </div>
      </div>
    </section>
  )
}
