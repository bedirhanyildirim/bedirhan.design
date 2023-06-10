import Link from 'next/link'
import ArrowOut from 'public/arrowOut.svg'

export default function VolunteerCard({ volunteer }) {
  return (
    <div className="mb-12 transition">
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap">
          {volunteer.start_date} - {volunteer.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <Link
                href={volunteer.website} target="_blank" className="inline-flex gap-2 items-center leading-tight text-zinc-800 text-base">
                <span>{volunteer.organisation}</span> <ArrowOut className="w-4 h-4 fill-zinc-600" />
              </Link>
            </div>
            <div>
              <div className="text-sky-800">
                {volunteer.role}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 font-light text-sm">
                {volunteer.field}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}