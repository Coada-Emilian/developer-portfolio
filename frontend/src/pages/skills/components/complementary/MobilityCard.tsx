import { CarFront } from 'lucide-react'

import { mobility } from '../../../../data/pages/skills'

export default function MobilityCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      {/* Card heading */}
      <div className="mb-4 flex items-center gap-3">
        <CarFront className="size-8 shrink-0 text-blue-600" strokeWidth={2} />

        <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Mobilité</h3>
      </div>

      {/* Driving licence and vehicle information */}
      <div className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-100/60 p-3">
        <mobility.cardIcon className="size-7 shrink-0 text-blue-600" strokeWidth={2} />

        <div className="flex min-w-0 flex-col">
          <h4 className="text-sm font-bold text-text-primary">{mobility.items[0].title}</h4>

          <p className="text-xs text-text-secondary">{mobility.items[0].description}</p>
        </div>
      </div>
    </article>
  )
}
