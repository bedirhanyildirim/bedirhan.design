import { getLanguages } from "@/lib/resume";

export default function ThemeLanguages() {
  return (
    <>
      <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">
        Languages
      </h3>
      <ul className="flex flex-wrap flex-col md:flex-row justify-between w-full gap-y-2">
        {getLanguages().map((language) => {
          return (
            <li className="font-medium leading-snug" key={language.id}>
              <span className="text-black dark:text-white">
                {language.language}:{" "}
              </span>
              <span className="text-title">
                {language.level}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
