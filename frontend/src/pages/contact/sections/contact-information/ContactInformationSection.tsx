import {
  ContactAvailabilityInformationCard,
  ContactInformationCard,
  ContactInformationCardTitle,
} from './components'

import { contactLinks } from '../../../../data/pages/contact'

// Displays contact details, external links and current professional availability.
export default function ContactInformationSection() {
  return (
    <section className="flex flex-col gap-5">
      {/* Section introduction */}
      <ContactInformationCardTitle />

      {/* Contact links */}
      <div className="flex flex-col gap-3">
        {contactLinks.map((contact) => {
          const Icon = contact.icon
          const ActionIcon = contact.actionIcon
          const isEmail = contact.label === 'Email'
          const href = isEmail ? `mailto:${contact.value}` : `https://${contact.value}`

          return (
            <ContactInformationCard
              contact={contact}
              isEmail={isEmail}
              href={href}
              Icon={Icon}
              ActionIcon={ActionIcon}
            />
          )
        })}
      </div>

      {/* Availability information */}
      <ContactAvailabilityInformationCard />
    </section>
  )
}
