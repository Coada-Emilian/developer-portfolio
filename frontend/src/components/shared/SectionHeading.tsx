import type { SectionHeadingProps } from '../../@types/props/shared/shared.props'

import TitleUnderline from '../ui/TitleUnderline'

export default function SectionHeading({ title, subsection, underline }: SectionHeadingProps) {
  return (
    <div>
      <h2
        className={`${
          subsection ? 'text-xs sm:text-xl' : 'text-sm sm:text-2xl'
        } font-extrabold text-slate-900`}
      >
        {title}
      </h2>

      {underline && <TitleUnderline subsection={subsection} />}
    </div>
  )
}
