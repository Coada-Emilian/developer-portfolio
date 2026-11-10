import { ChevronRight } from "lucide-react";
import type { ServicesOverviewProps } from "../../../@types/props/servicesOverview.props";

export default function ServicesOverviewCard({
  title,
  description,
  href,
  icon: Icon,
}: ServicesOverviewProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-blue-200/70 bg-slate-100 p-2 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 lg:gap-5 lg:p-4"
    >
      <div className="flex size-16 shrink-0 items-center justify-center rounded-xl  lg:size-20">
        <Icon size={34} className="text-blue-600 lg:size-12" />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-extrabold text-navy-950 lg:text-xl">
          {title}
        </h3>
        <p className="text-xs font-medium text-navy-900 lg:text-base">
          {description}
        </p>
      </div>

      <ChevronRight
        size={24}
        className="shrink-0 text-navy-950 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}
