import { technicalChallenges } from '../../../data/pages/project'

export default function TechnicalChallengesSection() {
  return (
    <section className="w-full">
      <h3 className="mb-3 text-sm font-bold text-text-primary md:text-base lg:text-lg xl:text-xl">
        Défis techniques & solutions
      </h3>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {technicalChallenges.map(({ title, icon: Icon, challenge, solution }) => (
          <article key={title} className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold text-text-primary md:text-sm lg:text-base xl:text-lg">
              <Icon className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-7 xl:size-8" />
              {title}
            </h4>

            <div className="space-y-2 text-xxs leading-relaxed text-text-primary md:text-xs lg:text-sm xl:text-base">
              <p>
                <strong className="text-blue-800">Défi :</strong> {challenge}
              </p>

              <p>
                <strong className="text-emerald-700">Solution :</strong> {solution}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
