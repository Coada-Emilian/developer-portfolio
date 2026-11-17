import {
  ContactFormMessageInput,
  ContactFormNameAndEmailInputs,
  ContactFormPrivacyNotice,
  ContactFormSubjectInput,
  ContactFormSubmitButton,
  ContactFormTitle,
} from './components'

// Displays the contact form, including message fields and a privacy notice.
export default function ContactFormSection() {
  return (
    <section className="rounded-xl border border-blue-100 bg-blue-50/40 p-4 shadow-sm md:p-5">
      <ContactFormTitle />

      <form className="flex flex-col gap-4">
        {/* Name and email */}
        <ContactFormNameAndEmailInputs />

        {/* Subject */}
        <ContactFormSubjectInput />

        {/* Message */}
        <ContactFormMessageInput />

        {/* Submission functionality is not yet implemented. */}
        <ContactFormSubmitButton />

        {/* Privacy notice */}
        <ContactFormPrivacyNotice />
      </form>
    </section>
  )
}
