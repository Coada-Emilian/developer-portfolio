export default function ContactFormNameAndEmailInputs() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-xs font-bold text-text-primary md:text-sm lg:text-base"
        >
          Votre nom <span className="text-red-500">*</span>
        </label>

        <input
          id="contact-name"
          type="text"
          placeholder="Votre nom"
          className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500 md:py-2"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-xs font-bold text-text-primary md:text-sm lg:text-base"
        >
          Votre email <span className="text-red-500">*</span>
        </label>

        <input
          id="contact-email"
          type="email"
          placeholder="votre@email.com"
          className="w-full rounded-lg border border-blue-200 bg-surface px-3 py-1 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-blue-500 md:py-2"
        />
      </div>
    </div>
  )
}
