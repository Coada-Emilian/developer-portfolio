import { LockKeyhole, Send } from 'lucide-react'
import SectionHeading from '../../../components/shared/SectionHeading'

export default function ContactFormSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-50/40 p-4 shadow-sm md:p-5">
      {/* Form heading */}
      <div className="mb-5 flex items-center gap-3">
        <Send className="size-6 md:size-7 lg:size-9 shrink-0 text-blue-600" strokeWidth={2} />

        <SectionHeading title="Envoyez-moi un message" />
      </div>

      {/* Contact form */}
      <form className="flex flex-col gap-4">
        {/* Name and email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-xs md:text-sm lg:text-base font-bold text-text-primary"
            >
              Votre nom <span className="text-red-500">*</span>
            </label>

            <input
              id="contact-name"
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 md:py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-xs md:text-sm lg:text-base font-bold text-text-primary"
            >
              Votre email <span className="text-red-500">*</span>
            </label>

            <input
              id="contact-email"
              type="email"
              placeholder="votre@email.com"
              className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 md:py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-subject"
            className="text-xs md:text-sm lg:text-base font-bold text-text-primary"
          >
            Sujet <span className="text-red-500">*</span>
          </label>

          <select
            id="contact-subject"
            defaultValue=""
            className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 md:py-2 text-sm text-text-primary outline-none transition-colors focus:border-blue-500"
          >
            <option value="" disabled>
              Sélectionnez un sujet
            </option>
            <option value="opportunity">Opportunité professionnelle</option>
            <option value="project">Projet</option>
            <option value="question">Question</option>
            <option value="other">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="text-xs md:text-sm lg:text-base font-bold text-text-primary"
          >
            Votre message <span className="text-red-500">*</span>
          </label>

          <textarea
            id="contact-message"
            rows={5}
            placeholder="Écrivez votre message..."
            className="w-full resize-y rounded-lg border border-blue-200 bg-surface px-3 py-1 md:py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
          />
        </div>

        {/* Submit button - functionality deferred */}
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-blue-600 px-2 py-1.5 md:px-4 md:py-3 font-bold text-white transition-colors hover:bg-blue-700 md:w-1/3 md:mx-auto text-xs md:text-sm lg:text-base"
        >
          <Send className="size-4 md:size-5 lg:size-6" strokeWidth={2} />
          Envoyer le message
        </button>

        {/* Privacy notice */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-text-secondary">
          <LockKeyhole className="size-4 shrink-0" />
          <p className="text-start">
            Vos informations ne sont utilisées que pour répondre à votre message.
          </p>
        </div>
      </form>
    </section>
  )
}
