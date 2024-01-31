"use client";
import { Github, Linkedin, Twitter, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeFooter() {
  return (
    <footer className="hidden lg:block">
      <SocialsList />
    </footer>
  );
}

export function ThemeFooterMobile() {
  return (
    <footer className="lg:hidden py-2">
      <div className="w-full flex flex-col items-center">
        <SocialsList />
        <Link
          href="https://github.com/bedirhanyildirim/bedirhan.design"
          target="_blank"
          className="text-sm mt-1"
        >
          <Button variant="link">source code</Button>
        </Link>
      </div>
    </footer>
  );
}

function SocialsList() {
  const { setTheme, theme } = useTheme();
  return (
    <ul className="flex gap-2 items-center">
      <li>
        <Link href="https://github.com/bedirhanyildirim" target="_blank">
          <Button variant="ghost" size="icon">
            <Github className="text-zinc-500 dark:text-zinc-400" />
          </Button>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/bedirhanyildirim"
          target="_blank"
        >
          <Button variant="ghost" size="icon">
            <Linkedin className="text-zinc-500 dark:text-zinc-400" />
          </Button>
        </Link>
      </li>
      <li>
        <Link href="https://www.twitter.com/bedcodes" target="_blank">
          <Button variant="ghost" size="icon">
            <Twitter className="text-zinc-500 dark:text-zinc-400" />
          </Button>
        </Link>
      </li>
      {theme === "dark" ? (
        <li>
          <Button onClick={() => setTheme("light")} size="icon" variant="ghost">
            <Sun className="fill-white" />
          </Button>
        </li>
      ) : (
        <li>
          <Button onClick={() => setTheme("dark")} size="icon" variant="ghost">
            <Moon className="fill-black" />
          </Button>
        </li>
      )}
    </ul>
  );
}
