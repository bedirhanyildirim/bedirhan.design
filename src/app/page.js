'use client'

import {useCallback, useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import GithubLogo from 'public/github.svg'
import TwitterLogo from 'public/twitter.svg'
import LinkedInLogo from 'public/linkedin.svg'
import ArrowRight from 'public/arrowRight.svg'
import InstagramLogo from 'public/instagram.svg'
import UpworkLogo from 'public/upworkLogo.svg'
import SunLogo from 'public/sun.svg'
import MoonLogo from 'public/moon.svg'
import Data from '@/components/data'
import CompanyCard from '@/components/companyCard'
import EducationCard from '@/components/educationCard'
import VolunteerCard from '@/components/volunteerCard'
import Navigation from '@/components/navigation'

export default function Home() {
  let data = Data()
  const aboutRef = useRef(null)
  const experiencesRef = useRef(null)
  const educationRef = useRef(null)
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, []);
  
  const toggleDarkMode = useCallback(() => {
    if (darkMode) {
      setDarkMode(false)
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      setDarkMode(true)
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }, [darkMode])
  
  
  return (
    <main className="content">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        <header className="mt-24 lg:mt-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
              Bedirhan Yıldırım
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-black sm:text-xl dark:text-white">
              Sr. Frontend Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-zinc-500 dark:text-zinc-400">
              I have extensive experience in web development, design and entrepreneurship.
            </p>
            <Navigation aboutRef={aboutRef} experiencesRef={experiencesRef} educationRef={educationRef} />
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 text-xs">
              <Link href="https://github.com/bedirhanyildirim" target="_blank">
                <GithubLogo className="fill-zinc-500 dark:fill-zinc-400 transition hover:fill-black dark:hover:fill-white" />
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://www.linkedin.com/in/bedirhanyildirim" target="_blank">
                <LinkedInLogo className="fill-zinc-500 dark:fill-zinc-400 transition hover:fill-linkedin dark:hover:fill-linkedin" />
              </Link>
            </li>
            <li className="mr-5 text-xs">
              <Link href="https://www.upwork.com/freelancers/bedcodes" target="_blank">
                <UpworkLogo className="fill-zinc-500 dark:fill-zinc-400 transition hover:fill-upwork dark:hover:fill-upwork" />
              </Link>
            </li>
            <li className="text-xs">
              <button type="button" onClick={toggleDarkMode}>
                <SunLogo className={`fill-zinc-400 transition hover:fill-white ${!darkMode ? 'hidden' : ''}`} />
                <MoonLogo className={`fill-zinc-500 transition hover:fill-black ${darkMode ? 'hidden' : ''}`} />
              </button>
            </li>
          </ul>
        </header>
        <div className="pt-24 lg:w-1/2">
          <section
            id="about"
            ref={aboutRef}
            className="mb-16 scroll-mt-16 text-zinc-500 dark:text-zinc-400 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="mb-4">
              With 5 years of professional experience as a software engineer, my focus lies in frontend web development. I have successfully collaborated with both large and small teams, consistently delivering modern solutions by staying abreast of the latest technologies.
            </p>
            <p className="mb-4">
              As an entrepreneur, I have had the opportunity to work closely with startups, leveraging my coding and design expertise to contribute to their success. Throughout these experiences, I have honed my skills in creating compelling and user-friendly interfaces for web applications.
            </p>
            <p>
              I have a true passion for coding, design, and continuous learning. These interests drive me to stay ahead of industry trends and seek out new opportunities for growth and improvement. With a strong foundation in frontend development and a drive for innovation, I am eager to tackle new challenges and contribute to impactful projects.
            </p>
          </section>
          <section
            id="experiences"
            ref={experiencesRef}>
            <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">Experiences</h3>
            {
              data.experiences.map(exp => {
                return (
                  <CompanyCard experience={exp} key={exp.id}></CompanyCard>
                )
              })
            }
            <div className="w-full flex justify-center lg:justify-start">
              <Link href="/bedirhan-yildirim-cv.pdf" target="_blank" className="group inline-flex items-center font-medium leading-tight font-semibold text-sky-800 dark:text-sky-500 hover:text-sky-600 transition">
                Download CV <ArrowRight className="block w-6 h-6 ml-2 fill-black fill-sky-800 dark:fill-sky-500 transition transform-gpu group-hover:translate-x-2 group-hover:fill-sky-600 dark:group-hover:fill-sky-500" />
              </Link>
            </div>
          </section>
          <section
            id="education"
            ref={educationRef}
            className="my-24">
            <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">Educations</h3>
            {
              data.education.map(education => {
                return (
                  <EducationCard education={education} key={education.id}></EducationCard>
                )
              })
            }
          </section>
          <section id="volunteer" className="my-24">
            <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">Volunteers</h3>
            {
              data.volunteer.map(volunteer => {
                return (
                  <VolunteerCard volunteer={volunteer} key={volunteer.id}></VolunteerCard>
                )
              })
            }
          </section>
          <section id="languages" className="my-24">
            <h3 className="flex justify-center mb-8 text-xl text-black dark:text-white md:block md:mb-4 lg:mb-8">Languages</h3>
            <ul className="flex flex-wrap flex-col md:flex-row justify-between w-full gap-y-2">{
              data.languages.map(language => {
                return (
                  <li className="font-medium leading-snug" key={language.id}>
                    <span className="text-black dark:text-white">{language.language}: </span>
                    <span className="text-sky-800 dark:text-sky-500">{language.level}</span>
                  </li>
                )
              })
            }</ul>
          </section>
        </div>
      </div>
    </main>
  )
}
