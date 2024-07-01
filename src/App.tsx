import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";
import Skills from "./components/Skills.tsx";
import Welcome from "./components/Welcome.tsx";
// import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div id="welcome">
        <Welcome />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
