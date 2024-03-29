import ThemeEducations from "@/components/theme/educations";
import ThemeExperiences from "@/components/theme/experiences";
import ThemeLanguages from "@/components/theme/languages";
import ThemeVolunteers from "@/components/theme/volunteers";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="text-zinc-500 dark:text-zinc-400 lg:scroll-mt-24"
      >
        <p className="mb-4">
          I have extensive experience in web development, design and
          entrepreneurship. With 5 years of professional experience as a
          software engineer, my focus lies in frontend web development. I have
          successfully collaborated with both large and small teams,
          consistently delivering modern solutions by staying abreast of the
          latest technologies.
        </p>
        <p>
          I have a true passion for coding, design, and continuous learning.
          These interests drive me to stay ahead of industry trends and seek out
          new opportunities for growth and improvement. With a strong foundation
          in frontend development and a drive for innovation, I am eager to
          tackle new challenges and contribute to impactful projects.
        </p>
      </section>
      <section id="experiences" className="my-24">
        <ThemeExperiences />
      </section>
      <section id="education" className="my-24">
        <ThemeEducations />
      </section>
      <section id="volunteer" className="my-24">
        <ThemeVolunteers />
      </section>
      <section id="languages" className="mt-24 lg:my-24">
        <ThemeLanguages />
      </section>
    </>
  );
}
