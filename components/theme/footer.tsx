"use client";
import { Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeFooter() {
  const { setTheme, theme } = useTheme();

  return (
    <footer>
      <ul className="ml-1 mt-8 flex gap-2 items-center">
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
            <Button
              onClick={() => setTheme("light")}
              size="icon"
              variant="ghost"
            >
              <Sun className="fill-white" />
            </Button>
          </li>
        ) : (
          <li>
            <Button
              onClick={() => setTheme("dark")}
              size="icon"
              variant="ghost"
            >
              <Moon className="fill-black" />
            </Button>
          </li>
        )}
      </ul>
    </footer>
  );
}

export function ThemeFooterMobile() {
  return (
    <div className="w-full flex justify-center py-3 mt-8 text-xs text-gray-700 dark:text-gray-300 border-t dark:border-gray-700 lg:hidden">
      developed by <span className="font-bold inline-block ml-1">@bedcodes</span>
    </div>
  )
}