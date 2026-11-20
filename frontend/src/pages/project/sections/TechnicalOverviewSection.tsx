import { Code2, Database, Monitor } from 'lucide-react'
import SectionHeading from '../../../components/shared/SectionHeading'
import { apiEndpoints, architecture, dataModel } from '../../../data/pages/project'

export default function TechnicalOverviewSection() {
  return (
    <section className="w-full">
      <SectionHeading title="Structure technique" underline />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {/* Application architecture */}
        <article className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
          <h4 className="mb-2 flex items-center gap-2 text-xs font-bold text-text-primary md:text-sm lg:text-base xl:text-lg">
            <Monitor className="size-4 text-blue-600 md:size-5 lg:size-5 xl:size-6" />
            Architecture applicative
          </h4>

          <p className="mb-3 text-xxs leading-relaxed text-text-primary md:text-xs lg:text-sm xl:text-base">
            Une application découpée avec un frontend React, une API Express et une base de données
            PostgreSQL.
          </p>

          <div className="flex items-stretch gap-1">
            {architecture.map(({ title, detail, icon: Icon }, index) => (
              <div key={title} className="flex min-w-0 flex-1 items-center gap-1">
                <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-lg border border-blue-200 bg-blue-100/70 p-2 text-center">
                  <Icon className="size-5 text-blue-600 md:size-6 lg:size-7 xl:size-8" />
                  <span className="text-xxs font-bold text-text-primary md:text-xs lg:text-sm xl:text-base">
                    {title}
                  </span>
                  <span className="text-[10px] text-text-secondary md:text-xxs lg:text-xs xl:text-sm">
                    {detail}
                  </span>
                </div>
                {index < architecture.length - 1 && (
                  <span className="text-blue-500 text-xs md:text-sm lg:text-base xl:text-lg">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </article>

        {/* Data model */}
        <article className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
          <h4 className="mb-2 flex items-center gap-2 text-xs font-bold text-text-primary md:text-sm lg:text-base xl:text-lg">
            <Database className="size-4 text-blue-600 md:size-5 lg:size-5 xl:size-6" />
            Modèle de données
          </h4>

          <p className="mb-3 text-xxs leading-relaxed text-text-primary md:text-xs lg:text-sm xl:text-base">
            Un modèle relationnel centré autour du patient, de la planification des rendez-vous et
            du suivi des séances.
          </p>

          <div className="grid grid-cols-3 gap-1">
            {dataModel.map((entity) => (
              <div
                key={entity.name}
                className="min-w-0 overflow-hidden rounded-lg border border-blue-200 bg-white/80"
              >
                <div className="border-b border-blue-200 bg-blue-100/70 px-1 py-1 text-center text-xxs font-bold text-text-primary md:text-xs lg:text-sm xl:text-base">
                  {entity.name}
                </div>
                <ul className="space-y-1 p-1.5">
                  {entity.fields.map((field) => (
                    <li
                      key={field}
                      className="break-all text-[9px] text-text-primary md:text-[10px] lg:text-xs xl:text-sm"
                    >
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[10px] text-text-secondary md:text-xs lg:text-sm xl:text-base">
            Relations entre patients, rendez-vous et séances
          </p>
        </article>

        {/* API design */}
        <article className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 md:col-span-2 lg:col-span-1">
          <h4 className="mb-2 flex items-center gap-2 text-xs font-bold text-text-primary md:text-sm lg:text-base xl:text-lg">
            <Code2 className="size-4 text-blue-600 md:size-5 lg:size-5 xl:size-6" />
            Conception de l'API
          </h4>

          <p className="mb-3 text-xxs leading-relaxed text-text-primary md:text-xs lg:text-sm xl:text-base">
            Une API REST claire et cohérente pour la gestion des principales ressources de
            l'application.
          </p>

          <div className="space-y-1.5">
            {apiEndpoints.map(({ method, endpoint, description }) => (
              <div
                key={endpoint}
                className="flex min-w-0 items-center gap-2 rounded-lg border border-blue-200 bg-white/80 px-2 py-1.5"
              >
                <span
                  className={`w-10 shrink-0 rounded px-1 py-0.5 text-center text-[9px] font-bold text-white md:text-[10px] lg:text-xs xl:text-sm ${
                    method === 'GET' ? 'bg-emerald-600' : 'bg-blue-600'
                  }`}
                >
                  {method}
                </span>
                <span className="min-w-0 flex-1 truncate text-xxs font-semibold text-text-primary md:text-xs lg:text-sm xl:text-base">
                  {endpoint}
                </span>
                <span className="hidden text-[10px] text-text-secondary sm:block md:text-xs lg:text-xs xl:text-sm">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
