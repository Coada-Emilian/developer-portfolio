import type { TechnologyCardProps } from "../../../@types/props/technologiesSection.props";

export default function TechnologyCard({
  name,
  icon: Icon,
  altName,
}: TechnologyCardProps) {
  return (
    // Technology card with a responsive icon and label.
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-blue-100 bg-slate-100 px-4 py-2 shadow-sm md:py-4">
      {/* Technology icon, scaled up on larger screens. */}
      <Icon className="h-8 w-8 lg:h-14 lg:w-14" />

      {/* Full technology name displayed on larger screens. */}
      <span className="hidden text-center text-xs font-semibold text-text-primary sm:text-base lg:block">
        {name}
      </span>

      {/* Shortened technology name used on smaller screens. */}
      <span className="text-center text-xs font-semibold text-text-primary lg:hidden">
        {altName}
      </span>
    </div>
  );
}
