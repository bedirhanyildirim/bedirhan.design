import ThemeNav from "@/components/theme/nav";
import ThemeFooter from "@/components/theme/footer";

export default function ThemeAside() {
  return (
    <aside className="mt-24 lg:mt-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
          Bedirhan Yildirim
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl dark:text-white">
          Software Engineer & Entrepreneur
        </h2>
        <ThemeNav />
      </div>
      <ThemeFooter />
    </aside>
  );
}
