import { useEffect, useRef } from 'react'
import useIsInViewport from '@/hooks/useIsInViewport'

export default function EducationCard({ education }) {
  const educationCardRef = useRef()
/*  const isCompanyCardInViewport = useIsInViewport(educationCardRef)
  
  useEffect(() => {
    if (isCompanyCardInViewport) {
      const element = educationCardRef.current
      if (!!element?.style && !element?.className.includes('card-animation')) {
        element.className += ' card-animation'
        element.style.animationDelay = `${education.id}s`
      }
    }
  }, [isCompanyCardInViewport])*/
  
  return (
    <div ref={educationCardRef} className="mb-12 transition group relative hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 dark:lg:group-hover:bg-zinc-600/10 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:shadow-none lg:group-hover:drop-shadow-lg dark:lg:group-hover:drop-shadow-none"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
          {education.start_year} - {education.end_year}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <span className="text-zinc-800 dark:text-zinc-200">{education.location} {education.school}</span>
            </div>
            <div>
              <div className="text-sky-800 dark:text-sky-500">
                {education.degree} • {education.field}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}