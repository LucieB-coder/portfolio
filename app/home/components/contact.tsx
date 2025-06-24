import { Link } from "react-router";
import github from "../../assets/images/github-logo.svg";
import linkedin from "../../assets/images/linkedIn.webp";


export default function Contact() {
    return (
        <div className="flex flex-1 flex-col md:flex-row items-center space-y-8 md:min-h-screen justify-around py-12 bg-background-700">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Contact</h3>
            <div className="flex flex-col items-center gap-5">
                <Link to="https://github.com/LucieB-coder" className="flex flex-1 justify-center items-center space-x-5">
                    <img src={github} className="h-10" alt="githublogo" />
                    <p className="md:text-xl">LucieB-coder</p>
                </Link>

                <Link to="https://www.linkedin.com/in/lucie-bedouret/" className="flex flex-1 justify-end items-center space-x-5">
                    <img src={linkedin} className="h-8 object-contain" alt="linkedinlogo" />
                    <p className="md:text-xl">Lucie Bedouret</p>
                </Link>

                <Link to={"tel:+33767447587"} className="md:text-xl">+33 7 67 44 75 87</Link>

                <Link to={"mailto:lucie.bedouret.work@gmail.com"} className="md:text-xl">lucie.bedouret.work@gmail.com</Link>
            </div>
        </div>
    );
}