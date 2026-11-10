import { technologies } from "../../../data/technologies";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  return (
    <section className="bg-surface px-3 py-4 sm:px-8 md:py-8 lg:px-12 xl:px-36">
      <div className="mx-auto max-w-7xl md:max-w-full">
        <h2 className="text-left text-lg font-extrabold text-text-primary md:text-2xl">
          Technologies principales
        </h2>

        <div className="mt-2 h-1 w-9 rounded-full bg-blue-500" />

        <div className="mt-6 grid grid-cols-5 gap-2 lg:mx-auto lg:max-w-11/12 lg:gap-5">
          {technologies.map(({ name, icon: Icon, altName }) => (
            <TechnologyCard
              key={name}
              name={name}
              icon={Icon}
              altName={altName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
