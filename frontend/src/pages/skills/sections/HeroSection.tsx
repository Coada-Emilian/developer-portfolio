import PageHero from '../../../components/shared/PageHero'

export default function HeroSection() {
  return (
    <PageHero
      title="Compétences"
      // Subtitle adapts to the available screen size.
      mobileSubtitle="Mes compétences techniques, mes outils et mon approche du développement."
      tabletSubtitle="Les technologies que j’utilise, mes domaines d’expertise et mes méthodes de développement."
      desktopSubtitle="Un aperçu des technologies que j’utilise, de mes compétences techniques et de mon approche pour concevoir des applications fiables et maintenables."
    />
  )
}
