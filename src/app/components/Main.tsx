"use client";
import Image from "next/image";
import me from "../assets/me.jpg";
import skillsImage from "../assets/skills.png";
import resumeImage from "../assets/resume.png";
import projectsImage from "../assets/projects.png";
import { useEffect, useState } from "react";

const Main = () => {
    const [windowSize, setWindowSize] = useState<"sm" | "lg">(window.innerWidth < 768 ? "sm" : "lg");

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth < 768 ? setWindowSize("sm") : setWindowSize("lg")
        })
    }, [])

    return (
        <div className="flex flex-1 flex-col items-center pt-8 px-8">
            <div className="flex flex-1 w-full items-start"><p className="lg:text-xl font-bold opacity-80">CONTACT</p></div>
            <div className="flex flex-col items-center space-y-4 pt-10 md:p-24 lg:p-10 xl:pb-8 xl:pt-0 xl:px-0">
                <h1 className="flex font-Literata tracking-widest text-5xl md:text-7xl  lg:text-8xl xl:text-[8rem] text-center">LUCIE BEDOURET</h1>
                <p className="tracking-widest opacity-80">~ FULL STACK DEVELOPER ~</p>
            </div>
            {windowSize == "sm" ? (
                <div className="flex flex-col space-y-5 max-w-md py-10">
                    <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                        <Image className="object-cover overflow-hidden" src={me} alt="me" />
                        <div className="absolute w-full h-full bg-black opacity-25" />
                        <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">ABOUT ME</p>
                    </div>
                    <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                        <Image className="object-cover overflow-hidden" src={projectsImage} alt="projects" layout="fill" />
                        <div className="absolute w-full h-full bg-black opacity-25" />
                        <p className="absolute top-5 left-5 font-bold lg:text-2xl">PROJECTS</p>
                    </div>
                    <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                        <Image className="object-cover overflow-hidden" src={skillsImage} alt="skills" layout="fill" />
                        <div className="absolute w-full h-full bg-black opacity-25" />
                        <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">SKILLS</p>
                    </div>
                    <div className="relative flex flex-1 rounded-3xl overflow-hidden aspect-square" >
                        <Image className="object-cover overflow-hidden" src={resumeImage} alt="skills" layout="fill" />
                        <div className="absolute w-full h-full bg-black opacity-25" />
                        <p className="absolute top-5 left-5 font-bold lg:text-2xl">RESUME</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative py-8">
                    <div className="relative flex flex-1 h-full  rounded-3xl overflow-hidden" >
                        <Image className="object-cover overflow-hidden" src={me} alt="me" />
                        <div className="absolute w-full h-full bg-black opacity-25" />
                        <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">ABOUT ME</p>
                    </div>
                    <div className="w-full h-full col-span-2 grid grid-cols-2 gap-4 relative">
                        <div className="md:col-span-2 relative flex flex-1 h-full  rounded-3xl overflow-hidden" >
                            <Image className="object-cover overflow-hidden" src={projectsImage} alt="projects" layout="fill" />
                            <div className="absolute w-full h-full bg-black opacity-25" />
                            <p className="absolute top-5 left-5 font-bold lg:text-2xl">PROJECTS</p>
                        </div>
                        <div className="relative flex flex-1 h-full rounded-3xl overflow-hidden" >
                            <Image className="object-cover overflow-hidden" src={skillsImage} alt="skills" layout="fill" />
                            <div className="absolute w-full h-full bg-black opacity-25" />
                            <p className="absolute top-5 left-5 text-background-500 font-bold lg:text-2xl">SKILLS</p>
                        </div>
                        <div className="relative flex flex-1 h-full rounded-3xl overflow-hidden" >
                            <Image className="object-cover overflow-hidden" src={resumeImage} alt="skills" layout="fill" />
                            <div className="absolute w-full h-full bg-black opacity-25" />
                            <p className="absolute top-5 left-5 font-bold lg:text-2xl">RESUME</p>
                        </div>
                    </div>
                </div>
            )}



        </div>
    )
}



export default Main;