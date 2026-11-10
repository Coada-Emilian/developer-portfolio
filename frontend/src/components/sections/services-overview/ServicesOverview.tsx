import { Laptop, Layers, Rocket } from "lucide-react";
import ServicesOverviewCard from "./ServicesOverviewCard";

export default function ServicesOverview() {
  return (
    <section className="lg:hidden rounded-t-3xl bg-white px-5 py-4 lg:px-36 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-navy-950 lg:text-3xl">
            Ce que je fais
          </h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-blue-600" />
        </div>

        <div className="flex flex-col gap-3">
          <ServicesOverviewCard
            title="Développement web"
            description="Applications complètes, du frontend au backend."
            href="#developpement-web"
            icon={Laptop}
          />

          <ServicesOverviewCard
            title="Conception & architecture"
            description="Solutions structurées, évolutives et maintenables."
            href="#conception-architecture"
            icon={Layers}
          />

          <ServicesOverviewCard
            title="Amélioration continue"
            description="Optimisation et amélioration des processus existants."
            href="#amelioration-continue"
            icon={Rocket}
          />
        </div>
      </div>
    </section>
  );
}
