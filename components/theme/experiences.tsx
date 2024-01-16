import { getExperiences } from "@/lib/resume";
import { ExperienceCard } from "@/components/theme/card";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
          className="group inline-flex items-center leading-tight font-semibold text-title dark:text-white hover:text-title/90 transition"
        >
          Download CV{" "}
          <MoveRight className="block w-6 h-6 ml-2 text-title transition transform-gpu group-hover:text-title/90 group-hover:translate-x-2" />
        </Link>
      </div>
    </>
  );
}
