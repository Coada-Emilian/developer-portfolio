import { BriefcaseBusiness, Code2, Users } from 'lucide-react'

import AudienceNavigationSectionCard from './AudienceNavigationSectionCard'

export default function AudienceNavigationSection() {
  return (
    // Audience navigation is displayed on desktop only.
    <section className="hidden lg:block bg-surface">
      <div className="mx-auto grid grid-cols-3 gap-6 px-36 py-3">
        {/* Navigation for recruiters: professional background and skills. */}
        <AudienceNavigationSectionCard
          title="Pour les recruteurs"
          description="Mon parcours, mes compétences et mes projets clés."
          href="/recruiter"
          icon={Users}
        />

        {/* Navigation for technical leads: working methods and contributions. */}
        <AudienceNavigationSectionCard
          title="Pour les responsables techniques"
          description="Ma façon de travailler, mes réalisations et la valeur que je peux apporter."
          href="/lead"
          icon={BriefcaseBusiness}
        />

        {/* Navigation for developers: technical details and source code. */}
        <AudienceNavigationSectionCard
          title="Pour les développeurs"
          description="Le détail des projets, les choix techniques, l'architecture et le code source."
          href="/developer"
          icon={Code2}
        />
      </div>
    </section>
  )
}
