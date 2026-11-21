import type { ContactInformationCardProps } from '../../../../../@types/props/pages/contact/contactPage.props'

export default function ContactInformationCard({
  contact,
  isEmail,
  href,
  Icon,
  ActionIcon,
}: ContactInformationCardProps) {
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
}
