'use client'

import Link from "next/link";

export default function CompanyCard({ experience }) {
  return (
    <div className="mb-12 transition">
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap">
          {experience.start_date} - {experience.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <Link
                href={experience.website} target="_blank" className="inline-flex items-baseline leading-tight text-zinc-800 text-base">
                <span>{experience.company} [icon]</span>
              </Link>
            </div>
            <div>
              <div className="text-sky-800">
                {experience.title}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 font-light text-sm mt-1">
                {experience.location} • {experience.type}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-zinc-600">
            {experience.description}
          </p>
          <ul className="mt-2 flex flex-wrap">
            {experience.skills.map(skill => {
              return (
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-sky-600/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700">
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