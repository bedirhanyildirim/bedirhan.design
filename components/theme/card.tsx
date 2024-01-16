import { experiences, education, volunteer } from "@/types/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ExperienceCard({
  jobExperience,
}: {
  jobExperience: experiences;
}) {
  return (
    <div className="mb-12 relative group hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 dark:lg:group-hover:bg-zinc-600/10 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:shadow-none lg:group-hover:drop-shadow-lg dark:lg:group-hover:drop-shadow-none"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:gap-10 xl:gap-2">
        <header className="mb-2 md:mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 col-span-2 whitespace-nowrap">
          {jobExperience.start_date} - {jobExperience.end_date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              {jobExperience.website ? (
                <Link
                  href={jobExperience.website}
                  target="_blank"
                  className="inline-flex gap-2 items-center leading-tight text-zinc-800 dark:text-zinc-200 text-base"
                >
                  <span>{jobExperience.company}</span>{" "}
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                </Link>
              ) : (
                <span>{jobExperience.company}</span>
              )}
            </div>
            <div>
              <div className="text-sky-800 dark:text-sky-500">
                {jobExperience.title}
              </div>
            </div>
            <div>
              <div className="text-zinc-600 dark:text-zinc-300 font-light text-sm md:mt-1">
                {jobExperience.location} • {jobExperience.type}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-zinc-600 dark:text-zinc-300">
            {jobExperience.description}
          </p>
          <ul className="mt-2 flex flex-wrap">
            {jobExperience.skills &&
              jobExperience.skills.map((skill, key) => {
                return (
                  <li className="mr-1.5 mt-2" key={key}>
                    <div className="flex items-center rounded-full bg-sky-600/10 dark:bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-700 dark:text-sky-500">
                      {skill}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function EducationCard({ education }: { education: education }) {
  return (
    <div className="mb-12 transition group relative hover:cursor-default">
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/20 dark:lg:group-hover:bg-zinc-600/10 lg:group-hover:shadow-[inset_0_0_0_0_rgba(148,163,184,0.1)] dark:lg:group-hover:shadow-none lg:group-hover:drop-shadow-lg dark:lg:group-hover:drop-shadow-none"></div>
      <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:col-span-2 whitespace-nowrap">
          {education.start_year} - {education.end_year}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <span className="text-zinc-800 dark:text-zinc-200">
                {education.location} {education.school}
              </span>
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
  );
}

export function VolunteerCard({ volunteer }: { volunteer: volunteer }) {
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
                href={volunteer.website}
                target="_blank"
                className="inline-flex gap-2 items-center leading-tight text-zinc-800 dark:text-zinc-200 text-base"
              >
                <span>{volunteer.organisation}</span>{" "}
                <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
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
  );
}
