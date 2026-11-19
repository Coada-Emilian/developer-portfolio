import PageHero from '../../../components/shared/PageHero'

// Introduces the developers page and highlights the technical aspects of the portfolio.
export default function HeroSection() {
  return (
    <PageHero
      title="Pour les développeurs"
      mobileSubtitle="Découvrez mes projets, mes technologies et mes réalisations."
      tabletSubtitle="Explorez mes projets, découvrez les choix techniques et les architectures, et plongez dans les solutions développées."
      desktopSubtitle="Explorez mes projets, plongez dans le code et découvrez les choix techniques, les architectures et les solutions mises en œuvre pour concevoir des applications utiles, évolutives et maintenables."
      backButton={true}
    />
  )
}
