import ContactFormSection from './sections/ContactFormSection'
import ContactInformationSection from './sections/ContactInformationSection'
import HeroSection from './sections/HeroSection'

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface text-text-primary">
      <HeroSection />

      <div className="grid w-full flex-1 grid-cols-1 items-start gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-10 lg:px-12 lg:py-12 xl:gap-12 xl:px-16 2xl:px-20 lg:w-10/12 lg:mx-auto lg:gap-5">
        <ContactInformationSection />

        <ContactFormSection />
      </div>
    </main>
  )
}
