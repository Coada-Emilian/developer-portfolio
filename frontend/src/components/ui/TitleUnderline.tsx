import type { TitleUnderlineProps } from '../../@types/props/shared/shared.props'

// Decorative underline used by section headings, with a smaller variant for subsections.
export default function TitleUnderline({ subsection }: TitleUnderlineProps) {
  return (
    <div
      className={`mt-2 mb-2 rounded-full bg-blue-500 ${
        subsection ? 'h-0.5 w-4 md:w-6 lg:h-1' : 'h-1 w-6 md:w-10'
      }`}
    />
  )
}
