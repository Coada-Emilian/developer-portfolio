import { BriefcaseBusiness, Code2, Users } from 'lucide-react'

import AudienceNavigationSectionCard from './components/AudienceNavigationSectionCard'

// Provides audience-specific navigation for recruiters, technical leads and developers.
export default function AudienceNavigationSection() {
  return (
    <section className=" bg-blue-50">
      <div className="mx-auto grid grid-cols-3 gap-3 py-3 lg:gap-6">
        {/* Recruiters: career path, skills and key projects */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les recruteurs"
          desktopDescription="Mon parcours, mes compétences et mes projets clés."
          tabletTitle="Recruteurs"
          tabletDescription="Parcours, compétences et projets."
          mobileTitle="Recrut."
          href="/recruiters"
          icon={Users}
        />

        {/* Technical leads: working methods and professional contributions */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les responsables techniques"
          desktopDescription="Ma façon de travailler, mes réalisations et la valeur que je peux apporter."
          tabletTitle="Leads"
          tabletDescription="Méthode de travail et contributions."
          mobileTitle="Leads"
          href="/leads"
          icon={BriefcaseBusiness}
        />

        {/* Developers: project architecture, technical choices and source code */}
        <AudienceNavigationSectionCard
          desktopTitle="Pour les développeurs"
          desktopDescription="Le détail des projets, les choix techniques, l'architecture et le code source."
          tabletTitle="Développeurs"
          tabletDescription="Projets, architecture et choix techniques."
          mobileTitle="Dévs"
          href="/developers"
          icon={Code2}
        />
      </div>
    </section>
  )
}
