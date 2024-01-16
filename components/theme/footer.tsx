import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ThemeFooter() {
  return (
    <footer>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs">
          <Link href="https://github.com/bedirhanyildirim" target="_blank">
            <Github className="text-zinc-500 dark:text-zinc-400 transition hover:text-black dark:hover:text-white" />
          </Link>
        </li>
        <li className="mr-5 text-xs">
          <Link
            href="https://www.linkedin.com/in/bedirhanyildirim"
            target="_blank"
          >
            <Linkedin className="text-zinc-500 dark:text-zinc-400 transition hover:text-linkedin dark:hover:text-linkedin" />
          </Link>
        </li>
        <li className="mr-5 text-xs">
          <Link href="https://www.twitter.com/bedcodes" target="_blank">
            <Twitter className="text-zinc-500 dark:text-zinc-400 transition hover:text-linkedin dark:hover:text-linkedin" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
