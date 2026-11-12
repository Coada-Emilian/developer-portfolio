import ProjectsFilter from '../components/ProjectsFilter'

export default function ProjectsListSection() {
  return (
    <section className="p-4">
      <ProjectsFilter activeFilter="Tous" onFilterChange={() => {}} />
      <h1>List</h1>
    </section>
  )
}
