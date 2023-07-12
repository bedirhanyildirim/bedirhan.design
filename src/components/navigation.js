import { useEffect, useState } from 'react'
import useIsInViewport from '@/hooks/useIsInViewport'

export default function Navigation({ aboutRef, experiencesRef, educationRef }) {
  const [activeNavigationItem, setActiveNavigationItem] = useState(null)
  
  const isAboutInViewport = useIsInViewport(aboutRef)
  const isExperiencesInViewport = useIsInViewport(experiencesRef)
  const isEducationInViewport = useIsInViewport(educationRef)
  
  const getNavigationClasses = (sectionName) => {
    return sectionName === activeNavigationItem ? 'text-xs font-bold uppercase tracking-widest text-sky-800' : 'text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800'
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
          <span className={getNavigationClasses('about')}>
            About
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToExperiences}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className={getNavigationClasses('experiences')}>
            Experiences
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToEducation}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className={getNavigationClasses('education')}>
            Education
          </span>
        </div>
      </li>
    </ul>
  )
}