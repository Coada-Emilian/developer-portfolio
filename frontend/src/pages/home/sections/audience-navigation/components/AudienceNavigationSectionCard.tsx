import { ArrowRight } from 'lucide-react'

import type { AudienceNavigationSectionCardProps } from '../../../../../@types/props/pages/home/homePage.props'

// Reusable audience navigation card with responsive content variants.
export default function AudienceNavigationSectionCard({
  desktopTitle,
  desktopDescription,
  tabletTitle,
  tabletDescription,
  href,
  icon: Icon,
  mobileTitle,
}: AudienceNavigationSectionCardProps) {
  return (
    // The entire card is clickable and navigates to its target page.
    <a
      href={href}
      className="flex min-w-0 items-center gap-1.5 rounded-full border border-blue-200/70 bg-slate-100 px-2 py-2 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-100 md:gap-5 md:rounded-xl md:px-6 md:py-4"
    >
      <Icon className="size-4 shrink-0 text-blue-600 md:size-8 lg:size-11.5" />

      <div className="min-w-0 flex-1">
        {/* Desktop content */}
        <h3 className="hidden text-lg font-bold text-navy-950 lg:block">{desktopTitle}</h3>
        <p className="hidden text-sm font-medium text-navy-900 lg:block">{desktopDescription}</p>

        {/* Tablet content */}
        <h3 className="hidden whitespace-nowrap text-base font-bold text-navy-950 md:block lg:hidden">
          {tabletTitle}
        </h3>
        <p className="hidden text-xs font-medium text-navy-900 md:block lg:hidden">
          {tabletDescription}
        </p>

        {/* Mobile content */}
        <h3 className="whitespace-nowrap text-xs font-bold text-navy-950 md:hidden">
          {mobileTitle}
        </h3>
      </div>

      <ArrowRight className="size-3 shrink-0 text-navy-950 md:size-4 lg:size-6" />
    </a>
  )
}
