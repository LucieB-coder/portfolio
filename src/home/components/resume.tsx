

export default function Resume() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center space-y-8 min-h-screen py-12">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Resume</h3>
            <p className="px-5 text-center">Here is a link to my resume in french, don't hesitate to contact me if you need it in english</p>
            <a
                href="/portfolio/CV-Lucie-BEDOURET.pdf"
                target="_blank"
                rel="noopener noreferrer"

            >
                <button type="button" className="p-[3px] relative flex flex-wrap cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg" />
                    <div className="px-3 md:px-8 py-2 bg-background-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-background-600">
                        <p className="text-sm md:text-lg font-semibold">{"View Resume (PDF)"}</p>
                    </div>
                </button>
            </a>
        </div>
    );
}