import { Link } from "react-router";
import chessDotComLogo from "../../assets/images/chess-dot-com-logo.png";
import filsPhoto from "../../assets/images/fils.jpg";
import lightWeightBaby from "../../assets/images/lightWeightBaby.jpg";
import me from "../../assets/images/me.webp";

export default function AboutMe() {
    return (
        <div className="flex flex-1 flex-col items-center py-12 min-h-screen bg-background-800">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">ABOUT ME</h3>
            <div className="px-5 md:px-12 lg:px-26 xl:px-32">
                <div className="flex flex-col md:flex-row p-12 space-y-12 md:space-x-12 justify-center items-center md:py-14">
                    <p className="flex flex-auto text-md md:text-lg text-center md:text-start">{"Hello and welcome to my portfolio! I am Lucie, a full stack developer with specialized expertise in ReactJS and React Native. Currently, I am in a work-study program, balancing my time between BECOMS and the Clermont-Auvergne University Institute of Technology, where I am in my final year of a Bachelor's degree in Computer Science. I have the ability to build both websites and mobile applications. My passion for technology drives me to continually seek new knowledge and enhance my skills. My enthusiasm and curiosity inspire me to explore new horizons and tackle exciting challenges."}</p>
                    <div className="h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl" >
                        <img className="object-cover object-top overflow-hidden h-64 xl:h-72 w-full bg-primary-600 rounded-3xl" src={me} alt="me" />
                    </div>
                </div>

                <div className="flex flex-col rounded-3xl px-5 space-y-12 justify-center items-center pb-12">
                    <h5 className="flex font-Literata text-primary-500 tracking-widest text-2xl md:text-3xl lg:text-4xl text-center">What about my personnal interests ?</h5>
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 justify-center items-center">
                        <div className="h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl">
                            <img
                                className="object-cover aspect-square object-center h-64 xl:h-72 rounded-3xl"
                                src={lightWeightBaby}
                                alt="gym"
                            />
                        </div>
                        <p className="flex flex-1 text-md md:text-lg text-center md:text-start">
                            {"An essential part of my weekly routine is going to the gym. It's not just about staying in shape — it's also my way of maintaining mental clarity, focus, and discipline. I've been training regularly for over a year now, and I find that this commitment mirrors the perseverance I apply to coding and problem-solving. It's where I reset, refocus, and challenge myself outside the digital world."}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center">
                        <p className="flex flex-auto text-md  bg-ink-200 md:text-lg text-center md:text-start">{"Outside of my interests in development and current technologies, I have many hobbies. I love to read, play video games (I am a huge fan of the Diablo series), and I am very curious about anything related to astrophysics. I also love plants, and much more. For the past year, I’ve been teaching myself to play chess. There is still a long road ahead, but I am slowly becoming a challenging opponent. If you dare, click on the button and confront me for a game on Chess.com!"}</p>
                        <Link to="https://www.chess.com/member/lulu-la-tortue" className="flex flex-none flex-no-wrap items-center space-x-3">
                            <img className="h-10 object-contain" src={chessDotComLogo} alt="chessdotcomlogo" />
                            <button type="button" className="p-[3px] relative flex flex-wrap cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" />
                                <div className="px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    <p className="text-sm md:text-lg font-semibold">{"Come face me in chess"}</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center">
                        <div className="h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl" >
                            <img className="object-cover overflow-hidden h-64 xl:h-72 bg-primary-600 rounded-3xl" src={filsPhoto} alt="fils" />
                        </div>
                        <p className="flex flex-1 text-md md:text-lg text-center md:text-start">{"However, if I were forced to talk about only one of my hobbies, I would undoubtedly choose my passion for animal welfare. Since childhood, I’ve always been surrounded by pets and fascinated by animals of all kinds. I have a few anecdotes on the matter. For example, I’ve hugged a baby cow, fed a giraffe, and put a huge python around my neck (at the age of 12). I basically pet animals of any kind whenever I have the opportunity. I have a cat named Fils, the silly cat on the photo. Fils is a rescue. He is only one year old but had already been abandoned twice, beaten, and underfed before we got him. Despite this, he is still a lovely boy, and his transformation inspires me every day to make one of my biggest projects a reality. After I conclude some of my personal projects, I will become a volunteer at an animal shelter so that other souls like Fils can find happiness and the comfort of a loving family."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
