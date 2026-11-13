import { GithubIcon } from '@dev.icons/react/mono'
import { Copy, ExternalLink, Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

export const contactLinks = [
  {
    label: 'Email',
    value: 'emilian.coada@gmail.com',
    icon: Mail,
    actionIcon: Copy,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/emilian-coada',
    icon: FaLinkedin,
    actionIcon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'github.com/Coada-Emilian',
    icon: GithubIcon,
    actionIcon: ExternalLink,
  },
]
