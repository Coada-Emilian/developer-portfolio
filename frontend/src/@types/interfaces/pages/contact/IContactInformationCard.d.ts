export interface IContactInformationCard {
  label: string
  value: string
  icon: React.ComponentType<{ className: string; strokeWidth: number }>
  actionIcon: React.ComponentType<{ className: string; strokeWidth: number }>
}
