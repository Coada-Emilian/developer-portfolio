import { LockKeyhole, Send } from 'lucide-react'

export default function ContactFormSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-50/40 p-4 shadow-sm md:p-5">
      {/* Form heading */}
      <div className="mb-5 flex items-center gap-3">
        <Send className="size-8 shrink-0 text-blue-600" strokeWidth={2} />

        <h2 className="text-xl font-extrabold text-text-primary">Envoyez-moi un message</h2>
      </div>

      {/* Contact form */}
      <form className="flex flex-col gap-4">
        {/* Name and email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-bold text-text-primary">
              Votre nom <span className="text-red-500">*</span>
            </label>

            <input
              id="contact-name"
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-bold text-text-primary">
              Votre email <span className="text-red-500">*</span>
            </label>

            <input
              id="contact-email"
              type="email"
              placeholder="votre@email.com"
              className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="text-sm font-bold text-text-primary">
            Sujet <span className="text-red-500">*</span>
          </label>

          <select
            id="contact-subject"
            defaultValue=""
            className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-2 text-sm text-text-primary outline-none transition-colors focus:border-blue-500"
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
          <label htmlFor="contact-message" className="text-sm font-bold text-text-primary">
            Votre message <span className="text-red-500">*</span>
          </label>

          <textarea
            id="contact-message"
            rows={5}
            placeholder="Écrivez votre message..."
            className="w-full resize-y rounded-lg border border-blue-200 bg-surface px-3 py-2 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500"
          />
        </div>

        {/* Submit button - functionality deferred */}
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 font-bold text-white transition-colors hover:bg-blue-700 lg:w-1/3 lg:mx-auto"
        >
          <Send className="size-5" strokeWidth={2} />
          Envoyer le message
        </button>

        {/* Privacy notice */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-text-secondary">
          <LockKeyhole className="size-4 shrink-0" />
          <p>Vos informations ne sont utilisées que pour répondre à votre message.</p>
        </div>
      </form>
    </section>
  )
}
