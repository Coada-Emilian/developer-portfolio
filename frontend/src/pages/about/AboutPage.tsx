import { user } from '../../data/user'
import ProfileCard from './components/profile-card/ProfileCard'
import HeroSection from './components/sections/HeroSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface  text-text-primary">
      <HeroSection />

      <div className="md:p-4 md:px-8">
        <ProfileCard user={user} />
      </div>
    </main>
  )
}
