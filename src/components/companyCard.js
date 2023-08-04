import Link from 'next/link'
import ArrowOut from 'public/arrowOut.svg'
import { useEffect, useRef } from 'react'
import useIsInViewport from '@/hooks/useIsInViewport'

export default function CompanyCard({ experience }) {
  
  const companyCardRef = useRef()
  const isCompanyCardInViewport = useIsInViewport(companyCardRef)
  
  useEffect(() => {
    if (isCompanyCardInViewport) {
      const element = companyCardRef.current
      if (!element?.className.includes('card-animation')) {
        element.className += ' card-animation'
        element.style.animationDelay = `${experience.id}s`
      }
    }
  }, [isCompanyCardInViewport])
  
  return (
    <div ref={companyCardRef} className="mb-12 relative group hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 dark:lg:group-hover:bg-zinc-600/10 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:shadow-none lg:group-hover:drop-shadow-lg dark:lg:group-hover:drop-shadow-none"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:gap-10 xl:gap-2">
        <header className="mb-2 md:mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 col-span-2 whitespace-nowrap">
          {experience.start_date} - {experience.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <Link
                href={experience.website} target="_blank" className="inline-flex gap-2 items-center leading-tight text-zinc-800 dark:text-zinc-200 text-base">
                <span>{experience.company}</span> <ArrowOut className="w-4 h-4 fill-zinc-600 dark:fill-zinc-300" />
              </Link>
            </div>
            <div>
              <div className="text-sky-800 dark:text-sky-500">
                {experience.title}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 dark:text-zinc-300 font-light text-sm md:mt-1">
                {experience.location} • {experience.type}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            {experience.description}
          </p>
          <ul className="mt-2 flex flex-wrap">
            {experience.skills.map((skill, key) => {
              return (
                <li className="mr-1.5 mt-2" key={key}>
                  <div className="flex items-center rounded-full bg-sky-600/10 dark:bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700 dark:text-sky-500">
                    { skill }
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}