import { ArrowRight, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'

// Encourages recruiters to get in touch regarding opportunities and professional collaboration.
export default function ContactSection() {
  return (
    <section className="flex items-center gap-4 rounded-xl bg-linear-to-r from-blue-950 via-blue-900 to-blue-900/90 px-5 py-5 text-white shadow-sm sm:gap-5 md:px-10 lg:px-28">
      {/* Provides a visual identity for the contact call to action. */}
      <div className="flex shrink-0 items-center justify-center">
        <Handshake
          aria-hidden="true"
          className="size-6 text-blue-200 md:size-7 lg:size-9"
          strokeWidth={1.8}
        />
      </div>

      <div className="h-10 w-px shrink-0 bg-blue-300/50" />

      {/* Displays the invitation and supporting message. */}
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h2 className="text-xs font-medium sm:text-lg">Discutons de votre besoin</h2>

        <p className="mt-0.5 hidden text-xs leading-relaxed text-blue-100 md:block sm:text-sm">
          Un projet, une opportunité ou simplement un échange ? Je suis disponible pour en parler.
        </p>
      </div>

      {/* Adapts the button label to the available screen width. */}
      <Link
        to="/contact"
        className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-2 py-2 text-xs font-bold text-blue-950 transition-colors hover:bg-blue-100 lg:px-4 sm:text-sm"
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
