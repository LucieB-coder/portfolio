'use client';
import chessDotComLogo from "../assets/chess-dot-com-logo.png";
import Image from 'next/image'
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedIn.webp";

const Footer = () => {
    return (
        <div className="flex items-center bg-background-500 py-3 px-3 md:py-8 md:px-8 xl:px-36 justify-around">
            <a href="https://www.chess.com/member/lulu-la-tortue" className="flex items-center flex-1 space-x-3">
                <Image className="h-10 object-contain" src={chessDotComLogo} alt="chessdotcomlogo" />
                <button className="p-[3px] relative hidden lg:flex lg:flex-nowrap">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" />
                    <div className="px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        <p className="text-sm md:text-lg font-semibold text-nowrap">Venez m'affronter aux échecs !</p>
                    </div>
                </button>
            </a>

            <a href="https://github.com/LucieB-coder" className="flex flex-1 justify-center">
                <Image src={githubLogo} className="h-10" alt="githublogo" />
            </a>

            <a href="https://www.linkedin.com/in/lucie-bedouret/" className="flex flex-1 justify-end">
                <Image src={linkedinLogo} className="h-10 object-contain" alt="linkedinlogo" />
            </a>
        </div>
    )
}

export default Footer;