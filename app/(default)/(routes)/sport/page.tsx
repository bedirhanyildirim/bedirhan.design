import type { Metadata } from "next";
import ThemeSport from "@/components/theme/sport";

export const metadata: Metadata = {
  title: "Bedirhan Design | Sports",
  description:
    "I love spending time at the gym, enjoy running in the park, and explore nature through hikes and cycling. Here in this page you can find the history of exercises I do.",
};

export default function SportPage() {
  return (
    <>
      <div className="mb-16 text-zinc-500 dark:text-zinc-400 lg:scroll-mt-24">
        I love spending time at the gym, enjoy running in the park, and explore
        nature through hikes and cycling.
      </div>
      <div className="mb-24">
        <ThemeSport />
      </div>
    </>
  );
}
