"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navRoutes = [
  {
    href: "/",
    label: "About Me",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export default function ThemeNav() {
  const routes = navRoutes;

  return (
    <ul className="hidden lg:block mt-16 w-max">
      {routes.map((route) => (
        <li key={route.label}>
          <ThemeNavItem href={route.href} label={route.label} />
        </li>
      ))}
    </ul>
  );
}

function ThemeNavItem({ label, href }: { label: string; href: string }) {
  const pathName = usePathname();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className="group flex items-center py-3 hover:cursor-pointer"
    >
      <span
        className={cn(
          "mr-4 h-px w-8 bg-slate-600 dark:bg-slate-300 transition-all group-hover:w-16 group-hover:bg-sky-800 dark:group-hover:bg-sky-400 group-focus-visible:w-16 group-focus-visible:bg-sky-800 dark:group-focus-visible:bg-sky-400 motion-reduce:transition-none",
          isActive && "mr-4 h-px w-16 bg-sky-800 dark:bg-sky-400"
        )}
      ></span>
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 group-hover:text-sky-800 dark:group-hover:text-sky-400 group-focus-visible:text-sky-800 dark:group-focus-visible:text-sky-400",
          isActive &&
            "text-xs font-bold uppercase tracking-widest text-sky-800 dark:text-sky-400"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
