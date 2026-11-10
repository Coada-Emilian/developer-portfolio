import Navbar from "./components/layout/navbar/Navbar";
import AudienceNavigationSection from "./components/sections/audience-navigation/AudienceNavigationSection";
import HeroSection from "./components/sections/hero/HeroSection";
import TechnologiesSection from "./components/sections/technologies/TehnologiesSection";
import { user } from "./data/user";

export default function App() {
  return (
    <main className="min-h-screen bg-surface font-body text-text-primary">
      <Navbar user={user} />

      <HeroSection user={user} />

      <AudienceNavigationSection />

      <TechnologiesSection />
    </main>
  );
}
