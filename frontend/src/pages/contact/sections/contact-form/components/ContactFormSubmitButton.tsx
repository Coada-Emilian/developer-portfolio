import { Send } from 'lucide-react'

export default function ContactFormSubmitButton() {
  return (
    <button
      type="button"
      className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-blue-600 px-2 py-1.5 text-xs font-bold text-white transition-colors hover:bg-blue-700 md:mx-auto md:w-1/3 md:px-4 md:py-3 md:text-sm lg:text-base"
    >
      <Send className="size-4 md:size-5 lg:size-6" strokeWidth={2} />
      Envoyer le message
    </button>
  )
}
