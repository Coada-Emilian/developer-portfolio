import { ArrowRight } from "lucide-react";

import type { AudienceNavigationSectionCardProps } from "../../../@types/props/audienceNavigationSection.props";

export default function AudienceNavigationSectionCard({
  title,
  description,
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
      <Icon size={46} className="shrink-0 text-blue-600" />

      {/* Audience title and description. */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-navy-950">{title}</h3>
        <p className="text-sm font-medium text-navy-900">{description}</p>
      </div>

      {/* Visual indicator that the card leads to another section or page. */}
      <ArrowRight size={26} className="shrink-0 text-navy-950" />
    </a>
  );
}
