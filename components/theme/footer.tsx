"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
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
              <Github className="text-zinc-500 dark:text-zinc-400 transition hover:text-black dark:hover:text-white" />
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/bedirhanyildirim"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="text-zinc-500 dark:text-zinc-400 transition hover:text-linkedin dark:hover:text-linkedin" />
            </Button>
          </Link>
        </li>
        <li>
          <Link href="https://www.twitter.com/bedcodes" target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter className="text-zinc-500 dark:text-zinc-400 transition hover:text-linkedin dark:hover:text-linkedin" />
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
              <Sun className="text-zinc-400 transition hover:text-white" />
            </Button>
          </li>
        ) : (
          <li>
            <Button
              onClick={() => setTheme("dark")}
              size="icon"
              variant="ghost"
            >
              <Moon className="text-zinc-500 transition hover:text-black" />
            </Button>
          </li>
        )}
      </ul>
    </footer>
  );
}
