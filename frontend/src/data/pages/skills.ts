import { CodeXml, Contact, Users } from 'lucide-react'

export const navigationItems = [
  {
    label: 'Compétences techniques',
    path: '/skills/technical',
    icon: CodeXml,
  },
  {
    label: 'Compétences personnelles',
    path: '/skills/personal',
    icon: Users,
  },
  {
    label: 'Informations complémentaires',
    path: '/skills/complementary',
    icon: Contact,
  },
]

export const skillsSections = {
  '/skills/technical': 'Compétences techniques',
  '/skills/personal': 'Compétences personnelles',
  '/skills/complementary': 'Informations complémentaires',
}
