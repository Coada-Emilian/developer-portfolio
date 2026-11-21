import { LockKeyhole } from 'lucide-react'

export default function ContactFormPrivacyNotice() {
  return (
    <div className="flex items-center justify-center gap-2 text-center text-xs text-text-secondary">
      <LockKeyhole className="size-4 shrink-0" />
      <p className="text-start">
        Vos informations ne sont utilisées que pour répondre à votre message.
      </p>
    </div>
  )
}
