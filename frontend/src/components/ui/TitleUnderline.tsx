interface TitleUnderlineProps {
  subsection?: boolean
}

export default function TitleUnderline({ subsection }: TitleUnderlineProps) {
  return (
    <div
      className={`mt-2 mb-2 rounded-full bg-blue-500 ${subsection ? 'w-4 md:w-6 h-0.5 lg:h-1' : 'w-6 md:w-10 h-1'}`}
    />
  )
}
