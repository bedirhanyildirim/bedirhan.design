import Link from 'next/link'
import TwitterLogo from 'public/twitter.svg'
import InstagramLogo from 'public/instagram.svg'
import GithubLogo from 'public/github.svg'
import LinkedInLogo from 'public/linkedin.svg'
import ArrowRight from 'public/arrowRight.svg'
import CompanyCard from '@/components/companyCard'
import EducationCard from '@/components/educationCard'
import { experiences, education } from 'public/data.json'

export default function Home() {
  let experiencesData = [...experiences]
  let educationData = [...education]
  
  return (
    <main className="content">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Bedirhan Yıldırım
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl">
              Sr. Frontend Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-zinc-500">
              I have extensive experience in web development, design and entrepreneurship.
            </p>
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 text-xs">
              <Link href="https://twitter.com/bedcodes" target="_blank">
                <TwitterLogo className="fill-zinc-500 transition hover:fill-zinc-600" />
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://instagram.com/bedcodes" target="_blank">
                <InstagramLogo className="fill-zinc-500 transition hover:fill-zinc-600" />
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://github.com/bedirhanyildirim" target="_blank">
                <GithubLogo className="fill-zinc-500 transition hover:fill-zinc-600" />
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://www.linkedin.com/in/bedirhanyildirim" target="_blank">
                <LinkedInLogo className="fill-zinc-500 transition hover:fill-zinc-600" />
              </Link>
            </li>
          </ul>
        </header>
        <content className="pt-24 lg:w-1/2 lg:py-24">
          <section id="experiences">
            {
              experiencesData.map(exp => {
                return (
                  <CompanyCard experience={exp} key={exp.id}></CompanyCard>
                )
              })
            }
            <Link href="/" className="inline-flex items-center font-medium leading-tight font-semibold text-sky-800 hover:text-sky-600 transition">
              Download Cv <ArrowRight className="w-6 h-6 ml-2 fill-sky-800" />
            </Link>
          </section>
          <section id="education" className="my-24">
            {
              educationData.map(education => {
                return (
                  <EducationCard education={education}></EducationCard>
                )
              })
            }
          </section>
          <br/>
          <br/>
          <br/>
        </content>
      </div>
    </main>
  )
}
