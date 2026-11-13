import type { ElementType } from 'react'
import type { SkillStatus } from '../../../types/pages/skills/skillStatus.types'

export interface ITechnology {
  name: string
  icon: ElementType | null
  status: SkillStatus
}
