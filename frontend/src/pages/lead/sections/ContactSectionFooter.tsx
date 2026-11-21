import { Network } from 'lucide-react'
import ContactSection from '../../../components/shared/ContactSection'

// Invites developers to discuss projects, ideas and technical collaboration.
export default function ContactSectionFooter() {
  return (
    <ContactSection
      title="Échangeons sur vos enjeux techniques"
      subtitle="Je serais ravi d'échanger sur vos défis et les solutions à construire ensemble."
      icon={Network}
    />
  )
}
