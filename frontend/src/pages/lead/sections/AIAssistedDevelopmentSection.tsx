import { BrainCircuit } from 'lucide-react'
import SectionHeading from '../../../components/shared/SectionHeading'
import { aiUses } from '../../../data/pages/lead'

// Explains how AI-assisted tools support learning, problem-solving and development.
export default function AIAssistedDevelopmentSection() {
  return (
    <section className="flex flex-col gap-3 rounded-xl border border-blue-200 bg-blue-50 p-3 sm:p-4">
      {/* Introduces AI as an assistant within the development process. */}
      <div className="flex items-start gap-3">
        <BrainCircuit aria-hidden="true" className="size-6 shrink-0 text-blue-600 sm:size-7" />

        <div className="min-w-0">
          <SectionHeading title="Utilisation raisonnée de l'IA" />

          <p className="mt-2 text-xs leading-relaxed text-text-secondary md:text-base">
            J'utilise les outils d'IA comme assistants de développement pour explorer des solutions,
            approfondir ma compréhension et faciliter le débogage. Les propositions sont analysées,
            vérifiées et testées avant toute intégration.
          </p>
        </div>
      </div>

      {/* Highlights the main ways AI-assisted tools support development work. */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {aiUses.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex min-w-0 items-start gap-2 rounded-lg border border-blue-200 bg-white px-3 py-3"
          >
            <Icon
              aria-hidden="true"
              className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-9"
              strokeWidth={2}
            />

            <div className="min-w-0">
              <h3 className="text-xs font-bold leading-snug text-slate-900 md:text-base lg:text-lg">
                {title}
              </h3>

              <p className="text-xxs font-medium leading-relaxed text-slate-700 md:text-xs lg:text-sm">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
