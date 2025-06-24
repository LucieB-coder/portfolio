import art from "../../assets/images/art.jpg";
import circuit from "../../assets/images/circuit.jpg";
import prepaBac from "../../assets/images/prepaBAC.jpg";
import shoes from "../../assets/images/shoes.png";
import weddingAlbum from "../../assets/images/wedding-album.webp";

interface Project {
    name: string;
    description: string;
    imgSource: string;
}

const projects = [
    {
        name: "Loyalty Program App",
        description:
            "Professional project developed in React Native with Expo for a major shoe brand. End-to-end management and direct collaboration with the client. The app has exceeded 30,000 downloads and is available on Play Store and AppStore.",
        imgSource: shoes
    },
    {
        name: "Shared Wedding Album",
        description:
            "Personal PWA built with React and Firebase to privately share and archive my parent's wedding photos. The app stores over 800 images, with advanced image optimization (compression, pagination) for fast and smooth performance.",
        imgSource: weddingAlbum
    },
    {
        name: "Application for Connecting Artists and Exhibitors",
        description:
            "PWA designed to connect artists with venue owners, including integrated payments via Stripe. Developed as part of a work-study program, with full project ownership and direct client communication from start to finish.",
        imgSource: art
    },
    {
        name: "PrépaBAC (In Progress)",
        description:
            "AI-powered assistant built with Python and LangChain, helping high school students prepare for the French Baccalauréat. Features include intelligent revision plans, sheet generation, and exercise correction. Developed as part of an AI training program, with full project management.",
        imgSource: prepaBac
    },
    {
        name: "Automotive Event Management App",
        description:
            "PWA for managing vehicle flow at motorsport events, with LLM-based data retrieval from license plates. Includes a public visitor interface. Used during two major events with over 3,000 vehicles recorded. Acted as main point of contact for the client throughout the project.",
        imgSource: circuit
    },
    {
        name: "Curious to know more about these projects?",
        description:
            "Feel free to reach out by email or phone — I'd be happy to share more details about these and other experiences.",
        imgSource: ""
    }

];


export function Projects() {
    return (
        <div className="flex bg-background-700 justify-center">
        <div className="flex flex-col  min-h-screen w-screen py-12 items-center justify-around max-w-7xl px-6">
            <p className="font-Literata tracking-widest text-5xl text-center mb-8">Most recent projects</p>

            <p className="p-5 opacity-70 lg:text-xl">This is a curated list of recent projects, combining personal explorations and professional experiences.<br /> Each project highlights different aspects of my work with tools like React, Express, and beyond.</p>

            <div className="overflow-x-auto w-full snap-x lg:snap-none snap-mandatory">
                <div className="flex min-w-fit space-x-5 px-6 items-center">
                    {projects.map(project => (
                        <Card project={project} key={project.name} />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}


function Card({ project }: { project: Project }) {
    return (
        <div className="snap-center h-[500px] aspect-[3/5] lg:aspect-[4/5] rounded-xl overflow-hidden relative bg-background-300">
            {project.imgSource !== "" &&
                <img src={project.imgSource} className="h-full object-cover w-full" />}
            <div className="absolute top-0 h-full w-full flex flex-col space-y-3 bg-black/60 p-6">
                <p className="font-bold text-xl">{project.name}</p>
                <p className="backdrop-blur-[2px]">{project.description}</p>
            </div>
        </div>
    )
}
