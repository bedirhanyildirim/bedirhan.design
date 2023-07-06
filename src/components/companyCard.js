import Link from 'next/link'
import ArrowOut from 'public/arrowOut.svg'

export default function CompanyCard({ experience }) {
  return (
    <div className="mb-12 relative group hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:gap-10 xl:gap-2">
        <header className="mb-2 md:mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 col-span-2 whitespace-nowrap">
          {experience.start_date} - {experience.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <Link
                href={experience.website} target="_blank" className="inline-flex gap-2 items-center leading-tight text-zinc-800 text-base">
                <span>{experience.company}</span> <ArrowOut className="w-4 h-4 fill-zinc-600" />
              </Link>
            </div>
            <div>
              <div className="text-sky-800">
                {experience.title}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 font-light text-sm md:mt-1">
                {experience.location} • {experience.type}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-zinc-600">
            {experience.description}
          </p>
          <ul className="mt-2 flex flex-wrap">
            {experience.skills.map((skill, key) => {
              return (
                <li className="mr-1.5 mt-2" key={key}>
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