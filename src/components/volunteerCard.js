import Link from 'next/link'
import ArrowOut from 'public/arrowOut.svg'

export default function VolunteerCard({ volunteer }) {
  return (
    <div className="mb-12 transition group relative hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 dark:lg:group-hover:bg-zinc-600/10 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:shadow-none lg:group-hover:drop-shadow-lg dark:lg:group-hover:drop-shadow-none"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
          {volunteer.start_date} - {volunteer.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <Link
                href={volunteer.website} target="_blank" className="inline-flex gap-2 items-center leading-tight text-zinc-800 dark:text-zinc-200 text-base">
                <span>{volunteer.organisation}</span> <ArrowOut className="w-4 h-4 fill-zinc-600 dark:fill-zinc-300" />
              </Link>
            </div>
            <div>
              <div className="text-sky-800 dark:text-sky-500">
                {volunteer.role}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 dark:text-zinc-300 font-light text-sm">
                {volunteer.field}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}