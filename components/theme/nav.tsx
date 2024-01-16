"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/navigation";

export default function ThemeNav() {
  return (
    <ul className="hidden lg:block mt-16 w-max">
      {navigation.map((route) => (
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
          "mr-4 h-px w-8 bg-slate-600 dark:bg-slate-300 transition-all group-hover:w-16 group-hover:bg-title group-focus-visible:w-16 group-focus-visible:bg-title motion-reduce:transition-none",
          isActive && "w-16 bg-title dark:bg-title"
        )}
      ></span>
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 group-hover:text-title group-focus-visible:text-title",
          isActive && "text-title dark:text-title"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
