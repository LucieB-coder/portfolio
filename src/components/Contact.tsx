import github from "../assets/github-logo.svg";
import linkedin from "../assets/linkedIn.webp";


const Contact = () => {
    return (
        <div className="flex flex-1 flex-col md:flex-row items-center space-y-8 md:min-h-screen justify-around py-12 bg-background-500">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Contact</h3>
            <div className="flex flex-col items-center gap-5">
                <a href="https://github.com/LucieB-coder" className="flex flex-1 justify-center items-center space-x-5">
                    <img src={github} className="h-10" alt="githublogo" />
                    <p className="md:text-xl">LucieB-coder</p>
                </a>

                <a href="https://www.linkedin.com/in/lucie-bedouret/" className="flex flex-1 justify-end items-center space-x-5">
                    <img src={linkedin} className="h-8 object-contain" alt="linkedinlogo" />
                    <p className="md:text-xl">Lucie Bedouret</p>
                </a>

                <p className="md:text-xl">+33 7 67 44 75 87</p>

                <p className="md:text-xl">bedouretlucie@gmail.com</p>
            </div>
        </div>
    );
}
export default Contact;