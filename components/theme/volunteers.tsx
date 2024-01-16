import { volunteers } from "@/lib/resume";
import { VolunteerCard } from "@/components/theme/card";

export default function ThemeVolunteers() {
  return (
    <>
      <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">
        Volunteers
      </h3>
      {volunteers.map((volunteer) => {
        return (
          <VolunteerCard
            volunteer={volunteer}
            key={volunteer.id}
          ></VolunteerCard>
        );
      })}
    </>
  );
}
