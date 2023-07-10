import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="hidden lg:block mt-16 w-max">
      <li>
        <Link
          href="#about"
          className="group flex items-center py-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            About
          </span>
        </Link>
      </li>
      <li>
        <Link
          href="#experiences"
          className="group flex items-center py-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            Experiences
          </span>
        </Link>
      </li>
      <li>
        <Link
          href="#education"
          className="group flex items-center py-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            Education
          </span>
        </Link>
      </li>
    </ul>
  )
}