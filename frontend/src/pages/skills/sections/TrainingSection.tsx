import TrainingOverview from '../components/TrainingOverview'

export default function TrainingSection() {
  return (
    <section className="mb-4 md:mb-0 lg:mb-26 lg:flex items-center gap-5 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 shadow-sm hidden">
      <TrainingOverview />
    </section>
  )
}
