import { getExperiences } from "@/lib/resume";
import { ExperienceCard } from "@/components/theme/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ThemeExperiences() {
  return (
    <>
      <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">
        Experiences
      </h3>
      {getExperiences().map((exp) => {
        return <ExperienceCard key={exp.id} jobExperience={exp} />;
      })}
      <div className="w-full flex justify-center lg:justify-start">
        <Link
          href="/bedirhan-yildirim-cv.pdf"
          target="_blank"
          className="group inline-flex items-center leading-tight font-semibold text-sky-800 dark:text-sky-500 hover:text-sky-600 transition"
        >
          Download CV{" "}
          <ArrowRight className="block w-6 h-6 ml-2  fill-sky-800 dark:fill-sky-500 transition transform-gpu group-hover:translate-x-2 group-hover:fill-sky-600 dark:group-hover:fill-sky-500" />
        </Link>
      </div>
    </>
  );
}
