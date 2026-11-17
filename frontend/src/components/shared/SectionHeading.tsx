import TitleUnderline from '../ui/TitleUnderline'

interface SectionHeadingProps {
  title: string
  subsection?: boolean
  underline?: boolean
}

export default function SectionHeading({ title, subsection, underline }: SectionHeadingProps) {
  return (
    <div>
      <h2
        className={`${subsection ? 'text-xs sm:text-xl' : 'text-sm sm:text-2xl'} font-extrabold text-slate-900 `}
      >
        {title}
      </h2>

      {underline && subsection && <TitleUnderline subsection />}
      {underline && !subsection && <TitleUnderline />}
    </div>
  )
}
