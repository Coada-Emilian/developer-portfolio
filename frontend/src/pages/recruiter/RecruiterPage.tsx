import HeroSection from './sections/HeroSection'
import HighlightsSection from './sections/HighlightsSection'

export default function RecruiterPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <HeroSection />

      <HighlightsSection />
    </main>
  )
}
