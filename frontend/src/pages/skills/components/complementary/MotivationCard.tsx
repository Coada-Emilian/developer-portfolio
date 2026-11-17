import { Sprout } from 'lucide-react'
import SectionHeading from '../../../../components/shared/SectionHeading'

import motivationBackground from '../../../../assets/images/motivation_background.png'

// Presents the user's professional motivation alongside a decorative background illustration.
export default function MotivationCard() {
  return (
    <article className="relative isolate overflow-hidden rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
      {/* Decorative mountain illustration */}
      <div
        className="absolute inset-y-0 right-2 z-0 w-[75%] bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${motivationBackground})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[68%] md:max-w-[70%]">
        <div className="mb-3 flex items-center gap-3">
          <Sprout className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" strokeWidth={2} />

          <SectionHeading title="Ce qui me motive" />
        </div>

        <p className="text-xs font-medium leading-relaxed text-text-primary md:text-sm lg:text-base">
          Concevoir des applications utiles, robustes et bien pensées, apprendre continuellement et
          relever de nouveaux défis techniques, au sein d’une équipe bienveillante et exigeante.
        </p>
      </div>
    </article>
  )
}
