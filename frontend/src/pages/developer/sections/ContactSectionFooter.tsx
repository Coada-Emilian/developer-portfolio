import { GithubIcon } from '@dev.icons/react/mono'
import ContactSection from '../../../components/shared/ContactSection'

// Invites developers to discuss projects, ideas and technical collaboration.
export default function ContactSectionFooter() {
  return (
    <ContactSection
      title="Un projet ou une idée à échanger ?"
      subtitle="Discutons de développement, d’architecture, de choix techniques ou d’opportunités de collaboration."
      icon={GithubIcon}
    />
  )
}
