import TrainingOverview from '../../components/personal/TrainingOverview'

export default function TrainingSection() {
  return (
    <section className="hidden items-center gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 shadow-sm mb-4 md:mb-0 lg:mb-26 lg:flex">
      <TrainingOverview />
    </section>
  )
}
