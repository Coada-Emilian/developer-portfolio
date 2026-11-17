import PageHero from '../../../components/shared/PageHero'

// Introduces the recruiter page and presents its professional focus across responsive breakpoints.
export default function HeroSection() {
  return (
    <PageHero
      title="Pour les recruteurs"
      mobileSubtitle="Mon parcours, mes compétences et mes projets en développement web."
      tabletSubtitle="Découvrez mon parcours de reconversion, mes compétences techniques et les projets concrets qui illustrent ma progression vers le développement Full Stack."
      desktopSubtitle="Mon parcours professionnel, ma transition vers le développement Full Stack et les compétences que je construis au quotidien : concevoir des applications utiles, résoudre des problématiques concrètes et contribuer à des projets de qualité."
      backButton={true}
    />
  )
}
