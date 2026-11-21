import { BriefcaseBusiness } from 'lucide-react'
import ContactSection from '../../../components/shared/ContactSection'

// Invites developers to discuss projects, ideas and technical collaboration.
export default function ContactSectionFooter() {
  return (
    <ContactSection
      title="Discutons de vos besoins"
      subtitle=" Un projet, un besoin de renfort ou une opportunité d'équipe ? Je suis disponible pour en
          discuter."
      icon={BriefcaseBusiness}
    />
  )
}
