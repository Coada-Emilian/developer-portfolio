import { CalendarDays } from 'lucide-react'

import SectionHeading from '../../../components/shared/SectionHeading'
import { contactLinks } from '../../../data/pages/contact'

// Displays contact details, external links and current professional availability.
export default function ContactInformationSection() {
  return (
    <section className="flex flex-col gap-5">
      {/* Section introduction */}
      <div>
        <SectionHeading title="Restons en contact !" underline />

        <p className="mt-3 text-xs font-medium leading-relaxed text-text-primary md:text-sm lg:text-base">
          Vous avez un projet, une opportunité ou une question ? N’hésitez pas à me contacter. Je
          serai ravi d’échanger avec vous.
        </p>
      </div>

      {/* Contact links */}
      <div className="flex flex-col gap-3">
        {contactLinks.map((contact) => {
          const Icon = contact.icon
          const ActionIcon = contact.actionIcon
          const isEmail = contact.label === 'Email'
          const href = isEmail ? `mailto:${contact.value}` : `https://${contact.value}`

          return (
            <a
              key={contact.label}
              href={href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-4 rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-3 transition-colors hover:border-blue-300 hover:bg-blue-100/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <Icon className="size-5 shrink-0 text-blue-700 md:size-6 lg:size-7" strokeWidth={2} />

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-text-primary md:text-base lg:text-lg">
                  {contact.label}
                </h3>

                <p className="truncate text-xs font-medium text-text-primary md:text-sm lg:text-base">
                  {contact.value}
                </p>
              </div>

              <ActionIcon
                className="size-4 shrink-0 text-text-primary md:size-5 lg:size-6"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          )
        })}
      </div>

      {/* Availability information */}
      <div className="mt-auto flex items-start gap-4 rounded-xl bg-blue-100/70 p-4">
        <CalendarDays
          className="size-6 shrink-0 text-blue-700 md:size-7 lg:size-9"
          strokeWidth={2}
        />

        <div className="flex flex-col gap-2">
          <SectionHeading title="Disponibilité" subsection />

          <p className="text-xs leading-relaxed text-text-primary md:text-sm lg:text-base">
            Ouvert aux opportunités (CDI, CDD, alternance, stage) et aux projets intéressants.
          </p>
        </div>
      </div>
    </section>
  )
}
