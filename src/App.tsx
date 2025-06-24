import { useEffect } from "react";
import AboutMe from "./home/components/about-me";
import Contact from "./home/components/contact";
import { Projects } from "./home/components/projects";
import Resume from "./home/components/resume";
import Skills from "./home/components/skills";
import Welcome from "./home/components/welcome";


export default function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <Welcome />
      <Projects />
      <Skills />
      <AboutMe />
      <Resume />
      <Contact />
    </div>);
}

