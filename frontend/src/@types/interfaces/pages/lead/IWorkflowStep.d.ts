export interface IWorkflowStep {
  title: string
  description: string
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}
