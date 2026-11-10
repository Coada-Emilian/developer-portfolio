import { BriefcaseBusiness, Code2, Users } from "lucide-react";
import AudienceNavigationSectionCard from "./AudienceNavigationSectionCard";

export default function AudienceNavigationSection() {
  return (
    <section className="hidden lg:block">
      <div className="mx-auto grid grid-cols-3 gap-6 px-36 py-3">
        <AudienceNavigationSectionCard
          title="Pour les recruteurs"
          description="Mon parcours, mes compétences et mes projets clés."
          href="#recruteurs"
          icon={Users}
        />

        <AudienceNavigationSectionCard
          title="Pour les responsables techniques"
          description="Ma façon de travailler, mes réalisations et la valeur que je peux apporter."
          href="#employeurs"
          icon={BriefcaseBusiness}
        />

        <AudienceNavigationSectionCard
          title="Pour les développeurs"
          description="Le détail des projets, les choix techniques, l'architecture et le code source."
          href="#developpeurs"
          icon={Code2}
        />
      </div>
    </section>
  );
}
