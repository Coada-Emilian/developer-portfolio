import { BriefcaseBusiness, Code2, Users } from 'lucide-react'

import AudienceNavigationSectionCard from './components/AudienceNavigationSectionCard'

export default function AudienceNavigationSection() {
  return (
    <section className="hidden bg-blue-50 md:block">
      <div className="mx-auto grid grid-cols-3 gap-3 px-6 py-3 lg:gap-6 lg:px-36">
        {/* Recruiters: professional background and skills */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les recruteurs"
          desktopDescription="Mon parcours, mes compétences et mes projets clés."
          tabletTitle="Recruteurs"
          tabletDescription="Parcours, compétences et projets."
          href="/recruiter"
          icon={Users}
        />

        {/* Technical leads: working methods and contributions */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les responsables techniques"
          desktopDescription="Ma façon de travailler, mes réalisations et la valeur que je peux apporter."
          tabletTitle="Leads"
          tabletDescription="Méthode de travail et contributions."
          href="/lead"
          icon={BriefcaseBusiness}
        />

        {/* Developers: technical details and source code */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les développeurs"
          desktopDescription="Le détail des projets, les choix techniques, l'architecture et le code source."
          tabletTitle="Développeurs"
          tabletDescription="Projets, architecture et choix techniques."
          href="/developer"
          icon={Code2}
        />
      </div>
    </section>
  )
}
