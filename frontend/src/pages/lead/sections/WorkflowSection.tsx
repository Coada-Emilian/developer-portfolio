import SectionHeading from '../../../components/shared/SectionHeading'
import { workflowSteps } from '../../../data/pages/lead'

// Presents the four main stages of the development workflow.
export default function WorkflowSection() {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeading title="Ma façon de travailler" underline />

      {/* Adapts the workflow presentation to each screen size. */}
      <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4">
        {/* Connects the numbered markers in the desktop timeline. */}
        <div className="absolute top-4 right-[12.5%] left-[12.5%] hidden h-px bg-blue-300 lg:block" />

        {/* Connects the numbered markers in the mobile timeline. */}
        <div className="absolute top-8 bottom-8 left-3 md:left-4 w-px bg-blue-300 lg:hidden" />

        {workflowSteps.map((step, index) => {
          const Icon = step.icon

          return (
            <article
              key={step.title}
              className="relative flex min-w-0 items-center gap-3 md:gap-6 lg:flex-col lg:items-stretch lg:gap-2"
            >
              {/* Numbered marker: beside the card on mobile, above it on desktop. */}
              <div className="relative z-10 flex size-6 md:size-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs md:text-sm font-bold text-white shadow-sm sm:mx-auto lg:size-8">
                {index + 1}
              </div>

              {/* Describes the action and purpose of each workflow stage. */}
              <div className="flex min-w-0 flex-1 items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3 sm:w-full sm:flex-1">
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 md:size-6 lg:size-7 shrink-0 text-blue-600"
                  strokeWidth={2}
                />

                <div className="min-w-0">
                  <h3 className="text-xs  font-bold leading-snug text-text-primary md:text-base lg:text-lg">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xxs leading-relaxed text-text-secondary md:text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
