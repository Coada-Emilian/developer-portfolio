import { ContactFormSection, ContactInformationSection, HeroSection } from './sections'

// Assembles the Contact page with its introduction, contact details and form.
export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface text-text-primary">
      <HeroSection />

      <div className="grid w-full flex-1 grid-cols-1 items-start gap-8 px-5 md:px-8 lg:mx-auto lg:w-10/12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-10 lg:px-12 lg:py-12 xl:gap-12 xl:px-16 2xl:px-20 mt-2">
        <ContactInformationSection />

        <ContactFormSection />
      </div>
    </main>
  )
}
