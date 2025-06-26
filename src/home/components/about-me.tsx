export default function AboutMe() {
    return (
        <div className="flex flex-1 flex-col items-center py-12 min-h-screen bg-background-800">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">ABOUT ME</h3>
            <div className="px-5 md:px-12 lg:px-26 xl:px-32 max-w-7xl">
                <div className="flex flex-col md:flex-row p-12 space-y-12 md:space-x-12 justify-center items-center md:py-14 max-w-7xl">
                    <p className="flex flex-auto text-md md:text-lg text-start">{"Hello and welcome to my portfolio! I am Lucie, a full stack developer with specialized expertise in ReactJS and React Native. I am currently employed as a full stack developer at BECOMS, working with MERN stack. I have the ability to build both websites and mobile applications. My passion for technology drives me to continually seek new knowledge and enhance my skills. My enthusiasm and curiosity inspire me to explore new horizons and tackle exciting challenges (after my RAG projet, I would like to try the language Golang through another projet, stay tuned)."}</p>
                </div>
                <div className="flex flex-col p-12 space-y-12 md:space-x-12 justify-center items-start md:py-14">
                    <p className="flex flex-1 font-Literata text-xl md:text-2xl">I can help you with...</p>
                    <div className="flex flex-1 w-full flex-col lg:flex-row gap-3 lg:gap-5">
                        <div className="flex flex-col items-start lg:items-center flex-1 border-l-3 lg:border-l-0 lg:border-b-3 rounded-r-xl lg:rounded-t-xl lg:rounded-br-none border-pink-600 bg-pink-500/10 p-5 lg:p-8 gap-2 lg:gap-6">
                            <p className="font-semibold tracking-tight text-lg lg:text-2xl">Frontend development</p>
                            <p className="opacity-80 text-sm lg:text-base">I design and develop responsive, accessible, and user-friendly interfaces. My focus is on delivering clean code and intuitive designs that enhance user experience across all devices and platforms.</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center flex-1 border-l-3 lg:border-l-0 lg:border-b-3 rounded-r-xl lg:rounded-t-xl lg:rounded-br-none border-purple-600 bg-purple-500/10  p-5 lg:p-8 gap-2 lg:gap-6">
                            <p className="font-semibold tracking-tight text-lg lg:text-2xl">Backend development</p>
                            <p className="opacity-80 text-sm lg:text-base">I build robust and scalable backend systems that ensure performance, security, and reliability. Whether it's REST APIs, authentication, or database design, I strive for efficient and maintainable solutions.</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center flex-1 border-l-3 lg:border-l-0 lg:border-b-3 rounded-r-xl lg:rounded-t-xl lg:rounded-br-none border-primary-600 bg-primary-500/10  p-5 lg:p-8 gap-2 lg:gap-6">
                            <p className="font-semibold tracking-tight text-lg lg:text-2xl">Project and client management</p>
                            <p className="opacity-80 text-sm lg:text-base">I manage projects with clarity and precision, ensuring deadlines are met and communication is seamless. From initial requirements gathering to final delivery, I prioritize client satisfaction and team coordination.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
