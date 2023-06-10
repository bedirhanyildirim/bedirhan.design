export default function EducationCard({ education }) {
  return (
    <div className="mb-12 transition">
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap">
          {education.start_year} - {education.end_year}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <span>{education.location} {education.school}</span>
            </div>
            <div>
              <div className="text-sky-800">
                {education.degree} • {education.field}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}