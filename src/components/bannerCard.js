import Link from 'next/link'
import UpworkLogo from '../../public/upworkLogo.svg'

export default function BannerCard() {
  return (
    <div className="group w-full lg:w-10/12 py-6 px-5 transition-all relative gap-4 flex items-center cursor-pointer rounded-md bg-gray-100 dark:bg-zinc-800 lg:hover:bg-gray-200/20 dark:lg:hover:bg-zinc-600/10">
      <div className="w-full flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 col-span-2 whitespace-nowrap">You can hire me</span>
        <h3 className="text-lg capitalize leading-tight text-zinc-800 dark:text-zinc-200 text-base">
          Let’s work together on your project!
        </h3>
      </div>
      <div className="whitespace-nowrap px-2 text-dark dark:text-white">
        <Link href="https://www.upwork.com/freelancers/bedcodes" target="_blank">
          <UpworkLogo className="fill-upwork lg:fill-zinc-500 lg:dark:fill-zinc-400 transition transform-gpu group-hover:scale-125 group-hover:fill-upwork dark:hover:fill-upwork" />
        </Link>
      </div>
    </div>
  )
}