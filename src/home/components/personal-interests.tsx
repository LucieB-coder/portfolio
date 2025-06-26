import chessDotComLogo from "../../assets/images/chess-dot-com-logo.png";
import filsPhoto from "../../assets/images/fils.jpg";
import lightWeightBaby from "../../assets/images/lightWeightBaby.jpg";

export default function PersonalInterests() {
    return (
        <div className="flex flex-1 flex-col items-center py-12 min-h-screen bg-background-800">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center max-w-[1500px]">What about my personal interests ?</h3>
            <div className="px-5 md:px-12 lg:px-26 xl:px-32 pt-10 max-w-[1500px]">
                <div className="flex flex-col rounded-3xl px-5 space-y-12 justify-center items-center pb-12">
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 justify-center items-center">
                        <div className="h-64 xl:h-72 aspect-square bg-primary-300 rounded-3xl">
                            <img
                                className="object-cover aspect-square object-center h-64 xl:h-72 rounded-3xl"
                                src={lightWeightBaby}
                                alt="gym"
                            />
                        </div>
                        <p className="flex flex-1 text-md md:text-lg text-start">
                            {"An essential part of my weekly routine is going to the gym. It's not just about staying in shape — it's also my way of maintaining mental clarity, focus, and discipline. I've been training regularly for over a year now, and I find that this commitment mirrors the perseverance I apply to coding and problem-solving. It's where I reset, refocus, and challenge myself outside the digital world."}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center">
                        <p className="flex flex-auto text-md  bg-ink-200 md:text-lg text-start">{"Outside of my interests in development and current technologies, I have many hobbies. I love to read, play video games (I am a huge fan of the Diablo series), and I am very curious about anything related to astrophysics. I also love plants, and much more. For the past year, I’ve been teaching myself to play chess. There is still a long road ahead, but I am slowly becoming a challenging opponent. If you dare, click on the button and confront me for a game on Chess.com!"}</p>
                        <a href="https://www.chess.com/member/lulu-la-tortue" className="flex flex-none flex-no-wrap items-center space-x-3">
                            <img className="h-10 object-contain" src={chessDotComLogo} alt="chessdotcomlogo" />
                            <button type="button" className="p-[3px] relative flex flex-wrap cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" />
                                <div className="px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-background-600">
                                    <p className="text-sm md:text-lg font-semibold">{"Come face me in chess"}</p>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 justify-center items-center">
                        <div className="h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl" >
                            <img className="object-cover overflow-hidden h-64 xl:h-72 bg-primary-600 rounded-3xl" src={filsPhoto} alt="fils" />
                        </div>
                        <p className="flex flex-1 text-md md:text-lg text-start">{"However, if I were forced to talk about only one of my hobbies, I would undoubtedly choose my passion for animal welfare. Since childhood, I’ve always been surrounded by pets and fascinated by animals of all kinds. I have a few anecdotes on the matter. For example, I’ve hugged a baby cow, fed a giraffe, and put a huge python around my neck (at the age of 12). I basically pet animals of any kind whenever I have the opportunity. I have a cat named Fils, the silly cat on the photo. Fils is a rescue. He was only one year old but had already been abandoned twice, beaten, and underfed before we got him. Despite this, he is still a lovely boy, and his transformation inspires me every day to make one of my biggest projects a reality. After I conclude some of my personal projects, I will become a volunteer at an animal shelter so that other souls like Fils can find happiness and the comfort of a loving family."}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
