import { getEducations } from "@/lib/resume";
import { EducationCard } from "@/components/theme/card";

export default function ThemeEducations() {
  return (
    <>
      <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">
        Educations
      </h3>
      {getEducations().map((education) => {
        return (
          <EducationCard
            education={education}
            key={education.id}
          ></EducationCard>
        );
      })}
    </>
  );
}
