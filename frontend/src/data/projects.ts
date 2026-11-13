import type { IProject } from '../@types/interfaces/pages/projects/IProject'

import kinesoin1 from '../assets/images/kinesoin1.jpg'
import kinesoin2 from '../assets/images/kinesoin2.jpg'
import kinesoin3 from '../assets/images/kinesoin3.jpg'
import kinesoin4 from '../assets/images/kinesoin4.png'
import kinesoin5 from '../assets/images/kinesoin5.png'

import backlogged1 from '../assets/images/backlogged1.jpg'
import backlogged2 from '../assets/images/backlogged2.jpg'
import backlogged3 from '../assets/images/backlogged4.jpg'

import { Gamepad2, HeartHandshake, Stethoscope } from 'lucide-react'
import seniorLove1 from '../assets/images/seniorlove1.jpg'
import seniorLove2 from '../assets/images/seniorlove2.jpg'
import seniorLove3 from '../assets/images/seniorlove3.jpg'
import seniorLove4 from '../assets/images/seniorlove4.jpg'
import seniorLove5 from '../assets/images/seniorlove5.jpg'
import seniorLove6 from '../assets/images/seniorlove6.jpg'

export const projects: IProject[] = [
  {
    id: '1',
    slug: 'kinesoin',
    title: 'KineSoin',
    icon: Stethoscope,
    description: {
      mobile: 'Application de gestion pour kinésithérapeutes.',
      tablet:
        'Application de gestion pour cabinet de kinésithérapie, avec suivi des patients et des rendez-vous.',
      desktop:
        'Application de gestion pour cabinet de kinésithérapie : patients, rendez-vous, séances et facturation.',
    },
    categories: ['Web', 'Full Stack', 'Application'],
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL'],
    featured: true,
    media: [
      { id: 'kinesoin-1', src: kinesoin1, alt: 'KineSoin – aperçu de l’application' },
      { id: 'kinesoin-2', src: kinesoin2, alt: 'KineSoin – interface de gestion' },
      { id: 'kinesoin-3', src: kinesoin3, alt: 'KineSoin – écran de l’application' },
      { id: 'kinesoin-4', src: kinesoin4, alt: 'KineSoin – interface utilisateur' },
      { id: 'kinesoin-5', src: kinesoin5, alt: 'KineSoin – aperçu supplémentaire' },
    ],
    github: 'https://github.com/Coada-Emilian/kineSoin',
  },
  {
    id: '2',
    slug: 'backlogged',
    title: 'Backlogged',
    icon: Gamepad2,
    description: {
      mobile: 'Une bibliothèque personnelle de jeux vidéo.',
      tablet:
        'Une bibliothèque de jeux vidéo développée avec Vue.js pour mettre en pratique les fondamentaux du framework.',
      desktop:
        'Une bibliothèque de jeux vidéo développée avec Vue.js pour explorer les composants, les API, le routage, la gestion d’état et TypeScript.',
    },
    categories: ['Web', 'Frontend', 'Application'],
    technologies: ['Vue', 'TypeScript', 'Vite', 'Pinia'],
    media: [
      { id: 'backlogged-1', src: backlogged1, alt: 'Backlogged – aperçu de l’application' },
      { id: 'backlogged-2', src: backlogged2, alt: 'Backlogged – interface utilisateur' },
      { id: 'backlogged-3', src: backlogged3, alt: 'Backlogged – écran de l’application' },
    ],
    github: 'https://github.com/Coada-Emilian/vue-game-library',
  },
  {
    id: '3',
    slug: 'seniorlove',
    title: 'SeniorLove',
    icon: HeartHandshake,
    description: {
      mobile: 'Une plateforme de rencontres et d’activités pour seniors.',
      tablet:
        'Une plateforme qui favorise les liens sociaux entre seniors grâce aux activités et loisirs partagés.',
      desktop:
        'Une plateforme favorisant les rencontres entre seniors autour d’activités partagées, pour lutter contre l’isolement et créer des amitiés durables.',
    },
    categories: ['Web', 'Frontend', 'Application'],
    technologies: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js'],
    media: [
      { id: 'seniorlove-1', src: seniorLove1, alt: 'SeniorLove – aperçu de l’application' },
      { id: 'seniorlove-2', src: seniorLove2, alt: 'SeniorLove – interface utilisateur' },
      { id: 'seniorlove-3', src: seniorLove3, alt: 'SeniorLove – écran de l’application' },
      { id: 'seniorlove-4', src: seniorLove4, alt: 'SeniorLove – interface utilisateur' },
      { id: 'seniorlove-5', src: seniorLove5, alt: 'SeniorLove – aperçu supplémentaire' },
      { id: 'seniorlove-6', src: seniorLove6, alt: 'SeniorLove – aperçu supplémentaire' },
    ],
    github: 'https://github.com/Coada-Emilian/SeniorLove',
  },
]
