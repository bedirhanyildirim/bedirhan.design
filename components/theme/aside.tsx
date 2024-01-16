import ThemeNav from "@/components/theme/nav";
import ThemeFooter from "@/components/theme/footer";

export default function ThemeAside() {
  return (
    <aside className="mt-24 lg:mt-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
          Bedirhan Yıldırım
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl dark:text-white">
          Sr. Frontend Web Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-zinc-500 dark:text-zinc-400">
          I have extensive experience in web development, design and
          entrepreneurship.
        </p>
        <ThemeNav />
      </div>
      <ThemeFooter />
    </aside>
  );
}
