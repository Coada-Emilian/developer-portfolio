import { ArrowRight } from 'lucide-react'

import type { AudienceNavigationSectionCardProps } from '../../../../../@types/props/pages/home/homePage.props'

export default function AudienceNavigationSectionCard({
  desktopTitle,
  desktopDescription,
  tabletTitle,
  tabletDescription,
  href,
  icon: Icon,
}: AudienceNavigationSectionCardProps) {
  return (
    // Entire card acts as a clickable navigation link.
    <a
      href={href}
      className="flex cursor-pointer items-center gap-5 rounded-xl border border-blue-200/70 bg-slate-100 px-6 py-4 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50"
    >
      {/* Icon representing the target audience. */}
      <Icon className="size-8 shrink-0 text-blue-600 lg:size-11.5" />

      {/* Audience title and description. */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-navy-950 md:hidden lg:block">{desktopTitle}</h3>
        <p className="text-sm font-medium text-navy-900 md:hidden lg:block">{desktopDescription}</p>

        <h3 className="text-base font-bold text-navy-950 lg:hidden">{tabletTitle}</h3>
        <p className="text-xs font-medium text-navy-900 lg:hidden">{tabletDescription}</p>
      </div>

      {/* Visual indicator that the card leads to another section or page. */}
      <ArrowRight className="size-4 shrink-0 text-navy-950 lg:size-6" />
    </a>
  )
}
