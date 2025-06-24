import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import { Projects } from "./components/projects";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Welcome from "./components/welcome";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export function Home() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);




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

