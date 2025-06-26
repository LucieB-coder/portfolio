import AboutMe from "./home/components/about-me";
import Contact from "./home/components/contact";
import PersonalInterests from "./home/components/personal-interests";
import { Projects } from "./home/components/projects";
import Resume from "./home/components/resume";
import Skills from "./home/components/skills";
import Welcome from "./home/components/welcome";


export default function App() {

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      <Welcome />
      <AboutMe />
      <Skills />
      <Projects />
      <PersonalInterests />
      <Resume />
      <Contact />
    </div>);
}

