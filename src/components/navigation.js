import { useEffect, useState } from 'react'
import useIsInViewport from '@/hooks/useIsInViewport'

export default function Navigation({ aboutRef, experiencesRef, educationRef }) {
  const [activeNavigationItem, setActiveNavigationItem] = useState(null)
  
  const isAboutInViewport = useIsInViewport(aboutRef)
  const isExperiencesInViewport = useIsInViewport(experiencesRef)
  const isEducationInViewport = useIsInViewport(educationRef)
  
  const getNavigationItemClasses = (sectionName) => {
    return sectionName === activeNavigationItem ? 'text-xs font-bold uppercase tracking-widest text-sky-800' : 'text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800'
  }
  
  const getNavigationIndicatorClasses = (sectionName) => {
    return sectionName === activeNavigationItem ? 'mr-4 h-px w-16 bg-sky-800' : 'mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-sky-800 group-focus-visible:w-16 group-focus-visible:bg-sky-800 motion-reduce:transition-none'
  }
  
  useEffect(() => {
    if (isAboutInViewport === true) {
      setActiveNavigationItem('about')
    } else if (isEducationInViewport === true) {
      setActiveNavigationItem('education')
    } else if (isExperiencesInViewport === true) {
      setActiveNavigationItem('experiences')
    }
  }, [isAboutInViewport, isExperiencesInViewport, isEducationInViewport])
  
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth"})
  }
  const scrollToExperiences = () => {
    experiencesRef.current.scrollIntoView({behavior: "smooth"})
  }
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <ul className="hidden lg:block mt-16 w-max">
      <li>
        <div
          onClick={scrollToAbout}
          className="group flex items-center py-3 hover:cursor-pointer text-red-600"
        >
          <span className={getNavigationIndicatorClasses('about')}></span>
          <span className={getNavigationItemClasses('about')}>
            About
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToExperiences}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className={getNavigationIndicatorClasses('experiences')}></span>
          <span className={getNavigationItemClasses('experiences')}>
            Experiences
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToEducation}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className={getNavigationIndicatorClasses('education')}></span>
          <span className={getNavigationItemClasses('education')}>
            Education
          </span>
        </div>
      </li>
    </ul>
  )
}