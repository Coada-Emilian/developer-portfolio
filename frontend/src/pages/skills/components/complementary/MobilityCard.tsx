import { CarFront } from 'lucide-react'

import SectionHeading from '../../../../components/shared/SectionHeading'
import { mobility } from '../../../../data/pages/skills'

// Displays driving licence and vehicle information.
export default function MobilityCard() {
  return (
    <article className="rounded-xl border border-blue-100 bg-blue-50 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <CarFront className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" strokeWidth={2} />

        <SectionHeading title="Mobilité" />
      </div>

      {/* Driving licence and vehicle information */}
      <div className="flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-100 p-3">
        <mobility.cardIcon
          className="size-5 shrink-0 text-blue-600 md:size-6 lg:size-7"
          strokeWidth={2}
        />

        <div className="flex min-w-0 flex-col">
          <h4 className="text-sm font-bold text-text-primary">{mobility.items[0].title}</h4>

          <p className="text-xs text-text-secondary">{mobility.items[0].description}</p>
        </div>
      </div>
    </article>
  )
}
