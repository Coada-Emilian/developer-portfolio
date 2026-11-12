import { Code2, Layers3, Rocket } from 'lucide-react'
import TitleUnderline from '../../../components/ui/TitleUnderline'

export default function IntroductionSection() {
  return (
    <section className="flex flex-col gap-4">
      {/* Section heading */}
      <div>
        <h2 className="text-sm sm:text-2xl font-extrabold text-slate-900">Qui suis-je ?</h2>
        <TitleUnderline />
      </div>

      {/* Introduction */}
      <div className="flex flex-col gap-3 text-xs sm:text-base leading-relaxed text-slate-700">
        {/* Mobile version */}
        <div className="flex flex-col gap-2 sm:hidden">
          <p>
            Développeur Full Stack en reconversion, je viens de la prothèse dentaire, un métier qui
            m'a appris la rigueur et la précision.
          </p>

          <p>
            Aujourd'hui, je mets ces qualités au service du développement web, avec l'envie de créer
            des applications utiles et de continuer à apprendre.
          </p>
        </div>

        {/* Desktop version */}
        <div className="hidden flex-col gap-3 sm:flex">
          <p>
            Développeur Full Stack en reconversion professionnelle, je viens du domaine de la
            prothèse dentaire, un métier qui m'a appris la rigueur, la précision et le souci du
            détail.
          </p>

          <p>
            Aujourd'hui, j'ai choisi de mettre ces qualités au service du développement web.
            Passionné par la création d'applications, j'aime concevoir des solutions utiles,
            résoudre des problèmes concrets et apprendre continuellement de nouvelles technologies.
          </p>
        </div>
      </div>

      {/* Key points */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xxs font-medium text-blue-900 sm:text-sm">
          <Code2 className="size-3.5 sm:size-5.5" />
          <span>
            <span className="sm:hidden">Applications</span>
            <span className="hidden sm:inline">Développement d'applications</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xxs font-medium text-blue-900 sm:text-sm">
          <Layers3 className="size-3.5 sm:size-5.5" />
          <span>Full Stack</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xxs font-medium text-blue-900 sm:text-sm">
          <Rocket className="size-3.5 sm:size-5.5" />
          <span>
            <span className="sm:hidden">Curiosité</span>
            <span className="hidden sm:inline">Apprentissage continu</span>
          </span>
        </div>
      </div>
    </section>
  )
}
