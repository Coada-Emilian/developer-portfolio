import { Send } from 'lucide-react'
import SectionHeading from '../../../../../components/shared/SectionHeading'

export default function ContactFormTitle() {
  return (
    <div className="mb-5 flex items-center gap-3">
      <Send className="size-6 shrink-0 text-blue-600 md:size-7 lg:size-9" strokeWidth={2} />

      <SectionHeading title="Envoyez-moi un message" />
    </div>
  )
}
