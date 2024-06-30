import me from "../assets/me.jpg";
import skillsImage from "../assets/skills.png";
import resumeImage from "../assets/resume.png";
import projectsImage from "../assets/projects.png";
import { useEffect, useState } from 'react';

const Welcome = () => {
    const [windowSize, setWindowSize] = useState<"sm" | "lg">("sm");

    useEffect(() => {
        // Check if window is defined (client-side)
        const updateWindowSize = () => {
            setWindowSize(window.innerWidth < 768 ? "sm" : "lg");
        };

        if (typeof window !== 'undefined') {
            updateWindowSize(); // Set initial size
            window.addEventListener('resize', updateWindowSize);

            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('resize', updateWindowSize);
            };
        }
    }, []);

    return (
        <>
            {windowSize === "sm" ? (
                <div className="flex flex-col items-center pt-8 px-8">
                    <div className="flex flex-1 w-full items-start"><p className="lg:text-xl font-bold opacity-80">CONTACT</p></div>
                    <div className="flex flex-col items-center space-y-4 pt-10 md:p-24 lg:p-10 xl:pb-8 xl:pt-0 xl:px-0">
                        <h1 className="flex font-Literata tracking-widest text-5xl md:text-7xl  lg:text-8xl xl:text-[8rem] text-center">LUCIE BEDOURET</h1>
                        <p className="tracking-widest opacity-80">~ FULL STACK DEVELOPER ~</p>
                    </div>

                    <div className="flex flex-col space-y-5 max-w-md py-10">
                        <a href="#aboutMe" className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                            <img className="object-cover overflow-hidden" src={me} alt="me" />
                            <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                            <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">ABOUT ME</p>
                        </a>
                        <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                            <img className="object-cover overflow-hidden" src={projectsImage} alt="projects" />
                            <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                            <p className="absolute top-5 left-5 font-bold lg:text-2xl">PROJECTS</p>
                        </div>
                        <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                            <img className="object-cover overflow-hidden" src={skillsImage} alt="skills" />
                            <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                            <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">SKILLS</p>
                        </div>
                        <a href="#resum" className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                            <img className="object-cover overflow-hidden" src={resumeImage} alt="skills" />
                            <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                            <p className="absolute top-5 left-5 font-bold lg:text-2xl">RESUME</p>
                        </a>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col min-h-screen max-h-screen items-center justify-between py-8 px-8">
                    <div className="flex w-full items-start"><p className="lg:text-xl font-bold opacity-80">CONTACT</p></div>
                    <div className="flex flex-1 flex-col items-center justify-center space-y-2">
                        <h1 className="flex font-Literata tracking-widest text-7xl lg:text-8xl xl:text-[8rem] text-center">LUCIE BEDOURET</h1>
                        <p className="tracking-widest opacity-80">~ FULL STACK DEVELOPER ~</p>
                    </div>
                    <div className="flex flex-auto">
                        <div className="grid grid-cols-3 gap-5 relative">
                            <a href="#aboutMe" className="relative flex flex-1 h-full rounded-3xl overflow-hidden" >
                                <img className="object-cover overflow-hidden" src={me} alt="me" />
                                <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                                <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">ABOUT ME</p>
                            </a>
                            <div className="col-span-2 grid grid-cols-2 gap-4 h-full">
                                <div className="col-span-2 relative flex flex-1 h-full w-full rounded-3xl overflow-hidden" >
                                    <img className="absolute w-full object-contain object-center overflow-hidden" src={projectsImage} alt="projects" />
                                    <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                                    <p className="absolute top-5 left-5 font-bold lg:text-2xl">PROJECTS</p>
                                </div>
                                <div className="relative flex flex-none rounded-3xl overflow-hidden" >
                                    <img className="absolute w-full h-full object-cover object-center overflow-hidden" src={skillsImage} alt="skills" />
                                    <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                                    <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">SKILLS</p>
                                </div>
                                <a href="#resume" className="relative flex flex-none rounded-3xl overflow-hidden" >
                                    <img className="absolute w-full h-full object-cover object-center overflow-hidden" src={resumeImage} alt="skills" />
                                    <div className="absolute w-full h-full bg-black opacity-25 hover:bg-transparent" />
                                    <p className="absolute top-5 left-5 font-bold lg:text-2xl">RESUME</p>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}



export default Welcome;