import { BriefcaseBusiness, Code2, Users } from "lucide-react";
import AudienceNavigationCard from "./AudienceNavigationCard";

export default function AudienceNavigation() {
  return (
    <section className="hidden lg:block">
      <div className="mx-auto grid grid-cols-3 gap-6 px-36 py-3">
        <AudienceNavigationCard
          title="Pour les recruteurs"
          description="Mon parcours, mes compétences et mes projets clés."
          href="#recruteurs"
          icon={Users}
        />

        <AudienceNavigationCard
          title="Pour les employeurs / managers"
          description="Ma façon de travailler, mes réalisations et la valeur que je peux apporter."
          href="#employeurs"
          icon={BriefcaseBusiness}
        />

        <AudienceNavigationCard
          title="Pour les développeurs"
          description="Le détail des projets, les choix techniques, l'architecture et le code source."
          href="#developpeurs"
          icon={Code2}
        />
      </div>
    </section>
  );
}
