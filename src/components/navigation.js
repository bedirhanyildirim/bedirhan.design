export default function Navigation({aboutRef, experiencesRef, educationRef}) {
  
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
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            About
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToExperiences}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            Experiences
          </span>
        </div>
      </li>
      <li>
        <div
          onClick={scrollToEducation}
          className="group flex items-center py-3 hover:cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-sky-800 group-focus-visible:text-sky-800">
            Education
          </span>
        </div>
      </li>
    </ul>
  )
}