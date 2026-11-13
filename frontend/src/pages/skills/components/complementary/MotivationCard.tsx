import { Sprout } from 'lucide-react'

import motivationBackground from '../../../../assets/images/motivation_background.png'

export default function MotivationCard() {
  return (
    <article className="relative isolate overflow-hidden rounded-xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
      {/* Decorative mountain illustration */}
      <div
        className="absolute inset-y-0 right-2 z-0 w-[45%] bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${motivationBackground})` }}
        aria-hidden="true"
      />

      {/* Motivation content */}
      <div className="relative z-10 max-w-[68%]">
        <div className="mb-3 flex items-center gap-3">
          <Sprout className="size-8 shrink-0 text-blue-600" strokeWidth={2} />

          <h3 className="text-lg font-extrabold text-text-primary md:text-xl">Ce qui me motive</h3>
        </div>

        <p className="text-sm leading-relaxed font-medium text-text-primary">
          Concevoir des applications utiles, robustes et bien pensées, apprendre continuellement et
          relever de nouveaux défis techniques, au sein d’une équipe bienveillante et exigeante.
        </p>
      </div>
    </article>
  )
}
