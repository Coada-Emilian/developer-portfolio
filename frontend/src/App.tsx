import Navbar from "./components/layout/navbar/Navbar";
import HeroSection from "./components/sections/hero/HeroSection";

export default function App() {
  const user = {
    firstName: "Emilian",
    lastName: "Coada",
    subtitle: "Développeur Full Stack",
  };
  return (
    <main className="min-h-screen bg-surface font-body text-text-primary">
      <Navbar user={user} />
      <HeroSection user={user} />
    </main>
  );
}
