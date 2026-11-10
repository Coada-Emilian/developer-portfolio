import type { TechnologyCardProps } from "../../../@types/props/technologiesSection.props";

export default function TechnologyCard({
  name,
  icon: Icon,
  altName,
}: TechnologyCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-blue-100 bg-slate-100 p-4 py-2 md:py-4 shadow-sm lg:max-w-8/12">
      <Icon className="h-8 w-8 lg:h-14 lg:w-14" />

      <span className="hidden text-center text-xs font-semibold text-text-primary sm:text-base lg:block">
        {name}
      </span>

      <span className="text-center text-xs font-semibold text-text-primary lg:hidden">
        {altName}
      </span>
    </div>
  );
}
