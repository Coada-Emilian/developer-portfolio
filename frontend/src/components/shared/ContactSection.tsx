import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ContactSectionProps {
  title: string
  subtitle: string
  icon: React.ElementType
}

export default function ContactSection({ title, subtitle, icon: Icon }: ContactSectionProps) {
  return (
    <section className="flex items-center gap-4 rounded-xl bg-linear-to-r from-blue-950 via-blue-900 to-blue-900/90 px-5 py-5 text-white shadow-sm sm:gap-5 md:px-10">
      <div className="flex shrink-0 items-center justify-center">
        <Icon aria-hidden="true" className="size-6 sm:size-7" strokeWidth={2} />
      </div>

      <div className="h-10 w-px shrink-0 bg-blue-300/50" />

      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h2 className="text-xs font-medium sm:text-lg">{title}</h2>

        <p className="mt-0.5 hidden text-xs leading-relaxed text-blue-100 sm:text-sm md:block">
          {subtitle}
        </p>
      </div>

      <Link
        to="/contact"
        className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-2 py-2 text-xs font-bold text-blue-950 transition-colors hover:bg-blue-100 sm:text-sm lg:px-4"
      >
        <span className="hidden items-center gap-1 sm:flex">
          Me contacter
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>

        <span className="flex items-center gap-1 sm:hidden">
          Contact
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </Link>
    </section>
  )
}
