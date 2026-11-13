import { ArrowRight, GraduationCap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { trainingItems } from '../../../data/pages/skills'

interface RotatingCourseTitleProps {
  courses: (typeof trainingItems)[number]['courses']
}

function RotatingCourseTitle({ courses }: RotatingCourseTitleProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (courses.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % courses.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [courses.length])

  const activeCourse = courses[activeIndex]

  return (
    <p
      className="truncate text-xs text-text-secondary"
      title={`${activeCourse.provider} - ${activeCourse.title}`}
    >
      {activeCourse.title}
    </p>
  )
}

export default function TrainingOverview() {
  return (
    <>
      {/* Introduction */}
      <div className="flex min-w-70 items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <GraduationCap size={26} />
        </div>

        <div>
          <h3 className="font-bold text-text-primary">Formation & apprentissage</h3>
          <p className="text-xs text-text-secondary">
            Parcours, formations terminées, en cours et à venir.
          </p>
        </div>
      </div>

      <div className="h-12 w-0.5 shrink-0 bg-gray-300" />

      {/* Training status */}
      <div className="grid w-full min-w-0 flex-1 grid-cols-3 gap-3">
        {trainingItems.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-blue-100 bg-surface px-4 py-3"
            >
              <Icon size={21} className={`shrink-0 ${item.color}`} />

              <div className="min-w-0">
                <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>

                <p className="text-xs text-text-secondary">{item.courses.length} formations</p>

                <RotatingCourseTitle courses={item.courses} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="h-12 w-0.5 shrink-0 bg-gray-300" />

      {/* Details link */}
      <Link
        to="/skills/training"
        className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Voir le détail
        <ArrowRight size={16} />
      </Link>

      <div className="hidden lg:block"></div>
    </>
  )
}
