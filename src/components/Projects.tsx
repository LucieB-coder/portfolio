import besson from "../assets/besson.jpg";
import artandgo from "../assets/artandgo.jpg";
import doushouqi from "../assets/doushouqi.mp4";
import toxireality from "../assets/toxireality.png";
import starlearn from "../assets/starlearn.png";
import aslRecognizer from "../assets/aslRec.png";
import { useEffect, useState } from "react";


const Projects = () => {
    const [windowSize, setWindowSize] = useState<"sm" | "md" | "lg">("sm");

    useEffect(() => {
        // Check if window is defined (client-side)
        const updateWindowSize = () => {
            setWindowSize(window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg");
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
        <div className="flex flex-1 flex-col items-center py-12 min-h-screen space-y-12">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">My projects</h3>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 gap-8 py-5">
                <div className="flex flex-auto flex-col space-y-8">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">Art&Go</p>
                    <p className="lg:text-xl">Art&Go, a project I worked on at BECOMS for a client, is an application designed to connect artists with individuals who have venues to display and sell artworks, facilitated by QR codes placed next to each piece. It is a Progressive Web App (PWA), allowing users to download it as an application on their phone. Developed in ReactJS, it utilizes Firebase for storage, database, and functions, and includes integrated payment capabilities using Stripe</p>
                </div>
                <img className={windowSize === "sm" ? "w-1/2" : "w-1/4"} src={artandgo}></img>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 gap-8 py-5 bg-background-800">
                <img className={windowSize !== "sm" ? "w-1/3" : ""} src={toxireality}></img>
                <div className="flex flex-col space-y-5">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">ToxiReality</p>
                    <p className="lg:text-xl">Toxi Reality is a project I worked on with two classmates for our final year bachelor's degree project. It revisits the episode 'Nosedive' from the TV show Black Mirror, depicting a dystopian future where individuals are assigned a grade that dictates their access to public activities. We utilized the Hololens v2 and Unity for this project, creating an immersive mixed reality experience.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 gap-8 py-5">
                <div className="flex flex-col space-y-5">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">ASL Recognizer</p>
                    <p className="lg:text-xl">ASL Recognizer is a deep learning project created in collaboration with my teammate, Nathan Verdier. Our goal was to develop a real-time video application capable of recognizing American Sign Language. We built a Convolutional Neural Network (CNN) model for this purpose. While our journey is ongoing, this project represents a promising endeavor we plan to continue.</p>
                </div>
                <img className={windowSize !== "sm" ? "w-1/3" : ""} src={aslRecognizer}></img>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 gap-8 py-5 bg-background-800">
                <video controls autoPlay={true} className={windowSize === "sm" ? "w-1/2" : "w-1/4"}>
                    <source src={doushouqi} type="video/mp4" />
                </video>
                <div className="flex flex-col space-y-5">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">Doushouqi game</p>
                    <p className="lg:text-xl">This iOS application is a reinterpretation of Chess.com, tailored for playing DouSHouQi instead. My teammates and I utilized SwiftUI for the main app, SpriteKit for the 2D game, and ARKit to enable augmented reality gameplay. Challenge your friends and discover our Easter eggs!</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 py-5 gap-8">
                <div className="flex flex-col space-y-5">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">Besson Fidélité</p>
                    <p className="lg:text-xl">Beson Fidélité is an application I worked on at BECOMS, which is a mobile application developed in React Native. It functions as a loyalty application, similar to McDonald's, for example. Users can track their hearts, benefit from special offers, and more. The application features a Keycloak authentication system and utilizes Airship for managing push notifications, emails, and in-app messages.</p>
                </div>
                <img className={windowSize === "sm" ? "w-1/2" : "w-1/4"} src={besson}></img>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-24 py-5 gap-8 bg-background-800">
                <img className={windowSize !== "sm" ? "w-1/3" : ""} src={starlearn}></img>
                <div className="flex flex-col space-y-5">
                    <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">StarLearn</p>
                    <p className="lg:text-xl">Starlearn is a project my four colleagues and I developed while in Chicoutimi, Québec. It is a machine learning project aimed at exploring and comparing three models: K Nearest Neighbors, Random Forest, and SVM (Support Vector Machine). For this study, we chose to classify new astrophysical objects based on given data, identifying them as either exoplanets or stars.</p>
                </div>

            </div>
        </div>
    )
}



export default Projects;