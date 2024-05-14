'use client';
import chessDotComLogo from "../assets/chess-dot-com-logo.png";
import Image from 'next/image'

const ChessFooter = () => {
    return (
        <div className="flex felx-row items-center bg-background-500 py-3 px-3 md:py-8 justify-center space-x-2">
            <div className="flex h-8 w-24 md:h-10 md:w-36">
                <Image className="object-contain" src={chessDotComLogo} alt="chessdotcomlogo" />
            </div>
            <button className="p-[3px] relative" onClick={() => window.location.assign("https://www.chess.com/member/lulu-la-tortue")}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" />
                <div className="px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                    <p className="text-sm md:text-lg font-semibold">Venez m'affronter aux échecs !</p>
                </div>
            </button>
        </div>
    )
}

export default ChessFooter;