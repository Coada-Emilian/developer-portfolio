import ContactInformationSection from './sections/ContactInformationSection'
import HeroSection from './sections/HeroSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8 lg:py-12">
        <ContactInformationSection />
      </div>
    </main>
  )
}
