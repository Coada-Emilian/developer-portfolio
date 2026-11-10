import Navbar from "./components/layout/navbar/Navbar";
import AudienceNavigation from "./components/sections/audience-navigation/AudienceNavigation";
import HeroSection from "./components/sections/hero/HeroSection";
import ServicesOverview from "./components/sections/services-overview/ServicesOverview";
import { user } from "./data/user";

export default function App() {
  return (
    <main className="min-h-screen bg-surface font-body text-text-primary">
      <Navbar user={user} />

      <HeroSection user={user} />

      <AudienceNavigation />

      <ServicesOverview />
    </main>
  );
}
