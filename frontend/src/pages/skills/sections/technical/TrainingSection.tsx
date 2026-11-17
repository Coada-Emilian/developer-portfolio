import TrainingOverview from '../../components/personal/TrainingOverview'

// Displays the training overview on large screens.
export default function TrainingSection() {
  return (
    <section className="hidden items-center gap-5 mb-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 shadow-sm md:mb-0 lg:mb-26 lg:flex">
      <TrainingOverview />
    </section>
  )
}
