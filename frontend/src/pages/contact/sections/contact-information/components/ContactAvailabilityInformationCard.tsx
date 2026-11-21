import { CalendarDays } from 'lucide-react'
import SectionHeading from '../../../../../components/shared/SectionHeading'

export default function ContactAvailabilityInformationCard() {
  return (
    <div className="mt-auto flex items-start gap-4 rounded-xl bg-blue-100/70 p-4">
      <CalendarDays className="size-6 shrink-0 text-blue-700 md:size-7 lg:size-9" strokeWidth={2} />

      <div className="flex flex-col gap-2">
        <SectionHeading title="Disponibilité" subsection />

        <p className="text-xs leading-relaxed text-text-primary md:text-sm lg:text-base">
          Ouvert aux opportunités (CDI, CDD, alternance, stage) et aux projets intéressants.
        </p>
      </div>
    </div>
  )
}
